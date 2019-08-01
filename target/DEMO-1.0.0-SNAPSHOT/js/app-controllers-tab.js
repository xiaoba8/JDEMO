/**
 * Created by Vurt on 14-3-26.
 */
app.controller('AppController', ['$scope', '$rootScope', '$location','$http','SecurityFactory','$timeout','TabOperator','debounce',
    function ($scope, $rootScope, $location, $http,SecurityFactory,$timeout,TabOperator,debounce) {
		$scope.homeUrl=applicationConfig.homeUrl;
		
		$scope.subject = SecurityFactory.getSubject();
		
		// 登出
		$scope.logout = function(){
			SecurityFactory.logout();
		};
		
		$scope.loadFinished=function(){
			 $('#indexloading').fadeOut(2000);
		};
		
		$rootScope.menus = [];
	    // 获取当前用户有权限访问的菜单   
		$http.get("ws/getMenuByPermission").success(function(data) {
			$rootScope.menus = data.result;
			
			var scrollToSelected=false;
			//处理待打开的tab页
			if(!angular.isUndefined(TabOperator.getWaitUrl())&&TabOperator.getWaitUrl()!=""){
				$scope.openTab(TabOperator.getWaitUrl());
				TabOperator.setWaitUrl("");
				scrollToSelected=true;
			}
			
			initAttr(undefined,$rootScope.menus); 
			
			/**
			 * 初始化ace sidebar滚动条
			 */
			$timeout(function(){
				var sidebar = $('.sidebar');
				var nav = sidebar.find('.nav-list');
				if(sidebar && nav){
					if(!ace.helper.sidebar_scroll){
						var args= [
	                         jQuery
							 //true, //enable only if sidebar is fixed , for 2nd approach only
							,scrollToSelected //scroll to selected item? (one time only on page load)
							,true //true = include shortcut buttons in the scrollbars
							,false || ace.vars['safari'] || ace.vars['ios_safari'] //true = include toggle button in the scrollbars
							,200 //> 0 means smooth_scroll, time in ms, used in first approach only, better to be almost the same amount as submenu transition time
							,false//true && ace.vars['touch'] //used in first approach only, true means the scrollbars should be outside of the sidebar
						];
						ace.sidebar_scrollable.apply(null, args);
					}else{
						ace.helper.sidebar_scroll.reset();
					}
				}
			},500);
			
		}).error(function() {
			$rootScope.menus = [];
		});

        $rootScope.menuPath=[];
        
        /**
         * 初始化向下箭头
         */
		function initAttr(parent,menus){
			 for (var i = 0; i < menus.length; i++) {
				  var menu = menus[i];
			      if (menu) {
			    	  menu.parentMenu=parent;
			    	  menu.isDown=true;
			    	  if (menu.c && menu.c.length > 0) {
			    		  initAttr(menu,menu.c);
			    	  }
			      }
			 }
		}     
        
        /**
	     * 定义打开的tab页
	     */
	    $rootScope.tabs = [];
        
	    $scope.isFirst=true;
	    
	    TabOperator.setNavBarWidth($(".tabbable").width());
	   	
	    $scope.select=function(url,tab){
			//防止首次加载首页tab覆盖目标urltab
	    	if($scope.isFirst){
	  			$scope.isFirst=false;
	  			 return;
	     	}
	    	TabOperator.selectTab(url,tab);
	   	}

	    //打开tab页
	    $scope.openTab = function(url){
	    	TabOperator.openTab(url);
	    };
		
		//关闭tab页
		$scope.closeTab = function(index){
			TabOperator.closeTab(index);
		};
		
		//刷新tab页
		$scope.refreshTab = function(tab){
			TabOperator.refreshTab(tab.page);
		};
		
		//刷新首页
		$scope.refreshIndex=function(){
			var url=applicationConfig.homeUrl;
			if(url.indexOf("?")!=-1){
				$scope.homeUrl=url+"&_t="+new Date().getTime();
			}else{
				$scope.homeUrl=url+"?_t="+new Date().getTime();
			}
		}
		
		//关闭所有
		$scope.closeAllTab=function(){
			var alltab=TabOperator.getAllTab();
			var l=alltab.length;
			for(var i=0;i<l;i++){
				TabOperator.closeTab(alltab[0]);
			}
		}
		
		//关闭其它
		$scope.closeOtherTab=function(tab){
			var alltab=TabOperator.getAllTab();
			var l=alltab.length;
			var index=0;
			for(var i=0;i<l;i++){
				if(alltab[index].page==tab.page){
					index=1;
					continue;
				}
				TabOperator.closeTab(alltab[index]);
			}
		}
		
		$scope.pinTab=function(index){
			TabOperator.pinTab(index);
		}
    }]);