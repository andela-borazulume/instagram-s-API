// This connects to the submitButton function
var Tags = {
    init: function() {
      Tags.submitButton();
    },

    doTask: function() {
      $('#andela').html('');
      var image = $('#get').val();
      Tags.apiRequest(image);
    },

    //This gets the value of the input and also empties the div
    submitButton: function() {
        $('#press').click(function() {
            $('#andela').html('');
            var image = $('#get').val();
            Tags.apiRequest(image);
          });
      },

          keyPress: function() {
            $('#get').keydown(function(e) {
              if (event.keyCode === 13) {
                Tags.doTask();
              }
            });
          },

          //This function sends request to the server and also gets response or feedback
          apiRequest: function(image) {
            var url = "https://api.instagram.com/v1/tags/" + image + "/media/recent?access_token=1553156994.a1937ca.7057dc93ce664600a71723035d99585c&callback=?";

            $.jsonp({
              url: url,
              dataType: 'jsonp',

              success: function(data, status) {
                $.each(data.data, function(i, image) {
                  var show = data.data[i].images.low_resolution.url;
                      var check = data.data[i].comments.data;
                      if (check.length >= 1) {
                        check = check[0].text;
                        $('#andela').append("<li class='col-md-3'><p class='text'>" + check + "</p><img src=" + show + "></li>");
                      }
                       else {
                        $('#andela').append("<li class='col-md-3'><p class='text'>No comment</p><img src=" + show + "></li>");

                        }
                      });

                    },

                    error: function() {
                      $('#andela').html("<p>Not found</p>");
                    }

                  });
              }
  
          }
      
 $(document).ready(function() {
  Tags.init();
});
