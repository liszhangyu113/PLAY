<template>
	<view class="body">
		<view class="content"><!-- 上面 -->
			<view class="disk"><!-- 左边 -->
				<image src="../../static/bot-poper.jpg"></image><!-- 头像 -->
				<view class="disk-right"><!-- 信息 -->
					<text style="line-height:32rpx;height:32rpx;font-size:26rpx; margin-bottom:5rpx; color:#2b2b2b;">
					{{currName}}</text><!-- 题目 -->
					<view class="disk-botton"><!-- 时间 -->
						<text>{{currentTime | secondTime}}</text>/<text>{{duration |secondTime}}</text>
					</view>
				</view>
			</view>
			<view class="control"><!-- 右边 -->
				<view><!-- 按钮 -->
					<image :class="{'play1':isplay,'list-img1':!isplay}" @click="Mplay()" ></image>
				</view>
				<image class="imgtwo" src="../../static/X.jpg"></image><!-- X -->
			</view>
		</view>
		<view class="play-progress" :style="{'width':percent*100+'%'}"><!-- 进度条 -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				time:'',
			}
		},
		props:["currName","currentTime","duration","isplay","percent"],
		filters:{
			secondTime(time){
				var minute = parseInt(time/60);
				minute = minute<10?'0'+minute:minute;
				var second = parseInt(time%60);
				second = second<10?'0'+second:second;
				return minute+':'+second;
			}
		},
		methods:{
			Mplay(){
				console.log(123)
				console.log(this.isplay)
				// if(!this.isplay){
				// 	this.isplay = true;
				// 	// this.music.play();
				// }else{
				// 	this.isplay = false;
				// 	// this.music.pause();
				// }
				let flag = false
				if(!this.isplay){
					flag = true
				}
				this.$emit("isPlay",flag)
			},
		}
	}
</script>

<style>
	.body{
		display:flex;
		position: relative;
		width: 726rpx;
		height:128rpx;
		justify-content: center;
	}
	.content{
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
			position: absolute;
			top: 125rpx;
			left: 0;
			width: 100%;
			height: 3rpx;
			border-bottom: solid 5px red;
		}
</style>
