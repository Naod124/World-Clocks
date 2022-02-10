const canvas = $('canvas')[0];
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
 ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);
var date; 
let london = false; 
let asmara = false; 
let stockholm = false; 
let oslo = false; 
let khartoum = false; 
let nairobi = false; 
let sanfransisco = false; 
let newyork = false; 
let Mogadishu = false; 
let Dubai = false; 
let baghdad = false; 
let kairo = false; 
let addis = false; 
let berlin = false; 
let madrid = false; 
let instanbul = false; 
let moskva = false; 
let kampala = false; 
let sydney = false; 
let athen = false; 


var digitalTime = function () {
  $(document).ready(function() {
      $("#cities").change(function () {    
        if($(this).val()==3){
          london = true; 
       }
       else{
        london = false; 
       }
       if($(this).val()==1){
        asmara = true; 
     }
     else{
      asmara = false; 
     }
      if($(this).val()==2){
      stockholm = true; 
   }
   else{
    stockholm = false; 
   }
    if($(this).val()==4){
    oslo = true; 
 }
 else{
   oslo = false; 
 }
  if($(this).val()==5){
  newyork = true; 
}
else if($(this).val()==6){
  sanfransisco = true; 
}
else if($(this).val()==7){
  moskva = true; 
}
else if($(this).val()==8){
  baghdad = true; 
}
else if($(this).val()==9){
  instanbul = true; 
}
else if($(this).val()==10){
  athen = true; 
}

else if($(this).val()==11){
  madrid = true; 
}

else if($(this).val()==12){
  berlin = true; 
}

else if($(this).val()==13){
  nairobi = true; 
}
else if($(this).val()==14){
  Mogadishu = true; 
}
else if($(this).val()==15){
  addis = true; 
}
else if($(this).val()==16){
  Dubai = true; 
}
else if($(this).val()==17){
  kampala = true; 
}
else if($(this).val()==18){
  khartoum = true; 
}
else if($(this).val()==19){
  kairo = true; 
}
else if($(this).val()==20){
  sydney = true; 
}
       
      });
      if(london==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/London',
          timeStyle: 'medium', hourCycle: 'h23'
        })
        ); 

      }
     else  if(stockholm==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Stockholm',
          timeStyle: 'medium', hourCycle: 'h23'
        })
        ); 
      }
    else  if(oslo==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Oslo',
          timeStyle: 'medium', hourCycle: 'h23'
        })
        ); 
      }
       else if(asmara==true){
          $("#digital").html(new Date().toLocaleTimeString("en-US", {
            timeZone: 'Africa/Asmara',
            timeStyle: 'medium', hourCycle: 'h23'
          })
          ); 
        }
       else if(newyork==true){
          $("#digital").html(new Date().toLocaleTimeString("en-US", {
            timeZone: 'America/New_york',
            timeStyle: 'medium', hourCycle: 'h23'
          })
          ); 
        }
         });
}

digitalTime(); 
setInterval(digitalTime,1000); 


function drawClock() {

  digitalTime(); 
  faceAndNumber({ ctx: ctx, radius: radius });
 // drawNumbers({ ctx: ctx, radius: radius });
  drawTime({ ctx: ctx, radius: radius });
}

function newFunction() {
  var date = new Date().toLocaleString("en-US", {
    timeZone: 'Europe/London',
    timeStyle: 'medium', hourCycle: 'h24'
  });
  console.log(date);
}

function faceAndNumber({ ctx, radius }) {
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}


function drawTime({ ctx, radius }) {

  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI / 30);


  // draw the hand
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}


function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}