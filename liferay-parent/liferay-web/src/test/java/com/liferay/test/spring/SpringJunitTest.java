package com.liferay.test.spring;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.liferay.admin.service.OrganizationService;
import com.liferay.admin.service.OrganizationServiceImpl;
import com.liferay.admin.vo.OrganizationVO;
import com.liferay.test.util.SpringTestUtil;

public class SpringJunitTest {

	private OrganizationService userService;

	@Before
	public void before() {
		ApplicationContext context = new ClassPathXmlApplicationContext(SpringTestUtil.springConfigLocations());
		userService = (OrganizationServiceImpl) context.getBean("userServiceImpl");
	}

	@Test
	public void addUser() {
	}
}
