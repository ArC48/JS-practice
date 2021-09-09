var arr = [1,2,3];

function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: Parameter type must be an Array");
    } else if (arr.length === 0) {
        throw new Error("Error: Parameter can't be empty");
    } else {
        if (arr.length > 1) {
        console.log(arr[0]);
        arr.shift();
        f(arr);
        } else if (arr.length == 1) {
        console.log(arr[0]);
        }
    }
}

try {
    f(arr);
} catch (e) {
    console.warn(e.message);
}