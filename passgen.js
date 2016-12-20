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