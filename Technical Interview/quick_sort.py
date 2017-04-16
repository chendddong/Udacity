"""Implement quick sort in Python.
Input a list.
Output a sorted list."""
def quicksort(array):
	if array == None or len(array) == 0:
		return
	sort(array, 0, len(array) - 1)
	return array

def sort(array, start, end):

	left = start
	right = end 
	pivot = array[start + (right - left) / 2]
	# print "pivot " + str(pivot) 
	# print array	
	# print ""

	while left <= right:
		while left <= right and array[left] < pivot:
			left += 1
		while left <= right and array[right] > pivot:
			right -= 1

		if left <= right:
			temp = array[right]
			array[right] = array[left]
			array[left] = temp
			left += 1
			right -= 1

	if start < right:
		sort(array, start, right)
	if left < end:
		sort(array, left, end)
		
# test case
test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
print quicksort(test)
