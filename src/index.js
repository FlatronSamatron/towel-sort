
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == null){return []}
  else if(matrix.length === 0){return []}
  else{
    let mat = matrix.map((el,i)=>{
      return i%2!=0 ? el.reverse() : el
    })
    let sum = matrix.reduce((a,b)=>{
      return a+','+b
    });
    let arr = sum.split(',')
    return arr.map(el=>+el)
  }
}
