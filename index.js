let ip = ["html", "css", "JAVASCRIPT", "react", "ANGULAR"];

    let op = ip.map(word => {
        return word === word.toUpperCase() 
            ? word.toLowerCase() 
            : word.toUpperCase();
    });
    
    console.log(op);
     