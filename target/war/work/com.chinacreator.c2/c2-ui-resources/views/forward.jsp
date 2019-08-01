<%@page import="java.net.URLEncoder"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Date"%>
<%
Object titleObj=request.getAttribute("title");
if(null!=titleObj){
	response.addHeader("Form-Title",URLEncoder.encode(String.valueOf(titleObj), "UTF-8"));
}
%>
<div  ng-include="'<%=request.getAttribute("url")+"?_="+new Date().getTime()%>'" ng-init='$params=<%=request.getAttribute("paramsJson")%>' id="<%=request.getAttribute("title")%>">