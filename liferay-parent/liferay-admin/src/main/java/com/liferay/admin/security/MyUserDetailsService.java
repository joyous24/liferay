package com.liferay.admin.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MyUserDetailsService implements UserDetailsService {

	public UserDetails loadUserByUsername(String arg0)throws UsernameNotFoundException {
		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_USER");

		List<GrantedAuthority> authorityList = new ArrayList<GrantedAuthority>();
		authorityList.add(grantedAuthority);

		UserDetails user = new User("123", "123", authorityList);

		return user;
	}

}
