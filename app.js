/* Copyright 2017 Jordan Bottoms

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


/* passgen
 * 
 * This contains the password generator and quit functions only. 
 * To keep it neat I moved everything else to extras.js*/
 
function passgen()
{
	checkedState()
}

function checkedState()
{
	
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

function numbers()
{
	// Set characters to lower/upper case
	// and numbers
	var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
	while(count < size)
	{
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