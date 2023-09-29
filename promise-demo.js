const prom = new Promise ((resolve, reject) => {
    const x = "hi";
    const y = "heya";
    x === y ? resolve() : reject();
})

prom.
    then (() => {
        console.log ("same phrase");
    }).
    catch (() => {
        console.log ("different phrase");
    });
