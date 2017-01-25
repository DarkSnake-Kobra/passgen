const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow

var mainWindow = null;

app.on('ready', () => 
{
	mainWindow = new BrowserWindow({ width: 500, height: 300, resizable: false})
	mainWindow.loadURL('file://' + __dirname + '/index.html');
})

app.on('window-all-closed', () => 
{
  app.quit()
})
