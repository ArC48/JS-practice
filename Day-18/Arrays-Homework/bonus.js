const arr = [1,2,3];

const rotate = (array, number, direction = 'right') => {
try{
    if (!Array.isArray(array)){
        throw new TypeError('First Parameter must be an array!');
    }else if(typeof(number) !== 'number'){
        throw new TypeError('Second Parameter must be a number!');
    }else if(typeof(direction) !== 'string'){
        throw new TypeError('Third Parameter must be a String! (\'left\' or \'right\')');
    }else{
        if(direction === 'left'){
            console.log([
            [...array.slice(number, array.length)],
            [...array.slice(0, number)]].flat());
        }else{
            console.log([
            [...array.slice(array.length - number)],
            [...array.slice(0, array.length - number)]].flat());
        }
        }
    }catch(arr){
        console.warn(arr.message);
    }
}

rotate(arr, 1, 'left');