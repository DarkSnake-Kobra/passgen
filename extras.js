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
/* Contains everything else aside from closing the program
 * and password generator.*/

var fs = require('fs');
var configPath =__dirname + "\\" + "data" + "\\" + "settings.conf";
function createLog()
{
	var saveToLog = document.getElementById('password').value;
	var date = new Date();
    saveToLog = saveToLog + '\t' + date + '\n';
    log = __dirname +"\\" + "data" + "\\" + "backup.log"
    fs.appendFile(log, saveToLog,(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});
}

function clear()
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

function help(){
	alert("Settings and backup file are located in the passgen install folder then '/resources/app/data' ", "Help");
}