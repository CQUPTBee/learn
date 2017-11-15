window.onload=function(){
	var oLeft=document.getElementById('left');
	var oRight=document.getElementById('right');
	var oMark_left=document.getElementsByClassName('mark_left')[0];
	var oMark_right=document.getElementsByClassName('mark_right')[0];
	oMark_left.onmouseover=oLeft.onmouseover=function(){
		startmove(oMark_left,{'opacity':100})
	}
	oMark_left.onmouseout=oLeft.onmouseout=function(){
		startmove(oMark_left,{'opacity':0});
	}
	oMark_right.onmouseover=oRight.onmouseover=function(){
		startmove(oMark_right,{'opacity':100});
	}
	oMark_right.onmouseout=oRight.onmouseout=function(){
		startmove(oMark_right,{'opacity':0});
	}
	var oUl=document.getElementsByClassName('frame')[0];
	var oLi=oUl.getElementsByTagName('li');
	var oSmall=document.getElementsByClassName('small_pic')[0];
	var oUl2=oSmall.getElementsByTagName('ul')[0];
	var oLi2=oUl2.getElementsByTagName('li');
	oUl2.style.width=oLi2.length*oLi2[0].offsetWidth+'px';
	var omindex=10;
	var iNow=0;
	for(var i=0;i<oLi2.length;i++){
		oLi2[i].index=i;
		oLi2[i].onmouseover=function(){
			startmove(this,{'opacity':100});
		}
		oLi2[i].onmouseout=function(){
			if(this.index!=iNow){
				startmove(this,{'opacity':60});
			}
		}
		oLi2[i].onclick=function(){
			if(this.index==iNow) return;
			iNow=this.index;
			tab();
		}
	}
	function tab(){
		for(var i=0;i<oLi2.length;i++){
			startmove(oLi2[i],{'opacity':60});
		}
		startmove(oLi2[iNow],{'opacity':100});
		oLi[iNow].style.zIndex=omindex++;
		oLi[iNow].style.height=0;
		startmove(oLi[iNow],{'height':300});
		if(iNow==0){
			startmove(oUl2,{'left':0});
		}
		else if(iNow==oLi2.length-1){
			startmove(oUl2,{'left':-(iNow-2)*oLi2[0].offsetWidth})
		}
		else{
			startmove(oUl2,{'left':-(iNow-1)*oLi2[0].offsetWidth})
		}
	}
	oMark_left.onclick=function(){
		iNow--;
		if(iNow==-1){
			iNow=oLi.length-1;
		}
		tab();
	}
	oMark_right.onclick=function(){
		iNow++;
		if(iNow==oLi.length){
			iNow=0;
		}
		tab();
	}
	a();
}