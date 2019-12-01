// generate random password 
function lowerCase() {
    var lcCharset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return lcCharset
    //[Math.floor(Math.random() * lcCharset.length)]
}
    
function upperCase() {
    var ucCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return ucCharset
    //[Math.floor(Math.random() * ucCharset.length)]
}

function numbers () {
    var nmCharset = ["1","2","3","4","5","6","7","8","9","0"]
    return nmCharset
    //[Math.floor(Math.random() * nmCharset.length)]
}

function special () {
    var spCharset = ["!","@","#","$","%","^","&","*","(",")","?","=","+"]
    return spCharset
    //[Math.floor(Math.random() * spCharset.length)]
}

var finalPass1 = ""
var fns = []

// var finalPass2 = ""
// var finalPass3 = ""

var pLength = 8

var lcInclude = false
var ucInclude = false
var nmInclude = false
var spInclude = false

function uInput () {

    fns = []
    if (document.getElementById("lcIncludeBox").checked) {
        lcInclude = true
    } else {
        lcInclude = false
    }
    if (document.getElementById("ucIncludeBox").checked) {
        ucInclude = true
    } else {
        ucInclude = false
    }    
    if (document.getElementById("nmIncludeBox").checked) {
        nmInclude = true    
    } else {
        nmInclude = false
    }
    if (document.getElementById("spIncludeBox").checked) {
        spInclude = true 
    } else {
        spInclude = false
    }
    createPass()
}
function sanitize() {
    pLength = document.getElementById("pLengthBox").value
    if (pLength <8 || pLength > 128) {
        alert("please select more options")
    } else {
        uInput()
    }
    //finalPass1.length = 0;
}

function updatePW(myString){
    document.getElementById("display").value = myString
}

function createPass () {
    
    finalPass1 = ''

    if (lcInclude === true) {
        fns.push(lowerCase())
    }
    if (ucInclude === true) {
        fns.push(upperCase())
    }
    if (nmInclude === true) {
        fns.push(numbers())   
    } 
    if (spInclude === true) {
        fns.push(special())
    } 

    
    fns = fns.flat()
    
    // for loop
    for (i = 0; i < pLength; i++) {
        var rando = Math.floor(Math.random() * fns.length)
        finalPass1 += fns[rando]
    }
    console.log(finalPass1)
    if (length < 1)
    updatePW(finalPass1)
}

// function convert () {
//     finalPass2 = (finalPass1.toString())
//     finalPass3 = (finalPass2.replace(""))
// }
// function releasePass() {
//     (document.getElementById("passOut").innerHTML = finalPass3)
//     (document.getElementById("passOut").style.display = "inline-block");
// }
