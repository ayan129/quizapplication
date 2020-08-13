function check() {
    var score = 0
    var rightq1o1 = document.getElementById('q1-o1')
    var rightq1o2 = document.getElementById('q1-o2')
    var rightq1o3 = document.getElementById('q1-o3')
    var rightq1o4 = document.getElementById('q1-o4')
    var rightq2o1 = document.getElementById('q2-o1')
    var rightq2o2 = document.getElementById('q2-o2')
    var rightq2o3 = document.getElementById('q2-o3')
    var rightq2o4 = document.getElementById('q2-o4')
    var rightq3o1 = document.getElementById('q3-o1')
    var rightq3o2 = document.getElementById('q3-o2')
    var rightq3o3 = document.getElementById('q3-o3')
    var rightq3o4 = document.getElementById('q3-o4')
    var rightq4o1 = document.getElementById('q4-o1')
    var rightq4o2 = document.getElementById('q4-o2')
    var rightq4o3 = document.getElementById('q4-o3')
    var rightq4o4 = document.getElementById('q4-o4')
    var rightq5o1 = document.getElementById('q5-o1')
    var rightq5o2 = document.getElementById('q5-o2')
    var rightq5o3 = document.getElementById('q5-o3')
    var rightq5o4 = document.getElementById('q5-o4')
    var rightq6o1 = document.getElementById('q6-o1')
    var rightq6o2 = document.getElementById('q6-o2')
    var rightq6o3 = document.getElementById('q6-o3')
    var rightq6o4 = document.getElementById('q6-o4')

    //  question no 1 -----------------------------------------------------------------------------------------------------------------------------------

    if (rightq1o1.checked == true) {


        score++
        document.getElementById("span").innerHTML = " Your Answer is correct  !! ";
        document.getElementById("q1-o1").disabled = true;
        document.getElementById("q1-o2").disabled = true;
        document.getElementById("q1-o3").disabled = true;
        document.getElementById("q1-o4").disabled = true;


    }


    if (rightq1o2.checked == true) {



        document.getElementById("span").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is a). Wood  ";
        document.getElementById("q1-o1").disabled = true;
        document.getElementById("q1-o2").disabled = true;
        document.getElementById("q1-o3").disabled = true;
        document.getElementById("q1-o4").disabled = true;

    }
    if (rightq1o3.checked == true) {



        document.getElementById("span").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is a). Wood  ";
        document.getElementById("q1-o1").disabled = true;
        document.getElementById("q1-o2").disabled = true;
        document.getElementById("q1-o3").disabled = true;
        document.getElementById("q1-o4").disabled = true;

    }
    if (rightq1o4.checked == true) {



        document.getElementById("span").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is a). Wood  ";
        document.getElementById("q1-o1").disabled = true;
        document.getElementById("q1-o2").disabled = true;
        document.getElementById("q1-o3").disabled = true;
        document.getElementById("q1-o4").disabled = true;

    }

    //  question no 2 -----------------------------------------------------------------------------------------------------------------------------------

    if (rightq2o1.checked == true) {



        document.getElementById("spanone").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is b).Signs  ";

        document.getElementById("q2-o1").disabled = true;
        document.getElementById("q2-o2").disabled = true;
        document.getElementById("q2-o3").disabled = true;
        document.getElementById("q2-o4").disabled = true;

    }


    if (rightq2o2.checked == true) {

        score++

        document.getElementById("spanone").innerHTML = "Your Answer is Correct !!";

        document.getElementById("q2-o1").disabled = true;
        document.getElementById("q2-o2").disabled = true;
        document.getElementById("q2-o3").disabled = true;
        document.getElementById("q2-o4").disabled = true;

    }
    if (rightq2o3.checked == true) {



        document.getElementById("spanone").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is b). Signs  ";

        document.getElementById("q2-o1").disabled = true;
        document.getElementById("q2-o2").disabled = true;
        document.getElementById("q2-o3").disabled = true;
        document.getElementById("q2-o4").disabled = true;

    }
    if (rightq2o4.checked == true) {



        document.getElementById("spanone").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is b). Signs  ";

        document.getElementById("q2-o1").disabled = true;
        document.getElementById("q2-o2").disabled = true;
        document.getElementById("q2-o3").disabled = true;
        document.getElementById("q2-o4").disabled = true;

    }


    //  question no 3 -----------------------------------------------------------------------------------------------------------------------------------

    if (rightq3o1.checked == true) {

        score++

        document.getElementById("spantwo").innerHTML = " Your Answer is correct !!    ";

        document.getElementById("q3-o1").disabled = true;
        document.getElementById("q3-o2").disabled = true;
        document.getElementById("q3-o3").disabled = true;
        document.getElementById("q3-o4").disabled = true;
    }


    if (rightq3o2.checked == true) {



        document.getElementById("spantwo").innerHTML = "Your Answer is incorrect !! <br> Correct Answer is a). Greek";

        document.getElementById("q3-o1").disabled = true;
        document.getElementById("q3-o2").disabled = true;
        document.getElementById("q3-o3").disabled = true;
        document.getElementById("q3-o4").disabled = true;
    }
    if (rightq3o3.checked == true) {



        document.getElementById("spantwo").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is a). Greek  ";

        document.getElementById("q3-o1").disabled = true;
        document.getElementById("q3-o2").disabled = true;
        document.getElementById("q3-o3").disabled = true;
        document.getElementById("q3-o4").disabled = true;
    }
    if (rightq3o4.checked == true) {



        document.getElementById("spantwo").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is a). Greek   ";

        document.getElementById("q3-o1").disabled = true;
        document.getElementById("q3-o2").disabled = true;
        document.getElementById("q3-o3").disabled = true;
        document.getElementById("q3-o4").disabled = true;
    }


    //  question no 4 -----------------------------------------------------------------------------------------------------------------------------------

    if (rightq4o1.checked == true) {



        document.getElementById("spanthree").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is c). conduction  ";

        document.getElementById("q4-o1").disabled = true;
        document.getElementById("q4-o2").disabled = true;
        document.getElementById("q4-o3").disabled = true;
        document.getElementById("q4-o4").disabled = true;
    }


    if (rightq4o2.checked == true) {



        document.getElementById("spanthree").innerHTML = "Your Answer is incorrect !!   <br> Correct Answer is c). conduction  ";

        document.getElementById("q4-o1").disabled = true;
        document.getElementById("q4-o2").disabled = true;
        document.getElementById("q4-o3").disabled = true;
        document.getElementById("q4-o4").disabled = true;
    }
    if (rightq4o3.checked == true) {

        score++

        document.getElementById("spanthree").innerHTML = " Your Answer is correct !!  ";

        document.getElementById("q4-o1").disabled = true;
        document.getElementById("q4-o2").disabled = true;
        document.getElementById("q4-o3").disabled = true;
        document.getElementById("q4-o4").disabled = true;
    }
    if (rightq4o4.checked == true) {



        document.getElementById("spanthree").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is c). conduction  ";

        document.getElementById("q4-o1").disabled = true;
        document.getElementById("q4-o2").disabled = true;
        document.getElementById("q4-o3").disabled = true;
        document.getElementById("q4-o4").disabled = true;
    }
    //  question no 5 ----------------------------------------------------------------------------------------------------------------------------------- 

    if (rightq5o1.checked == true) {



        document.getElementById("spanfour").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is  d). Syntax Error   ";

        document.getElementById("q5-o1").disabled = true;
        document.getElementById("q5-o2").disabled = true;
        document.getElementById("q5-o3").disabled = true;
        document.getElementById("q5-o4").disabled = true;
    }


    if (rightq5o2.checked == true) {



        document.getElementById("spanfour").innerHTML = "Your Answer is incorrect !! <br> Correct Answer is  d). Syntax Error ";

        document.getElementById("q5-o1").disabled = true;
        document.getElementById("q5-o2").disabled = true;
        document.getElementById("q5-o3").disabled = true;
        document.getElementById("q5-o4").disabled = true;
    }
    if (rightq5o3.checked == true) {



        document.getElementById("spanfour").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is  d). Syntax Error  ";

        document.getElementById("q5-o1").disabled = true;
        document.getElementById("q5-o2").disabled = true;
        document.getElementById("q5-o3").disabled = true;
        document.getElementById("q5-o4").disabled = true;
    }
    if (rightq5o4.checked == true) {

        score++

        document.getElementById("spanfour").innerHTML = "Your Answer is Correct !! ";

        document.getElementById("q5-o1").disabled = true;
        document.getElementById("q5-o2").disabled = true;
        document.getElementById("q5-o3").disabled = true;
        document.getElementById("q5-o4").disabled = true;

    }

    //  question no 6 -----------------------------------------------------------------------------------------------------------------------------------

    if (rightq6o1.checked == true) {



        document.getElementById("spanfive").innerHTML = " Your Answer is incorrect !!   <br> Correct Answer is   c). The purpose of break; keyword is to bring the control out of code block which is executing. It can appear only in if or switch statements ";
        document.getElementById("q6-o1").disabled = true;
        document.getElementById("q6-o2").disabled = true;
        document.getElementById("q6-o3").disabled = true;
        document.getElementById("q6-o4").disabled = true;
    }


    if (rightq6o2.checked == true) {



        document.getElementById("spanfive").innerHTML = "Your Answer is incorrect !!  <br> Correct Answer is   c). The purpose of break; keyword is to bring the control out of code block which is executing. It can appear only in if or switch statements";
        document.getElementById("q6-o1").disabled = true;
        document.getElementById("q6-o2").disabled = true;
        document.getElementById("q6-o3").disabled = true;
        document.getElementById("q6-o4").disabled = true;
    }
    if (rightq6o3.checked == true) {

        score++

        document.getElementById("spanfive").innerHTML = " Your Answer is Correct !! ";
        document.getElementById("q6-o1").disabled = true;
        document.getElementById("q6-o2").disabled = true;
        document.getElementById("q6-o3").disabled = true;
        document.getElementById("q6-o4").disabled = true;

    }
    if (rightq6o4.checked == true) {



        document.getElementById("spanfive").innerHTML = " Your Answer is incorrect !!  <br> Correct Answer is   c). The purpose of break; keyword is to bring the control out of code block which is executing. It can appear only in if or switch statements";
        document.getElementById("q6-o1").disabled = true;
        document.getElementById("q6-o2").disabled = true;
        document.getElementById("q6-o3").disabled = true;
        document.getElementById("q6-o4").disabled = true;
    }
    document.getElementById("finalscore").innerHTML = "Your  Score is " + score + " / 6 ";




}

