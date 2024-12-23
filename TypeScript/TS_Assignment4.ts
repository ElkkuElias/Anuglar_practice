function castValue(parameter:unknown): void{
    if (typeof parameter === "string"){
        let stringValue:string = parameter as string;
        console.log(stringValue)
    }
    else if (typeof parameter === "number"){
        let numberValue:number = parameter as number;
        console.log(numberValue)
    }
    else{
        console.log("Sorry, this is an unsupported type")
    }
    
}

castValue("Word"); 
castValue(525) 
castValue(false)