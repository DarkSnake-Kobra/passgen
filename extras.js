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