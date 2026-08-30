const tipos = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".ico": "image/x-icon"
};

//IMPORT
const files = require("fs")
const path = require("path")

const {app, BrowserWindow} = require("electron")
app.whenReady().then(()=>{
    const window = new BrowserWindow({
        width: 800,
        height: 500,
        icon: path.join(__dirname,"./img/menu/icon.png"),
    });
    window.loadFile("./index.html")
    window.setMenuBarVisibility(false);
    
})
