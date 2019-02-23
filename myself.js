
function checkPalindrome() {
let revStr = "";
let str = document.getElementById("str").value;
let i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
let result=getpalin(str,revStr);
document.getElementById('result').innerHTML = result;
}
let getpalin = function (str, revStr) {
    if(str == revStr) {
        //const s = document.getElementById('guest').value;
        return ' is a Palindrome';
        
        //alert(str+" -is Palindrome");
      } 
      else {
       alert(str+" -is not a Palindrome");
       return ' ';
      }
}

function OverMouse() {
  const xhttp = new XMLHttpRequest();
  $.ajax({
    type: 'GET',
    url: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=3',
    success: function (data) {
      $("#mouseOverme").html(data[1].quote);
    }
  });
}
