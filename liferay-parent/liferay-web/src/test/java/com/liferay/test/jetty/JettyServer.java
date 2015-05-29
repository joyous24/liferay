package com.liferay.test.jetty;

import org.eclipse.jetty.server.Server;

import com.liferay.jetty.JettyUtil;



/**
 * 1.Jetty web 容器测试入口，依赖于工作空代码。</br> 
 * 2.pom.xml jetty:run 命令，依赖于本地仓库jar包需要install 命令打包存入本地仓库。
 * 
 * @author ZhaoXQ 2015-04-07
 */
public class JettyServer {
	public static void main(String[] args) throws Exception {
		String webapp = "src/main/webapp";
		String host = "localhost";
		int port = 8088;
		int timeout = 30000;
		String contextPath = "/";
        Server server = JettyUtil.createServer(webapp, host, port, timeout, contextPath);
        server.start();
        server.join();
	}
}
