const render = new Renderer()



const getReceipes = function () {
    let input = $('#input').val()
    $.get(`/recipes/${input}`, function (data) {
      //  console.log(data);
        render.renderData(data)
    })

}

Handlebars.registerHelper('clickHelper', function() {
	return JSON.stringify(player);
});

const onPlayerClick = player => {
	console.log(player);
};

