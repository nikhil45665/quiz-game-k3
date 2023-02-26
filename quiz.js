const quiz= document.getElementById('quiz')

function submit1() {
    let score = 0;
    if (document.getElementById('correct').checked) {
        score++;
    }
    if (document.getElementById('correct').checked) {
        score++;
    }
    if (document.getElementById('correct').checked) {
        score++;
    }
    if (document.getElementById('correct').checked) {
        score++;
    }
    if (document.getElementById('correct').checked) {
        score++;
    }  
    if(score<3)
    {
    //    quiz.innerHTML =document.write("Your Failed .")
    //    quiz.innerHTML =document.writeln("Your score is :",score)
         alert("YOUR FAIL!!")
    }
    else {
        quiz.innerHTML =`<a href="./round2.html"><button value="submit" onclick="submit1()" class="btn" id="btn">NEXT</button></a> `
    }
    }

    function submit2() {
        let score = 0;
        if (document.getElementById('correct').checked) {
            score++;
        }
        if (document.getElementById('correct').checked) {
            score++;
        }
        if (document.getElementById('correct').checked) {
            score++;
        }
        if (document.getElementById('correct').checked) {
            score++;
        }
        if (document.getElementById('correct').checked) {
            score++;
        }  
        if(score<3)
        {
        //    quiz.innerHTML =document.write("Your Failed .")
        //    quiz.innerHTML =document.writeln("Your score is :",score)
             alert("YOUR FAIL!!")
        }
        else {
            quiz.innerHTML =`<a href="./round3.html"><button value="submit" onclick="submit2()" class="btn" id="btn">NEXT</button></a> `
        }
        }
        function submit3() {
            let score = 0;
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }  
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }  
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }
            if (document.getElementById('correct').checked) {
                score++;
            }  
            //   alert("your score is:"+score);
            quiz.innerHTML=document.write("Congrautions you passed all the 3 rounds!!!!!!!!   ");
            quiz.innerHTML=document.writeln("     your score is",score);
        }
