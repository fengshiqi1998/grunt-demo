function rectangle() {
  return {
    'perimeter': function(width, height) {// 周长
      return 2*(Number(width) + Number(height));
    },
    'area': function(width, height) {
      return Number(width)*Number(height);
    }
  };
}
