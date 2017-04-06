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

/* Main application */
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
