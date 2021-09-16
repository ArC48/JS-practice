var extractCurrencyValue = (source) =>{
    try{
        if (typeof(source) !== 'string'){
            throw new TypeError('Parameter Expected to be String!');
        }else{
            let thenum = source.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
            return (Number(thenum));
        }
    }catch(err){
        console.warn(err.message);
    }
}

var testNum = extractCurrencyValue('$210');

console.log(testNum);
console.log(typeof(testNum));
