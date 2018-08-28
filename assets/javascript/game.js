$(document).ready(function () {


    function getRandomNumb() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      }
    
    function getRandomCryst() {
        return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      }

      

        var score=0;
        var wins=0;
        var looses=0;
        var numerornd=getRandomNumb();
        $("#rndNumber").html(numerornd);
        
        var cristal1=getRandomCryst();
        var cristal2=getRandomCryst();
        var cristal3=getRandomCryst();
        var cristal4=getRandomCryst();
  
        $("#cristal1").val(cristal1);
        $("#cristal2").val(cristal2);
        $("#cristal3").val(cristal3);
        $("#cristal4").val(cristal4);
        score=0;
        $("#score").html(score);
      
        function reset(){
            console.log("Entre a la funcion RESET");
            numerornd=getRandomNumb();
            $("#rndNumber").html(numerornd);
            score=0;
            $("#score").html(score);
            cristal1=getRandomCryst();
            cristal2=getRandomCryst();
            cristal3=getRandomCryst();
            cristal4=getRandomCryst();
  
            $("#cristal1").val(cristal1);
            $("#cristal2").val(cristal2);
            $("#cristal3").val(cristal3);
            $("#cristal4").val(cristal4);
    
          }
      
    $("#cristal1").on("click",function(){

        score+=parseInt($("#cristal1").val());
        $("#score").html(score);

        if (score==numerornd){
            wins++;
            $("#anuncios").html("GANASTE");
            $("#wins").html(" " + wins);
            reset();
            

        }
        if (score>numerornd){
            looses++;
            $("#anuncios").html("PERDISTE");
            $("#looses").html(" " + looses);
            reset();

           
    
        }
    });

    $("#cristal2").on("click",function(){
        score+=parseInt($("#cristal2").val());
        $("#score").html(score);
        if (score==numerornd){
            wins++;
            $("#anuncios").html("GANASTE");
            $("#wins").html(" " + wins);
            reset();

           

        }
        if (score>numerornd){
            looses++;
            $("#anuncios").html("PERDISTE");
            $("#looses").html(" " + looses);
            reset();

         
    
        }
    });

    $("#cristal3").on("click",function(){
        score+=parseInt($("#cristal3").val());
        $("#score").html(score);
        if (score==numerornd){
            wins++;
            $("#anuncios").html("GANASTE");
            $("#wins").html(" " + wins);
            reset();


        }
        if (score>numerornd){
            looses++;
            $("#anuncios").html("PERDISTE");
            $("#looses").html(" " + looses);
            reset();


    
        }
    });   

    $("#cristal4").on("click",function(){
        score+=parseInt($("#cristal4").val());
        $("#score").html(score);
        if (score==numerornd){
            wins++;
            $("#anuncios").html("GANASTE");
            $("#wins").html(" " + wins);
            reset();

           

        }
        if (score>numerornd){
            looses++;
            $("#anuncios").html("PERDISTE");
            $("#looses").html(" " + looses);
            reset();

           

        }

    
    });  









    
});

  