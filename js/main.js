// Main website functions including the navigation menu builder, page functions etc.

function nav()
{
	document.getElementById("navBar").innerHTML = ('<button onclick="homePage()" style="margin-right: 100px; width:200px;">Home Page</button>' +
			' <button onclick="webSite()" style="margin-right: 100px; width:200px;">Website</button>' +
					'<button onclick="aboutPage()" style="margin-right: 100px; width:200px;">About</button>');
}
function homePage()
{
	window.open("index.html"," _self");
}
function webSite()
{
	window.open("http://www.dsksblog.com/index.html"," _self");
}
function aboutPage()
{
	window.open("about.html", "_self");
}

function footer()
{
	
	document.getElementById("footer").innerHTML = ('<p style="text-align: left">Copyright (c) 2016 Jordan Bottoms' + 
			'</br>Released under the Apache 2 License</p>');
}