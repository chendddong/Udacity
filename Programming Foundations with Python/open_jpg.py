from PIL import Image

def show_img():
	img = Image.open('/Users/Peter/Desktop/bob.jpg')
	img.show()

show_img()