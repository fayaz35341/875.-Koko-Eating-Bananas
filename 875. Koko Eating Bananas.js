/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    const calculateTotalHours = (piles, speed) => {
        let totalH = 0;
        for (let bananas of piles) {
            totalH += Math.ceil(bananas / speed);
        }
        return totalH;
    };

    let low = 1;
    let high = Math.max(...piles);
    let ans = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalH = calculateTotalHours(piles, mid);

        if (totalH <= h) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};
