<template>
	<view>
		<view>
			<view>
				<view class="content-jj" >
					<view class="top-return">
					<image src="../../../static/top-image.jpg" @click="onreturn()"></image>
					</view>
					<image class="content-image" :src='"{{count.imgsrc}}"'></image>
					<text style="font-size: 24rpx; line-height: 25rpx;margin-bottom: 20rpx;color: #2b2b2b;font-weight: bold;">{{count.author}}</text>
					<text style="font-size: 30rpx; line-height: 30rpx;margin-bottom: 30rpx;color: #2b2b2b;font-weight: bold;">{{count.title}}</text>
					
				</view>
				<view class="content-list">
					<view class="update-list">
						<text style="color: #434343;">已更新&nbsp{{count.playLists.length}}讲课程</text>
						<navigator class="uplist">
							<text style="margin-right: 24rpx;font-weight: bold;color: #2b2b2b;">导师简介</text><image src="../../../static/teacher-1.jpg"></image>
						</navigator>
					</view>
					<view v-for="(item,index) in list" :key=index >
						<view class="list-connect">
							<view class="list-connect-top top1">
								<text style="font-size: 28rpx; font-weight: bold;color: #2b2b2b;">{{list[index].name}}</text>
								<image src="../../../static/list-1.jpg"></image>
								<text class="list-connect2 top1">
									<text style="position: absolute;top: 0;left: 0;font-size: 18rpx;color: #b9b9b9;">播放量</text>&nbsp;
									<text style="position: absolute;top: 3rpx;right: 0;font-size: 16rpx; color: #494949;">{{list[index].num}}</text></text>
							</view>
							<view class="list-connect-top">
								<text style="font-size: 24rpx;color: #2b2b2b;">{{list[index].title}}</text>
								
							</view>
							<view :class="{'list-img':true,play:item.id == active}" @click="playorpause(index,item.id)">
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="sc">
				<view class="sc-left">
					<image src="../../../static/star.jpg"></image>&nbsp;
					<text style="font-size: 16rpx;">66</text>
				</view>
				<view class="sc-left">
					<image src="../../../static/zan.jpg"></image>&nbsp;
					<text style="font-size: 16rpx;">348</text>
				</view>
			</view>
			<view class="audio-slider">
				<player v-bind:currName="currName" v-bind:currentTime="currentTime" v-bind:duration="duration" v-bind:isplay="isplay" v-bind:percent="percent" @isPlay='changeIsPlay'></player>
				
			</view>
		</view>
		<view>
		</view>
	</view>
</template>


<script>
import {mapState} from 'vuex'
import player from '../../../components/player/player.vue'
export default{
	components:{
		player
	},
	data(){
		return{
			music :'',
			percent:0,
			isplay:false,
			timer:'',
			currentIndex:-1,
			currName:'',
			currentTime:'',
			duration:'',
			pindex:0,
			active:''
		}
	},
	onBackPress(options){
		if(options.from ==="navigateBack"){
			return false;
		}
		this.onreturn();
		return true
	},
	onLoad() {
		this.music = uni.createInnerAudioContext();
		this.music.onEnded( ()=>{
			console.log(111)
			this.percent =0;
			this.isplay = false;
			
			this.timer = undefined;	
			
			this.pindex++;
			console.log(this.pindex)
			console.log(this.musicLi.length)
			setTimeout(()=>{
				if(this.pindex <= this.musicLi.length - 1){
					this.isplay = true;
				}else{
					this.isplay = false;
				}
				
			},10)
			if(this.pindex > this.musicLi.length - 1){
				console.log(222)
				this.music.pause();
				this.isplay = false;
				this.active = ''
				return
			}
			
			console.log(this.pindex)
			this.music.src=this.musicLi[this.pindex].playUrl;
			this.music.play();
			this.currName =  this.musicLi[this.pindex].name;
			this.active = this.musicLi[this.pindex].id
			// this.currentIndex = this.currentIndex+1;
			// this.playorpause(index);
		})
	},
	 
	methods:{
		//子组件改变isplay
		changeIsPlay(val){
			console.log(val)
			this.isplay = val
			if(this.isplay){
				this.active = this.musicLi[this.pindex].id
				this.music.play();
			}else{
				this.active = ''
				this.music.pause();
			}
		},
		onreturn(){
			uni.navigateBack({
			})
		},
		playorpause(index,id){
			if(id === this.active){
				this.active = ''
				this.isplay = false
				this.music.pause();
				return
			}
			this.active = id
			
		
				 let str = JSON.stringify(this.$store.state.porps.playLists)
				 let arr = JSON.parse(str)
				 this.musicLi = arr.splice(index)
				 this.music.src=this.musicLi[this.pindex].playUrl
						
				//this.music.src = this.$store.state.porps.playLists[index].playUrl;
				console.log(this.music.src);
				this.currentIndex =this.musicLi[this.pindex];
				this.isplay = true;
				this.currName =  this.musicLi[this.pindex].name;
				this.music.play();
				this.getProcess();
			
		},
		getProcess(){
			this.timer = setInterval(()=>{
				this.currentTime = parseFloat(this.music.currentTime);
				this.duration = parseFloat(this.music.duration);
				this.percent = parseFloat(this.music.currentTime/this.music.duration).toFixed(4)
			},600)
		}
			
	},
	computed:{
		...mapState({
			count:state => state.porps,
			list:state => state.porps.playLists,
		}),
	},
	// filters:{
	// 	secondTime(time){
	// 		var minute = parseInt(time/60);
	// 		minute = minute<10?'0'+minute:minute;
	// 		var second = parseInt(time%60);
	// 		second = second<10?'0'+second:second;
	// 		return minute+':'+second;
	// 	}
	// }
	
	
}
</script>

<style>
	.content-jj{
		display: flex;
		flex-direction:column ;
		width: 100%;
		height: 525rpx;
		align-items: center;
		background-color: #e8e0da;
	}
	.top-return{
		display: flex;
		align-items: center;
		width: 750rpx;
		height: 90rpx;	
	}
	.top-return>image{
		margin-left: 28rpx;
		width: 23rpx;
		height: 40rpx;
	}
	.content-image{
		margin: 0 auto 30rpx;
		width: 230rpx;
		height: 301rpx;
	}
	image,text{
		display: flex;
		justify-content: flex-start;
	}
	.audio-slider{
		position: fixed;
		bottom: 109rpx;
		left: 11rpx;
		background: #fff;
	}
	.content-list{
		display: flex;
		width: 750rpx;
		margin-bottom: 240rpx;
		flex-direction: column;
	}
	.active{
		display: none;
	}
	.update-list{
		display: flex;
		position: relative;
		width: 750rpx;
		height: 26rpx;
		padding: 30rpx 0;
		font-size: 26rpx;
		align-items: center;
		flex-direction: row;
		border-bottom: 1px solid #e9e9e9;
	}
	.update-list>text{
		margin-left: 28rpx;
	}
	.uplist{
		position: absolute;
		display: flex;
		flex-direction: row;
		right: 28rpx;
	}
	.uplist image{
		width: 12rpx;
		height: 21rpx;
		position: absolute;
		right: 0;top: 8rpx;
	}
	.list-connect{
		display: flex;position: relative;
		flex-direction: column;
		width: 750rpx;
		height: 77rpx;
		padding: 35rpx 0;
		border-bottom: 1px solid #e9e9e9;
	}
	.list-connect-top{
		display: flex;
		position: relative;
		flex-direction: row;
		height: 28rpx;
		font-size: 28rpx;
		margin-left: 28rpx;
		align-items: center;
	}
	.list-connect-top>image{
		margin-left: 15rpx;	
		width:12rpx ;
		height: 16rpx;
	}
	.list-connect2{
		position: absolute;
		right: 28rpx;top: 0;
		width: 125rpx;
		height: 18rpx;
	}
	.list-img{
		position: absolute;
		right: 28rpx;top: 77rpx;
		width:45rpx; 
		height: 45rpx;
		background: url(../../../static/stop.jpg) ;
		background-size:100% ;
	}
	.list-img1{
		width: 70rpx;
		height: 70rpx;
		background: url(../../../static/stop.jpg) ;
		background-size:100% ;
	}
	.play   {
		background: url(../../../static/play.jpg);
		background-size:100% ;
	}
	.play1  {
		width: 70rpx;
		height: 70rpx;
		background: url(../../../static/play.jpg);
		background-size:100% ;
	}
	.sc{
		display: flex;
		position: fixed; left: 0; bottom: 0; width: 730rpx;
		height: 90rpx;
		padding: 0 10rpx;
		flex-direction: row;color: #9e9e9e;
		background: #FFFFFF;
		border-top: 1px solid #e9e9ee9;
	}
	.sc-left{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.sc-left>image{
		width: 35rpx;
		height: 35rpx;
		margin-left:193rpx;
	}
	.top1{
		margin-bottom: 25rpx;
	}
	
	
	
	
/* 	.content{
		display:flex;
		align-items: center;
		width: 726rpx;
		height:125rpx;
		flex-direction: row;
	}
	.disk{
		display: flex;
		flex-direction: row;
		margin:15rpx 0 15rpx 42rpx ;
		width: 511rpx;
		height: 92rpx;
	}
	.disk>image{
		width: 92rpx;
		height: 92rpx;
		margin-right: 21rpx;
	}
	.disk-right{
		display: flex;
		flex-direction:column;
		width: 398rpx;
		height: 72rpx;
		margin: 10rpx 0;
		color: #6f6f6f;
	}
	.disk-botton{
		display: flex;
		flex-direction: row;
		line-height:35rpx;
		font-size:21rpx; 
	}
	.control{
		display: flex;
		flex-direction: row;
		width: 133rpx;
		height: 70rpx;
		margin: 29rpx 40rpx 26rpx 0;
	}
	.imgone{
		width: 70rpx;
		height: 70rpx;
	}
	.imgtwo{
		width: 23rpx; height: 23rpx;margin:24rpx 0 0 40rpx; 
	}
	.play-progress{
		width: 100%;
		height: 3rpx;
		border-bottom: solid 5px red;
	} */
</style>
