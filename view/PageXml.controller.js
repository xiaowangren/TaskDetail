sap.ui.controller("com.zhenergy.task.view.PageXml", {
    	onInit: function() {
    	    //READY RESERVED IN_PROGRESS COMPLETED
    	   // var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
            this.getView().byId("create_01").bindElement("/EE_TASK_SET('READY')");
            this.getView().byId("baoliu_02").bindElement("/EE_TASK_SET('RESERVED')");
            this.getView().byId("jingxingzhong_03").bindElement("/EE_TASK_SET('IN_PROGRESS')");
            this.getView().byId("wancheng_04").bindElement("/EE_TASK_SET('COMPLETED')");
    	},
    	handleNavOnSelect: function(){
    	   var pathName=window.location.host; 
    	   if(pathName.indexOf("erpq")>0){
    	       var erpdurl = "http://znbb-ep1q-01.zhenergy.com.cn:50000/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fzhenergy.com.zhenergy!2fzhenergy.com.EP_Folder_Home!2fBPM__?sap-config-mode=true";
    	        //var erpdurl = "http://znbb-ep1q-01.zhenergy.com.cn:50000/irj/portal?NavigationTarget=navurl%3A%2F%2F9d4304d22026a13ff10da8076bbfcccb&ExecuteLocally=true&DrillDownLevel=1&CurrentWindowId=WID1446711066580&supportInitialNavNodesFilter=true&PrevNavTarget=navurl%3A%2F%2Fe9d5d97dd3e55c9763a4973a016a3cc6&NavMode=10";
    	        window.location.href=erpdurl; 
    	   }else if(pathName.indexOf("erpt")>0){
    	       var erpdurl = "http://znbb-ep1t-01.zhenergy.com.cn:50000/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fzhenergy.com.zhenergy!2fcom.zhenergy.ZBPM!2fzhenergy.com.cn.BPMINBOX?sap-config-mode=true";
      	        //var erpdurl = "http://znbb-ep1t-01.zhenergy.com.cn:50000/irj/portal?NavigationTarget=navurl%3A%2F%2F04a54b90b4ea7aec9d2c59a5e773c0e3&ExecuteLocally=true&DrillDownLevel=1&CurrentWindowId=WID1446774764264&supportInitialNavNodesFilter=true&PrevNavTarget=navurl%3A%2F%2F5ca925ffc4728532a8fb89428d9a3dca&NavMode=10";
    	        window.location.href=erpdurl;  	       
    	   }else if(pathName.indexOf("erpp")>0){
    	       var erpdurl="http://erp.zhenergy.com.cn/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fzhenergy.com.zhenergy!2fzhenergy.com.EP_Folder_Home!2fcom.zhenergy.ep_folder_home_iview!2fBPM__?sap-config-mode=true";
    	        //var erpdurl = "http://erp.zhenergy.com.cn/irj/portal?NavigationTarget=navurl%3A%2F%2F0183caae9483a2b35a956fc3aae33dbf&ExecuteLocally=true&DrillDownLevel=1&CurrentWindowId=WID1446713150813&supportInitialNavNodesFilter=true&PrevNavTarget=navurl%3A%2F%2F5ca925ffc4728532a8fb89428d9a3dca&NavMode=10";
    	        window.location.href=erpdurl;
    	   }else{
    	       var erpdurl = "http://znbb-ep1d-01.zhenergy.com.cn:50000/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fzhenergy.com.zhenergy!2fzhenergy.com.EP_Folder_Home!2fBPMINBOX?sap-config-mode=true";
    	      // var erpdurl ="http://znbb-ep1d-01.zhenergy.com.cn:3233/bpminbox/inbox.html?sap-ui-inbox-header=false&sap-ui-theme=sap_goldreflection&sap-ui-language=zh&sap-ui-rtl=false";
      	       //var erpdurl = "http://znbb-ep1d-01.zhenergy.com.cn:50000/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fzhenergy.com.zhenergy!2fzhenergy.com.EP_Folder_Home!2fzhenergy.com.BPMINBOX?sap-config-mode=true";
    	        //window.open(erpdurl,'_self'); 
    	        window.location.href=erpdurl;
    	   }
 
    	}

})