// console.log("Hello world !");

function ucfirst(string) {
    letterUpp = string[0].toUpperCase();
    string = string.substr(1);
    return letterUpp + string;
}

// console.log(ucfirst("hello wolrd!"));

function camelCase(string) {
    string = string.toLowerCase();
    do {
        let pos;
        string.indexOf(" ") == -1 ? pos = string.indexOf("_"): pos = string.indexOf(" ");
        console.log(pos);
        let letterToUpp = string.substr(pos + 1, 1);
        string = string.substring(0, pos) + string.substring(pos).replace(letterToUpp, letterToUpp.toUpperCase());
        
        string = string.replace(" ", "");
        string = string.replace("_", "");
    }while (string.indexOf(" ") != -1 && string.indexOf("_") != -1)

    return ucfirst(string);
}

function calmelCase8(string) {
    string = string.toLowerCase();
    do {
        let pos = string.search(/(\W|_)/g);

        let letterToUpp = string.substr(pos + 1, 1);
        string = string.substring(0, pos) + string.substring(pos).replace(letterToUpp, letterToUpp.toUpperCase());

        string = string.substr(0, pos) + string.substr(pos + 1);

    } while (string.search(/(\W|_)/g) != -1);

    return ucfirst(string);
}

console.log(calmelCase8("saLut a tous_je_suis nicolas lebert"));

function prop_access(obj, gateway) {
    
}

let prairie = new Object(),
    animal = new Object(),
        type = new Object(),
            name = "Chien";

// prairie.animal.type.name = "Chien"

// console.log(prairie[animal]);
