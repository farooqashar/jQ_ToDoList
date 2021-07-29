$("ul").on("click", "li",function(){
    $(this).toggleClass("done");
});

$("ul").on("click","span",function(event){

    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if(event.which === 13) {
        let task = $("input").val();
        $("ul").append("<li><span class='delete'><i class='material-icons'>delete</i></span>" + task + "</li>");
        $("input").val("");
    }
});

$("#addition").click(function(){
    $("input").fadeToggle();
});
