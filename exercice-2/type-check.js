function type_check_v1(typedVariable, type) {
    function comparison(type1, type2) {return type1 == type2;}

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
                else{return comparison("object", type);}
            }
            break;
    }
}

// console.log(type_check_v1("string", "string"))
// console.log(type_check_v1(8, "number"))
// console.log(type_check_v1(true, "boolean"))
// console.log(type_check_v1(undefined, "undefined"))
// console.log(type_check_v1(function(){}, "function"))
// console.log(type_check_v1(null, "null"))
// console.log(type_check_v1(null, "object"))

// console.log(type_check_v1([0,1,2,3,4], "object"))
// console.log(type_check_v1([0,1,2,3,4], "array"))

// console.log(type_check_v1({toto: 1,titi: 2,tata: 3}, "object"))

function type_check_v2(typedVariable, confObj) {
    let checker = false;
    if (typeof confObj.type != "undefined") {
        checker = type_check_v1(typedVariable, confObj.type)
        if (!checker) {return false;}
    }
    if (typeof confObj.value != "undefined") {
        checker = typedVariable == confObj.value;
        if (!checker) {return false;}
    }
    if (typeof confObj.enum != "undefined") {
        checker = confObj.enum.map(function (item) {
            if (typedVariable == item) {return true}
        })
    }
    return checker;
}

let randomObj = {
    type: "object",
    properties: {
        prop1: { type: "number" },
        prop2: { type: "string", enum: ["val1", "val2"] },
        prop3: { type: "object", properties: { prop31: "number"
        } },
        prop4: { type: "array", properties: [ "boolean"]}
    }
}

//console.log(randomObj.properties)