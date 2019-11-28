console.log("Hello world !");

function ucfirst(string) {
    letterUpp = string[0].toUpperCase();
    string = string.substr(1);
    return letterUpp + string;
}

console.log(ucfirst("hello wolrd!"));

function camelCase(string) {
    string = string.toLowerCase();
    do {
        let pos;
        string.indexOf(" ") == -1 ? pos = string.indexOf("_") + 1 : pos = string.indexOf(" ") + 1;
        let letterToUpp = string.substr(pos, 1);
        string = string.substring(0, pos) + string.substring(pos).replace(letterToUpp, letterToUpp.toUpperCase());
        
        string = string.replace(" ", "");
    }while (string.indexOf(" ") != -1 && string.indexOf("_") != -1)
    return ucfirst(string);
}

console.log(camelCase("saLut a tous_je_suis nicolas lebert"));

function prop_access(obj, gateway) {
    
}

let prairie = new Object(),
    animal = new Object(),
        type = new Object(),
            name = "Chien";

// prairie.animal.type.name = "Chien"

console.log(prairie[animal]);
