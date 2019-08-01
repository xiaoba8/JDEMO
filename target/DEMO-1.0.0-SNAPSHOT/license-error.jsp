<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<%
String failMsg = request.getParameter("licFailMsg");  
%> 
<meta charset="utf-8" />
<title>License authorization fail Page</title>
<meta name="description" content="License authorization fail Page" />
<link rel="stylesheet" href="assets/css/c2-all.css" />
</head>

<body>
	<div class="main-container" id="main-container">
		<script type="text/javascript">
			try {
				ace.settings.check('main-container', 'fixed')
			} catch (e) {
			}
		</script>

		<div class="page-content">
			<div class="row">
				<div class="col-xs-12">
					<!-- PAGE CONTENT BEGINS -->

					<div class="error-container">
						<div class="well">
							<h1 class="grey lighter smaller">
								<span class="red bigger-125"> <i
									class="ace-icon fa fa-exclamation-triangle"></i> License验证失败
								</span>
							</h1>

							<hr />
							<h3 class="blue lighter smaller">
								验证失败...<%=failMsg%><br> 请联系管理员!
							</h3>

							<hr />
							<div class="space"></div>
						</div>
					</div>
					<!-- PAGE CONTENT ENDS -->
				</div>
				<!-- /.col -->
			</div>
			<!-- /.row -->
		</div>
		<!-- /.page-content -->
	</div>
	<!-- /.main-container -->
</body>
</html>
