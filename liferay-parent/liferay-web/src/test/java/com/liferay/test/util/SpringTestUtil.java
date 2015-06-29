package com.liferay.test.util;


/**
 * spring 测试工具类
 * @author ZhaoXQ
 *
 */
public class SpringTestUtil {
	
	/**
	 * spring 配置文件
	 * @return
	 */
	public static String[] springConfigLocations(){
		return new String[]{ 
				"META-INF/spring/context-aspect.xml",
				"META-INF/spring/context-bean.xml",
				"META-INF/spring/context-datasource.xml",
				"META-INF/spring/context-transaction.xml",
				"META-INF/spring/context-mybatis.xml",
				"META-INF/spring/context-common.xml"
				};
	}
}
