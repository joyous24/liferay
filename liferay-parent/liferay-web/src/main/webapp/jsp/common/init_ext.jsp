<%
	/* 
		Extjs 初始化配置
		作者 ：zxq
		日期 ：2015-06-24
		使用：<%@ include file="/jsp/common/init_ext.jsp" %/>  末尾处去掉 “/” 
	*/
%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 自定义 -->
<link  rel="stylesheet"  href="<%=basePath%>css/icon.css"/>

<!-- Extjs -->
<link  rel="stylesheet"  href="<%=basePath%>js/ext4.2/resources/css/ext-all-neptune.css"/>
<script type="text/javascript" src="<%=basePath%>js/ext4.2/bootstrap.js"></script>
<script type="text/javascript" src="<%=basePath%>js/ext4.2/locale/ext-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=basePath%>js/ext4.2/ux/ProgressBarPager.js"></script>

<!-- jquery -->
<script type="text/javascript" src="<%=basePath%>js/jquery1.11.3.min.js"></script>

</html>