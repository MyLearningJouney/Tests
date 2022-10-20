var mySet = new Set();

mySet.add(5)
mySet.add(5)
console.log(mySet)
mySet.add('some text')
mySet.add('Some Text')
console.log(mySet)
mySet.delete('Some Text')
mySet.delete(5)
console.log(mySet)

console.log(mySet.has(5)+" "+mySet.has('some text'))
