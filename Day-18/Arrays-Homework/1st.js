const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

const f = (array) => {
const new_array = [];
try {
    if (!Array.isArray(array)) {
        throw new TypeError('Parameter must be an array!')
    } else if (array == '') {
        console.log(0);
    } else {
        while (array.length > 0) {
            const element = array.pop();
            if (Array.isArray(element)) 
                array.push(...element);
            else if (typeof element === 'number') 
                new_array.push(element);
            else 
                throw new TypeError('Array must only contain numbers!');
            }
            let sum = (acc, num) => {
            return acc + num;
            }
        console.log(new_array.reduce(sum));
        }
    } catch (err) {
    console.warn(err.message);
    }
}

f(arr);