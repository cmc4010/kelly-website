
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['home','about','product','process','contact'],
        navigation: true,
        menu: "#myMenu",
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            var curP = $('#currentPage');
            var w = $(window).width();
            
            ///// Collapsing Nav Bar /////
            if(nextIndex == 1){
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
            else{
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            }
            
            ///// WHAT TO SHOW /////
            switch(nextIndex) {
                case 1:
                    curP.html('Home');
                    break;
                case 2:
                    curP.html('About');
                    break;
                case 3:
                    curP.html('Product');
                    break;
                case 4:
                    curP.html('Process');
                    break;
                case 5:
                    curP.html('Contact');
                    break;
                default:
                    curP.innerhtml = curP.innerhtml;
            }
            
            ///// SHOW OR NOT /////
            if(w < 768){
                curP.css(
                    {"display":"block", "color":"white", 
                    "position":"fixed", "left":"70%",
                    "top":"10px", "font-size":"26px"
                    });
            }
            else {
                curP.css({"display":"none"});
            }
        },
        afterResize: function(){
            var w = $(window).width();
            if( w > 768) {
                $('#currentPage').css({"display":"none"});
            } else {
                if(w < 768) {
                     $('#currentPage').css(
                        {"display":"block", "color":"white", 
                        "position":"fixed", "left":"70%",
                        "top":"10px", "font-size":"26px"
                        });               
                }
            }
        },
        afterRender: function(){
            $('#currentPage').html("Home");
            var w = $(window).width();
            if(w < 768) {
                 $('#currentPage').css(
                    {"display":"block", "color":"white", 
                    "position":"fixed", "left":"70%",
                    "top":"10px", "font-size":"26px"
                    });               
            } else {
                $('#currentPage').css({"display":"none"});
            }
        }
    });
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
