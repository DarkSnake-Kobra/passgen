/*
Copyright 2017 Jordan Bottoms

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/* Extra components such as creating backup log for recovery and
 * save settings. Also currently contains the about and help information
 * which will later be in their own window..*/

const fs = require('fs');
const {clipboard} = require('electron')

function createLog()
{
	if (document.getElementById('saveLogState').checked == true){
		var saveToLog = document.getElementById('password').value;
		var date = new Date();
		var osType = os.platform();
		var log;
		saveToLog = saveToLog + '\t' + date + '\n';
		if (osType == "win32"){
			log =__dirname + "\\" + "data" + "\\" + "backup.log";
		}
		if (osType == "linux"){
			configPath = __dirname + "//" + "data" + "//" + "backup.log";
		}
		fs.appendFile(log, saveToLog,(err) => {
		if (err) throw err;
			console.log('The "data to append" was appended to file!');
		});
	}
	else{
		console.log('Not saving log...');
	}

}

function copyToClipboard(){
	var text = document.getElementById('password').value;
	clipboard.writeText(text, 'selection');
	console.log(clipboard.readText('selection'));
}
function clr()
{
	document.getElementById('password').value= "";
}

function about()
{
	alert("Copyright (c) 2017 Jordan Bottoms\n" +
	"Released under the MIT License\n" +
	"Website: jordanbottoms.com", "About");
}

function saveSettings()
{
	var configPath = getConfigPath();
	var size = document.getElementById('size').value;
	fs.writeFile(configPath, size, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    alert("Settings saved", "Alert");
});
}
function help(){
	alert("Settings and backup file are located in the passgen install folder then '/resources/app/data' ", "Help");
}
