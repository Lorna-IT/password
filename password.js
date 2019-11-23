// generate random password 
function generate(){
   
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