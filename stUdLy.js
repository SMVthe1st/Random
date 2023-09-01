const studly = (z) => {
    let x = "";
    for (const i in z) {
        let y = z[i];
        y = (1 - Math.random() >= 0.5) ? y.toUpperCase() : y.toLowerCase();
        x += y;
    }
    return x;
}

console.log(studly("studly caps"));
