<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<%
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%> 
<title>C2平台开发者社区 - 登录</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="utf-8" />
<meta name="description" content="overview &amp; stats" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<base href="<%=basePath%>">
<!--[if !IE]> -->
<link rel="stylesheet" href="assets/css/c2-all.css" />
<!-- <![endif]-->

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 10]>
	<link rel="stylesheet" href="assets/compatible/dup/bootstrap.min.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/messenger.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/messenger-theme-flat.css"/>
<![endif]-->

</head>
<body style="background-color: #f5f5f5;">
	<center>
		<br>
		<div style="height: 60px; width: 400px;"></div>

		<h1 class="text-primary">
			<strong>C2开发者社区</strong>
		</h1>

		<div class="panel panel-default text-left" style="width: 400px;">
			<div class="panel-body">
					<div class="form-group">
						<label class="text-muted">登录名</label> <input type="text" id="username"
							class="form-control" name="username"  required autofocus>
					</div>
					<div class="form-group">
						<label class="text-muted">密码</label> <input type="password" id="password"
							class="form-control" name="password"  required>
					</div>
					<!-- <div class="form-group">
						<div class="checkbox">
							<label> <input type="checkbox" ng-model="rememberme">
								记住我（公共场所慎用）
							</label>
						</div>
					</div> -->
					<div class="form-group">
						<button id="login-button" type="button" onclick="login();" class="btn btn-primary">登 录</button>
					</div>
			</div>
		</div>
		
		<!-- 错误显示 -->
		<ul id="errorMessage" class="messenger messenger-fixed messenger-on-bottom messenger-theme-flat messenger-empty">
			<li class="messenger-message-slot messenger-shown messenger-first messenger-last">
				<div
					class="messenger-message message alert error message-error alert-error messenger-will-hide-after">
					<button type="button" class="messenger-close" onclick="hideMessage();" data-dismiss="alert">×</button>
					<div id="errorText" class="messenger-message-inner" style="float:left">错误提示</div>
					<div class="messenger-spinner">
						<span class="messenger-spinner-side messenger-spinner-side-left">
							<span class="messenger-spinner-fill"></span>
						</span> <span class="messenger-spinner-side messenger-spinner-side-right">
							<span class="messenger-spinner-fill"></span>
						</span>
					</div>
				</div>
			</li>
		</ul>
		Copyright ©2007-2014 All Rights Reserved <br> <a href="#">www.chinacreator.com</a>
	</center>

	<!-- basic scripts -->
	<script src="assets/jquery.min.js"></script>
	
	<script type="text/javascript">
	(function($) {
		$("#username").keyup(function(event) {
			if (event.keyCode == 13)$("#password").focus().select();
		});
		$("#password").keyup(function(event) {
			if (event.keyCode == 13)$("#login-button").click();
		});
	})(jQuery);
	

	//登陆处理逻辑
	var msgSetTimeoutObj=undefined;
	function login() {
		
		if($("#username").val()==""){
			showMessage("用户名不能为空!");
			$("#username").focus();
			return;
		}
		
		if($("#password").val()==""){
			showMessage("密码不能为空!");
			$("#password").focus();
			return;
		}
		
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			'type' : 'POST',
			//如果默认密码强制跳转到密码修改页面，请调用【ws/loginToRedirectUri】服务（需要c2-sysmgr-api至1.0.7+或者升级系统管理到4.2.2+）
			'url' : 'ws/login',
			'data' :JSON.stringify({username : $("#username").val(),password : $("#password").val()}),
			'dataType' : 'json',
			'success' : function(data, type, request) {
				if (request.getResponseHeader('type') === 'error') {
					if(request.getResponseHeader('isShowMessage')==='true' ){
						var message = request.getResponseHeader('message')?decodeURI(request.getResponseHeader('message')):"登录异常，请联系管理员!";
						showMessage(message);
					}else{
						showMessage("登录异常，请联系管理员！");
					}
					$("#username").focus().select();
				} else {
					//后台重定向，调用ws/loginToRedirectUri服务时添加这段代码
// 					var redirectUri = data.redirectUri;
// 					if(null!=redirectUri){
// 						location.href = redirectUri;
// 						return;
// 					}
					var hrefStr=location.href;
					if(hrefStr.indexOf("backUrl")!=-1){
						//重定向到登陆页情况
						var backUrl=hrefStr.substr(hrefStr.indexOf("backUrl")+8,hrefStr.length);
						location.href = "./"+decodeURIComponent(backUrl);
					}else if(hrefStr.indexOf("login.jsp")!=-1||hrefStr.indexOf("login.html")!=-1){
						//打开login页登陆情况（如果项目登陆页为其它名字请重写此判断）
						location.href = "./";
					}else{
						//登陆页被嵌入情况
						window.location.reload();
					}
				}
			},
			'error' : function(xmlhttprequest, errorinfo) {
	            showMessage("登录异常，请联系管理员!");
			}
		});
	}
	
	//显示错误提示
	function showMessage(text){
		$("#errorMessage").removeClass("messenger-empty");
        $("#errorText").text(text);
        setTimeoutHideMessage();
	}
	
	//隐藏错误提示
	function hideMessage(){
		$("#errorMessage").addClass("messenger-empty");
		if(msgSetTimeoutObj) clearTimeout(msgSetTimeoutObj);
	}
	
	//延迟调用隐藏提示
	function setTimeoutHideMessage(){
		if(msgSetTimeoutObj) clearTimeout(msgSetTimeoutObj);
		msgSetTimeoutObj=setTimeout(hideMessage,5000);
	}
	
	</script>
</body>
</html>