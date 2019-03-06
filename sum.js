function add(x, y) {
  
  if(((typeof x) === 'number') && ((typeof y) === 'number')) {
    return x + y;
  } else {

    return NaN;
  }
  
  // 程序出bug的原因是测试用例不足，需要有特殊测试用例和一般测试用例
  //return Number(x) - Number(y);// 测试用例不足时减号bug就会找不到
  //return Number(x) + Number(y);
}

module.exports = add;
