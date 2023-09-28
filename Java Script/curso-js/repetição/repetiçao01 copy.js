var n1 = [ 5, 8, 2, 9, 3]

/*for(let pos in n1){
console.log(n1[pos])} */

n1.push(1)
n1.sort()
console.log(`valores ${n1.sort()}`)
console.log(n1)
console.log(`O vetor tem ${n1.length} posições`)
console.log(`O primeiro valor do vetor é ${n1[0]}`)
let pos = n1.indexOf(4)
console.log(`O valor 8 está na posição ${pos}`)
