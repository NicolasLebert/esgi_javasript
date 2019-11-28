// console.log("Hello world !");

function ucfirst(string) {
    letterUpp = string[0].toUpperCase();
    string = string.substr(1);
    return letterUpp + string;
}

// console.log(ucfirst("hello wolrd!"));

function camelCase (string) {
    if (typeof string === "string") {
        string = string.toLowerCase();
        do {
            let pos = string.search(/(\W|_)/g);
    
            let letterToUpp = string.substr(pos + 1, 1);
            string = string.substring(0, pos) + string.substring(pos).replace(letterToUpp, letterToUpp.toUpperCase());
    
            string = string.substr(0, pos) + string.substr(pos + 1);
    
        } while (string.search(/(\W|_)/g) != -1);
        
        return ucfirst(string);
    }else{ return "";}
}

console.log(camelCase("toggle case is the coolest"));

function prop_access(obj, gateway) {
    
}

let prairie = new Object(),
    animal = new Object(),
        type = new Object(),
            name = "Chien";

// prairie.animal.type.name = "Chien"

// console.log(prairie[animal]);
