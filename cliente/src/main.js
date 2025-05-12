import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });


    if (isDev) {
    mainWindow.loadURL('http://localhost:8000/welcome');     
    } else {
    mainWindow.loadFile(path.join(__dirname, '../public/index.html')); 
    }

}

app.whenReady().then(createWindow);
