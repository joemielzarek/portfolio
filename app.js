$( document ).ready(function() {
    console.log( "ready!" );

    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#myMenu',
      navigation: true,
      navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']
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
        canvas.height = window.innerHeight - 5;
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
