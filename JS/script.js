let hours=document.querySelectorAll('.hrs');
let minutes=document.querySelectorAll('.min');
let seconds=document.querySelectorAll('.sec');
let amPm=document.querySelector('.txt')

function runClock(){
    let fullDate=new Date();
    let hrs=fullDate.getHours();
    let min=fullDate.getMinutes();
    let sec=fullDate.getSeconds();
    let txt="AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM"}
    else if(hrs=0) {hrs=12;}
hrs=hrs<10?`0${hrs}`:hrs;
min=min<10?`0${min}`:min;
sec=sec<10?`0${sec}`:sec;
// console.log(`${hrs} : ${min} : ${sec} ${txt}`)

hrs=hrs.toString();
hours[0].innerHTML=hrs[0];
hours[1].innerHTML=hrs[1];
min=min.toString();
minutes[0].innerHTML=min[0];
minutes[1].innerHTML=min[1];
sec=sec.toString();
seconds[0].innerHTML=sec[0];
seconds[1].innerHTML=sec[1];
amPm.innerHTML=txt;
}
runClock();
setInterval(runClock, 1000)
