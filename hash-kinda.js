const hash = (input, num) => {
    let d = "";
    for (let i = num; i > 0; i--) {
        let b = input[~~(Math.random()*(input.length))];
        b = (1 - Math.random() >= 0.5) ? b.toUpperCase() : b.toLowerCase();
        d += b;
    }            
    return d.split("").join("");
};

console.log(hash("qwertyuiopasdfghjklzxcvbnm1234567890", 16));
