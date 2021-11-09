window.onload = alaphelyzet();

function validalas(){
    let szoveg = document.getElementById("mintaszoveg").value;
    let betumeret = document.getElementById("betumeret").value;

    if (szoveg.value === "") {
        document.getElementById("hibaSzoveg").innerHTML = "Kötelező a szöveg mező megadása!";
        szoveg.classList.add('is-invalid');
    } else if (szoveg.value !== "") {
        document.getElementById('hibaSzoveg').innerHTML = "";
        szoveg.classList.remove('is-invalid');
    }

    if (betumeret.value === "") {
        document.getElementById("hibaBetumeret").innerHTML = "Kötelező a betűméret mező megadása!";
        szoveg.classList.add('is-invalid');

    } else if (isNaN(betumeret.value)) {
        document.getElementById('hibaBetumeret').innerHTML = "A betűméretnek számnak kell lennie!";
        szoveg.classList.remove('is-invalid');


    } else if (szoveg.value !== "") {
        document.getElementById('hibaBetumeret').innerHTML = "";
        szoveg.classList.remove('is-invalid');
    }
}

function alaphelyzet(){
    let szoveg = document.getElementById("mintaszoveg")
    let defSzoveg = szoveg.defaultValue;
    let currSzoveg = szoveg.value;
    if (defSzoveg !== currSzoveg) {
        szoveg.value = "";
    } 

    let betumeret = document.getElementById("betumeret")
    let defBetu = betumeret.defaultValue;
    let currBetu = betumeret.value;
    if (defBetu !== currBetu) {
        betumeret.value = "";
    }

    let szovegszin = document.getElementById("szovegszin")
    let defSzovegszin = szovegszin.defaultValue;
    let currSzovegszin = szovegszin.value;
    if (defSzovegszin !== currSzovegszin) {
        szovegszin.value = "#000000";
    } 

    let hatterszin = document.getElementById("hatterszin")
    let defHatterszin = hatterszin.defaultValue;
    let currHatterszin = hatterszin.value;
    if (defHatterszin !== currHatterszin) {
        hatterszin.value = "#FFFFFF"; 
    }

    let kiiras = document.getElementById("kiiras");
    kiiras.innerHTML = "Árvíztűrő tükörfúrógép";

    document.getElementById('btn').addEventListener('click', alaphelyzet);
}

function inputSzoveg() {
    let szoveg = document.getElementById("mintaszoveg").value;
    document.getElementById("kiiras").innerHTML = szoveg;
}

function inputBetu() {
    let betu = document.getElementById("betumeret").value;
    document.getElementById("kiiras").style.fontSize = betu +"pt";
}

function inputSzovegszin() {
    let szovegszin = document.getElementById("szovegszin").value;
    document.getElementById("kiiras").style.color = szovegszin;
}

function inputHatterszin() {
    let hatterszin = document.getElementById("hatterszin").value;
    document.getElementById("kiiras").style.background = hatterszin;
}

function init() {
    document.getElementById('mintaszoveg').addEventListener("input",inputSzoveg);
    document.getElementById('betumeret').addEventListener("input",inputBetu);
    document.getElementById('szovegszin').addEventListener("input",inputSzovegszin);
    document.getElementById("hatterszin").addEventListener("input",inputHatterszin);
    document.getElementById("btn").addEventListener("click",alaphelyzet);

}

document.addEventListener("DOMContentLOaded", btn);

