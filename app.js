var fs = require('fs');
var saveToLog;
var configPath =__dirname + "\\" + "data" + "\\" + "settings.conf";

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
    saveToLog = password;
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
    saveToLog = password;
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
    saveToLog = password;
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
    saveToLog = password;
    createLog();
}

function reset()
{
	document.getElementById('password').value= "";
}

function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the Apache 2 License\n" +
	"Website: jordanbottoms.com", "About");
}

function readConfig()
{
    var config = fs.readFileSync(configPath, 'utf8');
    document.getElementById('size').value= config;
}

function createLog()
{
    saveToLog = saveToLog + '\n'
    log = __dirname +"\\" + "data" + "\\" + "backup.log"
    fs.appendFile(log, saveToLog,(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});
}

function saveSettings()
{
	var size = document.getElementById('size').value;
	fs.writeFile(configPath, size, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    alert("Settings saved", "Alert");
}); 
}

function closeWin()
{
	window.close();
}