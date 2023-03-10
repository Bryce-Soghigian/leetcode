# class Solution:
#     def minSubArrayLen(self, target: int, nums: List[int]) -> int:
#         if nums == None or len(nums) == 0:
#             return 0
#         if nums[0] >= target:
#             return 1
        
#         start = 0
#         end = 0 
#         window_sum = 0
#         minimum = 10 ** 10000
        
#         while start < len(nums):
#             if window_sum < target:
#                 window_sum += nums[start]
#                 start += 1
#             while window_sum >= target:
#                 if start - end < minimum:
#                     minimum = start - end
#                 window_sum -= nums[end]
#                 end += 1
                
#         if minimum == 10 ** 10000:
#             return 0
#         else:
#             return minimum

class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        le = 0
        ret = float('inf')
        for ri, v in enumerate(nums):
            s -= v
            while s <= 0:
                ret = min(ret, ri - le + 1)
                s += nums[le]
                le += 1
        return 0 if ret == float('inf') else ret