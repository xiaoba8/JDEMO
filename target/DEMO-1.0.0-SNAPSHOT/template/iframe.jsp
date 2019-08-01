<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<% 
	String title = request.getParameter("title");
	if(null!=title && !title.trim().equals("")){
		response.setHeader("form-title", java.net.URLEncoder.encode(title));
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
	<script type="text/javascript">
		$(function(){
			var startKey = "#/template/iframe.jsp?src=";
			var endKey = "&title=";
			var href = window.location.href;
			if(null!=href){
				var index = href.indexOf(startKey);
				var end = href.indexOf(endKey);
				if(end<0){
					end = href.length;
				}
				if(index>0){
					var src = href.substring(index+startKey.length,end);
					if(src!=null){
						$("#c2MenuIframe").attr("src",unescape(src));
					}			
				}
			}
		});
	</script>
</head>
<body>
	<iframe id="c2MenuIframe" width="100%" height="600" frameborder="0"></iframe>
</body>
</html>
