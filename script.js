$(document).ready(function () {
    let r, g, b, element;
    let firstindex;
    let secindex;
    
    $("#submit").on("click", function() {
        var value = $("#number").val();
        console.log(value);
        
        for (let index = 1; index <= value; index++) {
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            element = `<div class="list" id="${index}">${index}</div>`;
            $(".left").append($(element).css({ background: `rgb(${r},${g},${b})` }));
            secindex = 1;
            $(".list").each(function(){
                $(this).text(secindex++);
            });
            for (let index = 0; index < $(".list").length; index++) {
                const element = $(".list")[index];
              
                $(".right").droppable({
                  drop:  $(element).draggable()

                });
                
            }
        }
        // $("#number").empty();
    });
   
    $(".left").on("click", ".list", function(){
        $(this).hide(function(){
            $(".right").append($(this).show());
            secindex = 1;
            $(".right .list").each(function(){
                $(this).text(secindex++);
            });
            firstindex = 1;
            $(".left .list").each(function(){
                $(this).text(firstindex++);
            });
        });
    });
    
    $(".right").on("click", ".list", function (){
        $(this).hide(function(){
            $(".left").append($(this).show());
            firstindex = 1;
            $(".left .list").each(function(){
                $(this).text(firstindex++);
            });
            secindex = 1;
            $(".right .list").each(function(){
                $(this).text(secindex++);
            });
        });
    });
});

function allowdrag(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  
}

function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
            ev.currentTarget.appendChild(document.getElementById(data));
            firstindex = 1;
            $(".left .list").each(function(){
                $(this).text(firstindex++);
            });
            secindex = 1;
            $(".right .list").each(function(){
                $(this).text(secindex++);
            });

        }

  
