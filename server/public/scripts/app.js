$( document ).ready(function() {
    console.log( "ready!" );

    $('#fullpage').fullpage({
      anchors: ['Warning', 'Myth', 'The Beast', 'Experience', 'Contact'],
      menu: '#myMenu',
      navigation: true,
      navigationTooltips: ['Warning', 'Myth', 'The Beast', 'Experience', 'Contact'],
      responsiveWidth: 1100
    });

    alert("Thank you for paying a visit to the Mythical Development Beast. His site is currently under construction, but feel free to take a look around.");

    $('.beast').on({
  'mouseover' : function() {
    $(this).attr('src','https://s31.postimg.org/b8xrjq4kr/normaljoe.png');
    $('.myname').show();
    $('.mdb').hide();

  },
  mouseout : function() {
$(this).attr('src','https://s32.postimg.org/olagb7ns5/beastjoe2.png');
  $('.myname').hide();
  $('.mdb').show();

  }
});


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var circles = [];
    var mX = 0;
    var mY = 0;

    function init() {
    	resizeCanvas();
    	setInterval(drawShape,70);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth - 5;
        canvas.height = window.innerHeight -5;
    }

    function randomRange(min,max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor(){
    	colors = ["black","white"];
    	var indexC = randomRange(0,colors.length);
    	return colors[indexC];
    }

    function drawShape() {
    	resizeCanvas();
    	var circle = {
    		x : mX,
    		y : mY,
    		xSpeed : randomRange(-10,10),
    		ySpeed : randomRange(-10,10),
    		size:10,
    		color: randomColor()
    	}

    	circles.push(circle);

    	ctx.clearRect(0,0,canvas.width,canvas.height);
    	for(var i = 0; i< circles.length;i++) {
    		circle = circles[i];
    		ctx.beginPath();
    		ctx.fillStyle = circle.color;
    		ctx.arc(circle.x,circle.y,circle.size,0*Math.PI,Math.PI * 2);
    		//ctx.stroke();
    		ctx.fill();
    		ctx.closePath();

    		circle.y = circle.y + circle.ySpeed
    		circle.x = circle.x + circle.xSpeed;

    		if (circle.size < 700) {
    			circle.size = circle.size  * 1.2;
    		}
    	}
    }

    window.addEventListener("mousemove", function(event){
    	mX = event.clientX;
    	mY = event.clientY;
    })

    init();


    var static = $('.noiseBG');
    staticAnimate(static);

    function staticAnimate(object) {
        TweenMax.to(object, .03, {
            backgroundPosition: Math.floor(Math.random() * 100) + 1 + "% " + Math.floor(Math.random() * 10) + 1 + "%",
            onComplete: staticAnimate,
            onCompleteParams: [object],
            ease:SteppedEase.config(1)
        });
    }

});
