
// pour afficher le tooltip avec le nom de la ville au survol des régions
var regions = document.querySelectorAll('.map-overlay path');
var tooltip = document.getElementById('tooltiip');
// Informations sur les villes associées aux régions


regions.forEach(function(region) {
  region.addEventListener('mouseenter', function(event) {
    var cityName = region.id; // ObtenIR le nom de la ville associé à la région
   // alert('Mouse entered region: ' + region.id);
  // console.log(region.id);
    var regionBox = region.getBoundingClientRect(); // Obtenir les dimensions de la région
    var tooltipWidth = tooltip.offsetWidth;
    var tooltipHeight = tooltip.offsetHeight;
    
    var regionCenterX = regionBox.left + regionBox.width / 2;
    var regionCenterY = regionBox.top + regionBox.height / 2;
    
    tooltip.style.display = 'block';
    tooltip.innerHTML = cityName; // Afficher le nom de la ville
    
    // Positionner le tooltip au centre de la région
    tooltip.style.left = regionCenterX - tooltipWidth / 2 + 'px';
    tooltip.style.top = regionCenterY - tooltipHeight / 2 + 'px';
  });

  region.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none';
  });

});


