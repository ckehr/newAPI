$(function(e) {

    $("input[name='Associated Press']:radio").on("click", function(e) {
    
        $.ajax({
            url: "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=c4f3cb7be7a547f3a70f4259b1be3e99",
            dataType: "json",
            success: function(data) {
                console.log(data);
               




                for (var i = 0; i < data.articles.length; i += 1) {

                    $("#search-results").append("<li> <strong>Title: </strong>" + data.articles[i].title + "</li>")
                    $("#search-results").append("<li> <strong>URL: </strong><a href='" + data.articles[i].url + "'>" + data.articles[i].url + "</a></li>")
                    $("#search-results").append("<li> <strong>Published: </strong>" + data.articles[i].publishedAt + "</li>")
                    
                }
            }
        })


    })


})
$(function() {

    $("input[name='BBC']:radio").on("click", function() {

        $.ajax({
            url: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=c4f3cb7be7a547f3a70f4259b1be3e99",
            dataType: "json",
            success: function(data) {
                console.log(data);
                




                for (var i = 0; i < data.articles.length; i += 1) {

                                       $("#search-results").append("<li> <strong>Title: </strong>" + data.articles[i].title + "</li>")
                    $("#search-results").append("<li> <strong>URL: </strong><a href='" + data.articles[i].url + "'>" + data.articles[i].url + "</a></li>")
                    $("#search-results").append("<li> <strong>Published: </strong>" + data.articles[i].publishedAt + "</li>")
                    
                }
            }
        })


    })


})
$(function() {

    $("input[name='ars-technica']:radio").on("click", function() {

        $.ajax({
            url: "https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=c4f3cb7be7a547f3a70f4259b1be3e99",
            dataType: "json",
            success: function(data) {
                console.log(data);
                



                for (var i = 0; i < data.articles.length; i += 1) {

                    $("#search-results").append("<li> <strong>Title: </strong>" + data.articles[i].title + "</li>")
                    $("#search-results").append("<li> <strong>URL: </strong><a href='" + data.articles[i].url + "'>" + data.articles[i].url + "</a></li>")
                    $("#search-results").append("<li> <strong>Published: </strong>" + data.articles[i].publishedAt + "</li>")
                    

                }
            }
        })


    })


})