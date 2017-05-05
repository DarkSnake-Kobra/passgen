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
/*  Load critical functions. In the future make sure to load up before anything else.*/
const platform = ('./platform.js');
const os = require ('os');
var nodeVersion = "";

function readConfig(){
	var configPath = getConfigPath();
    var config = fs.readFileSync(configPath, 'utf8');
    document.getElementById('size').value= config;
}

function getConfigPath(){
	var osType = os.platform();
	var configPath;
	if (osType == "win32"){
		configPath =__dirname + "\\" + "data" + "\\" + "settings.conf";
		return configPath;
	}
	if (osType == "linux"){
		configPath = __dirname + "//" + "data" + "//" + "settings.conf";
		return configPath;
	}
}

function getNodeVersion(){
	var spawn = require('child_process').spawn;
	var node = spawn('node', ['-v']);
	node.stdout.on('data', (data) => {
		console.log(`stdout: ${data}`);
		nodeVersion = data.toString();
	});

	node.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}

function preLoad(){
	getNodeVersion()
	readConfig();
}
