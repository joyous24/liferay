/**
 * 角色管理
 * 
 * @author zxq
 * @data 2015-07-01
 */
Ext.require(['Ext.Viewport', 'Ext.data.Store', 'Ext.grid.Panel',
		'Ext.ux.ProgressBarPager', 'Ext.form.ComboBox']);
Ext.onReady(function() {
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
									text : '角色代码',
									dataIndex : '',
									width : 150,
									align : 'center'
								}, {
									text : '角色名称',
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
									text : '授权',
									iconCls : 'form_delete'
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '角色名称',
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
						layout : "fit",
						defaults : {
							border : false
						},
						items : grid
					});

		});