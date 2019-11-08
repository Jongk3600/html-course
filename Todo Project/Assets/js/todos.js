//Toggle for completed Todo (Grays out and strikes through text of Todo)
$("li").click(function () {
    $(this).toggleClass("completed");
})

//Deletes Todo
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
})