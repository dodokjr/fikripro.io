window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-44252901-12');
 
 /*-----------Loading-----------*/
  
 document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#pd").style.visibility = "visible";
    } else {
        document.querySelector(
          "#pd").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

/*-------------To Top Button -------------------*/
 
 //Get the button
 var mybutton = document.getElementById("myBtn1");
  
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document

 
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

/*-----------Music-----------*/
function play() {
    var audio = new Audio('http://localhost:5500/src/assets/audio/2.mp3');
    audio.setAttribute("preload", "auto");
    audio.play();
    console.log('play:Blue Wednesday - One')
}

function song() {
  var audio = new Audio('http://localhost:5500/src/assets/audio/1.mp3');
  audio.setAttribute("preload", "auto");
  audio.play();
  console.log('play:Indonesia Pusaka')
}

function use() {
  var audio = new Audio('http://localhost:5500/src/assets/audio/3.mp3');
  audio.setAttribute("preload", "auto");
  audio.play();
  console.log('play:Tanah Airku')
}


/*-----------Read More-----------*/
function myFunction1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  /*-----------Time-----------*/
  let section = document.querySelector('section'),
  icons = document.querySelector('.icons');

icons.onclick = () => {
  section.classList.toggle('dark');
};

// creating a function and calling it in every seconds
setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let d;
  d = hour < 12 ? 'AM' : 'PM'; //if hour is smaller than 12, than its value will be AM else its value will be pm
  hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
  hour = hour == 0 ? (hour = 12) : hour; // if hour value is  0 than it value will be 12

  // adding 0 to the front of all the value if they will less than 10
  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  document.querySelector('.hour_num').innerText = hour;
  document.querySelector('.min_num').innerText = min;
  document.querySelector('.sec_num').innerText = sec;
}, 1000);

/*----------- Blank ----------*/
function myblank1() {
  var myWindow = window.open("", "", "width=200,height=100");
  myWindow.document.write('<html><head> <title>Sample</title><link rel="stylesheet" type="text/css" href="css/newsCSSWindow.css"></head><body>');
  myWindow.document.write("");
  myWindow.document.write('</body></html>');
}

/*---------- scrol bar -------------*/

