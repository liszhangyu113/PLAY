import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		porps:{
			title:'探索认知',
			author:'西见',
			imgsrc:'../../../static/top-poper.jpg',
			playImg:'../../static/bot-poper.jpg',
			playLists:[{
				id:"001",
				name:"探索认知迭代1",
				title:"探索是为了使你为自己和别人找到内在吗？",
				num:546700,
				playUrl:"http://49.235.35.140:8080/mp3/noon.MP3",
			},{
				id:"002",
				name:"探索认知迭代2",
				title:"探索是为了使你为自己和别人找到内在吗？",
				num:546700,
				playUrl:"http://49.235.35.140:8080/mp3/memory.MP3",
			},{
				id:"003",
				name:"探索认知迭代3",
				title:"探索是为了使你为自己和别人找到内在吗？",
				num:546700,
				playUrl:"http://m10.music.126.net/20191107232712/efe166b03992f54e326b795ba0604790/yyaac/530c/0108/040b/dfcfea704b6bc43c188d3a19a0ba733b.m4a",
			},{	
			id:"004",
				name:"探索认知迭代4",
				title:"探索是为了使你为自己和别人找到内在吗？",
				num:546700,
				playUrl:"http://m10.music.126.net/20191107232539/c4c031b953727a7b4f62c4e29ba27bb2/yyaac/045d/545a/025d/377e9da088c05bd2215d5706ceb37615.m4a",
			// },{	
			// 	id:"005",
			// 	name:"探索认知迭代5",
			// 	title:"探索是为了使你为自己和别人找到内在吗？",
			// 	num:546700,
			// 	playUrl:"http://m10.music.126.net/20191107232539/c4c031b953727a7b4f62c4e29ba27bb2/yyaac/045d/545a/025d/377e9da088c05bd2215d5706ceb37615.m4a",
			},{
				id:"005",
				name:"探索认知迭代5",
				title:"探索是为了使你为自己和别人找到内在吗？",
				num:546700,
				playUrl:"http://m10.music.126.net/20191107231917/915419d974e3eca3435a93436d182ff7/yyaac/565d/035e/0f52/a7eaad0d8c446710d2dc88ab1fe80645.m4a",
			// },{	
			// 	id:"007",
			// 	name:"探索认知迭代7",
			// 	title:"探索是为了使你为自己和别人找到内在吗？",
			// 	num:5467,
			// 	playUrl:"http://m10.music.126.net/20191107231917/915419d974e3eca3435a93436d182ff7/yyaac/565d/035e/0f52/a7eaad0d8c446710d2dc88ab1fe80645.m4a",
			}],
		},
	}
})
export default store