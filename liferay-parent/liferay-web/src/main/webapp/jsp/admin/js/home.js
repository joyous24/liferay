/**
 * 权限管理页面布局
 * 
 * @author zxq
 * @data 2015-06-26
 */
Ext.require(['Ext.tab.Panel', 'Ext.data.TreeStore', 'Ext.tree.Panel',
		'Ext.Viewport', 'Ext.Component']);
Ext.onReady(function() {
	Ext.QuickTips.init();
	// --------------------中间面板 Tab 选项卡------------------------
	var tabPanel = Ext.create('Ext.tab.Panel', {
				deferredRender : false,
				activeTab : 0,
				plugins : new Ext.create('Ext.ux.TabCloseMenu', {
							closeTabText : '关闭面板',
							closeOthersTabsText : '关闭其他',
							closeAllTabsText : '关闭所有'
						}),
				items : [{
							title : '首页',
							closable : true,
							autoScroll : true
						}]
			});

	// --------------------辅助工具------------------------
	var commonStore = Ext.create('Ext.data.TreeStore', {
				root : {
					expanded : true,
					children : [{
								text : "修改密码",
								id : 'key',
								leaf : true,
								iconCls : 'sys_key'
							}, {
								text : "帮助",
								id : 'help',
								leaf : true,
								iconCls : 'sys_help'
							}, {
								text : "退出系统",
								id : 'exit',
								leaf : true,
								iconCls : 'sys_exit'
							}]
				}
			});

	var commonTree = Ext.create('Ext.tree.Panel', {
				useArrows : true,
				colspan : 2,
				store : commonStore,
				rootVisible : false,
				border : false
			});

	commonTree.on('itemclick', function(me, record, item, index, e, eOpts) {
				treeItemClick(record);
			});

	// --------------------系统管理------------------------
	var sysStore = Ext.create('Ext.data.TreeStore', {
				root : {
					expanded : true,
					children : [{
								text : "用户管理",
								id : 'user',
								leaf : true,
								iconCls : 'sys_user'
							}, {
								text : "组织机构",
								id : 'organization',
								leaf : true,
								iconCls : 'sys_organization'
							}, {
								text : "组管理",
								id : 'group',
								leaf : true,
								iconCls : 'sys_group'
							}, {
								text : "角色管理",
								id : 'roles',
								leaf : true,
								iconCls : 'sys_roles'
							}, {
								text : "权限管理",
								id : 'authorities',
								leaf : true,
								iconCls : 'sys_authorities'
							}, {
								text : "菜单导航",
								id : 'menu',
								leaf : true,
								iconCls : 'sys_menu'
							}, {
								text : "数据字典",
								id : 'dictionary',
								leaf : true,
								iconCls : 'sys_dictionary'
							}, {
								text : "系统日志",
								id : 'log',
								leaf : true,
								iconCls : 'sys_log'
							}]
				}
			});

	var sysTree = Ext.create('Ext.tree.Panel', {
				useArrows : true,
				colspan : 2,
				store : sysStore,
				rootVisible : false,
				border : false
			});

	sysTree.on('itemclick', function(me, record, item, index, e, eOpts) {
				treeItemClick(record);

			});

	// --------------------布局界面------------------------
	var viewport = Ext.create('Ext.Viewport', {
		layout : "border",
		items : [Ext.create('Ext.Component', {
			// 顶部面板
			region : 'north',
			height : 50,
			margins : '10 5 -15 5',
			autoEl : {
				tag : 'div',
				html : '<span style="display:inline;font-size:25px;color:white;font-weight:bold"">权限管理系统</span>'
			}
		}), {
			// 左侧面板
			region : 'west',
			title : '系统菜单',
			split : true,
			width : 200,
			minWidth : 175,
			maxWidth : 400,
			collapsible : true,
			animCollapse : true,
			margins : '0 0 0 5',
			layout : 'accordion',
			items : [{
						title : '系统管理',
						iconCls : 'sys_set',
						items : sysTree
					}, {
						title : '辅助工具',
						iconCls : 'sys_common',
						items : commonTree
					}]
		}, {
			// 中间面板
			region : 'center',
			layout : 'fit',
			border : false,
			items : tabPanel
		}, Ext.create('Ext.Component', {
			// 底部面板
			region : 'south',
			height : 32,
			margins : '5 5 -10 5',
			autoEl : {
				tag : 'div',
				html : '<span style="display:inline;">欢迎，admin</span>'
						+ '<span style="display:inline; float:right;">版权所有 © "Joyous"</span>'
			}
		})]
	});

	// --------------------Function------------------------
	/**
	 * 添加tab
	 */
	function addTab(id, title, url, iconCls) {
		if (tabPanel.child('#' + id) == null) {
			tabPanel.add([{
				title : title,
				closable : true,
				autoScroll : true,
				itemId : id,
				iconCls : iconCls,
				html : '<iframe src="'
						+ url
						+ '" width="100%" height="100%" frameborder="0"></iframe>'
			}]);
		}// end if
		var tab = tabPanel.child('#' + id);
		tab.tab.show();
		tabPanel.setActiveTab(tab);
	}

	/**
	 * 树菜单点击跳转页面
	 * 
	 * @description treeItemClick(record);
	 */
	function treeItemClick(record) {
		if (record.get('leaf')) {
			var id = record.get('id');
			addTab(id, record.get('text'), id + ".jsp", record.get('iconCls'));
		}
	}

});