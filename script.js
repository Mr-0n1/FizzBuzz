var nums = document.getElementById("max_value").value;


function enumeration(){
    for(var i = 1; i <= nums; i++){
        if(module(i, 3)){
            document.write("Fizz");
        }
        if(module(i, 5)){
            document.write("Buzz");
        }
        if(!module(i, 3) && !module(i, 5)){
            document.write(i);
        }
        document.write("<br />");
    }
}

function module(num, div){
    if(num % div == 0){
        return true;
    }else{
        return false;
    }
}



/* easiest way
function enumeration(){
    for(var i = 1; i <= nums; i++){
        //document.write(i + "<br />");
        if(i % 3 == 0 && i % 5 == 0){
            document.write("FizzBuzz");
        }else if (i % 3 == 0){
            document.write("Fizz");
        }else if (i % 5 == 0){
            document.write("Buzz");
        }else{
            document.write(i);
        }
        document.write("<br />");
    }
}
*/