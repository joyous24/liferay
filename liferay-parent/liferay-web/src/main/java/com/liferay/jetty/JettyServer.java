package com.liferay.jetty;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * jetty服务配置
 * 
 * @author ZhaoXQ 2015-04-08
 *
 */
public class JettyServer {
	private String webapp = "src/main/webapp";
	private String host = "localhost";
	private int port = 8088;
	private int timeout = 30000;
	private String contextPath = "/";

	public JettyServer() {

	}

	/**
	 * 构造初始值
	 * 
	 * @param webapp  webapp资源目录
	 * @param host    请求地址
	 * @param port    端口
	 * @param timeout 超时
	 */
	public JettyServer(String webapp, String host, int port, int timeout,
			String contextPath) {
		this.webapp = webapp;
		this.host = host;
		this.port = port;
		this.timeout = timeout;
	}

	/**
	 * 创建构造函数初始值jetty服务 
	 * @return server
	 */
	public Server createServer() {
		Server server = new Server();
		ServerConnector http = new ServerConnector(server);
		http.setHost(host);
		http.setPort(port);
		http.setIdleTimeout(timeout);
		WebAppContext context = new WebAppContext();
		context.setContextPath(contextPath);
		context.setWar(webapp);
		context.setDescriptor(webapp + "/WEB-INF/web.xml");
		context.setResourceBase(webapp);
		server.setHandler(context);
		server.addConnector(http);
		return server;
	}
}
