//初始化echarts实例
var ec_center = echarts.init(document.getElementById("c2"),"dark");
var mydata = []
var ec_center_option = {
		title: {
			text: '',
			subtext: '',
			x: 'left'
		},
		tooltip: {
			trigger: 'item'
		},
		//左侧小导航图标
		visualMap: {
			show: true,
			x: 'left',
			y: 'bottom',
			textStyle: {
				fontSize: 8
			},
			splitList: [{
					start: 1,
					end: 9
				},
				{
					start: 10,
					end: 99
				},
				{
					start: 100,
					end: 999
				},
				{
					start: 1000,
					end: 9999
				},
				{
					start: 10000
				}
			],
			color: ['#8A3310','#C64918', '#E55B25','#F2AD92', '#F9DCD1']
		},

			//配置属性
			series: [{
				name: '累积地震次数',
				type: 'map',
				mapType: 'china',
				roam: true, //是否允许拖动和缩放
				itemStyle: {
					normal: {
						borderWidth: .5,
						borderColor: '#009fe8',
						areaColor: '#ffefd5'
					},
					emphasis: {
						borderWidth: .5, //区域边框宽度
						borderColor: '#4b0082', //区域边框颜色
						areaColor: '#fff' //区域颜色
					}
				},
				label: {
					normal: { //鼠标滑过地图高亮的相关设置
						show: true, //省份名称
						fontSize: 10
					},
					emphasis: {
						show: true,
						fontSize: 10
					}
				},
				data: mydata //数据
			}]
		};

		//使用制定的配置项和数据显示图表
		ec_center.setOption(ec_center_option);
