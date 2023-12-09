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

function zad4(n) {
    let n1 = 0 , n2 = 1 , np;
    for (let i = 1; i <= n; i++){
        console.log(n1);
        np = n1 + n2;
        n1 = n2;
        n2 = np;
    }
}

function zad5(n) {
    const star = "*";
    const blank = " ";
    for (let i = 1, l = 0; i < n+1; i++, l++) {
        console.log(blank.repeat(n-i) + star.repeat(i+l) + blank.repeat(n-i));
        if(i==n){
            console.log(blank.repeat(n-1) + star.repeat(1) + blank.repeat(n-1));
        }
    }
}

function zad6(n) {
    const star = " ";
    const blank = "*";
    for (let i = 1, l = 0; i < n+1; i++, l++) {
        if(i==1){console.log(blank.repeat(n*2+1))}
        console.log(blank.repeat(n-i+1) + star.repeat(i+l) + blank.repeat(n-i+1));
        if(i==n){
            console.log(blank.repeat(n) + star.repeat(1) + blank.repeat(n));
        }
    }
}

function zad7(){
    var pr = prompt("Please type the name of the shape of which you want to calculate the area: (square,rectangle,trapeze,triangle)");
    switch (pr) {
        case "square":
            console.log(square());
            break;
            
        case "rectangle":
            console.log(rectangle());
            break;
            
        case "trapeze":
            console.log(trapeze());
            break;
            
        case "triangle":
            console.log(triangle());
            break;

        default:
            break;
    }

    function square(a){a = prompt("a = ");return Math.pow(a,2)} 
    function rectangle(a,b){a = prompt("a = ");b = prompt("b = ");return a*b}
    function trapeze(a,b,h){a = prompt("a = ");b = prompt("b = ");h = prompt("h = ");return ((a+b)/2)*h}
    function triangle(a,h){a = prompt("a = ");h = prompt("h = ");return (a*h)/2}
}

function zad8(shape, vars, callback) {
    const calc_functions = {
        square: (a) => Math.pow(a,2),
        rectangle: (a, b) => a * b,
        trapeze: (a, b, h) => ((a + b) / 2) * h,
        triangle: (a, h) => (a * h) / 2,
    };

    const area = calc_functions[shape](...vars);
    callback(area);
}

function zad9(n) {
    if (n === 0) return [];
    if (n === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= n; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

function zad10(restricted_arr,string){
    const regex = new RegExp(restricted_arr.join('|'), 'gi');
    console.log(string.replace(regex,'*'));
}
// zad 11
var auto = {
    rok: 2000,
    przebieg: 300000,
    cena_wyjsciowa: 5000,
    cena_koncowa: 100000,
    // zad 11.1
    powieksz_o_1000: function() {
        this.cena_wyjsciowa += 1000;
    },

    pomniejsz_o_1000: function() {
        var lataWiek = new Date().getFullYear() - this.rok;
        this.cena_koncowa -= lataWiek * 1000;
    },

    obniz_cene_za_km: function(){
        this.cena_koncowa -= 10000 * (this.przebieg/100000);
    },

    dopisz_przebieg_i_rok: function(przebieg,rok){
        this.przebieg += przebieg;
        this.rok += rok;
        this.pomniejsz_o_1000();
        this.obniz_cene_za_km();
    }
}
// zad 11.2
var samochody = [
    {
        rok: 2020,
        przebieg: 50000,
        cena_wyjsciowa: 30000,
        cena_koncowa: 25000
    },
    {
        rok: 2018,
        przebieg: 70000,
        cena_wyjsciowa: 25000,
        cena_koncowa: 20000
    },
    {
        rok: 2015,
        przebieg: 90000,
        cena_wyjsciowa: 20000,
        cena_koncowa: 15000
    }
];

function dopiszAuto(samochod){
    if(samochod.cena_koncowa > 10000){samochody.push(samochod)} else {
        console.log("za tanie auto :(");
    }
}

function dodajrok(){
    samochody.forEach(obj => {
        obj.rok += 1;
    })
}

// zad 12
class Student {
    constructor(imie,nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = [];
        this.srednia = 0; 
    }
    hello(){
        console.log('Witaj ' + this.imie + ' ' + this.nazwisko +', Twoja średnia ocen to: ' + this.srednia);
    }
    set oceny(ocena) {
        if (ocena instanceof Ocena) {
            this.oceny.push(ocena);
        }
        this.przeliczsrednia();
    }
    przeliczsrednia(){
        var sum = 0;
        this.oceny.forEach(element => {
            sum += element.wartosc;
        });
        this.srednia = sum/this.oceny.length;
    }
    get get_ocenyy(){
        this.oceny.forEach((ocena) => {
            console.log(ocena);
        })
    }
}

class Ocena {
    constructor(przedmiot,wartosc){
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

var s = new Student('daniel','bielinski')
var polski = new Ocena('polski',5)