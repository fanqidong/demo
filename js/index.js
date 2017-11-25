/*
	JS:JavaScript,是一门基于web浏览器的脚本
	语言，无法独立运行(NodeJS除外)；同时js也是
	一门弱类型以及基于事件驱动的程序设计语言
	JS的核心组成部分
	ECMAScript 基础语法
	BOM模型 Browse Object Model
	DOM模型 Document Object Model
*/
//标志位，标记歌曲是否在播放
var isplay = true;
//获取页面中播放音频资源的播放器对象
var player = document.getElementById('player');
//根据元素的id属性获取元素对象,并且绑定一个点击事件
document.getElementById('musicBox').addEventListener('click', function() {
	//判断当前歌曲是否正在播放(执行开关操作)
	if(isplay) {
		isplay = false; //标记停止播放
		player.pause(); //暂停
		this.title = "点击播放";
		this.className = 'music-box'; //改变元素的class
	} else {
		isplay = true; //标记开始播放
		player.play(); //开始
		this.title = "点击静音";
		this.className = 'music-box play';
	}
});

//获取到图片墙中的所有图片对象
var imgs = document.querySelectorAll('.photo-box>img');
//遍历所有的图片并绑定点击事件
for(var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener('click', function() {
		bigImg(this.src);
	});
}
//在模态窗口中显示被点击图片的原图
function bigImg(imgpath){
	//获取浏览器文档元素可视区域的高度
	var h = document.documentElement.clientHeight;
	//获取浏览器可视区域距离body顶端位置（兼容性处理）
	var tp = document.body.scrollTop || document.documentElement.scrollTop;
	//1.生成一个模态窗口覆盖整个body
	var dialog = document.createElement('div');
	//设置窗体的高度
	dialog.style.height=h+'px';
	//为窗体设置class属性
	dialog.className='modal';
	//设置窗体显示位置
	dialog.style.top=tp+'px';
	//将窗体加入到body中
	document.body.appendChild(dialog);
	//禁用body的滚动条
	document.body.style.overflow='hidden';
	
	//2.根据图片路径创建一个Image图片并加入模态窗口
	//创建图片对象
	var img = document.createElement('img');
	//设置图片的路径
	img.src=imgpath;
	img.className='img-item';
	//获取原图的高宽
	var imgW = img.width;
	var imgH = img.height;
	img.style.marginTop=-(imgH/2)+'px';
	img.style.marginLeft=-(imgW/2)+'px';
	//将图片加入到窗体中
	dialog.appendChild(img);
	
	//为dialog设置点击事件
	dialog.addEventListener('click',function(){
		//将body中的遮罩层移除
		document.body.removeChild(dialog);
	});
	//为图片设置点击事件
	img.addEventListener('click',function(e){
		//阻止事件冒泡
		if(e && e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;//兼容IE
		}
	})
}

window.addEventListener('resize',function(){
	var height=document.documentElement.clientHeight;
console.info('窗体高度:'+height);
    var dialog=document. querySelector('.modal');
    dialog.Style.height+'px';
})