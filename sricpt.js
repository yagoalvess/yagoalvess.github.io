function copyEmail() {
    var emailText = document.getElementById("email").innerText;
    
    // Cria um elemento de input oculto
    var tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    
    // Seleciona o texto do input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móveis */
    
    // Copia o texto selecionado
    document.execCommand("copy");
    
    // Remove o input temporário
    document.body.removeChild(tempInput);
    
    // Mostra a notificação no meio da tela
    var notification = document.getElementById("notification");
    notification.innerText = "Email copiado.";
    notification.style.display = "block";
  
    // Esconde a notificação após alguns segundos
    setTimeout(function(){
      notification.style.display = "none";
    }, 2000); // 2000 milissegundos = 2 segundos
  }