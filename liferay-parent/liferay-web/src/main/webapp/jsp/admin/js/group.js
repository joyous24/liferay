/**
 * 组管理
 * 
 * @author zxq
 * @data 2015-07-01
 */
Ext.require(['Ext.Viewport', 'Ext.data.Store', 'Ext.grid.Panel',
		'Ext.ux.ProgressBarPager', 'Ext.form.ComboBox']);
Ext.onReady(function() {
			// --------------------机构部门树------------------------
			var organizationStore = Ext.create('Ext.data.TreeStore', {
						proxy : {
							type : 'ajax',
							url : '/json/user_tree_grid.json'
						}
					});

			var organizationTree = Ext.create('Ext.tree.Panel', {
						useArrows : true,
						colspan : 2,
						store : organizationStore,
						rootVisible : false,
						border : false,
						title : '机构部门',
						iconCls : 'sys_organization',
						tbar : [{
									xtype : 'button',
									text : '保存分组',
									iconCls : 'form_save'
								}]
					});

			organizationTree.on('itemclick', function(me, record, item, index,
							e, eOpts) {
					});

			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.Store', {
						fields : ['', '', ''],
						proxy : {
							type : 'memory',
							reader : {
								type : 'json',
								root : 'items'
							}
						}
					});

			var grid = Ext.create('Ext.grid.Panel', {
						store : store,
						defaults : {
							autoScroll : true
						},
						selModel : Ext.create('Ext.selection.CheckboxModel', {
									mode : "SIMPLE"
								}),
						columns : [{
									xtype : "rownumberer"
								}, {
									text : '组名称',
									dataIndex : '',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : '',
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
									text : '删除',
									iconCls : 'form_delete'
								}, '-', {
									xtype : 'button',
									text : '组角色',
									iconCls : 'form_details'
								}, '-', {
									xtype : 'button',
									text : '组授权',
									iconCls : 'form_details'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '组名称',
									labelWidth : 60
								}, '-', {
									xtype : 'button',
									text : '查询',
									iconCls : 'form_query'
								}],
						bbar : {
							xtype : 'pagingtoolbar',
							pageSize : 10,
							store : store,
							displayInfo : true,
							plugins : new Ext.ux.ProgressBarPager()
						}
					});

			// --------------------布局界面------------------------
			var viewport = Ext.create('Ext.Viewport', {
						layout : "border",
						defaults : {
							border : false,
							layout : 'fit'
						},
						items : [{
									region : 'center',
									items : grid
								}, {
									region : 'east',
									width : 200,
									items : organizationTree
								}]
					});

		});