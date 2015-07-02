/**
 * 用户管理
 * 
 * @author zxq
 * @data 2015-06-29
 */
Ext.require(['Ext.Viewport', 'Ext.data.Store', 'Ext.data.TreeStore',
		'Ext.tree.Panel', 'Ext.form.ComboBox']);
Ext.onReady(function() {
			// --------------------状态下拉框------------------------
			var stateStore = Ext.create('Ext.data.Store', {
						fields : ['value', 'name'],
						data : []
					});
			var stateComboBox = Ext.create('Ext.form.ComboBox', {
						fieldLabel : '状态',
						store : stateStore,
						queryMode : 'local',
						displayField : 'name',
						valueField : 'value',
						editable : false,
						width : 150,
						labelWidth : 30,
						emptyText : '全部'
					});

			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.TreeStore', {
						folderSort : true,
						fields : ['organization', 'userAccount', 'userName',
								'mobile', 'email', 'state', 'createTime',
								'loginTime', 'lastLoginTime', 'loginCount'],
						proxy : {
							type : 'ajax',
							url : '/json/user_tree_grid.json'
						}
					});

			var grid = Ext.create('Ext.tree.Panel', {
						useArrows : true,
						rootVisible : false,
						multiSelect : true,
						singleExpand : true,
						store : store,
						defaults : {
							autoScroll : true
						},
						columns : [{
									xtype : 'treecolumn',
									text : '组织名称',
									dataIndex : 'organization',
									width : 150,
									align : 'center'
								}, {
									text : '账户',
									dataIndex : 'userAccount',
									width : 150,
									align : 'center'
								}, {
									text : '姓名',
									dataIndex : 'userName',
									width : 150,
									align : 'center'
								}, {
									text : '手机号',
									dataIndex : 'mobile',
									width : 150,
									align : 'center'
								}, {
									text : '邮箱',
									dataIndex : 'email',
									width : 150,
									align : 'center'
								}, {
									text : '状态',
									dataIndex : 'state',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : 'createTime',
									width : 150,
									align : 'center'
								}, {
									text : '登陆时间',
									dataIndex : 'loginTime',
									width : 150,
									align : 'center'
								}, {
									text : '上次登陆时间',
									dataIndex : 'lastLoginTime',
									width : 150,
									align : 'center'
								}, {
									text : '登陆次数',
									dataIndex : 'loginCount',
									width : 150,
									align : 'center'
								}],
						tbar : [{
									xtype : 'button',
									text : '新增',
									iconCls : 'form_add'
								}, '-', {
									xtype : 'button',
									text : '编辑',
									iconCls : 'form_edit'
								}, '-', {
									xtype : 'button',
									text : '详情',
									iconCls : 'form_details'
								}, '-', {
									xtype : 'button',
									text : '用户角色',
									iconCls : 'form_details'
								}, '-', {
									xtype : 'button',
									text : '用户授权',
									iconCls : 'form_details'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '账户',
									labelWidth : 30
								}, '-', {
									xtype : 'textfield',
									fieldLabel : '姓名',
									labelWidth : 30
								}, '-', stateComboBox, {
									xtype : 'button',
									text : '查询',
									iconCls : 'form_query'
								}]
					});
			// --------------------布局界面------------------------
			var viewport = Ext.create('Ext.Viewport', {
						layout : "fit",
						items : grid
					});

		});