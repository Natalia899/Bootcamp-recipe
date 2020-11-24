const render = new Renderer()

const getReceipes = function () {
    let input = $('#input').val()
    $.get(`/recipes/${input}`, function (data) {
        render.renderData(data)
    })

}

Handlebars.registerHelper('clickHelper', function(food) {
	return JSON.stringify(food);
});

const onFoodClick = food => {
    let firstIngredient = food.ingredients[0]
    alert(firstIngredient)
};

