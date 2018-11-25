var DepenseV = [500 + " €<br>", 20 + " €<br>", 0 + " €<br>", 90 + " €<br>", 110 + " €<br>"
                , 80 + " €<br>", 45 + " €<br>", 19 + " €<br>", 70 + " €<br>", 50 + " €<br>", 200 + " €<br>", 180 + " €<br>"
                , 30 + " €<br>"];
var DepenseI = ["loyer<br>", "charge<br>", "renboursement<br>", "eau<br>", "gaz<br>", "électricité<br>", "internet<br>"
                , "assurance habitation<br>", "assurance vehicule<br>", "mutuel santé<br>", "course au mois<br>"
                ,"essence<br>", "sortie<br>"];
var RecetteV = [1000 + " €<br>", 500 + " €<br>", 0 + " €<br>", 0 + " €<br>",];
var RecetteI = ["le salaire<br>", "les aides<br>", "les rentes<br>", "autres<br>"];
var EpargneV = [];
var EpargneI = [];
var depenseChiffre;
var recetteChiffre;
var epargneChiffre;
var sommeDep = 0;
var sommeRec = 0;
var sommeEpa = 0;

function depense() {
// afiche les valeur et cacule le toal des depense
    for (let i = 0; i < DepenseV.length; i++) {
        document.getElementById('dep-valeur').innerHTML = `,${DepenseV}`;
        depenseChiffre = parseInt(DepenseV[i]);
        sommeDep += depenseChiffre;
        document.getElementById('total-dep').innerHTML = `${sommeDep} €`;
    }
    for (let i = 0; i < DepenseI.length; i++) {
        document.getElementById('dep-intitule').innerHTML = `${DepenseI}`;
    }

}

function recette() {


// afiche les valeur et cacule le toal des Recette
    for (let i = 0; i < RecetteV.length; i++) {
        document.getElementById('rec-valeur').innerHTML = `,${RecetteV}`;
        recetteChiffre = parseInt(RecetteV[i]);
        sommeRec += recetteChiffre;
        document.getElementById('total-rec').innerHTML = `${sommeRec} €`;
    }
    for (let i = 0; i < RecetteI.length; i++) {
        document.getElementById('rec-intitule').innerHTML = `${RecetteI}`;
    }

}

function epargne() {


// afiche  les valeur et cacule le total des epargne
    for (let i = 0; i < EpargneV.length; i++) {
        document.getElementById('epa-valeur').innerHTML = `<br>,${EpargneV}`;
        epargneChiffre = parseInt(EpargneV[i]);
        sommeEpa += epargneChiffre;
        document.getElementById('total-rec').innerHTML = `${sommeEpa} €`;
    }
    for (let i = 0; i < RecetteI.length; i++) {
        document.getElementById('epa-intitule').innerHTML = `${EpargneI}`;
    }
}


// evenement sur le bouton send des  depense
document.getElementById('ajt-dep').addEventListener("click", function () {
    var inputIntDep = document.getElementById('ajIntDep').value;
    var inputValDep = document.getElementById('ajValDep').value;

    if (inputIntDep !== "" && inputValDep !== "" && !isNaN(inputValDep)) {
        DepenseV.push(`${inputValDep} €<br>`);
        DepenseI.push(`${inputIntDep}<br>`);
        document.getElementById('dep-valeur').innerHTML = `,${DepenseV}`;
        document.getElementById('dep-intitule').innerHTML = `${DepenseI}`;
        var inputValDepC = parseInt(inputValDep);
        sommeDep = sommeDep + inputValDepC;
        document.getElementById('total-dep').innerHTML = `${sommeDep} €`;
    }
    var sommeBenefice = sommeRec + sommeEpa;
    var resultat = sommeBenefice - sommeDep;
    document.getElementById('resultat').innerHTML = `${resultat}€`;
    resultatP();
});


//evenement sur le bouton send des  Recette
document.getElementById('ajt-rec').addEventListener("click", function () {
    var inputIntRec = document.getElementById('ajIntRec').value;
    var inputValRec = document.getElementById('ajValRec').value;

    if (inputIntRec !== "" && inputValRec !== "" && !isNaN(inputValRec)) {
        RecetteV.push(`${inputValRec} €<br>`);
        RecetteI.push(`${inputIntRec}<br>`);

        document.getElementById('rec-valeur').innerHTML = `,${RecetteV}`;
        document.getElementById('rec-intitule').innerHTML = `${RecetteI}`;
        var inputValRecC = parseInt(inputValRec);
        sommeRec = sommeRec + inputValRecC;
        document.getElementById('total-rec').innerHTML = `${sommeRec} €`;
    }

    var sommeBenefice = sommeRec + sommeEpa;
    var resultat = sommeBenefice - sommeDep;
    document.getElementById('resultat').innerHTML = `${resultat}€`;
    resultatP();


});

//evenement sur le bouton send des  Epargne
document.getElementById('ajt-epa').addEventListener("click", function () {
    var inputIntEpa = document.getElementById('ajIntEpa').value;
    var inputValEpa = document.getElementById('ajValEpa').value;

    if (inputIntEpa !== "" && inputValEpa !== "" && !isNaN(inputValEpa)) {
        EpargneV.push(`${inputValEpa} €<br>`);
        EpargneI.push(`${inputIntEpa}<br>`);

        document.getElementById('epa-valeur').innerHTML = `,${EpargneV}`;
        document.getElementById('epa-intitule').innerHTML = `${EpargneI}`;
        var inputValEpaC = parseInt(inputValEpa);
        sommeEpa = sommeEpa + inputValEpaC;
        document.getElementById('total-epa').innerHTML = `${sommeEpa} €`;

    }
    var sommeBenefice = sommeRec + sommeEpa;
    var resultat = sommeBenefice - sommeDep;
    document.getElementById('resultat').innerHTML = `${resultat}€`;
    resultatP();
});

depense();
recette();
epargne();
resultatP();


var sommeBenefice = sommeRec + sommeEpa;
var resultat = sommeBenefice - sommeDep;
document.getElementById('resultat').innerHTML = `${resultat}€`;

function resultatP() {
    var sommeBenefice = sommeRec + sommeEpa;
    var resultat = sommeBenefice - sommeDep;
    if (resultat < 0) {
        document.getElementById('resultatPhrase').innerHTML = `ATENTION!!! votre debit s'eleve a ${resultat}€`;
        document.getElementById("resultat-main-box").style.backgroundColor = "red";
        document.getElementById("resultat-main-box").style.color = "white";
        document.getElementById("resultat-main-box").style.animation = "none";
        document.getElementById("gif").style.display = "none";
        document.getElementById("buy").style.display = "none";
    }
    else if (resultat > 0) {
        document.getElementById('resultatPhrase').innerHTML = `il vous reste ${resultat}€`;
        document.getElementById("resultat-main-box").style.backgroundColor = "green";
        document.getElementById("resultat-main-box").style.color = "white";
        document.getElementById("resultat-main-box").style.animation = "none";
        if (resultat < 1000) {
            document.getElementById("buy").innerHTML = " tu devrais mettre de largent de coté";
            document.getElementById("resultat-main-box").style.animation = "none";
            document.getElementById("gif").style.display = "none";
            document.getElementById("buy").style.display = "block";
        }
        else if (resultat < 10000) {
            document.getElementById("buy").innerHTML = " achete toi une voiture";
            document.getElementById("resultat-main-box").style.animation = "none";
            document.getElementById("gif").style.display = "none";
            document.getElementById("buy").style.display = "block";
        }
        else if (resultat < 1000000) {
            document.getElementById("buy").innerHTML = " tu a pensé a t'acheté une maison";
            document.getElementById("resultat-main-box").style.animation = "none";
            document.getElementById("gif").style.display = "none";
            document.getElementById("buy").style.display = "block";
        }
        else {
            document.getElementById("buy").innerHTML = " vas y profite tu est millionaire";
            document.getElementById("resultat-main-box").style.animation = "a-sec 2s infinite";
            document.getElementById("gif").style.display = "block";
            document.getElementById("buy").style.display = "block";

        }
    } else {
        document.getElementById('resultatPhrase').innerHTML = `vous ete a sec`;
        document.getElementById("resultat-main-box").style.backgroundColor = "white";
        document.getElementById("resultat-main-box").style.color = "black";
        document.getElementById("resultat-main-box").style.animation = "none";
        document.getElementById("gif").style.display = "none";
        document.getElementById("buy").style.display = "none";


    }
}

function reset() {
    DepenseV.splice(0, DepenseV.length);
    DepenseI.splice(0, DepenseI.length);
    RecetteV.splice(0, RecetteV.length);
    RecetteI.splice(0, RecetteI.length);
    EpargneV.splice(0, EpargneV.length);
    EpargneI.splice(0, EpargneI.length);
    document.getElementById('dep-valeur').innerHTML = `,${DepenseV}`;
    document.getElementById('dep-intitule').innerHTML = `${DepenseI}`;
    document.getElementById('rec-valeur').innerHTML = `,${RecetteV}`;
    document.getElementById('rec-intitule').innerHTML = `${RecetteI}`;
    document.getElementById('epa-valeur').innerHTML = `,${EpargneV}`;
    document.getElementById('epa-intitule').innerHTML = `${EpargneI}`;
    sommeDep = 0;
    sommeRec = 0;
    sommeEpa = 0;
    resultat = 0
    document.getElementById('total-dep').innerHTML = `${sommeDep} €`;
    document.getElementById('total-rec').innerHTML = `${sommeRec} €`;
    document.getElementById('total-epa').innerHTML = `${sommeEpa} €`;
    resultatP();
    document.getElementById('resultat').innerHTML = `${resultat}€`;


}

document.getElementById('reset').addEventListener("click", function () {
    reset();
});

