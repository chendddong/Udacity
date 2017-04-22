def merge_sort(nums, start, end, temp):
	nums2 = [0] * (end + 1)
	if start == end:
		temp[start] = nums[start]
	else:
		mid = start + (end - start) / 2
		merge_sort(nums, start, mid, nums2)
		merge_sort(nums, mid + 1, end, nums2)
		merge(nums2, start, mid, end, temp)

	print(temp)
	print("")


def merge(nums, start, mid, end, temp):
	i = start
	j = mid + 1
	k = start

	while i <= mid and j <= end:
		if nums[i] < nums[j]:
			temp[k] = nums[i]
			k += 1
			i += 1
		else:
			temp[k] = nums[j]
			k += 1
			j += 1
			
	while i <= mid:
		temp[k] = nums[i]
		k += 1
		i += 1		

	while j <= end:
		temp[k] = nums[j]
		k += 1
		j += 1



# test for the method
# yep

nums1 = [51, 38, 49, 27, 62, 5, 16, -14, 55]
temp = [0] * (len(nums1))
merge_sort(nums1, 0, len(nums1) - 1, temp)

print(temp)
