
$(document).ready(function(){

    var content = document.getElementById('results');
    //search for masculine name
    $(".male").on("click", function() {
        $.getJSON('https://www.behindthename.com/api/random.json?usage=eng&gender=m&key=ba498830053',function(data){
            var name = data.names[0];
            $(content).replaceWith("<div id='results'>"+ name +"</div>")
            //Speaks name
            if(responsiveVoice.voiceSupport()) {
                responsiveVoice.speak(name, "UK English Male");
                }
            //Sets variable name content again
            content = document.getElementById('results');
            //$(content).append(data.names[0]);
        });
    });
    //search for feminine name
    $(".female").on("click", function() {
        $.getJSON('https://www.behindthename.com/api/random.json?usage=eng&gender=f&key=ba498830053',function(data){
            var name = data.names[0];
            $(content).replaceWith("<div id='results'>"+ name +"</div>")
            //Speaks name
            if(responsiveVoice.voiceSupport()) {
                responsiveVoice.speak(name, "UK English Female");
                }
             //Sets variable name content again
            content = document.getElementById('results');
            //$(content).append(data.names[0]);
        });
    });
    $("button").click(function() {
        if ( $(this).css("transform") == 'none'){
            $(this).css("transform","rotateY(360deg")
        }  else{
                $(this).css("transform", "");
            };
            $(this).css("transform") == 'none'
    });

});
