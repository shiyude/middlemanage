<template >
  <div class="version_manage">
    <h1 class="hint_site">
      {{$t('current_position')}}： {{$t('version_manage')}} > {{$t('version_lists')}}
    </h1>
    <div class="appFind_conter">
      <div class="appFind_conter_input">
        <el-button type="primary" @click="goVersion(null)" icon="el-icon-circle-plus">{{$t('add_version')}}</el-button>
      </div>
    </div>
    <div class="find_tab">
      <el-table :data="tableData" border style="width: 100%" size="small" >
        <el-table-column :label="$t('ios_ver')">
          <template slot-scope="scope">
            <span v-if="scope.row.type==0">{{ scope.row.versionNo}}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('ios_url')" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.type==0">{{ scope.row.url}}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('ios_update')">
          <template slot-scope="scope">
            <template v-if="scope.row.type==0">
              <span v-if="scope.row.isUpdate==1">{{$t('yes')}}</span>
              <span v-else>{{$t('no')}}</span>
            </template>
          </template>
        </el-table-column>
        <el-table-column :label="$t('android_ver')">
          <template slot-scope="scope">
            <span v-if="scope.row.type==1">{{ scope.row.versionNo }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('android_url')" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.type==1">{{ scope.row.url }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('android_update')">
          <template slot-scope="scope">
            <template v-if="scope.row.type==1">
              <span v-if="scope.row.isUpdate==1">{{$t('yes')}}</span>
              <span v-else>{{$t('no')}}</span>
            </template>
          </template>
        </el-table-column>
        <el-table-column :label="$t('resource_ver')">
          <template slot-scope="scope">
            <span v-if="scope.row.type==2">{{ scope.row.versionNo }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('resource_url')" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.type==2">{{scope.row.url}}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('operation')" width="300px">
          <template slot-scope="scope">
            <el-button type="info" plain  size="mini" v-if="scope.row.status==1"  @click="changeVersion('0',scope.row)">{{$t('Enable')}}</el-button>
            <el-button type="success" plain v-else size="mini" @click="changeVersion('1',scope.row)">{{$t('Prohibit')}}</el-button>
            <el-button size="mini" @click="goVersion(scope.row)">{{$t("Edit")}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block tab_paging">
        <el-pagination @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next" :current-page.sync="currentPage" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [], // 数据
      pageSize: 10,
      total: 0,
      currentPage: 1,
      hostUrl: sessionStorage.getItem("serveUrl") || ""
      //当前页数
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    //启用当前版本
    changeVersion(type,row) {
      console.log(row)
      let _this = this;
        this.$Posting(this.$api.startProhibit, {
          verId: row.verId,
          type:row.type,
          status:type
        }).then(res => {
          if (res.code == 0) {
            this.$notify.success({
              title: this.$t("alert.alert_success_title"),
              message: this.$t("alert.operate_success_title")
            });
            this.getListData(this.currentPage);
          } else {
            this.$notify.error({
              title: this.$t("alert.fail"),
              message: this.$t("alert.operate_fail_title")
            });
            return false;
          }
        });
     
    },
    goVersion(row) {
      if (row) {
        sessionStorage.setItem("editVersionMsg", JSON.stringify(row));
      }
      this.$router.replace("/home/editVersion.html");
    },
    //获取列表数据
    getListData(page = 1) {
      this.$Posting(this.$api.queryAppVersion, {
        pageNo: page,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.tableData = res.datas.lists;
          this.total = res.datas.count;
        } else {
          this.$notify.error({
            title: "fail",
            message: res.errcode
          });
          return false;
        }
      });
    },
    //点击翻页时进行请求
    handleCurrentChange(val) {
      this.getListData(val);
    }
  }
};
</script>

<style lang="less" >
.version_manage {
  .appFind_conter_input {
    margin-top: 15px;
    background: #fff;
    padding: 10px;
    .add_find_btn {
      text-align: center;
    }
  }
  .find_tab {
    margin-top: 15px;
  }
}
</style>



