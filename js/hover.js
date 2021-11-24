function mouseOver()
{
	this.style.color = "Red";
	}
function mouseOut()
	{
	this.style.color = "White"; // just as example
	}
var ub = document.getElementById('TabHover');
ub.addEventListener("mouseover", mouseOver, false);
ub.addEventListener("mouseout", mouseOut, false);

var ub1 = document.getElementById('TabHover1');
ub1.addEventListener("mouseover", mouseOver, false);
ub1.addEventListener("mouseout", mouseOut, false);

var ub2 = document.getElementById('TabHover2');
ub2.addEventListener("mouseover", mouseOver, false);
ub2.addEventListener("mouseout", mouseOut, false);
