import math
class Solution:
    def findtotalH(self, piles,mid):
        totalH=0
        for i in piles:
            totalH+=math.ceil(i/mid)
        return totalH

    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l=1
        H=max(piles)
        ans=H
        while(H>=l):
            mid=(l+H)//2
            totalH=self.findtotalH(piles,mid)
            if totalH<=h:
                ans=mid
                H=mid-1
            else:
                l=mid+1
        return ans 
    
