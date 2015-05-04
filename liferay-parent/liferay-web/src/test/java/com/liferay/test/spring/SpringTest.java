package com.liferay.test.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * spring 测试
 * 
 * @author ZhaoXQ 2015-04-09
 *
 */
public class SpringTest {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(new String[] { "META-INF/spring/applicationContext.xml" });
		//User user = context.getBean("user", User.class);
		//System.out.println(user.toString());
	}

}
