//JS格式化数字（每三位加逗号）
function toThousands(num) { //不能超过16位
  var num = (num || 0).toString(),
    result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result;
}

export default num => {
  return toThousands(num)
}