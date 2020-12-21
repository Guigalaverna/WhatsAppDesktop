import { Tray, Menu, MenuItem, App, NativeImage, Notification } from 'electron'
import { BrowserWindow } from 'electron/main'
import { join } from 'path'
import { platform } from 'os'


function createTrayIconFor(win: BrowserWindow, app: App) {
  
  let notifyStatus

  function chooseIconTray() {
    switch (platform()) {
      case 'win32':
        return join(__dirname, '../assets/logo.ico')
        break
      case 'linux':
        return join(__dirname, '../assets/logo.png')
        break
    }
  }

  const tray = new Tray(join(__dirname, '../../assets/logo.ico'))
  
  const showWindowMenuItem = new MenuItem({
    label: "Abrir WhatsApp",
    click: () => {
      if(win.isVisible()) {
        win.focus()
      } else {
        win.show()
      }
    }
  })

  const reloadWindow = new MenuItem({
    label: 'Recarregar WhatsApp',
    click: () => {
      if(win.isVisible()) {
        win.reload()
      } else {
        win.focus()
        win.reload()
      }
    }
  })
  
  const quitAppMenuItem = new MenuItem({
    label: 'Sair',
    click: () => {
      win.destroy()
      app.quit()
    }
  })

  const contextMenu = Menu.buildFromTemplate([
    showWindowMenuItem,
    { type: 'separator' },
    reloadWindow,
    { type: 'separator' },
    quitAppMenuItem
  ]);

  tray.setToolTip('WhatsApp Desktop')
  tray.addListener('click', () => {
    if(win.isVisible()) {
      win.focus()
    } else {
      win.show()
    }
  })

  tray.setContextMenu(contextMenu);

  return tray
}

export default createTrayIconFor