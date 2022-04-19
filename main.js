canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 5
car_y = 225

function add() {
	background_imgtag = new Image();
	background_imgtag.onload = uploadBackground();
	background_imgtag.src = background_image;

	greencar_imdtag = new Image();
	greencar_imdtag.onload = uploadgreencar();
	greencar_image.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar(){
	ctx.drawImage(greencar_imdtag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >= 0){
		car_y -= 10;
		console.log("when up arrow is pressed, x = "+ car_x +"/ y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(car_y <= 500){
		car_y += 10;
		console.log("when down arrow is pressed, x = "+ car_x +"/ y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x >= 0){
		car_x -= 10;
		console.log("when left arrow is pressed, x = "+ car_x +"/ y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_y <= 1000){
		car_y += 10;
		console.log("when right arrow is pressed, x = "+ car_x +"/ y = "+car_y);
		uploadBackground();
		uploadgreencar();
	}
}