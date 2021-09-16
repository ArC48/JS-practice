var searchWord = (text, word) => {
    var counter = 0, var2 = 0;
    for (i = 0; i < text.length; i++){
        if(text[i] == word[0]){
            for(j = i; j < i + word.length; j++){
                if(text[j]==word[j-i]){
                    var2++;
                }
                if (var2 == word.length){
                    counter++;
                }
            }
            var2 = 0;
        } 
    }return `"'${word}' was found ${counter} times!"`;
}

console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));