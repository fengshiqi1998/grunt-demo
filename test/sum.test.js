var add = require('../sum.js');
var expect = require('chai').expect;

describe('加法测试', function() {
  // 程序出bug的原因是测试用例不足，需要有特殊测试用例和一般测试用例。
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });
  it('1 + 0 = 1', function() {
    expect(add(1,0)).to.be.equal(1);
  });
  it('"1" + "0" = "1"', function() {
    expect(add('1', '0')).to.be.equal(1);
  });
  it('20 + 5 = 25', function() {
    expect(add(20, 5)).to.be.equal(25);
  });
});
