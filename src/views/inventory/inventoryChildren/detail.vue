<template>
  <div class="detail_wrapper">
    <div class="head">
      <el-row>
        <el-col :span="12" class="el_col_name">
          <div>
            <span>{{$t('edit.name')}}</span>
            <span class="project_name">{{detailForm.projectName}}</span>
          </div>
        </el-col>
        <el-col :span="12" style="text-align:right">
          <el-button size="mini" @click="updateDetail">{{$t('edit.update')}}</el-button>
          <el-button size="mini" @click="$router.replace('/home/inventoryList.html')">{{$t('edit.cancel')}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="detail_content">
      <el-form :inline="true" class="demo-form-inline form" label-width="250px" label-position="left" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.syncToMobile')">
              <el-checkbox v-model="detailForm.mobileSync"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.isFeatured')">
              <el-checkbox v-model="detailForm.featured"></el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.currencySymbol')">
              <el-input class="width_300px" v-model.trim="detailForm.currencySymbol"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.developer')">
              <el-input class="width_300px" v-model.trim="detailForm.developer"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.type')">
              <el-select size="mini" v-model="detailForm.projectType" class="width_300px" placeholder="">
                <el-option v-for="item in typeData" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.typeAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.projectTypeAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.numberOfUnits')">
              <el-input class="width_300px" v-model="detailForm.unitsNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.numberOfUnitsAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.unitsNumAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.tenure')">
              <el-select size="mini" v-model="detailForm.tenure" class="width_300px" placeholder="">
                <el-option v-for="item in tenureData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.tenureAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.tenureAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.topDate')">
              <el-date-picker class="width_300px" value-format="timestamp" format="dd-MMM-yyyy" type="date" v-model="detailForm.completionDate">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.topDateAltText')">
              <el-input class="width_300px" v-model="detailForm.completionDateAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.launchDate')">
              <el-date-picker class="width_300px" value-format="timestamp" format="dd-MMM-yyyy" type="date" v-model="detailForm.launchDate">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.launchAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.launchDateAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.country')">
              <el-select size="mini" v-model="detailForm.country" class="width_300px" placeholder="">
                <el-option v-for="item in countryData" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.countryAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.countryAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.location')">
              <el-select size="mini" v-model="detailForm.location" class="width_300px" placeholder="">
                <el-option v-for="item in locationData" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.locationAltText')">
              <el-input class="width_300px" v-model.trim="detailForm.locationAltText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.pricefrom')">
               <el-input class="width_300px" v-model.trim="priceFrom" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.pricefromalttext')">
              <el-input class="width_300px" v-model.trim="detailForm.priceFromText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.psffrom')">
               <el-input class="width_300px" v-model.trim="psfFrom" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.psffromalttext')">
              <el-input class="width_300px" v-model.trim="detailForm.psfFromText"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.propertyGroup')">
              <el-input class="width_300px" v-model.trim="detailForm.propertyGroup"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.mapZoomLevel')">
              <el-input class="width_300px" v-model.trim="detailForm.mapZoomLevel"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.latitude')">
              <el-input class="width_300px" v-model.trim="detailForm.latitude"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.longitude')">
              <el-input class="width_300px" v-model.trim="detailForm.longitude"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.streetAdress')">
              <el-input class="width_300px" type="textarea" :rows="3" v-model.trim="detailForm.streetAddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.postalCode')">
              <el-input class="width_300px" v-model.trim="detailForm.postalCode"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="border-bottom:1px solid #dcdfe6;margin:5px 0;"></div>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.description')">
              <editor editorId="description" :value="detailForm.description" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.keyPoints')">
              <editor editorId="keyPoints" :value="detailForm.keyPoints" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.facilities')">
              <editor editorId="facilities" :value="detailForm.facilities" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.nearbyAmenities')">
              <editor editorId="nearbyAmenities" :value="detailForm.nearbyAmenities" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-alert style="padding:8px 0;margin-bottom:10px;" :title="$t('edit.connects')" type="info" :closable="false">
        </el-alert>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.commission')">
              <editor editorId="commission" :value="detailForm.commission" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.externalCommission')">
              <editor editorId="externalCommission" :value="detailForm.externalCommission" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.salesContacts')">
              <editor editorId="salesContacts" :value="detailForm.salesContacts" :setting="editorSetting" @show="editors" @on-upload-success="onEditorUploadComplete"></editor>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="border-bottom:1px solid #dcdfe6"></div>
        <el-row style="padding:15px 0">
          <el-col>
            <el-form-item :label="$t('edit.contactImage')" style="margin:10px 0">
              <uploader fileId="concatImgFile" :fileData="fileData" :maxSize="5" :url="$api.uploadFile" fileType=".png,.jpg" :uploadParam="uploadParam" :btnText="{select:$t('edit.selectFile'),import:$t('edit.addContactImage')}"></uploader>
            </el-form-item>
          </el-col>
          <el-col v-if="fileData.length">
            <div class="upload_content">
              <span class="upload_url">{{$t('edit.uploaded')}}：{{fileData[0].url}}</span>
              <span class="upload_delete" @click="deleteImg">{{$t('edit.removeContactImage')}}</span>
            </div>
          </el-col>
        </el-row>
        <div style="border-bottom:1px solid #dcdfe6;margin-bottom:15px"></div>
        <el-alert style="padding:8px 0;margin-bottom:30px" :title="$t('edit.customInformationFields')" type="info" :closable="false"></el-alert>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoLabel1')">
              <el-input class="width_300px" v-model.trim="detailForm.customLabel1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoValue1')">
              <el-input class="width_300px" v-model.trim="detailForm.customValue1"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoLabel2')">
              <el-input class="width_300px" v-model.trim="detailForm.customLabel2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoValue2')">
              <el-input class="width_300px" v-model.trim="detailForm.customValue2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoLabel3')">
              <el-input class="width_300px" v-model.trim="detailForm.customLabel3"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoValue3')">
              <el-input class="width_300px" v-model.trim="detailForm.customValue3"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoLabel4')">
              <el-input class="width_300px" v-model.trim="detailForm.customLabel4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoValue4')">
              <el-input class="width_300px" v-model.trim="detailForm.customValue4"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoLabel5')">
              <el-input class="width_300px" v-model.trim="detailForm.customLabel5"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :label="$t('edit.customInfoValue5')">
              <el-input class="width_300px" v-model.trim="detailForm.customValue5"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import editor from "@/components/editor";
import selsectData from "@/util/selectData.json";
import uploader from "@/components/uploader";
import tinymce from "tinymce/tinymce";
export default {
  components: {
    editor,
    uploader
  },
  data() {
    return {
      hostUrl: sessionStorage.getItem("serveUrl") || "",
      typeData: selsectData.typeData,
      tenureData: selsectData.tenureData,
      locationData: selsectData.locationData,
      countryData: selsectData.countryData,
      editorArr: [], //获取数据时富文本编辑器的图片数组
      updateEditorArr: [], //提交时富文本编辑器里面的图片数组
      uploadParam: [
        {
          name: "type",
          value: "projectImg"
        },
        {
          name: "projectId",
          value:
            JSON.parse(sessionStorage.getItem("projectDesc") || "{}").id || ""
        }
      ],
      fileData: [],
      priceFrom:"",
      psfFrom:"",
      detailForm: {
        projectName: "",
        mobileSync: false,
        currencySymbol: "",
        featured: false,
        developer: "",
        projectType: "",
        projectTypeAltText: "",
        unitsNum: "",
        unitsNumAltText: "",
        tenure: "",
        tenureAltText: "",
        completionDate: "",
        completionDateAltText: "",
        launchDate: "",
        launchDateAltText: "",
        country: "",
        countryAltText: "",
        location: "",
        locationAltText: "",
        propertyGroup: "",
        mapZoomLevel: "",
        latitude: "",
        longitude: "",
        streetAddress: "",
        postalCode: "",
        description: "",
        keyPoints: "",
        facilities: "",
        nearbyAmenities: "",
        commission: "",
        externalCommission: "",
        salesContacts: "",
        customLabel1: "",
        customValue1: "",
        customLabel2: "",
        customValue2: "",
        customLabel3: "",
        customValue3: "",
        customLabel4: "",
        customValue4: "",
        customLabel5: "",
        customValue5: "",
        psfFromText:""
      },
      editorSetting: {
        // 配置富文本编辑器高
        height: 120,
        width: 900
      },
      id: JSON.parse(sessionStorage.getItem("projectDesc") || "{}").id || "",
      callbackList: []
    };
  },
  mounted() {
    this.queryProjectDetail();
  },
  methods: {
    deleteImg() {
      this.$Geting(this.$api.deleteFile, {
        path: this.hostUrl + this.fileData[0].path
      }).then(res => {
        if (res.code == 0) {
          this.fileData = [];
          if (window.sessionStorage.getItem("uploadImg")) {
            window.sessionStorage.removeItem("uploadImg");
          }
        } else {
          this.$notify.error({
            title: "fail",
            message: res.errcode
          });
          return false;
        }
      });
    },
    editors(obj) {
      // editor组件传过来的值赋给content
      this.detailForm[obj.id] = obj.content;
    },
    onEditorUploadComplete(json) {
      // 处理上传图片后返回数据，添加img标签到编辑框内
      json[1](this.hostUrl + json[0].filePath);
    },
    queryProjectDetail() {
      this.$Geting(this.$api.queryProjectDetail, { projectId: this.id }).then(
        res => {
          if (res.code == 0) {
            this.detailForm = Object.assign({}, res.datas.project);
            this.priceFrom = res.datas.priceFrom;
            this.psfFrom = res.datas.psfFrom;
            this.fillDataToForm();
          } else {
            this.$notify.error({
              title: "fail",
              message: res.errcode
            });
            return false;
          }
        }
      );
    },
    updateDetail() {
      if (!this.detailForm.currencySymbol) {
        this.$alertWarn("currencySymbol");
      } else if (!this.detailForm.developer) {
        this.$alertWarn("developer");
      } else if (
        !this.detailForm.projectType &&
        !this.detailForm.projectTypeAltText
      ) {
        this.$alertWarn("projectType");
      } else if (
        !this.detailForm.unitsNum &&
        !this.detailForm.unitsNumAltText
      ) {
        this.$alertWarn("unitsNum");
      } else if (!this.detailForm.tenure && !this.detailForm.tenureAltText) {
        this.$alertWarn("tenure");
      } else if (
        !this.detailForm.completionDate &&
        !this.detailForm.completionDateAltText
      ) {
        this.$alertWarn("completionDate");
      } else if (
        !this.detailForm.launchDate &&
        !this.detailForm.launchDateAltText
      ) {
        this.$alertWarn("launchDate");
      } else if (!this.detailForm.country && !this.detailForm.countryAltText) {
        this.$alertWarn("country");
      } else if (
        !this.detailForm.location &&
        !this.detailForm.locationAltText
      ) {
        this.$alertWarn("currencySymbol");
      } else if (!this.detailForm.postalCode) {
        this.$alertWarn("postalCode");
      } else if (!this.detailForm.streetAddress) {
        this.$alertWarn("streetAddress");
      } else {
        let submitData = this.getSubmitData();
        this.$Posting(this.$api.updateProject, submitData).then(res => {
          if (res.code == 0) {
            this.beforeSaveCheckImage();
            this.editorArr = [];
            this.updateEditorArr = [];
            this.$notify({
              title: "success",
              message: this.$t("alert.operate_success_title"),
              type: "success"
            });
            this.queryProjectDetail();
            if (window.sessionStorage.getItem("uploadImg")) {
              window.sessionStorage.removeItem("uploadImg");
            }
          } else {
            this.$notify.error({
              title: "fail",
              message: res.errcode
            });
            return false;
          }
        });
      }
    },
    fillDataToForm() {
      //填充数据到表单
      this.detailForm.mobileSync =
        this.detailForm.mobileSync == "YES" ? true : false;
      this.detailForm.featured = this.detailForm.featured == "1" ? false : true;
      this.detailForm.description = this.$base64ToContent(
        this.detailForm.description
      );
      tinymce.editors[0].setContent(this.detailForm.description);
      this.detailForm.keyPoints = this.$base64ToContent(
        this.detailForm.keyPoints
      );
      tinymce.editors[1].setContent(this.detailForm.keyPoints);
      this.detailForm.facilities = this.$base64ToContent(
        this.detailForm.facilities
      );
      tinymce.editors[2].setContent(this.detailForm.facilities);
      this.detailForm.nearbyAmenities = this.$base64ToContent(
        this.detailForm.nearbyAmenities
      );
      tinymce.editors[3].setContent(this.detailForm.nearbyAmenities);
      this.detailForm.commission = this.$base64ToContent(
        this.detailForm.commission
      );
      tinymce.editors[4].setContent(this.detailForm.commission);
      this.detailForm.externalCommission = this.$base64ToContent(
        this.detailForm.externalCommission
      );
      tinymce.editors[5].setContent(this.detailForm.externalCommission);
      this.detailForm.salesContacts = this.$base64ToContent(
        this.detailForm.salesContacts
      );
      tinymce.editors[6].setContent(this.detailForm.salesContacts);
      if (this.detailForm.contactImage) {
        this.fileData.push({
          path: this.detailForm.contactImage,
          url: `${this.hostUrl}${this.detailForm.contactImage}`
        });
      }
      this.beforeSaveGetInitEdit(
        this.detailForm.description,
        this.detailForm.keyPoints,
        this.detailForm.facilities,
        this.detailForm.nearbyAmenities,
        this.detailForm.commission,
        this.detailForm.externalCommission,
        this.detailForm.salesContacts
      );
    },
    getSubmitData() {
      //改变表单数据为提交时的数据
      let submitData = Object.assign({}, this.detailForm);
      submitData.mobileSync = submitData.mobileSync ? "YES" : "NO";
      submitData.featured = submitData.featured ? "0" : "1";
      submitData.description = this.$contentToBase64(submitData.description);
      submitData.keyPoints = this.$contentToBase64(submitData.keyPoints);
      submitData.facilities = this.$contentToBase64(submitData.facilities);
      submitData.nearbyAmenities = this.$contentToBase64(
        submitData.nearbyAmenities
      );
      submitData.commission = this.$contentToBase64(submitData.commission);
      submitData.externalCommission = this.$contentToBase64(
        submitData.externalCommission
      );
      submitData.salesContacts = this.$contentToBase64(
        submitData.salesContacts
      );
      submitData.projectId = this.id;
      submitData.contactImage = this.fileData[0] ? this.fileData[0].path : "";
      return submitData;
    },
    //保存前先读取服务端返回的富文本编辑器里面的内容，晒选出图片存在缓存中
    beforeSaveGetInitEdit() {
      for (let i = 0; i < arguments.length; i++) {
        this.editorArr = this.editorArr.concat(
          this.$changeHtmlStr(arguments[i])
        );
      }
    },
    //保存前获取编辑后的富文本编辑器的内容
    beforeSaveGetEdit() {
      for (let i = 0; i < arguments.length; i++) {
        this.updateEditorArr = this.updateEditorArr.concat(
          this.$changeHtmlStr(arguments[i])
        );
      }
    },
    //提交之前进行图片的检测
    beforeSaveCheckImage() {
      let editorImg =
        JSON.parse(window.sessionStorage.getItem("editorImg")) || [];
      this.beforeSaveGetEdit(
        this.detailForm.description,
        this.detailForm.keyPoints,
        this.detailForm.facilities,
        this.detailForm.nearbyAmenities,
        this.detailForm.commission,
        this.detailForm.externalCommission,
        this.detailForm.salesContacts
      );

      let allEditorArr = [...editorImg, ...this.editorArr]; //将缓存里面的图片和获取的富文本编辑器的图片进行整合
      allEditorArr.length &&
        window.sessionStorage.setItem(
          "editorImg",
          JSON.stringify(allEditorArr)
        ); //点击时将之前富文本编辑器里面的图片进行缓存
      this.$changeSession(this.updateEditorArr);
    }
  },
  beforeDestroy() {
    this.$deleteImg();
  }
};
</script>
<style lang="less">
.detail_wrapper {
  background-color: #fff;
  height: 100%;
  position: relative;
  overflow: hidden;
  .head {
    height: 62px;
    position: absolute;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #dcdfe6;
    border-top: 1px solid #dcdfe6;
    padding: 15px 30px;
    .el_col_name {
      div {
        padding: 4px 0;
        .project_name {
          font-weight: 300;
          font-size: 14px;
        }
      }
    }
  }
  .detail_content {
    position: absolute;
    top: 62px;
    bottom: 0;
    width: 100%;
    overflow: auto;
    padding: 15px 30px;
    .el-alert__title {
      font-size: 14px !important;
    }
  }
  .upload_content {
    padding-left: 260px;
    .upload_url {
      color: #606266;
      font-size: 12px;
    }
    .upload_delete {
      color: blue;
      font-size: 14px;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>


