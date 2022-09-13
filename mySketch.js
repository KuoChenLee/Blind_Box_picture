var colors="d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7-d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(150);
	changeLightColor()
	changeLightColor1()
}


function draw() {
	
	translate(width/2,height/2);
	rectMode(CENTER);
	
	background(150)
	
	fill(100)
	//head
	rect(0,-140,120,100,20);

	//eyes
	// fill(0)
	// line(-50,-155,-10,-155)
	// line(50,-155,10,-155)
	
	
	// fill(255)
	// arc(-40+mouseX/70,-153,20,20,0,PI,OPEN)
	// arc(20+mouseX/70,-153,20,20,0,PI,OPEN)

	//眉毛

	// push()
	// 		fill(colors[16])
	// 	rotate(0.3+sin(frameCount/30)/10)
	// 	rect(-30,-180,40,8);
	// pop()
	// push()
	// 		fill(colors[17])
	// 	rotate(-0.25+sin(frameCount/50)/10)
	// 	rect(30,-180,40,8);
	// pop()
	//mouth
	// fill("#cad2c5")
	// rect(0,-110,60,20,10)
	// fill(0)
	// line(-15,-120,-15,-100)
	// line(0,-120,0,-100)
	// line(15,-120,15,-100)
	//ears	
	fill(100)
	// rect(-70,-180,10,50,5)
	// rect(70,-180,10,50,5)
	rect(-70,-140,15,50,5)
	rect(70,-140,15,50,5)
	
	//neck
	fill(100)
	rect(0,-85,15,10)
	fill(colors[6])
	rect(0,-75,15,10)
	//body
	//Clothes
	
// 	fill(lightColor)
// 	triangle(0,-5,-120,-130,-140,150)
// 	triangle(0,-5,120,-130,140,150)
// 	fill(lightColor1)
// 	triangle(0,-5,-100,-80,-120,100)
	
// 	triangle(0,-5,100,-80,120,100)
	
	fill(100)
	rect(0,-5,120,130,20)
	//shoulder
	
	fill(100)
	rect(-70,-50,20,10)
	rect(70,-50,20,10)
	fill(100)
	circle(-90,-50,25)
	circle(90,-50,25)
	fill(100)
	circle(-90,-50,10)
	circle(90,-50,10)
	fill(100)
	rect(-90,-30,10,20)
	rect(90,-30,10,20)
	fill(100)
	rect(-90,15,20,80,5)
	rect(90,15,20,80,5)
	fill(100)
	rect(-90,60,10,10)
	rect(90,60,10,10)
	fill(100)
	rect(-80,70,10,10)
	rect(-100,70,10,10)
	fill(100)
	rect(-80,80,10,20)
	rect(-100,80,10,20)
	fill(100)
	rect(80,70,10,10)
	rect(100,70,10,10)
	fill(100)
	rect(80,80,10,20)
	rect(100,80,10,20)
	//leg
	fill(100)
	rect(-25,70,10,20)
	rect(25,70,10,20)
	fill(100)
	rect(-25,150,30,140,5)
	rect(25,150,30,140,5)
	fill(100)
	rect(-25,225,20,10)
	rect(25,225,20,10)
	fill(100)
	rect(-25,245,40,30,5)
	rect(25,245,40,30,5)
	fill(lightColor)
	circle(0,245,40)
	square(0,190,30)
	square(0,140,30)
	square(0,90,30)
	square(40,50,30)
	square(90,10,30)
	square(130,-40,30)
	square(120,-100,30)
	square(90,-140,30)
	square(50,-180,30)
	square(0,-190,30)
	square(-50,-170,30)
	square(-90,-130,30)
	square(-110,-90,30)
	square(-130,-40,30)
	
	
	stroke(0)
	strokeWeight(5);
	
	
	if(frameCount%5==0){
		changeLightColor()
	}
	if(frameCount%25==0){
		changeLightColor1()
	}
	

}
function mousePressed(){
	changeLightColor()
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}
function changeLightColor1(){
	lightColor1=color(random([
		"#e2fdff",
		"#bfd7ff",
		"#9bb1ff",
		"#788bff",
		"#5465ff",
		"#3f37c9",
		"#3a0ca3"
	]))
}


