let Errors = { errors: [], value: 0 };

function mix(...functions) {
    let result;
    for (var call = 0; call < functions.length; call++) {
        try {
            if (call == 0) {
                result = functions[call]();
            } else {
                result = functions[call](result);
            }
        } catch (err) {
            Errors.errors.push({
                "name": err.name,
                "message": err.message,
                "stack": err.stack,
                "level": call,
            })
        }
        Errors.value = result;
    }
    console.log(Errors);
}
const mixx = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
})