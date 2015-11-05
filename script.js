
var usuario ;


$("#botton").on("click", function(){
    $("#articulos").html("");
    console.log("button click fired");
    var usuario = $(".va").val();
    $.getJSON(
        "http://es.wikipedia.org/w/api.php?action=query&prop=extracts|info&format=json&exlimit=10&exintro=&inprop=url&generator=search&gsrsearch="+usuario+"&callback=?",
            
            function(resp){
                console.log(resp);
                var busca = resp.query.pages;
                for ( var x in busca){
                    console.log("extract"+busca[x].extract);
                    console.log("extract"+busca[x].title);
                    console.log("extract"+busca[x].fullurl);
                    var li1 = "<li><a href='"+busca[x].fullurl+"'>"+busca[x].title+"</a><br>"+busca[x].extract+"<br></li>";
                    //var li2 = "<li>""</li>";
                    //var li3 = "<a>"+busca[x].fullurl+"</a>";
                    
                    $("#articulos").append(li1);
                                       
                }
                    
               
               });
    
    
        
});

