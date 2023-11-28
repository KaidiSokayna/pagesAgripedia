
document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.navvv a');
    const images = document.querySelectorAll('.image');

    // Afficher toutes les images au chargement de la page
    images.forEach(image => {
        image.style.display = 'block';
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Enlever la classe "selected" de tous les liens
            categoryLinks.forEach(l => {
                l.classList.remove('selected');
            });

            // Filtrer les images en fonction de la catégorie sélectionnée
            const selectedCategory = link.getAttribute('data-category');
            images.forEach(image => {
                if (selectedCategory === 'all' || image.classList.contains(selectedCategory)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });

            // Ajouter la classe "selected" uniquement au lien sélectionné
            link.classList.add('selected');
        });
    });
});
