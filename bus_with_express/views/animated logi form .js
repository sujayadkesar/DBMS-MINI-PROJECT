

function validate () {

    let attempt = 3;
    
    let username = document.getElementById('username').value;
    let password = document.getElementById("password").value;

  

    if(username == "sujayadkesar" && password == "sujayadkesar"){
       
        window.location = "file:///C:/Users/sujay/Desktop/vs%20creation/projects/BUS/index.html";
        alert("logged in successfully.");
        return false;
    }
    else{
        attempt--;
        alert("You have left "+attempt+" attempt;");
            if( attempt == 0){
                    document.getElementById("username").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("submit").disabled = true;
                    return false;
                }
    }
}



function create_acc () {
 
    window.location = "file:///C:/Users/sujay/Desktop/vs%20creation/projects/Animated%20login%20form.html";

}

