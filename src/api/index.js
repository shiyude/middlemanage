import Vue from 'vue'

/* 接口地址 */
Vue.api = Vue.prototype.$api = {
  /**
   * 写入接口列表
   */
  // login
  login:"/broke-manager-service/sysuser/login",//登录
  // invetory
  uploadFile:"/broke-manager-service/upload/uploadFile",//项目内文件上传
  uploadEditorImg:"/broke-manager-service/upload/uploadEditorImg",//项目外文件上传
  uploadWebResource:"/broke-manager-service/upload/uploadWebResource",//上传web资源包
  deleteFile:"/broke-manager-service/upload/deleteFile",//删除文件
  importProject: "/broke-manager-service/import/importProject", //导入项目excel
  exportProject: "/broke-manager-service/export/exportProject", //导出项目excel
  updateProjectName:"/broke-manager-service/project/updateProjectName",//修改项目名称
  queryProject: "/broke-manager-service/project/queryProject", //查询项目列表
  queryProjectDetail: "/broke-manager-service/project/queryProjectDetail", //查询项目详情
  updateProject: "/broke-manager-service/project/updateProject", //编辑项目信息
  queryBuilding:"/broke-manager-service/building/queryBuilding",//查询building列表
  deleteBuilding:"/broke-manager-service/building/deleteBuilding",//删除building
  saveBuilding:"/broke-manager-service/building/saveBuilding",//保存building
  importFloorPlan:"/broke-manager-service/import/importFloorPlan",//导入floor plan
  importFloorPlanImg:"/broke-manager-service/upload/uploadFloorPlanImg",//导入floor plan img
  exportFloorPlan:"/broke-manager-service/export/exportFloorPlan",//导出floor plan
  queryFloorPlan:"/broke-manager-service/floorplan/queryFloorPlan",//查询floorplan列表
  saveFloorPlan:"/broke-manager-service/floorplan/saveFloorPlan",//保存floor plan
  deleteFloorPlan:"/broke-manager-service/floorplan/deleteFloorPlan",//删除floor plan
  importUnit:"/broke-manager-service/import/importUnit",//导入unit
  importUnitTransaction:"/broke-manager-service/import/importUnitTransaction",//导入unit Transaction
  exportUnit:"/broke-manager-service/export/exportUnit",//导出unit
  exportUnitTransaction:"/broke-manager-service/export/exportUnitTransaction",//导出unit Transaction
  queryProjectTemplate:"/broke-manager-service/email/queryProjectTemplate",//查询email template
  saveProjectTemplate:"/broke-manager-service/email/saveProjectTemplate",//保存email template
  queryProjectSet:"/broke-manager-service/project/queryProjectSet",//查询Setting
  saveProjectSet:"/broke-manager-service/project/saveProjectSet",//保存Setting
  queryProjectCompany:"/broke-manager-service/company/queryProjectCompany",//查询项目关联的经纪公司列表
  saveProjectCompany:"/broke-manager-service/company/saveProjectCompany",//保存项目关联的经纪公司
  deleteProjectCompany:"/broke-manager-service/company/deleteProjectCompany",//删除项目关联经纪公司
  uploadProjectMedia:"/broke-manager-service/upload/uploadProjectMedia",//上传Media
  queryProjectMedia:"/broke-manager-service/media/queryProjectMedia",//查询media列表
  saveProjectMedia:"/broke-manager-service/media/saveProjectMedia",//保存media
  deleteProjectMedia:"/broke-manager-service/media/deleteProjectMedia",//删除media
  uploadProjectMainImg:"/broke-manager-service/upload/uploadProjectMainImg",//上传Main Image
  queryProjectMainimg:"/broke-manager-service/project/queryProjectMainimg",//查询main image
  downloadMainImg:"/broke-manager-service/download/downloadMainImg",//下载main img
  uploadSitePlan:"/broke-manager-service/upload/uploadSitePlan",//导入 site plan img
  querySitePlan:"/broke-manager-service/siteplan/querySitePlan",//查询site plan列表
  createSitePlan:"/broke-manager-service/siteplan/createSitePlan",//创建site plan
  updateSitePlan:"/broke-manager-service/siteplan/updateSitePlan",//修改project site plan
  deleteSitePlan:"/broke-manager-service/siteplan/deleteSitePlan",//删除project site plan
  querySitePlanDetail:"/broke-manager-service/siteplan/querySitePlanDetail",//查询project site plan详情
  queryUnit:"/broke-manager-service/unit/queryUnit",//根据building查询unit
  updateSiteContent:"/broke-manager-service/siteplan/updateSiteContent",//保存 edit mapping
  uploadFloorPlan3D:"/broke-manager-service/upload/uploadFloorPlan3D",//上传floor plan 3d
  deleteFloorPlanModel:"/broke-manager-service/floorplan/deleteFloorPlanModel",//删除floor plan model
  queryBuildingSitePlan:"/broke-manager-service/siteplan/queryBuildingSitePlan",//查询site plan building列表
  queryUnitList:"/broke-manager-service/unit/queryUnitList",//查询unit列表
  deleteUnit:"/broke-manager-service/unit/deleteUnit",//删除unit
  editUnit:"/broke-manager-service/unit/editUnit",//编辑unit
  queryUnitGroupList:"/broke-manager-service/unitGroup/queryUnitGroupList",//查询unit group 列表
  deleteUnitGroupJoin:"/broke-manager-service/unitGroup/deleteUnitGroupJoin",//删除unit group 关联的unit
  deleteUnitGroupTeam:"/broke-manager-service/unitGroup/deleteUnitGroupTeam",//删除unit group 关联的team
  saveUnitGroup:"/broke-manager-service/unitGroup/saveUnitGroup",//保存unit group
  deleteUnitGroup:"/broke-manager-service/unitGroup/deleteUnitGroup",//删除unit group
  insertUnitGroupJoin:"/broke-manager-service/unitGroup/insertUnitGroupJoin",//保存unit group 关联的unit
  queryUnitGroupJoin:"/broke-manager-service/unitGroup/queryUnitGroupJoin",//查询unit group 关联unit列表
  insertUnitGroupTeam:"/broke-manager-service/unitGroup/insertUnitGroupTeam",//保存unit group 关联的team
  queryUnitGroupTeam:"/broke-manager-service/unitGroup/queryUnitGroupTeam",//查询unit group 关联的team列表
  importUnitGroup:"/broke-manager-service/import/importUnitGroup",//导入unit group
  exportUnitGroup:"/broke-manager-service/export/exportUnitGroup",//导出unit group
  saveSpaNotificationSettings:"/broke-manager-service/project/saveSpaNotificationSettings",//保存SPA & Notification Settings
  queryPermissionList:"/broke-manager-service/access/queryPermissionList",//查询Permission角色列表
  deletePermission:"/broke-manager-service/access/deletePermission",//删除角色关联Permission
  savePermission:"/broke-manager-service/access/savePermission",//保存角色关联Permission
  saveDefaultPermission:"/broke-manager-service/access/saveDefaultPermission",//保存角色默认关联Permission
  deleteDocument:"/broke-manager-service/document/deleteDocument",//删除document信息
  queryDocumentList:"/broke-manager-service/document/queryDocumentList",//查看document文件列表
  saveDocument:"/broke-manager-service/document/saveDocument",//保存document信息
  queryWatermark:"/broke-manager-service/document/queryWatermark",//查询Watermark
  deleteWatermark:"/broke-manager-service/document/deleteWatermark",//删除Watermark
  uploadWatermark:"/broke-manager-service/upload/uploadWatermark",//上传Watermark
  uploadDocument:"/broke-manager-service/upload/uploadDocument",//上传Document
  putOffOn:"/broke-manager-service/floorplan/putOffOn",//putOffOn
  downFloorPlan:"/broke-manager-service/floorplan/downFloorPlan",//下载Floor Plan
  // admin
  queryGeneralFile:"/broke-manager-service/general/queryGeneralFile",//查询general file列表
  deleteGeneralFile:"/broke-manager-service/general/deleteGeneralFile",//删除general file
  updateGeneralFile:"/broke-manager-service/general/updateGeneralFile",//修改general file
  uploadGeneralFile:"/broke-manager-service/upload/uploadGeneralFile",//upload general file
  downloadAgentTemplate:"/broke-manager-service/download/downloadAgentTemplate",//下载user模版
  queryBrokeAgent:"/broke-manager-service/brokeAgent/queryBrokeAgent",//查询经纪人列表
  updateBrokeAgent:"/broke-manager-service/brokeAgent/updateBrokeAgent",//更新经纪人信息
  exportUsers:"/broke-manager-service/export/exportUsers",//导出users
  importUsers:"/broke-manager-service/import/importUsers",//导入users
  importTeamIC:"/broke-manager-service/import/importTeamIC",//导入team ic
  saveBrokeCompany:"/broke-manager-service/company/saveBrokeCompany",//保存broke
  queryBrokeCompany:"/broke-manager-service/company/queryBrokeCompany",//查询经纪公司列表
  deleteBrokeCompany:"/broke-manager-service/company/deleteBrokeCompany",//删除broke
  queryTeamIcBrokeAgent:"/broke-manager-service/brokeAgent/queryTeamIcBrokeAgent",//查询team ic可添加经纪人列表
  insertAgentProject:"/broke-manager-service/brokeAgent/insertAgentProject",//team ic添加经纪人
  updateBrokeAgentGroupStatus:"/broke-manager-service/brokeAgent/updateBrokeAgentGroupStatus",//更新经纪人状态（is_agent）
  queryTeamIcBrokeAgentList:"/broke-manager-service/brokeAgent/queryTeamIcBrokeAgentList",//查询team ic经纪人列表
  deleteAgentProject:"/broke-manager-service/brokeAgent/deleteAgentProject",//team ic 删除经纪人关联项目
  updateAgentProject:"/broke-manager-service/brokeAgent/updateAgentProject",//team ic 更新经纪人关联项目
  exportICTeam:"/broke-manager-service/export/exportICTeam",//导入team ic
  sendWelcomeMail:"/broke-manager-service/brokeAgent/sendWelcomeMail",//发送welcome mail
  queryAppVersion:"/broke-manager-service/version/queryAppVersion",//查询版本列表
  updateAppVersion:"/broke-manager-service/version/udpateAppVersion",//编辑版本
  saveAppVersion:"/broke-manager-service/version/saveAppVersion",//保存版本
  startProhibit:"/broke-manager-service/version/startProhibit",//版本启用禁用
  queryOperationLog:"/broke-manager-service/opLog/queryOperationLog",//查询Audit logs列表
  exportOperationLogs:"/broke-manager-service/export/exportOperationLogs",//导出Audit logs
  //create new team
  queryTeams:"/broke-manager-service/team/queryTeams",//查询团队
  saveTeam:"/broke-manager-service/team/saveTeam",//添加团队
  deleteTeam:"/broke-manager-service/team/deleteTeam",//删除团队
  getTeamsAgentByName:"/broke-manager-service/teamAgent/getTeamsAgentByName",//根据用户名称查询用户列表
  saveTeamsAgent:"/broke-manager-service/teamAgent/saveTeamsAgent",//创建团队与用户关联
  queryTeamsAgentList:"/broke-manager-service/teamAgent/queryTeamsAgentList",//查询团队下所有用户
  deleteTeamsAgent:"/broke-manager-service/teamAgent/deleteTeamsAgent",//删除团队用户
  deleteTeamsAgentAll:"/broke-manager-service/teamAgent/deleteTeamsAgentAll",//删除团队下所有用户
  importTeamAgent:"/broke-manager-service/import/importTeamAgent",//import team Agent
  exportTeamAgent:"/broke-manager-service/export/exportTeamAgent",//export Team Agent
  queryTeamsAll:"/broke-manager-service/team/queryTeamsAll",//Default Team
  // account
  queryBroke:"/broke-manager-service/broke/queryBroke",//Manage Accounts
  getProject:"/broke-manager-service/project/getProject",//Manage Properties
  saveBroke:"/broke-manager-service/broke/saveBroke",//Add or update Account
  sendMail:"/broke-manager-service/broke/sendMail",//sendMail
  ChangePassword:"/broke-manager-service/sysuser/changePassword",//Change Password
  logOut:"/broke-manager-service/sysuser/logUot",//logOut
  deleteBrokeSysuser:"/broke-manager-service/sysuser/deleteBrokeSysuser",//delete
  editProperties:"/broke-manager-service/project/editProperties",//Edit Properties
  createAccount:"/broke-manager-service/brokeAgent/createAccount",//Create New User
  //Notification
  insertPushLog:"/broke-manager-service/push/insertPushLog",//Send Notification
  queryPushLogList:"/broke-manager-service/push/queryPushLogList",//查询推送记录
  cancelMessage:"/broke-manager-service/push/cancelMessage",//Cancel
  //roles
  saveRole:"/broke-manager-service/access/saveRole",//保存角色
  copyRole:"/broke-manager-service/access/copyRole",//复制角色
  queryRoleList:"/broke-manager-service/access/queryRoleList",//查询角色列表
  deleteRole:"/broke-manager-service/access/deleteRole",//删除角色
  deleteRoleTeam:"/broke-manager-service/access/deleteRoleTeam",//删除角色关联team
  saveRoleTeam:"/broke-manager-service/access/saveRoleTeam",//保存角色关联team
  queryRoleTeam:"/broke-manager-service/access/queryRoleTeam",//查询角色关联team列表
  queryRoleAccess:"/broke-manager-service/access/queryRoleAccess",//查询role关联的权限
  saveRoleAccess:"/broke-manager-service/access/saveRoleAccess",//保存role关联的权限
  //interest
  delUnitInterest:"/broke-manager-service/interest/delUnitInterest",//delete unit interest
  queryInterest:"/broke-manager-service/interest/queryInterest",//Active Interests
  updateAction:"/broke-manager-service/interest/updateAction",//Active
  importUnitInterest:"/broke-manager-service/import/importUnitInterest",//import Unit Interest
  exportUnitInterest:"/broke-manager-service/export/exportUnitInterest",//export Unit Interest
  //transaction
  importTransaction:"/broke-manager-service/import/importTransaction",//import Transaction
  exportTransaction:"/broke-manager-service/export/exportTransaction",//export Transaction
  queryTransaction:"/broke-manager-service/transaction/queryTransaction",//查询TransactionList
  queryEditInfo:"/broke-manager-service/transaction/queryEditInfo",//查询Transaction编辑列表
  editTransaction:"/broke-manager-service/transaction/editTransaction",//编辑Transaction
  //日程
  queryCalendarList:"/broke-manager-service/calendar/queryCalendarList",//queryCalendarList
  saveCalendar:"/broke-manager-service/calendar/saveCalendar",//saveCalendar
  deleteCalendar:"/broke-manager-service/calendar/deleteCalendar",//deleteCalendar

}

