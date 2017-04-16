In Python, the map concept appears as a built-in data type called a dictionary. A dictionary contains key-value pairs. 
Dictionaries might soon become your favorite data structure in Python—they're extremely easy to use and useful. 
Here's a sample of setting up a dictionary

kobe = {}
kobe['u'] = 1
kobe['d'] = 2
kobe['a'] = 3
kobe['c'] = 4
kobe['i'] = 5
kobe['t'] = 6
kobe['y'] = 7

print kobe
{'u': 1, 'd': 2, 'a': 3, 'c': 4, 'i': 5, 't': 6, 'y': 7}
In this case, the letters in "kobe" were each keys in our dictionary, and the position 
of that letter in the string was the value. Thus, I can do the following:

print udacity['t']
6
This statement is saying "go to the key labeled 't' and find it's value, 6".

Dictionaries are wonderfully flexible—you can store a wide variety of structures as values. 
You store another dictionary or a list:

dictionary = {}
dictionary['d'] = [1]
dictionary['i'] = [2]
dictionary['c'] = [3]
dictionary['t'] = [4]
dictionary['i'].append(5)
dictionary['o'] = [6]
dictionary['n'] = [7]
dictionary['a'] = [8]
dictionary['r'] = [9]
dictionary['y'] = [10]
print udacity
 {'d': [1], 'i': [2, 5], 'c': [3], 't': [4], 'o': [6], 'n': [7], 'a': [8], 'r': [9], 'y':[10]}
