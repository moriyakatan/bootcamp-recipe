
//input
const ingredSearch = function() {
    let input = $('#npt').val()
    $.get(`/sanity/${input}`, function(data) {
        //render(data)
        console.log(data)
        //$("#container").empty()
    })
    //console.log(data)
}




