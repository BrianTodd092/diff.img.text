var time = new Date();

var d = time.getHours();
var greeting="";
var msg="";
var msg1="";






 if (d > 18)  {
                msg = 'HELLO';
}

else if (d > 12) {
                   // greeting = document.getElementById('b').style.display= 'block'; // Delete Comment(two forward slash before greeting) Display Image & Text.
                    msg1 ='TODAY';
}

else if ((d > 0) && (d < 7)) {
      greeting = document.getElementById('c').style.display= 'block';}

else if (d > 6) { greeting = document.getElementById('d').style.display= 'block';}

else { greeting=""; }

document.write('<p id="e">' + msg + '</p>');
document.write('<p id="f">' + msg1 + '</p>');
document.image = greeting;
