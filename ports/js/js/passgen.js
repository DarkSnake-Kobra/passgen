function passGen()
{
	var characters = "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var charLength = characters.length;
	
	var size = 20;
	var count = 0;
	var temp;
	var password = ""
	
	while(count < size)
	{
		temp = Math.floor((Math.random() * charLength));
		password += characters.charAt(temp);
		count++;
	}
	alert(password);
}
