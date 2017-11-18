		function csstransform(obj,attr,val){
			if(!obj.transform)
				obj.transform={};
			if(arguments.length>2){
				obj.transform[attr]=val;
				var sval="";
				for(var s in obj.transform){
				switch (s) {
					case "rotate":
					case "rotateX":
					case "rotateY":
					case "rotateZ":
					case "skewX":
					case "skewY":
						sval += s+'('+obj.transform[s]+'deg)';
						break;
					case "translateX":
					case "translateY":
					case "translateZ":
						sval += s+'('+obj.transform[s]+'px)';
						break;
					case 'scaleX':
					case 'scaleY':
					case 'scale':
						sval+=s+'('+obj.transform[s]+')';
					}
				}
				obj.style.WebkitTransform=obj.style.transform=sval;
			}else {
				val=obj.transform[attr];

				if(typeof val=='undefined'){
					if(attr=='scale'||attr=='scaleY'||attr=='scaleX'){
						val=1;
					}else{
						val=0;
					}
				}
				return val;
			}	
		}