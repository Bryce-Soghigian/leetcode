class Solution:
    def hammingDistance(self, x, y):
        xor = x ^ y
        return bin(xor).count('1')
