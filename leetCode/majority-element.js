/**
 * @param {number[]} nums
 * @return {number}
 */

/*
 Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

    */
var majorityElement = function(nums) {
    const maj = nums.length/ 2;
    const count = {};
    if(nums.length > 1) {

        for(let i=0; i<nums.length; i++) {
            const val = nums[i];
            if(count[val]) {
                count[val]++;
                if(count[val] > maj) {
                    return val;
                }
            
            } else {
                count[val] = 1;
            }
        }
    } else {
        return nums[0];
    }

};
