/* passgen
 * 
 * This contains the password generator and quit functions only. 
 * To keep it neat I moved everything else to extras.js*/
 
function passgen()
{
    var numbers_state;
	var symbols_state;

	numbers_state = document.getElementById('numbers').checked;
    symbols_state = document.getElementById('symbols').checked;

	if (numbers_state == true)
	{
		numbers();
	}
    if (numbers_state == false)
    {
        alphabet();
    }
    if (symbols_state == true && numbers_state == true)
    {
        createAll();
    }
    if (symbols_state == true && numbers_state == false)
    {
        symbols();
    }
}

function numbers()
{
		
	// store letters and get length
	var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var charLength = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * charLength));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
    createLog();
}

function alphabet()
{
    // store letters and get length
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var charLength = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * charLength));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
    createLog();
}

function createAll()
{
    // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var charLength = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * charLength));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
    createLog();
}

function symbols()
{
     // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

	var size;
	var count = 0;
	var temp;
	var password = "";
	var charLength = characters.length;

	size = document.getElementById('size').value;

	while(count < size)
	{
	  temp = Math.floor((Math.random() * charLength));
	  password += characters.charAt(temp);
	  count++;
	}
	document.getElementById('password').value= password;
    createLog();
}



function closeWin()
{
	window.close();
}