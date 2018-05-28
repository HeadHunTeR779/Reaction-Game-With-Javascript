
function figGenerator()
  {
     width = Math.floor(((Math.random())+1))*160;   //if you do Math.floor(Math.random()) then answer always 0 !!
    BRad = width/2;

    width += "px";
    BRad += "px";

    r= Math.random()*256;
    g=Math.random()*256;
    b=Math.random()*256;
    colour = "rgb(" + r + "," + g + "," + b + ")" ;

    var random_bool = Math.random() >= 0.5

    document.getElementById("div1").style.width = width;
    document.getElementById("div1").style.height = width;
    document.getElementById("div1").style.backgroundColor = colour;
    if(random_bool)
      document.getElementById("div1").style.borderRadius = BRad;
    document.getElementById("div1").style.position = "relative";
    document.getElementById("div1").style.left = Math.random()*550 + "px";
    document.getElementById("div1").style.top = Math.random()*400 + "px";   //keep this negative yo
    return (new Date().getTime());
  }

var start = figGenerator();
var end;
document.getElementById("div1").onclick = function()
{
  end = figGenerator();
  document.getElementById("response").innerHTML = "<p>Your Reaction Time is: <strong>" + (end-start)/1000 + "</strong> secs</p>";
  start = end;
}
