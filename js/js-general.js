$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'utils/' + $(this).data('include') + '.html'
        $(this).load(file)
    })

})


