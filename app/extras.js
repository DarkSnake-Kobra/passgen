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


/* Extra components such as creating backup log for recovery and
 * save settings. Also currently contains the about and help information
 * which will later be in their own window..*/

var fs = require('fs');
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

function clr()
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
	var configPath = getConfigPath();
    var config = fs.readFileSync(configPath, 'utf8');
    document.getElementById('size').value= config;
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

function getConfigPath(){
	var configPath =__dirname + "\\" + "data" + "\\" + "settings.conf";
	return configPath;
}
function help(){
	alert("Settings and backup file are located in the passgen install folder then '/resources/app/data' ", "Help");
}

