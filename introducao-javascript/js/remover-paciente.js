var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();//o event e target vai falar quem foi clicado , o parentNode remove o pai tbm
    }, 500); //espera 500 milisegundos para executar a funçao que esta ai dentro

});











/*pacientes.forEach(function(paciente){ //pra cada paciente quero fazer algo
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado com o duplo clique");
        this.remove(); //this usa para referenciar o paciente que é o 'dono' do evento 
    });
}); nao é legal usar isso pq quando add um novo paciente na pagina o html ja vai ter carregado 
e esse novo  paciente nao vai escutar o envento*/ 















