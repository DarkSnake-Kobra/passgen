function passGen()
{

	// store letters and get length
	var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	// store numbers and get length
	var numbers = "0123456789"

	var size;
	var count = 0;
	var temp;
	var password = "";
	var numbersState;
	var holdChar = "";
	var holdCharLength;

	size = document.getElementById('size').value;
	numbersState = document.getElementById('numbers').checked;

	if (numbersState == true)
	{
		holdChar = numbers + letters;
		holdCharLength = holdChar.length;
	}
	else
	{
		holdChar = letters;
		holdCharLength = holdChar.length
	}

	while(count < size)
	{
	  temp = Math.floor((Math.random() * holdCharLength));
	  password += holdChar.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
	}

function reset()
{
	document.getElementById('password').value= "";
}

function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the Apache 2 License\n" +
	"Website: jordanbottoms.com");
}

function closeWin()
{
	window.close();
}
