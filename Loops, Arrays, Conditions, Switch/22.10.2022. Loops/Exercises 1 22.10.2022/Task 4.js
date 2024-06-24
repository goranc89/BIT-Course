// 4. Write a program to compute the sum and product of an array of integers.

var array = [2, 3, 5, 7, 9, 11],
    x = 0,
    y = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    x += array[i];
    y *= array[i];
    }
console.log('Sum : '+x + ' Product :  ' +y); 