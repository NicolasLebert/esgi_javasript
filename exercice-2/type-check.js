function type_check_v1(typedVariable, type) {
    function comparison(type1, type2) {
        console.log(type1 + " | " + type2);
        return type1 == type2;
    }

    console.log(typeof typedVariable);

    switch (typeof typedVariable) {
        case "string":
            return comparison("string", type);
            break;
    
        case "number":
            return comparison("number", type);
            break;

        case "boolean":
            return comparison("boolean", type);
            break;

        case "undefined":
            return comparison("undefined", type);
            break;
        
        case "function":
            return comparison("function", type);
            break;

        case "object":
            if (Array.isArray(typedVariable)) {return comparison("array", type);}
            else{
                if (typedVariable == null) {return comparison("null", type);}
                else{return comparison("Object", type);}
            }
            break;
    }
}

console.log(type_check_v1("string", "string"))
console.log(type_check_v1(8, "number"))
console.log(type_check_v1(true, "boolean"))
console.log(type_check_v1(undefined, "undefined"))
console.log(type_check_v1(function(){}, "function"))
console.log(type_check_v1(null, "null"))
console.log(type_check_v1([0,1,2,3,4], "array"))
console.log(type_check_v1(new Object({toto: 123}), "Object"))