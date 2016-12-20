function passGen()
{
	var characters = "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var charLength = characters.length;

	var size;
	var count = 0;
	var temp;
	var password = "";

	size = document.getElementById('size').value;
	while(count < size)
	{
		temp = Math.floor((Math.random() * charLength));
		password += characters.charAt(temp);
		count++;
	}
	document.getElementById('password').value= password;
}

function reset()
{
	document.getElementById('password').value= "";
}

function homePage()
{
	alert("Currently broken");
	//window.open("index.html"," _blank");
}
function webSite()
{
	alert("Currently broken");
	//window.open("http://www.dsksblog.com/index.html"," _self");
}
function aboutPage()
{
	alert("Currently broken");
	//window.open("about.html", "_self");
}

function footer()
{

	document.getElementById("footer").innerHTML = ('<p style="text-align: left">Copyright (c) 2016 Jordan Bottoms' +
			'</br>Released under the Apache 2 License</p>');
}
