<template>
  <div class="inventory_list_wrapper">
    <div class="inventory_header">
      <el-row>
        <el-col :span="8">
          <span style="padding:8px 0;margin-right:15px">{{$t('inventoryLists.manageProperties')}} ({{projectNum}})</span>
          <el-button size="mini" @click="getListData">{{$t('inventoryLists.refresh')}}</el-button>
        </el-col>
        <el-col :span="16" style="text-align:right">
          <uploader fileId="projectFile" :maxSize="10" @uploadAfter="uploadAfter" :url="$api.importProject" fileType=".xls,.xlsx" :btnText="{select:$t('inventoryLists.selectExcelFile'),import:$t('inventoryLists.importUsingFile')}"></uploader>
          <el-button size="mini" @click="exportExcel">{{$t('inventoryLists.excelTemplate')}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="inventory_header">
      <el-input style="width:300px" size="mini" :placeholder="$t('inventoryLists.projectName')" v-model.trim="searchName"></el-input>
        <el-button size="mini" @click="searchData">{{$t('inventoryLists.Search')}}</el-button>
    </div>
    <div class="inventory_list_table">
      <el-table :data="projectList" border style="width: 100%" size="mini">
        <el-table-column prop="projectName" :label="$t('inventoryLists.name')">
        </el-table-column>
        <el-table-column prop="unitsNum" :label="$t('inventoryLists.numberOfUnits')">
        </el-table-column>
        <el-table-column :label="$t('inventoryLists.mobileSync')">
          <template slot-scope="scope">
            <i class="el-icon-check" v-if="scope.row.mobileSync == 'YES'"></i>
            <i class="el-icon-close" v-else></i>
          </template>
        </el-table-column>
        <el-table-column prop="projectType" :label="$t('inventoryLists.type')">
        </el-table-column>
        <el-table-column prop="location" :label="$t('inventoryLists.location')">
        </el-table-column>
        <el-table-column prop="country" :label="$t('inventoryLists.country')">
        </el-table-column>
        <el-table-column :label="$t('inventoryLists.Rename')">
          <template slot-scope="scope">
            <el-button size="mini" plain @click="rename(scope.row)">{{$t('inventoryLists.Rename')}}</el-button>
          </template>
        </el-table-column>
        <el-table-column :label="$t('inventoryLists.edit')">
          <template slot-scope="scope">
            <el-button size="mini" plain @click="edit(scope.row)">{{$t('inventoryLists.edit')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page_section" v-if="projectNum">
        <el-pagination background small @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[5,10,30,50,100]" :page-size="pageSize" layout="prev, pager, next,sizes,total" :total="projectNum">
        </el-pagination>
      </div>
    </div>
    <el-dialog :title="$t('inventoryLists.Rename')" :visible.sync="dialogVisible" width="500px">
      <el-input size="small" v-model="projectName"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updateName" size="small">{{$t('update')}}</el-button>
        <el-button @click="dialogVisible = false" size="small">{{$t('cancel')}}</el-button>
      </span>
    </el-dialog>
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
      projectList: [],
      currentPage: 1,
      pageSize: 10,
      projectNum: 0,
      dialogVisible: false,
      projectName: "",
      projectId: "",
      searchName:""
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    searchData(){
      this.currentPage = 1;
      this.getListData()

    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getListData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getListData();
    },
    uploadAfter() {
      this.getListData();
    },
    rename(row) {
      this.dialogVisible = true;
      this.projectName = row.projectName;
      this.projectId = row.projectId;
    },
    updateName() {
      this.$Geting(this.$api.updateProjectName, {
        projectId: this.projectId,
        projectName: this.projectName
      }).then(res => {
        if (res.code == 0) {
          this.$notify.success({
            title: this.$t("alert.alert_success_title"),
            message: this.$t("alert.operate_success_title")
          });
          this.dialogVisible = false;
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
    //获取列表数据
    getListData() {
      this.$Geting(this.$api.queryProject, {
        pageSize: this.pageSize,
        pageNo: this.currentPage,
        projectName:this.searchName,
      }).then(res => {
        if (res.code == 0) {
          this.projectList = res.datas.lists;
          this.projectNum = res.datas.count;
        } else {
          this.$notify.error({
            title: "fail",
            message: res.errcode
          });
          return false;
        }
      });
    },
    //导出数据
    exportExcel() {
      window.location.href = this.$addDownUrl(this.$api.exportProject);
    },
    edit(row) {
      //编辑表格
      this.$router.replace({
        path: "/home/inventoryChildren.html"
      });
      let projectDesc = JSON.stringify({
        name: row.projectName,
        id: row.projectId
      });
      sessionStorage.setItem("projectDesc", projectDesc);
    }
  }
};
</script>
<style lang='less'>
.inventory_list_wrapper {
  .inventory_header {
    margin: 15px 0;
    padding: 15px;
    background-color: #fff;
  }
  .page_section {
    text-align: center;
  }
}
</style>


