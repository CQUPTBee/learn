function tocss(){
	var css=document.querySelector('#css');
	var html=document.querySelector('html');
	var htmlRect=html.getBoundingClientRect();
	var style="";
	var z = (Math.tan(30*Math.PI/180)*(htmlRect.width/8)).toFixed(4);
	style+= ".bg{background-size:"+htmlRect.width+"px "+htmlRect.height+"px !important;}";
	style += ".content li{-webkit-transform: translateZ(-"+z+"px) rotateY(0deg);transform: translateZ(-"+z+"px) rotateY(0deg);}";
	for(var i = 0; i < 3; i++){
		style += ".content div:nth-of-type("+(i+1)+"){-webkit-transform:rotateY("+(i*120)+"deg) translateZ("+z+"px);transform: rotateY("+(i*120)+"deg) translateZ("+z+"px);}";
	}
	css.innerHTML += style;

}
window.onload=function(){
	tocss();
	var css=document.querySelector('#css');
	var html=document.querySelector('html');
	var htmlRect=html.getBoundingClientRect();
	var z = (Math.tan(30*Math.PI/180)*(htmlRect.width/8)).toFixed(4);
	var span=document.querySelectorAll('.content span');
	var deg=120;
	for(var i=0;i<span.length;i++){
		var spanRect=span[i].getBoundingClientRect();
		span[i].style.backgroundPosition = "-"+spanRect.left+"px -"+spanRect.top+"px";
	}
	var li=document.querySelectorAll('.content li');
	for(var i=0;i<li.length;i++){
		csstransform(li[i],'translateZ',-z);
		csstransform(li[i],'rotateY',0);
	}
	var startDeg=0;
	var startPoint=0;
	var content=document.querySelector('.content');
	content.addEventListener(
		'touchstart',
		function(e){
			for(var i = 0; i<li.length;i++){
				li[i].style.transition = "none";
			}
			startPoint=e.changedTouches[0].pageX;
			startDeg=csstransform(li[0],'rotateY');
		}
	)
	content.addEventListener(
		'touchmove',
		function(e){
			var dis=e.changedTouches[0].pageX-startPoint;
			console.log(dis)
			var disDeg=dis/htmlRect.width*deg;
			for(var i = 0; i<li.length;i++){
				csstransform(li[i],"rotateY",startDeg + disDeg);
			}
		}
	)
	content.addEventListener(
		'touchend',
		function(e){
			var nowDeg=csstransform(li[0],'rotateY');
			var now = (-Math.round(nowDeg/deg));
			for(var i = 0; i<li.length;i++){
				li[i].style.transition = '.5s';
				csstransform(li[i],"rotateY",-now*deg);
			}
		}
	)
}