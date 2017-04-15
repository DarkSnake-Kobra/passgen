/* passgen
 * 
 * This contains the password generator and quit functions only. 
 * To keep it neat I moved everything else to extras.js*/

function passgen(){
	
	/* Determine checked boxes checked state
	 * then call appropriate functions
	 */
	var numbersState;
	var symbolsState;

	numbersState = document.getElementById('numbers').checked;
    symbolsState = document.getElementById('symbols').checked;

	if (numbersState == true)
	{
		numbers();
	}
    if (numbersState == false)
    {
        alphabet();
    }
    if (symbolsState == true && numbersState == true)
    {
        createAll();
    }
    if (symbolsState == true && numbersState == false)
    {
        symbols();
    }
}

function numbers(){
	// Set characters to lower/upper case
	// and numbers
	var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	random(characters);
}

function alphabet(){
    // store letters and get length
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	random(characters);
}

function createAll()
{
    // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
	random(characters);
}

function symbols(){
     // store letters and get length
	var characters = "!@#$%^&*()_-+=<>,.?{}[];:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
	random(characters);
}

function random(characters){
	var c = characters;
	var size;
	var count = 0;
	var temp;
	var password = "";
	var charLength = characters.length;

	// get size text boxes value
	// to determine password size
	size = document.getElementById('size').value;

	/* Loop through the characters variable
	 * by using the length as the end and
	 * store the retrieved value in temp then
	 * increment it by 1 and stopping if greater
	 * then size variable
	 */
	while(count < size){
	  temp = Math.floor((Math.random() * charLength));
	  password += characters.charAt(temp);
	  count++;
	}
	
	/* Set password box to password variable
	 * then call the log funtion that stores
	 * the password in the log file for backup
	 */
	document.getElementById('password').value= password;
    createLog();
}

function closeWin()
{
	window.close();
}