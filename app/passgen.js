/*
Copyright 2017 Jordan Bottoms

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/* passgen
 *
 * Core of the program. Creates password and returns it to the window to display it*/

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
