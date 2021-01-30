const Mock = require('mockjs')

// module.exports = () => {
// 	let data = Mock.mock({
// 		"users|50":[
// 			{
// 				'id|+1':1000, 
// 				username:'@cname(1,6)',
// 				imgs: Mock.Random.image('200X100'),
// 				"boolean|1-2":true,
// 				isActive:'@boolean(1,9)',
// 				color:'@color()',
// 				// paragraph:'@paragraph'
// 				sentence:'@csentence()',
// 				title:'@ctitle(3,5)',
// 				url:'@url()'
// 			}
// 		],
// 		"goods|20":[
// 			{
// 				'id|+1':1000, 
// 				username:'@cname(1,6)',
// 				imgs: Mock.Random.image('200X100'),
// 				"boolean|1-2":true,
// 				isActive:'@boolean(1,9)',
// 				color:'@color()',
// 				paragraph:'@cparagraph',
// 				sentence:'@csentence()',
// 				title:function(){
// 					let title =''
// 					for(let i =0;i<3;i++){
// 						title += Mock.Random.ctitle(3,5)+'------'
// 					}
// 					return title
// 				},
// 				url:'@url()'
// 			}
// 		]
// 	})
// 	return data
// }

module.exports =  Mock.mock({
		"users|50":[
			{
				'id|+1':1000, 
				username:'@cname(1,6)',
				imgs: Mock.Random.image('200X100'),
				"boolean|1-2":true,
				isActive:'@boolean(1,9)',
				color:'@color()',
				// paragraph:'@paragraph'
				sentence:'@csentence()',
				title:'@ctitle(3,5)',
				url:'@url()'
			}
		],
		"goods|20":[
			{
				'id|+1':1000, 
				username:'@cname(1,6)',
				imgs: Mock.Random.image('200X100'),
				"boolean|1-2":true,
				isActive:'@boolean(1,9)',
				color:'@color()',
				paragraph:'@cparagraph',
				sentence:'@csentence()',
				title:function(){
					let title =''
					for(let i =0;i<3;i++){
						title += Mock.Random.ctitle(3,5)+'------'
					}
					return title
				},
				url:'@url()'
			}
		]
	})