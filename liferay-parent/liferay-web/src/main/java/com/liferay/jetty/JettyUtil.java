package com.liferay.jetty;

import org.eclipse.jetty.server.Server;

/**
 * jetty 工具类
 * @author ZhaoXQ
 *
 */
public class JettyUtil {
	/**
	 * 创建静态jetty服务
	 * @param webapp
	 * @param host
	 * @param port
	 * @param timeout
	 * @param contextPath
	 * @return server
	 */
	public static Server createServer(String webapp, String host, int port,int timeout, String contextPath) {
		return new JettyServer(webapp, host, port, timeout, contextPath).createServer();
	}

}
