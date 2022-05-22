
function addloadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload !="function"){
        window.onload=func;
    }
    else{
        window.onload=function(){
            if(oldonload){
                oldonload(); 
            }
            func();
        }   
    }
}
addloadEvent(switchDate);

function switchDate(){
    
}