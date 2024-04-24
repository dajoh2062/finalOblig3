$(function(){

    const id = window.location.search.substring(1);
    const url = "/hentEnBilett?"+id;
    $.get(url,function(bilett){
        $("#id").val(bilett.id);
        $("#velgFilm").val(bilett.film);
        $("#antall").val(bilett.antall)
        $("#fornavn").val(bilett.fornavn);
        $("#etternavn").val(bilett.etternavn);
        $("#telefon").val(bilett.telefonnummer);
        $("#email").val(bilett.email);
    });
});

function endrebiletten() {
    if (fornavnErFeil===true || etternavnErFeil===true || telefonErFeil===true || emailErFeil===true || antallErFeil===true) {

        alert("Feil")
    }
    else{

        const bilett = {
            id: $("#id").val(),
            film: $("#velgFilm").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnummer: $("#telefon").val(),
            email: $("#email").val()
        }

        $.post("/endreEnBilett", bilett, function () {
            window.location.href = "index.html";


        });
    }
}


let fornavnErFeil=false;
function fornavnError () {
    const fornavn = document.getElementById("fornavn").value;
    const patternFornavn = /^[A-Za-z]+$/;
    if (!patternFornavn.test(fornavn)) {
        document.getElementById("fornavnError").textContent = "Fornavnet er ikke gyldig";
        fornavnErFeil=true;


    }
    else if (patternFornavn.test(fornavn)){
        document.getElementById("fornavnError").textContent = "";
        fornavnErFeil=false;

    }

}

let etternavnErFeil = false;
function etternavnError() {
    const etternavn = document.getElementById("etternavn").value;
    const patternEtternavn = /^[A-Za-z]+$/;
    if (!patternEtternavn.test(etternavn)) {
        document.getElementById("etternavnError").textContent = "Etternavnet er ikke gyldig";
        etternavnErFeil=true;
    } else if (patternEtternavn.test(etternavn)) {
        document.getElementById("etternavnError").textContent = "";
        etternavnErFeil=false;

    }
}
let telefonErFeil = false;
function telefonError(){
    const telefon = document.getElementById("telefon").value;
    const patternTelefon = /^\d{8}$/;
    if (!patternTelefon.test(telefon)) {
        document.getElementById("telefonError").textContent="Nummeret er ikke gyldig";
        telefonErFeil = true;


    }
    else if (patternTelefon.test(telefon)) {
        document.getElementById("telefonError").textContent = "";
        telefonErFeil = false;

    }
}
let emailErFeil = false;
function emailError(){
    const email = document.getElementById("email").value;
    const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z.]$/;
    if (!patternEmail.test(email)) {
        document.getElementById("emailError").textContent="Eposten er ikke gyldig";
        emailErFeil = true;

    }
    else if (patternEmail.test(email)){
        document.getElementById("emailError").textContent="";
        emailErFeil = false;

    }


}
let antallErFeil = false;
function antallError(){
    const antall = document.getElementById("antall").value;
    if (antall>0 && antall<=15) {

        document.getElementById("antallError").textContent="";
        antallErFeil = false;

    }
    else {

        document.getElementById("antallError").textContent = "Skriv antall biletter mellom 1 og 15";
        antallErFeil = true;
    }
}

