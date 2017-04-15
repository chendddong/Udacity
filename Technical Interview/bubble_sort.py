def bubble_sort(nums):
	n = len(nums)
	# start from n - 1, to 0(<), increments
	for i in range(n - 1, 0, -1):
		for j in range(0, i, 1):
			if nums[j] > nums[j + 1]:
				temp = nums[j]
				nums[j] = nums[j + 1]
				nums[j + 1] = temp


nums = [3,5,6,1,90,3,2,1,5,6]
bubble_sort(nums)
print(nums)
