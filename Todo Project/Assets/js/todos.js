//Toggle for completed Todo (Grays out and strikes through text of Todo)
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

//Deletes Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
})

//Creates new Todo
$("input[type = 'text'").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val()
        $("ul").append("<li><span><i class='fa fa-trash'></i</span> " + todoText + "</li>")
        $(this).val("")
    }
})

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
})