document.getElementById("input_submit").addEventListener("click" , 
function() {
    var email_lista = ["yumishika17@gmail.com" , "paolo.dossetto@gmail.com", "paolo.mistretta@gmail.com", "filippo.bommarito@gmail.com"];
    var email = document.getElementById("get_email").value;
    for(i=0 ; i<email_lista.length ; i++) {
        if(email == email_lista[i]) {
            document.getElementById("mex_email").innerHTML = "E' autorizzato ad avere l'accesso";
            return;
        }
    }
    document.getElementById("mex_email").innerHTML = "Non è autorizzato ad avere l'accesso";
}
)

