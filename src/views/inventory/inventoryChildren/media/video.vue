<template>
  <div class="vedios_wrapper">
    <div class="import_vedio vedio_section">
      <el-row class="row_header">
        <el-col :span="8" class="col_text">
          {{$t('vedio.importVideos')}}
        </el-col>
        <el-col :span="16" class="col_button">
          <uploader fileId="videoFile" :maxSize="100" :uploadParam="uploadParam" @uploadAfter="uploadImagefter" :url="$api.uploadProjectMedia" fileType=".mp4" :btnText="{select:$t('vedio.selectFile'),import:$t('vedio.addVideos')}"></uploader>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="15">
          <el-alert :title="$t('vedio.importVideosCommand')" type="info" :closable="false">
          </el-alert>
        </el-col>
      </el-row>
    </div>
    <div class="vedio_lists vedio_section">
      <el-row class="row_header">
        <el-col :span="12" class="col_text">
          <div>{{$t('vedio.videoList')}} ({{videoNum}})</div>
        </el-col>
        <el-col :span="12" class="col_button">
          <el-button size="mini" @click="add" :disabled="tableDataInit!==-1">{{$t('vedio.addVideoWithUrl')}}
          </el-button>
          <el-button size="mini" @click="refresh">{{$t('vedio.refresh')}}
          </el-button>
        </el-col>
      </el-row>
      <el-table :data="videoList" border style="width: 100%" :header-cell-style="{'background':'#f5f7fa'}" size="mini">
        <el-table-column :label="$t('vedio.title')">
          <template slot-scope="scope">
            <el-input v-if="scope.$index === tableDataInit" v-model.trim="title"></el-input>
            <div v-else>{{scope.row.title}}</div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('vedio.url')">
          <template slot-scope="scope">
            <el-input v-if="scope.$index === tableDataInit" v-model.trim="url"></el-input>
            <div v-else>{{hostUrl+scope.row.url}}</div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('vedio.description')">
          <template slot-scope="scope">
            <el-input v-if="scope.$index === tableDataInit" v-model.trim="description"></el-input>
            <div v-else>{{scope.row.description}}</div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('vedio.delete')">
          <template slot-scope="scope">
            <el-button size="mini" plain :disabled="scope.$index === tableDataInit" @click="deleteData(scope.row)">{{$t('vedio.delete')}}</el-button>
          </template>
        </el-table-column>
        <el-table-column :label="$t('vedio.edit')">
          <template slot-scope="scope">
            <template v-if="scope.$index === tableDataInit">
              <el-button size="mini" plain @click="update(scope.row)">{{$t('update')}}</el-button>
              <el-button size="mini" plain @click="cancel(scope.row,scope.$index)">{{$t('cancel')}}</el-button>
            </template>
            <template v-else>
              <el-button size="mini" plain @click="edit(scope.row,scope.$index)">{{$t('vedio.edit')}}</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <div class="page_section" v-if="videoNum">
        <el-pagination background small @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[5,10,30,50,100]" :page-size="pageSize" layout="prev, pager, next,sizes,total" :total="videoNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import uploader from "@/components/uploader";
export default {
  components: {
    uploader
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      videoList: [],
      videoNum: 0,
      tableDataInit: -1,
      title: "",
      url: "",
      description: "",
      hostUrl: sessionStorage.getItem("serveUrl") || "",
      id: JSON.parse(sessionStorage.getItem("projectDesc") || "{}").id || "",
      uploadParam: [
        {
          name: "projectId",
          value:
            JSON.parse(sessionStorage.getItem("projectDesc") || "{}").id || ""
        },
        {
          name: "type",
          value: "Video"
        }
      ]
    };
  },
  mounted() {
    if (this.id !== "") {
      this.getListData();
    }
  },
  methods: {
    deleteData(row) {
      console.log(row);
      this.$confirm(
        this.$t("alert.alert_delete"),
        this.$t("alert.alert_command"),
        {
          confirmButtonText: this.$t("alert.sure"),
          cancelButtonText: this.$t("alert.cancel"),
          type: "warning"
        }
      ).then(() => {
        this.$Geting(this.$api.deleteProjectMedia, {
          id: row.id
        }).then(res => {
          if (res.code == 0) {
            this.$deleteFile(this.hostUrl + row.url);
            this.$notify.success({
              title: this.$t("alert.alert_success_title"),
              message: this.$t("alert.alert_success_delete_title")
            });
            if (this.videoList.length == 1 && this.currentPage !== 1) {
              this.currentPage--;
            }
            this.getListData();
          } else {
            this.$notify.error({
              title: this.$t("alert.fail"),
              message: this.$t("alert.alert_fail_delete_title")
            });
          }
        });
      });
    },
    refresh() {
      this.cancelAddData();
      this.getListData();
    },
    update(row) {
      console.log(row);
      this.$Posting(this.$api.saveProjectMedia, {
        projectId: this.id,
        id: row.id,
        title: this.title,
        url: this.url,
        description: this.description,
        type: "Video"
      }).then(res => {
        if (res.code == 0) {
          this.$notify.success({
            title: this.$t("alert.alert_success_title"),
            message: this.$t("alert.operate_success_title")
          });
          this.cancelAddData();
          this.getListData();
        } else {
          this.$notify.error({
            title: "fail",
            message: res.errcode
          });
          return false;
        }
      });
    },
    handleSizeChange(val) {
      this.cancelAddData();
      this.pageSize = val;
      this.getListData();
    },
    handleCurrentChange(val) {
      this.cancelAddData();
      this.currentPage = val;
      this.getListData();
    },
    uploadImagefter() {
      this.cancelAddData();
      this.currentPage = 1;
      this.getListData();
    },
    add() {
      this.videoList.unshift({});
      this.tableDataInit = 0;
    },
    edit(row, index) {
      this.tableDataInit = index;
      this.title = row.title;
      this.url = this.hostUrl + row.url;
      this.description = row.description;
    },
    cancel(row, index) {
      if (index == 0) {
        if (row.id === undefined) {
          this.videoList.shift();
        }
      }
      this.cancelAddData();
    },
    cancelAddData() {
      this.title = "";
      this.url = "";
      this.description = "";
      this.tableDataInit = -1;
    },
    //获取列表数据
    getListData() {
      this.$Geting(this.$api.queryProjectMedia, {
        projectId: this.id,
        type: "Video",
        pageSize: this.pageSize,
        pageNo: this.currentPage
      }).then(res => {
        if (res.code == 0) {
          this.videoList = res.datas.lists;
          this.videoNum = res.datas.count;
        } else {
          this.$notify.error({
            title: "fail",
            message: res.errcode
          });
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.vedios_wrapper {
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  .vedio_section {
    padding: 0px 30px 15px;
    border-top: 1px solid #dcdfe6;
  }
  .row_header {
    height: 62px;
    padding: 15px 0;
    .col_text {
      padding: 4px 0;
    }
    .col_button {
      text-align: right;
    }
  }
  .page_section {
    text-align: center;
  }
}
</style>

