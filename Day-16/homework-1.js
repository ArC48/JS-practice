// You have array `[2, 5, 9, 15, 0, 4]`.
// Using loop `for` and operator `if`, show in console, 
// elements which great than 3, but less than 10.

var my_array = [2, 5, 9, 15, 0, 4];

for(let i = 0; i < my_array.length; i++){
    if(my_array[i] > 3 && my_array[i] < 10){
        console.log(my_array[i])
    }
}