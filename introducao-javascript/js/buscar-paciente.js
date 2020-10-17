var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest(); //é um obj responsavel por fazer requisição http 
    https://api-pacientes.herokuapp.com/pacientes
    
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //como se estivesse copiando o site e colando em outra aba

    xhr.addEventListener("load", function(){ //quando sua resposta tiver carregada(load)executa uma função para cuspir a resposta, mostrar a resposta
        
        if (xhr.status == 200){
            var resposta = xhr.responseText; //o response.text pega a resposta que escutou
            var pacientes = JSON.parse(resposta); //o parse transforma o json em objeto js pra trabalharmos adicionando os pacientes na tabela
      
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        }
        
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

     

});

    xhr.send(); //como se estivesse dando enter pra buscar
});