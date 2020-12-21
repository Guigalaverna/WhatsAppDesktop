import { app } from 'electron'

import createWindow from './includes/window'
import createTrayIconFor from './includes/tray'

let tray
let win

const isFirstInstance = app.requestSingleInstanceLock()

if (!isFirstInstance) {
  app.quit()
}

const startApp = () => {
  win = createWindow()
  tray = createTrayIconFor(win, app);
}

app.whenReady().then(startApp)
app.on('window-all-closed', () => app.quit())