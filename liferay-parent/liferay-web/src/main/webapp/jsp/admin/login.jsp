<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<%@ include file="/jsp/common/init_bootstrap.jsp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>欢迎您登陆系统</title>
<link rel="stylesheet" href="<%=basePath%>css/login.css"/>
</head>
<body>
	<div class="login">
	<h2>权限管理系统登陆</h2>
	<div class="login-top">
		<h1><span class="glyphicon glyphicon-user"></span> 管理员</h1>
		<form method="post" action="<c:url value="/login"/>">
			<input type="text" id="username" name="username"  placeholder="账户" required autofocus/>
			<input type="password" id="password" name="password"  placeholder="密码" required/>
			<div class="forgot">
		    	<a href="#">忘记密码了</a>
		    	<input type="submit" value="登陆" >
		    </div>
	    </form>
	</div>
	<div class="login-bottom">
		<h3>新用户 &nbsp;<a href="#">注册</a>&nbsp 点击这里</h3>
	</div>
</div>	
<div class="copyright">
	
</div>
	
    
</body>
</html>