/**
 * 权限管理页面布局
 * 
 * @author zxq
 * @data 2015-06-26
 */
Ext.require(['*']);
Ext.onReady(function() {
	Ext.QuickTips.init();
	// --------------------中间面板 Tab 选项卡------------------------
	var tabPanel = new Ext.tab.Panel({
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

	// --------------------常用工具------------------------
	var commonStore = Ext.create('Ext.data.TreeStore', {
				root : {
					expanded : true,
					children : [{
								text : "修改密码",
								id : 'key',
								leaf : true,
								iconCls : 'key'
							}, {
								text : "帮助",
								id : 'help',
								leaf : true,
								iconCls : 'help'
							}, {
								text : "退出系统",
								id : 'exit',
								leaf : true,
								iconCls : 'exit'
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
				if (record.get('leaf')) {
					var id = record.get('id');
					if (id == 'key') { // 修改密码
						addTab('user', '用户管理', 'user.jsp');
					} else if (id == 'help') {// 帮助

					} else if (id == 'exit') {// 帮助

					}// end if
				}// end if

			});

	// --------------------布局界面------------------------
	var viewport = new Ext.Viewport({
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
				title : '用户管理'
					// items : tree
				}, {
				title : '常用工具',
				items : commonTree
			}]
		}, {
			// 中间面板
			region : 'center',
			items : tabPanel
		}, Ext.create('Ext.Component', {
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
	function addTab(id, title, url) {
		var iframe = Ext.create('Ext.ux.IFrame', {
					src : url
				});
		if (tabPanel.child('#' + id) == null) {
			tabPanel.add([{
						title : title,
						closable : true,
						autoScroll : true,
						items : iframe,
						itemId : id
					}]);
		}// end if
		var tab = tabPanel.child('#' + id);
		tab.tab.show();
		tabPanel.setActiveTab(tab);
	}

});