function castValue(parameter) {
    if (typeof parameter === "string") {
        var stringValue = parameter;
        console.log(stringValue);
    }
    else if (typeof parameter === "number") {
        var numberValue = parameter;
        console.log(numberValue);
    }
    else {
        console.log("Sorry, this is an unsupported type");
    }
}
castValue("Word");
castValue(525);
castValue(false);
