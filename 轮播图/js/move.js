function getstyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function startmove(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var bstop = true;
		for(var attr in json) {
			if(attr == 'opacity') {
				var icur = parseInt(parseFloat(getstyle(obj, attr)) * 100);
			} else {
				var icur = parseInt(getstyle(obj, attr));
			}
			var ispeed = (json[attr] - icur) / 8;
			ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
			if(icur != json[attr]) {
				bstop = false;
			}
			if(attr == 'opacity') {
				obj.style.opacity = (icur + ispeed) / 100;
			} else {
				obj.style[attr] = icur + ispeed + 'px';
			}

		}
		if(bstop) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}
		}

	}, 30)
}