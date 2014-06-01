$(document).ready(function(){                
    $allPizzaSections = $(document.body).find("section.section-pizza")

    $("a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // animate
        go (this.hash);
    });
});

var go = function  (hash){
    var offset = $(hash).offset();
    if (!!offset){
        $('html, body').animate({
            scrollTop: offset.top
        }, 1100, function(){
            window.location.hash = hash;
        });
    }
};

var pUp = function (node, event){
    var $prevs = $(node).parents('section').prevAll('*[id]');
    var scrollTop = $(document).scrollTop();
    var prevSectionId; 
    for (var i=0; i < $prevs.length; ++i){
        var offset = $($prevs.get(i)).offset();
        if (!!!offset){
            continue;
        }
        var nTop = $($prevs.get(i)).offset().top;
        if (nTop == scrollTop){
            continue;
        }
        prevSectionId = $prevs.get(i).id;
        break;
    }                    
    event.preventDefault();
    if (prevSectionId){                
        go('#'+prevSectionId);    
    }
};

var pDown = function (node, event){
    var prevSectionId = $(node).parents('section').nextAll('*[id]:first').attr('id');
    event.preventDefault();
    go('#'+prevSectionId);
};