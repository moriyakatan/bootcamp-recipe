const render = function(ingredient) {
    $('#ingredient').empty()
    const source = $('#ingredient-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ingredient}); 
$('#ingredient').append(newHTML)
}