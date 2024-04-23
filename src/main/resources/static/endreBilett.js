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

    const bilett = {
        id : $("#id").val(),
        film : $("#velgFilm").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnummer : $("#telefon").val(),
        email : $("#email").val()
    }

    $.post("/endreEnBilett",bilett,function(){


    });

}

