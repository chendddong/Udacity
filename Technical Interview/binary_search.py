"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and 
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

# first binary search in python
def binary_search(input_array, value):
	start = 0
	end = len(input_array) - 1
	# print(len(input_array))
	while start + 1 < end:
		mid = start + (end - start) / 2
		if input_array[mid] == value:
			return mid
		elif input_array[mid] < value:
			start = mid
		else:
			end = mid

	if input_array[start] == value:
		return start

	if input_array[end] == value:
		return end

	return -1

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
print binary_search(test_list, test_val1)
print binary_search(test_list, test_val2)