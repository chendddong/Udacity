import turtle

def draw_square():
	window = turtle.Screen()
	window.bgcolor("black")

	brad = turtle.Turtle()
	brad.shape("circle")
	brad.color("pink")
	brad.speed(1)		
	brad.forward(200)
	brad.right(90)
	brad.forward(200)
	brad.right(90)	
	brad.forward(200)
	brad.right(90)
	brad.forward(200)
	brad.right(90)
	window.exitonclick()
	

draw_square()