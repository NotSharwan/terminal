/*Particle Interaction Animation*/
var canvas = document.getElementById("canvas");
var pen = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
console.log(canvas.width, canvas.height);
var dots = [];

var maxDist = mapThese(window.innerWidth, 350, 1400, 150, 190);
var colorCount = 0;

class dot{
	constructor()
	{
		this.x = Math.floor((Math.random())*window.innerWidth);
		this.y = Math.floor((Math.random())*window.innerHeight);
		this.xSpeed = (Math.random()*15 - 5);
		this.ySpeed = (Math.random()*15 - 5);
		this.colorR = Math.floor(Math*225);
		this.colorB = Math.floor(Math.random()*225);
		this.colorG = Math.floor(Math.random()*225);
	}
	
	shape()
	{	
		pen.arc(this.x, this.y, 3, 0, 2*Math.PI);
		pen.fillStyle = 'rgb(' + this.colorR + ',' + this.colorB + ',' + this.colorG + ')';
		pen.fill();	
	}
	
	update()
	{
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		
	}
	updateCol()
	{
		this.colorR = Math.random()*225;
		this.colorB = Math.random()*225;
		this.colorG = Math.random()*225;
	}
	check()
	{
		if(this.x <= 0 || this.x >= canvas.width)
			this.xSpeed = -this.xSpeed;
		else if(this.y >= canvas.height || this.y <= 0)
			this.ySpeed = -this.ySpeed;
	}
}


function mapThese(thisVal, thisMin, thisMax, thatMin, thatMax)
{
	return (((thisVal - thisMin)/((thisMax - thisMin))*(thatMax - thatMin)) + thatMin);
}


function interact()
{
	var count = 0;
	dots.sort((a, b) => a.x - b.x);
	for(var i = 0; i < dots.length; ++i){
        for(var j = i + 1;(j < dots.length && dots[j].x <= (dots[i].x + maxDist)); ++j){
            var distance = (dots[i].x-dots[j].x)*(dots[i].x-dots[j].x)+(dots[i].y-dots[j].y)*(dots[i].y-dots[j].y);
			count++;
            if(distance <= maxDist*maxDist){
                let wt = mapThese(distance, 0, maxDist*maxDist, 0.5, 0);
				pen.beginPath();
				pen.moveTo(dots[i].x, dots[i].y);
				pen.lineTo(dots[j].x, dots[j].y);
				pen.lineWidth = wt;
                pen.strokeStyle = 'rgb(' + 225 + ',' + 225 + ',' + 225 + ')';
				pen.stroke();
            }
        }
    }
}

function setup()
{
	var numberOfParticles = Math.floor(mapThese(window.innerWidth, 350, 1400, 20, 70));
	for(var i = 0; i < numberOfParticles; ++i)
		dots.push(new dot());
	console.log(numberOfParticles);
}

function draw()
{
	colorCount++;
	var count = 0;
	for(var i = 0; i < dots.length; ++i)
	{
		if(dots[i].x < 0 || dots[i].x > canvas.width || dots[i].y < 0 || dots[i].y > canvas.height)
			count++;
	}
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < dots.length; ++i)
	{
		pen.beginPath();
		pen.moveTo(dots[i].x, dots[i].y);
		dots[i].shape();
	}
	interact();
	for(var i = 0; i < dots.length; ++i)
	{
		dots[i].update();
		dots[i].check();
		if(colorCount %3 == 0)
			dots[i].updateCol();
	}
}
setup();
setInterval(draw, 45);