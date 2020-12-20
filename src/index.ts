import { app, BrowserWindow } from 'electron'

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.setMenuBarVisibility(false)

  win.loadURL('https://web.whatsapp.com', { userAgent })

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})