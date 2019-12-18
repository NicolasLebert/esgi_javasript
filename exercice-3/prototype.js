String.prototype.ucfirst = function ucfirst() {
    let letterUpp = this[0].toUpperCase();
    let cutedString = this.substr(1);
    return letterUpp + cutedString;
}

console.log("hello wolrd!".ucfirst());