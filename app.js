function PASSGEN()
{
    var numbers_state;
	var symbols_state;

	numbers_state = document.getElementById('numbers').checked;
    symbols_state = document.getElementById('symbols').checked;

	if (numbers_state == true)
	{
		NUMBERS();
	}
    if (numbers_state == false)
    {
        ALPHABET();
    }
    if (symbols_state == true && numbers_state == true)
    {
        GENERATE_EVERYTHING();
    }
    if (symbols_state == true && numbers_state == false)
    {
        SYMBOLS();
    }
}

function NUMBERS()
{
		
	// store letters and get length
	var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var characters_length = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * characters_length));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
}

function ALPHABET()
{
    // store letters and get length
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var characters_length = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * characters_length));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
}

function GENERATE_EVERYTHING()
{
    // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var characters_length = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * characters_length));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
}

function SYMBOLS()
{
     // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var characters_length = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * characters_length));
	  password += characters.charAt(temp);
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
