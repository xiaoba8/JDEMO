/**
 * Created by Vurt on 14-3-26.
 */
app.controller('AppController', ['$scope', '$rootScope', '$location','$http','SecurityFactory','$timeout',
    function ($scope, $rootScope, $location, $http,SecurityFactory,$timeout) {
		// 当前登录用户信息
		$scope.subject = SecurityFactory.getSubject();

		// 获取当前用户有权限访问的菜单，等浏览器确认用户身份后
		$http.get("ws/getMenuByPermission").success(function(data) {
			$rootScope.menus = data.result;
			
			//控制是否滚动到选中菜单
			var scrollToSelected=false;
			
    		for(var i=0;i<$rootScope.breadcrumbArray.length;i++){
    			if($rootScope.breadcrumbArray[i].menu){
    				$rootScope.breadcrumbArray[i].menu.open=false;
        			$rootScope.breadcrumbArray[i].menu.active=false;
    			}
    		}
			$rootScope.breadcrumbArray=[];
			initAttr(undefined,$rootScope.menus);
			var flag=initMenuStatus(undefined, $rootScope.menus,window.location.hash,$rootScope.breadcrumbArray);
			$rootScope.breadcrumbArray.reverse();
			
			if(!flag&&$rootScope.formTitle&&$rootScope.formTitle!=""){
				$rootScope.breadcrumbArray.push({title:$rootScope.formTitle});
			}
			
			if($rootScope.breadcrumbArray.length>0){
				scrollToSelected=true;
			}
			
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
	     * 初始化与当前url匹配的menu及其父menu的open和active状态
	     * @param parent 父menu
	     * @param menus  子menus数组
	     */
	    function initMenuStatus(parent,menus,url,breadcrumbArray){
	        for (var i = 0; i < menus.length; i++) {
	            var menu = menus[i];
	            if (menu) {
	                if (menu.l && menu.l ==url){
	                    menu.active = true;
	                    breadcrumbArray.push({title:menu.t,menu:menu,url:menu.l});
	                    return true;
	                }
	                if (menu.c && menu.c.length > 0) {
	                    var flag=initMenuStatus(menu, menu.c,url,breadcrumbArray);
	                    if(flag){
	                    	 breadcrumbArray.push({title:menu.t,menu:menu,url:menu.l});
	                    	 menu.active = true;
	                    	 menu.open = true;
	                    	 menu.isDown=false;
	                    	 //初始化手风琴菜单首次加载display样式
	                    	 menu.loadOpen=true;
	                    	 return true;
	                    }
	                }
	            }
	        }
	        return false;
	    }
		
		$scope.loadFinished=function(){
			 $('#indexloading').fadeOut(2000);
		};
		// 登出
		$scope.logout = function(){
			SecurityFactory.logout();
		};
		$rootScope.menus = [];
		
		$rootScope.breadcrumbArray=[];
    }]);