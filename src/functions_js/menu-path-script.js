document.addEventListener("DOMContentLoaded", function() {
    // Função para extrair os dois últimos segmentos do caminho da URL
    function getLastTwoSegments(url) {
      var segments = url.split("/"); // Divide a URL em segmentos
      return segments.slice(-2).join("/"); // Retorna os dois últimos segmentos
    }
  
    // Obtém todos os links dentro da lista
    var links = document.querySelectorAll(".list-item a");
    
    // Percorre os links
    links.forEach(function(link) {
      // Obtém os dois últimos segmentos do atributo href do link
      var linkSegments = getLastTwoSegments(link.getAttribute("href"));
      
      // Obtém os dois últimos segmentos da URL atual
      var currentSegments = getLastTwoSegments(window.location.pathname);
      
      // Verifica se os dois últimos segmentos do atributo href do link são iguais aos dois últimos da página atual
      if (linkSegments === currentSegments) {
        // Adiciona a classe "bg-blue-500" ao span para destacar o item da lista correspondente à página atual
        link.querySelector(".indicator").classList.add("bg-blue-500");
      }
    });
  });
  