import { BrowserWindow } from "electron"
import { join } from "path";

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    icon: join(__dirname, '../../assets/logo.ico'),
    webPreferences: {
      nodeIntegration: false,
    }
  })

  win.on('close', (event) => { 
    event.preventDefault();
    win.hide();
  });


  win.setMenuBarVisibility(false)
  win.setTitle('WhatsApp Desktop')
  win.loadURL('https://web.whatsapp.com', { userAgent })

  return win
}

export default createWindow