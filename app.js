calculateGrade = () => {
    let wd = document.getElementById('wd').value;
    let se = document.getElementById('se').value;
    let math = document.getElementById('math').value;
    let elec = document.getElementById('ee').value;
    let grade = '';

    //total marks
    let total_marks = parseFloat(wd) + parseFloat(se) + parseFloat(math) + parseFloat(elec);
    //alert(`Total Marks you got is: ${total_marks}`);

    //percentage
    let perc = (total_marks / 400) * 100;
    //alert(`Percentage You got is: ${perc}`);

    //grade
    if(perc <= 100 && perc >= 80){
        grade ='A';
    }
    else if(perc < 80  && perc >= 70){
        grade ='B';
    }
    else if(perc < 70 && perc >= 50){
        grade ='C';
    }
    else if(perc < 50 && perc >= 35){
        grade ='D';
    }
    else{
        grade = 'F';
    }

    //alert(`Your grade is: ${grade}`);

    if(perc >= 35){
    document.getElementById('showData').innerHTML = ` Out of 400 your total is ${total_marks}
    and percentage is ${perc}%. <br/> Your grade is ${grade}. You are Pass.`
    }
    else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is ${total_marks}
    and percentage is ${perc}%. <br/> Your grade is ${grade}. You are Fail.`
    }
}