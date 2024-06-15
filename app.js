document.addEventListener("DOMContentLoaded", function () {
    // Constantes para tokens e pinos
    const BLYNK_AUTH_TOKEN = "8YMENi9ne1IjgqINm6iNOOSjZ5HVI8tO";
    const BLYNK_TEMPLATE_ID = "TMPL2JzIw4Nem";
    const BLYNK_TEMPLATE_NAME = "USR";
    const LED_VIRTUAL_PIN = 1;
    const LUMINOSIDADE_VIRTUAL_PIN = 2;
    const LUMINOSIDADE_RANGE_PIN = 3;
  
    // Elementos do DOM
    const ligarBtn = document.getElementById("ligarBtn");
    const desligarBtn = document.getElementById("desligarBtn");
    const luminosidadeSpan = document.getElementById("luminosidade");
    const luminosidadeRange = document.getElementById("luminosidadeRange");
  
    // Função para enviar comando para o servidor Blynk
    function enviarComando(comando) {
      const url = `http://blynk-cloud.com/${BLYNK_AUTH_TOKEN}/update/${LED_VIRTUAL_PIN}?value=${comando}`;
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro ao enviar comando para o servidor Blynk: ${response.statusText}`);
          }
          console.log(`Comando ${comando ? 'Ligar' : 'Desligar'} enviado com sucesso.`);
        })
        .catch(error => {
          console.error(error);
        });
    }