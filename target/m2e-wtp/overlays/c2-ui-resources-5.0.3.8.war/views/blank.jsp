<!DOCTYPE html>
<%@page import="java.util.Date"%>
<html id="ng-app" ng-app="app">
<head>
<title><%=request.getAttribute("title")%></title>
<%
	String path = request.getContextPath();  
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>
<base href="<%=basePath%>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="utf-8" />

<meta name="description" content="overview &amp; stats" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

<link c2-css-injector-point="low" />

<!--[if !IE]> -->
<link rel="stylesheet" href="assets/css/c2-all.css" />
<!-- <![endif]-->

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lte IE 9]>
	<link rel="stylesheet" href="assets/compatible/dup/bootstrap.min.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/font-awesome/font-awesome.min.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/jquery-ui.min.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/ace.min.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/pace.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/messenger.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/messenger-theme-flat.css"/>
	<link rel="stylesheet" href="assets/compatible/dup/site.css"/>
    <link rel="stylesheet" href="assets/compatible/ace-part2.min.css"/>
    <link rel="stylesheet" href="assets/compatible/ace-ie.min.css"/>
<![endif]-->

<link c2-css-injector-point="default" />

<!--[if lte IE 9]>
    <script src="assets/compatible/html5shiv.js"></script>
    <script src="assets/compatible/respond.min.js"></script>
<![endif]-->

<link rel="stylesheet" href="css/custom.css" />
</head>

<body ng-controller="BlankPageController" class="no-skin">
	<div id="directives"></div>
	<div class="page-content clearfix">
		<div id="view">
			<div ng-include="'<%=request.getAttribute("url")+"?_="+new Date().getTime()%>'"></div>
		</div>
	</div>
	<!-- jquery v1.11.1 -->
	<script src="assets/jquery.min.js"></script>
	<!-- 标准js库 -->
	<script src="assets/js/c2-all.js"></script>
	<!-- 组件指令集合 -->
	<script src="ui/dir/directives.js"></script>
	<!-- 国际化配置 -->
	<script src="i18n/zh-cn.js"></script>

	<script type="text/javascript">
		app.controller('BlankPageController',['$scope','$http',
			function($scope,$http) {
			
			}
		]);
	</script>
</body>
</html>
