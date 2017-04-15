import urllib
def read_text():
	# read file
	quotes = open("/Users/Peter/Programming_Foundations_with_Python/movie_quotes.txt")
	contents_of_file = quotes.read()
	# print(contents_of_file)
	quotes.close()
	check_profanity(contents_of_file)

def check_profanity(text_to_check):
	# read from the web
	connection = urllib.urlopen("http://www.wdylike.appspot.com/?q=" + text_to_check)
	output = connection.read()
	# something in somethiing
	if "false" in output:
		print("#######################################")
		print("There are no curse words")
		print("#######################################")
	elif "true" in output:
		print("#######################################")
		print("Something was in there, double check it")
		print("#######################################")
	else:
		print("#######################################")
		print("Could not scan the document properly")
		print("#######################################")
	connection.close()

read_text()