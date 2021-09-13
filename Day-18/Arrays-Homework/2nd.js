let arr = ['A','Q','E','B'];
// arr = [3, 2, 1];

const reverse = (array) => {
try{
    if (!Array.isArray(array)){
        throw new TypeError('Parameter must be an array!')
    }else if(array.length === 0){
        throw new Error('Array shouldn\'t be Empty!');
    }else{
        console.log(array.map((item,index) => array[array.length-1-index]))
    }
}catch(err){
    console.warn(err.message);
    }
}

reverse(arr);