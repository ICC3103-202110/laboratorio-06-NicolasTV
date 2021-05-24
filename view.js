const figlet = require("figlet")
const chalk = require("chalk")

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            "Unit Converter App",
            {
                horizontalLayout: "full",
                font: "Katakana"
            }
        )
    )
}

module.exports = {
    getTitle
}