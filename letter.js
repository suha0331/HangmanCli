function Letter (currentLetter,index){
    this.letter = currentLetter;
    this.index = index;
    this.userAnswer = false;

    this.letterRender = function(){
        if(this.userAnswer === true){
            return this.letter;
        } else {
            return "_ ";
        }
    }

    }


    module.exports = Letter;