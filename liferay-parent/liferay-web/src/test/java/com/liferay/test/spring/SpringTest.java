package com.liferay.test.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.liferay.test.util.SpringTestUtil;

/**
 * spring 测试
 * 
 * @author ZhaoXQ 2015-04-09
 *
 */
public class SpringTest {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(SpringTestUtil.springConfigLocations());
		
	}

}
