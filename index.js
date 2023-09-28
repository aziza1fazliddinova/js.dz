let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = 0
let nums = 0
let others = 0
let filter = arr.filter(item=>typeof item==='string')
str=filter.length
let filter2 = arr.filter(item=>typeof item ==='number')
nums=filter2.length
let filter3= arr.filter(item=>typeof item !== 'string' && typeof item !== 'number')
others=filter3.length
console.log(nums,str ,others);
