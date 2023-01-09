function myadd() {
    //console.log('I am here')
    console.log(document.getElementById('first').value)
    console.log(document.getElementById('second').value)
    var x = Number(document.getElementById('first').value)
    var y = Number(document.getElementById('second').value)
    var z = x + y
    z = z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML =
        `<h2>Result:` + String(z) + `</h2>`

}

function mysub() {
    console.log(document.getElementById('first').value)
    console.log(document.getElementById('second').value)
    var x = Number(document.getElementById('first').value)
    var y = Number(document.getElementById('second').value)
    var z = x - y
    z = z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML =
        `<h2>Result:` + String(z) + `</h2>`

}
function mymult() {
    console.log(document.getElementById('first').value)
    console.log(document.getElementById('second').value)
    var x = Number(document.getElementById('first').value)
    var y = Number(document.getElementById('second').value)
    var z = x * y
    z = z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML =
        `<h2>Result:` + String(z) + `</h2>`
}
function mydivide() {
    console.log(document.getElementById('first').value)
    console.log(document.getElementById('second').value)
    var x = Number(document.getElementById('first').value)
    var y = Number(document.getElementById('second').value)
    var z = x / y
    z = z.toFixed(2)
    console.log(z)
    document.getElementById('Result').innerHTML =
        `<h2>Result:` + String(z) + `</h2>`
}
