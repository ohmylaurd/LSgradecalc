function calculateCurrentGrade(){
    var hwpts=document.getElementById('HomeworkPoints').value;
    var hwper=document.getElementById('HomeworkPercent').value;
    var clspts=document.getElementById('ClassworkPoints').value;
    var clsper=document.getElementById('ClassworkPercent').value;
    var asepts=document.getElementById('AssessmentPoints').value;
    var aseper=document.getElementById('AssessmentPercent').value;
    var parpts=document.getElementById('ParticipationPoints').value;
    var parper=document.getElementById('ParticipationPercent').value;

    if (hwpts.length===0 ||hwper.length===0 || clspts.length===0 || clsper.length===0 || asepts.length===0 || aseper.length===0 ||parpts.length===0 || parper.length===0){
        document.getElementById("currentgrade").innerHTML = "Oh no, please fill in all the boxes and try again!";
        document.getElementById("putout").innerHTML="";
        return;
    }

    var hwA  =  convertArrayStringToNumber(hwpts);
    var clsA = convertArrayStringToNumber(clspts);
    var aseA = convertArrayStringToNumber(asepts);
    var parA = convertArrayStringToNumber(parpts);

    var percent= parseInt(hwper)+parseInt(clsper)+parseInt(aseper)+parseInt(parper);
    var hwp= hwper/percent;
    var clsp= clsper/percent;
    var asep= aseper/percent;
    var parp= parper/percent;
    var grd= (hwA*hwp)+(clsA*clsp)+(aseA*asep)+(parA*parp)+ "%";
    var grd2= (hwA*hwp)+(clsA*clsp)+(aseA*asep)+(parA*parp);
    if(grd2>100){
        document.getElementById("currentgrade").innerHTML= "Your grade appears to be too high. Are you sure you inputted your numbers correctly?"
        return;
    }
    document.getElementById("currentgrade").innerHTML= "Your Current Grade is:"+ grd;
    document.getElementById("putout").innerHTML="Add your desired grade and final weight to calculate the score you will need on the final!";
    document.getElementById("currentgrade2").value=grd2;

    colorz(hwA, document.getElementById("hp"));
    colorz(clsA, document.getElementById("cp"));
    colorz(aseA, document.getElementById("ap"));
    colorz(parA, document.getElementById("pp"));
}

function convertArrayStringToNumber(group){
    var ray=group.split(",");
    for (var i=0; i>ray.length;i++){
        ray[i]=parseInt(ray[i]);
    }
    return ray;
}

function averageArray(ray){
    var sum=0;
    for (var i=0;i<ray.length;i++){
        sum+=ray[i];
    }
    return sum/ray.length;
}

function calculateGradeNeeded() {
    var t = document.getElementById("currentgrade2").value;
    var u = document.getElementById("GradeDesired").value;
    var v = document.getElementById("FinalPercent").value;
    var w = v / 100;
    var fnl = ((u - ((1 - w) * t)) / v) * 100;
    var final = ((u - ((1 - w) * t)) / v) * 100 + "%";
    if (t.length===0 ||u.length===0 || v.length===0 ){
        document.getElementById("putout2").innerHTML = "Oh no, please fill in all the boxes and try again!"

    }
     else if (fnl > 100) {
        document.getElementById("putout2").innerHTML = "You will need at least a " + final + " in order to get a " + u + " ...That may be impossible but maybe luck is on your side??";
    }
     else if (fnl < 60) {
        document.getElementById("putout2").innerHTML = "You will need at least a " + final + " in order to get a " + u + "!! " + " You got this!!";

    }
     else{
        document.getElementById("putout2").innerHTML = "You will need at least a " + final + " in order to get a" + u;
    }
}

function colorz(avrg,element){
    if(avrg<90){
        element.style.background="yellow";
    }
    if(avrg<80){
        element.style.background="red"
    }
    if(avrg<70){
        element.style.background="blue";
    }
    if(avrg<60){
        element.style.background="green";
    }
    if(avrg<50){
        element.style.background="purple";
    }

}

