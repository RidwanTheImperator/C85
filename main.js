canvas=document.getElementById("Canva");
ctx=canvas.getContext("2d")


rx=10;
ry=10;

bi="mars.jpg";
ri="rover.png";

function add() {
    bim= new Image();
    bim.src=bi;
    bim.onload= upload_b;

    rim= new Image();
    rim.src=ri;
    rim.onload= upload_r;
}

function upload_b () {
    ctx.drawImage(bim, 0, 0, canvas.width, canvas.height);
}

function upload_r () {
    ctx.drawImage(rim, rx, ry, 100, 90);
}

window.addEventListener("keydown", mk);

function mk (e) {
   kp = e.keyCode;
   console.log(kp)
   if ( kp == '37' ) {
    left()
}
   if ( kp == '38') {
       up()
   }
   if ( kp == '39') {
       right()
   }

   if ( kp == '40') {
       down()
   }
  } 
  
  function left() {
     if ( rx >0 ) {
      rx = rx - 20 
      upload_b()
      upload_r()
     }
  }

  function up() {
      if ( ry >0 ) {
          ry = ry - 20
          upload_b();
          upload_r();
      }

  }

  function right() {
      if (rx <700 ) {
          rx = rx + 20
          upload_b();
          upload_r();
      }
  }

  function down() {
      if (ry <500) {
          ry = ry + 20
          upload_b();
          upload_r();
      }
  }
