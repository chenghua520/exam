
	var vid=document.getElementById('vid');
	var but=document.getElementsByTagName('input');
	var spans=document.getElementsByTagName('span')[0];
	but[0].onclick=function() {
		if (vid.paused) {
			vid.play();
		}else{
			vid.pause();
		}
	};
	but[1].onclick=function() {
		vid.currentTime+=5;
	};
	vid.ontimeupdate=function() {
		spans.innerHTML=vid.currentTime;
	};
