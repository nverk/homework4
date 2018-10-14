
// 2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4)
  
 const triangleStars = function (num) {
    let i =0
    let space = String.fromCharCode(160)
    while (i<num){
      var row = '';
      let k= 0;
      while (k <= i-1){
        row = space + row
      k++;
      }
      i++;
      let j=0;
      while(j<num-i){ 
        row =row + '* ';
        j++;
      }
      console.log(row);
    }
     return ""
  };
console.log (triangleStars(7))

//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
//Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]); will return [1, 2, 3, 4, 5, 6]
const multiToSingle = function (x){
    l = x[0].length + x[1].length
    lx= x[0].length
    i = 0
    let z = []
    while (i<lx){
      z[i]=x[0][i];
      z[i+l/2]=x[1][i];
      i++
    }
    return z
  }
console.log (multiToSingle([[1,2,3],[4,5,6]]))

//4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.

   function findMinMax (x,y){
      var len = x.length
      if ( y === true ){
        return Math.max(...x)
      }else{
        return Math.min(...x)
      }
    }
    console.log(findMinMax([4,2,66,-44,8],true))

  // 5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

  const forEach = function (x,yy){
    let i =0
    let len = x.length
    while (i<len){
    yy(x[i])
        i++
    }
  }
  forEach([4, 3, 5, 2], function(val) {

  console.log(val);

})

// 6. Create a function 'sum' that takes an array of numbers and returns their sum.

 const sum = function (x){
    let len = x.length
    let i=0
    let y=0
    while (i<len){
      y= y + x[i]
      i++
    }
    return y 
  }
console.log (sum([1,3,2]))

// 7. Write a function 'reverse' that reverses the given string.  
// Example:  reverse('abcd') should return 'dcba

 const reverse = function (str){
    len = str.length
    i =len-1;
    let std = ''
    while (i >=0){
      std = std + str[i]      
      i--
    }
    return std 
  }
console.log (reverse('abcd'))


  // 8.Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)
const checkerboard = function (num) {
    let i = 0
    let j = 0
    let arr = ""
    while (j<num-1){
      while (i <num) {
         arr = arr + "*"
         i = i + 1
      }
      console.log(arr)
      j= j+1
      console.log('\n')
    }  
    return arr
  };
console.log (checkerboard(5))
    
