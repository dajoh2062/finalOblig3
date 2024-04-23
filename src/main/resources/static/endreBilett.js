$(function(){

    const id = window.location.search.substring(1);
    const url = "/hentEnKunde?"+id;
    $.get(url,function(kunde){
        $("#id").val(kunde.id);
        $("#navn").val(kunde.navn);
        $("#adresse").val(kunde.adresse);
    });
});

function endreKunden() {
    const kunde = {
        id : $("#id").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val()
    }
    $.post("/endreEnKunde",kunde,function(){
        window.location.href = 'index.html';
    });
}

