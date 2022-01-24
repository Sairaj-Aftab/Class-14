

function dataset(key, product) {
   let strr = JSON.stringify(product);
   localStorage.setItem(key, strr);
}

function dataget(key) {
    let gett = localStorage.getItem(key);

    return gett ? JSON.parse(gett) : false;
}

// ----------Form..........//

function teSet(key, variable) {
    let strr = JSON.stringify(variable);
    localStorage.setItem(key, strr);
}

function teGet(key) {
    let get = localStorage.getItem(key)

    return get ? JSON.parse(get) : false;
}