const x = 3;
const y = 4;
const z = 5;
const a = 0;
const b = 100;
const c = 3;

function zad1(a,b,c){
    const triangle = [a,b,c].sort((a,b) => a - b);
    return Math.pow(triangle[0],2) + Math.pow(triangle[1],2) === Math.pow(triangle[2],2);
}

function zad2(a,b,c){
    const results = [];
    for (let index = a; index <= b; index++) {
        if (index % c === 0){
            results.push(index);
        }
    }
    results.forEach(element => {
        console.log(element);
    });
}

function zad3(a) {
    const arr = [];

    for (let x = 0; x < a; x++) {
        arr[x] = [];
        for (let y = 0; y < a; y++) {
            arr[x][y] = (x+1)*(y+1);
        }
    }
    console.log(arr);
}

function zad4(n) { // do naprawienia
    if (n < 2) {
        console.log(n);
        return n;
    } else {
        console.log(n);
        return zad4(n - 1) + zad4(n - 2);
    }
}

function zad5(n) {
    const star = "*"
    for (let x = 0; x < n; x++) {
        console.log(star.repeat(x+1));
    }
}