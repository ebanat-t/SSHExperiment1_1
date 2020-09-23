
function getNow () {

    var now = new Date()
    var year = now.getUTCFullYear()
    var month = now.getUTCMonth()
    var date = now.getUTCDate()
    var hour = now.getUTCHours()
    var min = now.getUTCMinutes()
    var sec = now.getUTCSeconds()
    var msec = now.getUTCMilliseconds()

    var nowArray = [[year, month, date, hour, min, sec, msec], [4, 2, 2, 2 ,2, 2, 3]]
    var timeStr = ''

    for(let i in nowArray[0]) {
        timeStr = timeStr + zeroPadding(nowArray[0][i], nowArray[1][i])
    }

    return timeStr

}  

function zeroPadding(num, length) {
    return ('0000000000' + num).slice(-length)
}

export default { getNow }