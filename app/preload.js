
/*  Load critical functions. In the future make sure to load up before anything else.*/
const platform = ('./platform.js');
const os = require ('os');

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
