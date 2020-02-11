/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];
    nums.forEach( (item, index) => {
       for(let i = index + 1 ; i < nums.length; i++){
           if( nums[i] + item === target){
               indices.push(index);
               indices.push(i);
           }
       } 
    });
    return indices;
};

twoSum([2,7,11,15],9);