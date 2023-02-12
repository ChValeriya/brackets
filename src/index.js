module.exports = function check(str, bracketsConfig) {
  let arr;
  if (!Array.isArray(str)) {
    arr = str.split('');
  } else {
    arr = str;
  }
  for (let i = 0; i < arr.length; i++) {
    bracketsConfig.forEach(element => {
      if (arr[i] === element[0] && arr [i+1] === element[1]) {
        arr.splice(i, 2);
        check(arr, bracketsConfig)
      }
    });
  }
  if (!arr[0]) {
    return true
  } else {
    return false
  }
}
