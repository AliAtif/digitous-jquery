$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${$("input").val()}`,
            success: function (data) {
                $("#pokemon").text(data.name);
                $("#type").text(data.types[0].type.name);
                $("#stripe").html(`<img src="${data.sprites.front_default}"></img>`);
            }
        });
    })
})