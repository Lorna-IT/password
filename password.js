// generate random password 
function lowerCase() {
    var lcCharset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return lcCharset[Math.floor(Math.random() * lcCharset.length)]
}
    
function upperCase() {
    var ucCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return ucCharset[Math.floor(Math.random() * ucCharset.length)]
}

function numbers () {
    var nmCharset = ["1","2","3","4","5","6","7","8","9","0"]
    return nmCharset[Math.floor(Math.random() * nmCharset.lenght)]
}

function special () {
    var spCharset = ["!","@","#","$","%","^","&","*","(",")","?","=","+"]
    retuen spCharset[Math.floor(Math.random() * spCharset.length)]
}

    // set password length/complexity
    let complexity = document.getElementById("slider").value;

    // possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrxtuvwxyz1234567890!@#$%^&*()_+";

    let password = "";  
    
    // create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * values.length));
    }

    // add password to textbox/
    document.getElementById("display").value = password;

    return password
}
//  console log generate or password? ask eli or dustin
// console.log (generate())
document.getElementById('gen').onclick = generate



// function to copy to clipboard
function copypassword(){
    console.log('copypassword function')
}

document.getElementById("length");

// add password to previousy generated password section 
document.getElementById("lastpasswords").textContent += generate() + "<br />;"