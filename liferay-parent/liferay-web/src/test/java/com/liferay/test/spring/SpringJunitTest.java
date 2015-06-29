package com.liferay.test.spring;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.liferay.admin.service.UserService;
import com.liferay.admin.service.UserServiceImpl;
import com.liferay.admin.vo.User;
import com.liferay.test.util.SpringTestUtil;

public class SpringJunitTest {

	private UserService userService;

	@Before
	public void before() {
		ApplicationContext context = new ClassPathXmlApplicationContext(SpringTestUtil.springConfigLocations());
		userService = (UserServiceImpl) context.getBean("userServiceImpl");
	}

	@Test
	public void addUser() {
		User user = new User();
		user.setId(3);
		user.setName("王五");
		userService.addUser(user);
	}
}
