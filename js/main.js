document.getElementById("email_submit").addEventListener("click" , 
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


document.getElementById("dadi_submit").addEventListener("click" , 
function() {
    var nome = document.getElementById("get_nome").value;
    var nome_numero = Math.floor(Math.random() * 5 + 1);
    var pc_numero = Math.floor(Math.random() * 5 + 1);
    document.getElementById("dado_nome").innerHTML = nome + " " + nome_numero;
    document.getElementById("dado_pc").innerHTML = "Computer" + " " + pc_numero;
    if (nome_numero > pc_numero) {
        document.getElementById("vincitore").innerHTML = nome + ", HAI VINTO";
    }
    else if (nome_numero == pc_numero) {
        document.getElementById("vincitore").innerHTML = "DAI " + nome + ", E' UN PAREGGIO";
    }
    else {
        document.getElementById("vincitore").innerHTML = "MI DISPIACE " + nome + ", HAI PERSO";
    }
}
)
