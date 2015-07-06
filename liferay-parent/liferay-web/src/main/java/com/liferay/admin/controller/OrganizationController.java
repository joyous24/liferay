package com.liferay.admin.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.liferay.admin.service.OrganizationService;
import com.liferay.admin.vo.OrganizationVO;

/**
 * 组织机构管理控制层
 * 
 * @author ZhaoXQ 2015-07-03
 */
@Controller
@RequestMapping("/organization")
public class OrganizationController {

	@Autowired
	private OrganizationService organizationService;

	/**
	 * 组织管理树
	 * 
	 * @param organization
	 * @param model
	 */
	@RequestMapping(value = "/organizationTreeList", method = RequestMethod.POST)
	@ResponseBody
	public Map organizationTreeList(OrganizationVO organization, ModelMap model) {
		List<OrganizationVO> organizations = organizationService.getOrganizationList(organization);
		
		//Iterator<OrganizationVO> it = organizations.iterator();
		Map<String,Object> rootObj = new HashMap<String,Object>();
		rootObj.put("text", ".");
		List<Object> rootArray = new ArrayList<Object>();
		List<Object> nodeArray = null;
		
		int orgnSize = organizations.size();
		for (int i = 0; i < orgnSize; i++) {
			OrganizationVO orgn = organizations.get(i);
			Map nodeObj = new HashMap();
			nodeObj.put("organizationName", orgn.getOrganizationName());
			nodeObj.put("crateDate", orgn.getCreateTime());
			nodeObj.put("description", orgn.getDescription());
			
			int upIndex = i-1;
			int downIndex = i+1;
			if(downIndex >= orgnSize){
				downIndex = orgnSize-1;
			}
			if(upIndex < 0){
				upIndex = 0;
			}
			
			int currentDepth = orgn.getDepth();//当前数据Depth
			int upDepth = organizations.get(upIndex).getDepth();//上条数据Depth
			int downDepth = organizations.get(downIndex).getDepth(); //下条数据Depth
			
			if(currentDepth < downDepth){
				nodeArray = new ArrayList();
				nodeObj.put("children", nodeArray); 
			}else if(currentDepth == upDepth && nodeArray != null){
				nodeArray.add(nodeObj);
			}else if(currentDepth > downDepth){
				nodeObj.put("leaf", true);
			}
			
			rootArray.add(nodeObj);
		}
		
		
		
		/*while (it.hasNext()) {
			OrganizationVO orn = (OrganizationVO) it.next();
			Map nodeObj = new HashMap();
			nodeObj.put("organizationName", orn.getOrganizationName());
			nodeObj.put("crateDate", orn.getCreateTime());
			nodeObj.put("description", orn.getDescription());
			
			if(orn.getDepth() > depth){
				nodeArray = new ArrayList();
				//nodeObj.put("expanded", true);//展开
				nodeObj.put("children", nodeArray); 
			}
				
			if(orn.getDepth() == depth){
				nodeArray.add(nodeObj);
			}
			
			if(orn.getDepth() < depth){
				nodeObj.put("leaf", true);
				
			}
			
			rootArray.add(nodeObj);
			depth = orn.getDepth();
		}*/
		rootObj.put("children", rootArray);
		//model.addAttribute("root", rootObj);
		return rootObj;
	}

}
