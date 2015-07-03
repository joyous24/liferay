package com.liferay.admin.dao;

import java.util.List;

import com.liferay.admin.vo.OrganizationVO;

public interface OrganizationDao {
	public List<OrganizationVO> getOrganizationList(OrganizationVO organization);
}
