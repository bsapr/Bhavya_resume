var headerlist1 = document.getElementById("header_list");
var listitems =  headerlist1.querySelectorAll('#header_list li a');
var skillbar1 = document.getElementById("progress_bar_1");
for(var i=0;i<listitems.length;i++){
    listitems[i].addEventListener('click',function(event){
        event.preventDefault();
        let current_id = this.getAttribute("data-value");

        let id_element=document.getElementById(current_id);
        let targetpos = id_element.getBoundingClientRect().y;
        let currentpos = 0;

        


 
        var scrollinterval = setInterval(function(){
            // var skillbar1_pos = skillbar1.getBoundingClientRect().y;
            // console.log("skillbar",skillbar1_pos); 
            // if(skillbar1_pos<=175){
            //     console.log("in if skillbar1")
            //     skillbar1_func1();
            //     }
            if(currentpos>=targetpos){
                clearInterval(scrollinterval);
                return;
            }
            currentpos+=50;
            window.scrollBy(0,50);
        }, 50);
    });
}  


// var skillbar1 = document.getElementById("progress_bar_1");
// var skillbar1_pos = skillbar1.getBoundingClientRect().y;
// if(skillbar1_pos<=0){
// skillbar1_func1();
// }

window.addEventListener('scroll',checkScroll);

function checkScroll(){

    var skillbars = document.getElementsByClassName("progress_bar_outer");
    for(let skillvar of skillbars){

        let skillbars_1 = skillvar.getElementsByTagName("div")[0];
       
        let animationflag=skillbars_1.getAttribute("data-animationflag");
        let skillbar1_pos = skillbars_1.getBoundingClientRect().y;
        let windowheight = window.innerHeight;
        console.log("skillbar in checkscroll ",skillbars_1," ",animationflag,skillbar1_pos," ",window.innerHeight); 
        console.log("flag is ",skillbars_1.getAttribute("data-animationflag"));
        if(skillbar1_pos<=windowheight && animationflag=="false"){
            console.log("in if skillbar1");
            skillbar1_func1(skillbars_1);
            skillbars_1.setAttribute("data-animationflag","true");
            console.log("flag is ",skillbars_1.getAttribute("data-animationflag"));
        }
            else if(skillbar1_pos>=windowheight){
                console.log("in else skillbar1");
                // initialize_bars();
                skillbars_1.setAttribute("data-animationflag","false");
            }
    }
   
                
}

function initialize_bars(){
    var skillbars = document.getElementsByClassName("progress_bar_outer");
    for(let i=0;i<skillbars.length;i++){

        let skillbars_1 = skillbars[i].getElementsByTagName("div")[0];
        skillbars_1.style.width="0%";
    }
}
initialize_bars();
function skillbar1_func1(skillbars_1){
    
    
    var skillbars = document.getElementsByClassName("progress_bar_outer");
    
        var start=0;
     let target =   skillbars_1.getAttribute("data-progressbar");
    //  let skillbars_1 = skillbars_1.getElementsByTagName("div")[0];
     console.log(target);
     let scrollinterval1 = setInterval(function(){
            
        if(start>=target){
            clearInterval(scrollinterval1);
            return;
        }
        start+=1;
        let value1 = start+"%";
    
        skillbars_1.style.width=value1;
    }, 5);
   
    
   
}