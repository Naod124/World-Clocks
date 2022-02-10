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

function options() {

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
else{
newyork = false; 
}
if($(this).val()==6){
sanfransisco = true; 
}
else{
sanfransisco = false; 
}
if($(this).val()==7){
moskva = true; 
}
else{
moskva = false; 
}
if($(this).val()==8){
baghdad = true; 
}
else{
baghdad = false; 
}
if($(this).val()==9){
instanbul = true; 
}
else{
instanbul = false; 
}
if($(this).val()==10){
athen = true; 
}
else{
athen = false ; 
}
if($(this).val()==11){
madrid = true; 
}
else {
madrid = false; 
}

if($(this).val()==12){
berlin = true; 
}
else{
berlin = false; 
}

if($(this).val()==13){
nairobi = true; 
}
else{
nairobi = false; 
}
if($(this).val()==14){
Mogadishu = true; 
}
else{
Mogadishu = false; 
}
if($(this).val()==15){
addis = true; 
}
else{
addis = false ;
}
if($(this).val()==16){
Dubai = true; 
}
else{
Dubai = false; 
}
if($(this).val()==17){
kampala = true; 
}
else{
kampala = false; 
}
if($(this).val()==18){
khartoum = true; 
}
else{
khartoum = false; 
}
if($(this).val()==19){
kairo = true; 
}
else{
kairo = false; 
}
if($(this).val()==20){
sydney = true; 
}
else{
sydney = false; 
}
    }); 
  }); 
  }
function digitalTime() {
  $(document).ready(function () {
    options(); 
    
    if(london==true){
      $("#digital").html(new Date().toLocaleTimeString("en-US", {
        timeZone: 'Europe/London',
        timeStyle: 'medium', hourCycle: 'h23'
    })); 
  }
    
    else  if(stockholm==true){
      $("#digital").html(new Date().toLocaleTimeString("en-US", {
        timeZone: 'Europe/Stockholm',
        timeStyle: 'medium', hourCycle: 'h23'
      })); 
    }
    else  if(oslo==true){
      $("#digital").html(new Date().toLocaleTimeString("en-US", {
        timeZone: 'Europe/Oslo',
        timeStyle: 'medium', hourCycle: 'h23'
      })); 
    }
     else if(asmara==true){
      $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Asmara',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
     else if(newyork==true){
      $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'America/New_york',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
      else if(sanfransisco==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'America/Los_angeles',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
      
      else if(moskva==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Moscow',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
    
      else if(baghdad==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Asia/Baghdad',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
      else if(instanbul==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Istanbul',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
      else if(athen==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Athens',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(madrid==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Madrid',
          timeStyle: 'medium', hourCycle: 'h23'
        })); 
      }
      else if(berlin==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Europe/Berlin',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(nairobi==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Nairobi',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
    
      else if(Mogadishu==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Mogadishu',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(addis==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Addis_ababa',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
    
      else if(Dubai==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Asia/Dubai',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(kampala==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Kampala',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(khartoum==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Khartoum',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(kairo==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Africa/Cairo',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
      }
      else if(sydney==true){
        $("#digital").html(new Date().toLocaleTimeString("en-US", {
          timeZone: 'Australia/Sydney',
          timeStyle: 'medium', hourCycle: 'h23'
        }));
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
  $(document).ready(function() {
    options(); 
if(london==true){
  date = (new Date()).toLocaleTimeString("en-US", {
    timeZone: 'Europe/London',
    timeStyle: 'medium', hourCycle: 'h23'
}).split(" ")[0].split(":"); 
  calcuation(); 

}
else  if(stockholm==true){
  date = (new Date()).toLocaleTimeString("en-US", {
    timeZone: 'Europe/Stockholm',
    timeStyle: 'medium', hourCycle: 'h23'
  }).split(" ")[0].split(":"); 
  calcuation(); 
}
else  if(oslo==true){
  date = (new Date()).toLocaleTimeString("en-US", {
    timeZone: 'Europe/Oslo',
    timeStyle: 'medium', hourCycle: 'h23'
  }).split(" ")[0].split(":"); 
  calcuation(); 
}
 else if(asmara==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Asmara',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
  calcuation(); 
  }
 else if(newyork==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'America/New_york',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(sanfransisco==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'America/Los_angeles',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  
  else if(moskva==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Europe/Moscow',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }

  else if(baghdad==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Asia/Baghdad',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(instanbul==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Europe/Istanbul',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(athen==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Europe/Athens',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(madrid==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Europe/Madrid',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(berlin==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Europe/Berlin',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(nairobi==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Nairobi',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }

  else if(Mogadishu==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Mogadishu',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(addis==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Addis_ababa',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }

  else if(Dubai==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Asia/Dubai',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(kampala==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Kampala',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(khartoum==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Khartoum',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(kairo==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Africa/Cairo',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
  else if(sydney==true){
    date = (new Date()).toLocaleTimeString("en-US", {
      timeZone: 'Australia/Sydney',
      timeStyle: 'medium', hourCycle: 'h23'
    }).split(" ")[0].split(":"); 
     calcuation();
  }
});
}

function calcuation(){
  let now = new Date();
  //let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour

  //hour = hour % 12;
  date[0];

  date[0] = date[0] % 12;
  date[0] = (date[0] * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, date[0], radius * 0.5, radius * 0.07);
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