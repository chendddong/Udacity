import media
import fresh_tomatoes

# write your class file in one file
# call the class and use the method 
# in the other one
tlotr1 = media.Movie("1",
						"Set in Middle-earth, the story tells of the Dark Lord Sauron (Sala Baker), who is seeking the One Ring.",
						"https://upload.wikimedia.org/wikipedia/en/8/87/Ringstrilogyposter.jpg",
						"https://www.youtube.com/watch?v=V75dMMIW2B4")

# print(toy_story.storyline)

tlotr2 = media.Movie("2",
					 "Continuing the plot of The Fellowship of the Ring, the film intercuts three storylines.",
					 "https://upload.wikimedia.org/wikipedia/en/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg",
				     "https://www.youtube.com/watch?v=LbfMDwc4azU")

# print(avatar.storyline)
# avatar.show_trailer()

tlotr3 = media.Movie("3",
 					  "Joined by Legolas and Gimli, Aragorn travels to the Paths of the Dead, recruiting the Army of the Dead",
 					  "https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg",
 					  "https://www.youtube.com/watch?v=r5X-hFf6Bwo")

# inside_llewyn_davis_trailer.show_trailer()

th1 = media.Movie("4",
			     "An Unexpected Journey tells the tale of Bilbo Baggins (Martin Freeman), who is convinced",
			     "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg",
			     "https://www.youtube.com/watch?v=5xpcwquIpRQ")

th2 = media.Movie("5",
				  "The film follows the titular character Bilbo Baggins as he accompanies Thorin Oakenshield and his fellow dwarves",
				  "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg",
				  "https://www.youtube.com/watch?v=OPVWy1tFXuc")

th3 = media.Movie("6",
				"Sixty years later, on his 111th birthday, Bilbo receives a visit from Gandalf, initiating the events of The Fellowship of the Ring.",
				"https://upload.wikimedia.org/wikipedia/en/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg",
				"https://www.youtube.com/watch?v=iVAgTiBrrDA")

movies = [tlotr1, tlotr2, tlotr3, th1, th2, th3]
fresh_tomatoes.open_movies_page(movies)
