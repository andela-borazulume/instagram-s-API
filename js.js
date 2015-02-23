// This connects to the submitButton function
var Tags = {
  init: function(){
    Tags.submitButton();
 },

//This gets the value of the input and also empties the div
  submitButton: function(){
     $('#press').click(function(){
      $('#andela').html('');
       var image = $('#get').val();
      Tags.apiRequest(image);
    });
  },

//This function sends request to the server and also gets response or feedback
  apiRequest: function(image){
    var url = "https://api.instagram.com/v1/tags/"+image+"/media/recent?access_token=1553156994.a1937ca.7057dc93ce664600a71723035d99585c&callback=?";
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data,status){
        
        $.each(data.data,function(i,image){
        var show = data.data[i].images.low_resolution.url;
        console.log(status);

        $('#andela').append("<img src="+show+">");
        });
      
      }
    });
  }
}







$(document).ready(function(){
  Tags.init();
});