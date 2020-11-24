class Renderer {
    renderData(data) {
      const source = $('#recipes-template').html()
      const template = Handlebars.compile(source)
      const recipe = template({data})
      $('.recipe-container').empty().append(recipe)
    }
  }
  