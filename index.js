const fs = require('fs');

// fs.mkdirSync("./assets")

const eineFunktion = (a) => {
    return a
}

// eineFunktion();

fs.readFile("./assets", (err, data) => {
    if (err) {
        fs.writeFile("./assets/neuerText.txt", eineFunktion("Ich bin eine Textdatei"), (err, data) => {
            if (err) {
                console.log("Das hat leider nicht geklappt")
                return
            }
            console.log(data);
        })
    }
    console.log(data);
})

