// for visitor counter
var count;
    function counter_fn(){
       var counter = localStorage.getItem("cntr");
       count = Number(counter);
       count += 1;
       document.getElementById("cntr").innerHTML = count;
       localStorage.setItem("cntr",count);
    }

// for slide show of images
var i=0;
	var mypic _s = ["mypic /I1.jpeg","mypic /4.jpeg","mypic /5.jpeg","mypic /background.jpeg","mypic /5.jpg"];
	  function changeImage()
      {
        i++;
      // 	alert(mypic _s[i]);
        if( i >= mypic _s.length)
        {
          i = 0;
        }
        let obj = document.getElementById("image");
        obj.src=mypic _s[i];
      }

      // for sticky navigation bar 
      var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {
	myFunction()};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    alert(d);
  } else {
    navbar.classList.remove("sticky");
  }
//  scrollFunction();
}

// for top button 
var mybutton = document.getElementById("myBtn");
//Get the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// FOR FORM 
var tbin=document.getElementById("my");
  		if(localStorage.getItem("maiank")===null)
  			localStorage.setItem("maiank",tbin.innerHTML);
  		else
  			tbin.innerHTML=localStorage.getItem("maiank");
	function formdata()
	{
		var r=tbin.insertRow(-1);
		var c1=r.insertCell(0);
		c1.innerHTML=document.getElementById("username").value;  
		var c2=r.insertCell(1);
		c2.innerHTML= document.getElementById("Skill").value; 
		var c3=r.insertCell(2);
		c3.innerHTML= document.getElementById("level").value;
		var c4=r.insertCell(3);
		c4.innerHTML= document.getElementById("comment").value;  
		localStorage.removeItem("maiank");
		localStorage.setItem("maiank",tbin.innerHTML);
	}
