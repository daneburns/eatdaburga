const devourButton = $(".devour")
const addBurger = $(".addBurger")

devourButton.on("click", function(e){
    const id = $(this).attr("id")
    $.ajax("/api/devour/" + id, {
        type: "PUT",
    }).then(function(e) {
        console.log('nice')
        location.reload();
    });
})

addBurger.on("click", function(e){
    event.preventDefault()
    const val = $(".burgerForm").val()
    $.ajax("/api/addburg/" + val, {
        type: "POST",
    }).then(function(e) {
        location.reload();
    });
})