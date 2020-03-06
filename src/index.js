module.exports = function check(str, bracketsConfig) {
    
  let arr = str.split('');
  let newarr = [];

  bracketsConfig = bracketsConfig.flat();
  
  for(let i = 0; i <arr.length; i++) {
      for(let x = 0; x < bracketsConfig.length; x++) {
        if(arr[i] == bracketsConfig[x] && arr[i] == bracketsConfig[x+1]) {
          newarr.push('equal'+x);
          x++;
        } else {
          if (arr[i] == bracketsConfig[x]) {
              newarr.push(x + 1);
          }
        }
        
      }
  }
    
  for(let i = newarr.length - 1; i > -1; i--) {
      if((newarr[i] % 2 == 0 && (newarr[i] - newarr[i-1] == 1)) || (newarr[i] == newarr[i-1] && typeof newarr[i] == 'string')) {
       
        newarr.splice(i-1,2);                   
      }
  }
  return newarr == '';
  }