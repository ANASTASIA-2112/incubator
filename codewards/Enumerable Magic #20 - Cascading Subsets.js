function eachCons(array, n) {
  const r = [];
  for (let i = 0; i <= array.length - n; i++){
    const chai= [];
    for(let s = i; s < i + n; s++){
      chai.push(array[s])
    }
    r.push(chai)
  }
  return r;
}