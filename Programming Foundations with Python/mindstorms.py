import turtle
import math

def draw_square():
	window = turtle.Screen()
	window.bgcolor("black")
	# create an instance of turtle called brad
	brad = turtle.Turtle()
	brad.shape("circle")
	brad.color("pink")
	brad.speed(2)

	for i in range(0, 4):
		brad.forward(200)
		brad.right(90)
		
	
def draw_circle():
	window = turtle.Screen()
	window.bgcolor("black")
	angie = turtle.Turtle()
	angie.shape("arrow")
	angie.color("red")
	angie.circle(100)

def draw_triangle():
	window = turtle.Screen()
	window.bgcolor("black")
	peter = turtle.Turtle()
	peter.shape("classic")
	peter.color("green")
	peter.left(180)
	for i in range(0, 3):
		peter.forward(250)
		peter.left(120)
	window.exitonclick()

def draw():
	draw_square()
	draw_circle()
	draw_triangle()	

def draw_circle_out_of_squares():
	window = turtle.Screen()
	window.bgcolor("black")
	# create an instance of turtle called brad
	brad = turtle.Turtle()
	brad.shape("circle")
	brad.color("pink")
	brad.speed(40)

	for i in range(60):
		draw_one_squre(brad)


def draw_one_squre(name):
	for i in range(0, 4):
		name.forward(200)
		name.right(90)
	name.left(360 / 60);

def draw_one_parallelogram(name):
	for i in range(0, 4):
		name.forward(100)
		name.right(20)
		name.forward(100)
		name.right(160)
		name.forward(100)
		name.right(20)
		name.forward(100)



def draw_a_flower():
	window = turtle.Screen()
	window.bgcolor("black")
	# create an instance of turtle called brad
	brad = turtle.Turtle()
	brad.shape("circle")
	brad.color("red")
	brad.speed(100)
	for i in range(360 / 8):
		draw_one_parallelogram(brad)
		brad.right(8)
	brad.color("green")
	brad.shape("turtle")

	brad.right(90)
	brad.forward(400)
	window.exitonclick()

def draw_initial():
	window = turtle.Screen()
	window.bgcolor("black")
	# create an instance of turtle called brad
	brad = turtle.Turtle()
	brad.shape("turtle")
	brad.color("pink")
	draw_letter_C(brad)
	draw_letter_C(brad)

	window.exitonclick()


def draw_letter_C(brad):
	brad.right(90)
	brad.forward(50)
	brad.backward(100)
	brad.forward(50)
	brad.left(45)
	m = math
	brad.forward(50 * m.sqrt(2))
	brad.backward(50 * m.sqrt(2))
	brad.left(90)
	brad.forward(50 * m.sqrt(2))
	brad.right(45)
	brad.color("black")
	brad.forward(40)
	brad.right(90)
	brad.forward(50)
	brad.left(90)
	brad.color("pink")

