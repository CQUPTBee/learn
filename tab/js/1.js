window.onload=function()
{
	var oDiv=document.getElementById('div1');
	var oBtns=oDiv.getElementsByTagName('button');
	var oTable=document.getElementById('itable');
	var arr=["一","二","三","四","五"]
	for(var i=0;i<oBtns.length;i++)
	{
		oBtns[i].index=i;
		oBtns[i].onclick=function()
		{
			for(var i=0;i<oBtns.length;i++)
			{
				oBtns[i].className="";
			}
			oBtns[this.index].className = "active";
			table(this.index);
		}
	}
	table(0);
	function table(index)
	{
		oTable.innerHTML="";
		for(var i=0;i<arr.length;i++)
		{
			var oTr=document.createElement('tr');
			for(var j=0;j<5;j++)
			{
				var oTd=document.createElement('td');
				oTd.innerHTML='Tab'+arr[index];
				oTr.appendChild(oTd);
			}
			oTable.appendChild(oTr);
		}
	}
	var disx=0;
	var disy=0;
	var timer=null;
	var lastx=0;
	var lasty=0;
	var ispeedx=0;
	var ispeedy=0;
	oDiv.onmousedown=function(ev)
	{
		var aevent=ev||event;
		disx=aevent.clientX-oDiv.offsetLeft;
		disy=aevent.clientY-oDiv.offsetTop;
		document.onmousemove=function(ev)
		{
			var aevent=ev||event;
			var l=aevent.clientX-disx;
			var t=aevent.clientY-disy;
			oDiv.style.left = l+'px';
			oDiv.style.top = t+'px';
			ispeedx=l-lastx;
			ispeedy=t-lasty;
			lastx=l;
			lasty=t;
		}
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			startmove();
		}
	}

	function startmove()
	{
		clearInterval(timer);
		timer=setInterval(function(){
			var oDiv=document.getElementById('div1');
			ispeedy+=3;
			var l=oDiv.offsetLeft+ispeedx;
			var t=oDiv.offsetTop+ispeedy;
			if(t>=document.documentElement.clientHeight-oDiv.offsetHeight)
			{
				ispeedy*=-0.8;
				ispeedx*=0.8;
				t=document.documentElement.clientHeight-oDiv.offsetHeight;
			}
			else if(t<=0)
			{
				ispeedy*=-0.8;
				ispeedx*=-0.8;
				t=0;
			}
			if(l>=document.documentElement.clientWidth-oDiv.offsetWidth)
			{
				ispeedx*=-0.8;
				l=document.documentElement.clientWidth-oDiv.offsetWidth;
			}
			else if (l<=0) {
				ispeedx*=-0.8;
				l=0;
			}
			if(Math.abs(ispeedx)<1)
			{
				ispeedx=0;
			}
			if(Math.abs(ispeedy)<1)
			{
				ispeedy=0;
			}
			if(ispeedy==0&&ispeedx==0&&t==document.documentElement.clientHeight-oDiv.offsetHeight)
			{
				clearInterval(timer);
			}
			else {
				oDiv.style.left=l+'px';
				oDiv.style.top=t+'px';
			}

		},30 )
	}

}