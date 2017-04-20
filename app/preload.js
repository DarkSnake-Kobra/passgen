
/*  Load critical functions. In the future make sure to load up before anything else.*/
const platform = ('./platform.js');

function readConfig(){
	var configPath = getConfigPath();
    var config = fs.readFileSync(configPath, 'utf8');
    document.getElementById('size').value= config;
}

function getConfigPath(){
	var configPath =__dirname + "\\" + "data" + "\\" + "settings.conf";
	return configPath;
}
