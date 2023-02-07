function AlgorithmCheck(str) { 

    var character = 0;
    
        for(var i = 0; i < str.length; i++){
            if(str[i] != ' '){
            character += 1;   
        }
    }
    
    const numOfVowels = str.match(/[aeiou]/gi).length;
    
    const numOfWords = str.split(" ").length;
    
    return ("There are " + numOfVowels + " numbers of vowels, " + character + " numbers of character, and " + numOfWords + " numbers of words in this sentence");
}
console.log( AlgorithmCheck("Are You Good enough in Algorithms? Prove it!"));