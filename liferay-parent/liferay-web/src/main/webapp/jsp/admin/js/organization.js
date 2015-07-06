/**
 * 组织机构管理
 * 
 * @author zxq
 * @data 2015-06-30
 */
Ext.require(['Ext.Viewport', 'Ext.data.TreeStore', 'Ext.tree.Panel',
		'Ext.ux.ProgressBarPager', 'Ext.form.ComboBox']);
Ext.onReady(function() {
			// --------------------表格展示列表------------------------
			var store = Ext.create('Ext.data.TreeStore', {
						folderSort : true,
						fields : ['organizationName', 'crateDate',
								'description'],
						proxy : {
							type : 'ajax',
							url : '/admin/organization/organizationTreeList.json',
							reader : {
								type : 'json'
							},
							actionMethods : {
								read : 'POST'
							}
							
						}
					});

			var grid = Ext.create('Ext.tree.Panel', {
						//useArrows : true,
						rootVisible : false,
						//multiSelect : true,
						//singleExpand : true,
						store : store,
						defaults : {
							autoScroll : true
						},
						/*selModel : Ext.create('Ext.selection.CheckboxModel', {
									mode : "SIMPLE"
								}),*/
						columns : [/*{
									xtype : "rownumberer"
								}, */{
									xtype : 'treecolumn',
									text : '组织名称',
									dataIndex : 'organizationName',
									width : 150,
									align : 'center'
								}, {
									text : '创建时间',
									dataIndex : 'crateDate',
									width : 150,
									align : 'center'
								}, {
									text : '描述',
									dataIndex : 'description',
									width : 200,
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
								}, '->', {
									xtype : 'textfield',
									fieldLabel : '组织名称',
									labelWidth : 60
								}, '-', {
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