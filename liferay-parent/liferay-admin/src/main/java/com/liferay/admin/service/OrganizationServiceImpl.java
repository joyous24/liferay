package com.liferay.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.admin.dao.OrganizationDao;
import com.liferay.admin.vo.OrganizationVO;

@Service("organizationService")
public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	private OrganizationDao organizationDao;

	public List<OrganizationVO> getOrganizationList(OrganizationVO organization) {
		return organizationDao.getOrganizationList(organization);
	}


}
