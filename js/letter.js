
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;Fan", 
				"<p class=liuhao>F^200an<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一，对你不够重视，没有考虑到你的感受。过生日那次是，这次情人节也是，我能感受到看到别人都有花而自己却没有的感受。现在想想，我真的很迷，我也不知道自己究竟在干什么，总是让你受委屈。</p><p class=liuhao>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二^300，说过的话没做到，这个我没有什么好说的，没做到就是没做到，我也没资格给你啥承诺，也没有资格让你再相信我一次，两次都没做到的人不配。</p><p class=liuhao>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后^300，我给你买了一束花，没有别的意思，只是想弥补一下我的错。这束花和这封信仅仅表示我的歉意和悔意。</p><br><p style='float:right; display:block; width:80px;'>^1000H^200ao</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
