
jetty-lib 目录：存放jetty web容器测试环境下依赖包，使用下面方法测试web需要导入jsp目录内依赖包。

public class JettyTestServer {
	public static void main(String[] args) throws Exception {
		String webapp = "src/main/webapp";
		String host = "localhost";
		int port = 8088;
		int timeout = 30000;
		
        Server server = new Server();
        ServerConnector http = new ServerConnector(server);
        http.setHost(host);
        http.setPort(port);
        http.setIdleTimeout(timeout);
        WebAppContext  context = new WebAppContext();
        context.setContextPath( "/" );
        context.setWar("src/main/webapp");
        context.setDescriptor(webapp + "/WEB-INF/web.xml");
        context.setResourceBase(webapp);
        server.setHandler(context);
        server.addConnector(http);
        server.start();
        server.join();
	}
}