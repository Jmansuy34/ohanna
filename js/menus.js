// js/menus.js

// Tableau de données pour les menus avec catégories
const menus = [
    // Pokes
    {
      category: "Poke",
      title: "Poke Bowl Saumon",
      description: "Un délicieux poke bowl composé de saumon frais, riz, avocat, concombre et sauce soja.",
      price: "12€",
      image: "../images/poke.jpg",
      alt: "Poke bowl au saumon frais avec avocat et concombre"
    },
    {
      category: "Poke",
      title: "Poke Bowl Thon",
      description: "Poke bowl avec du thon mariné, riz, mangue, edamame et sauce ponzu.",
      price: "13€",
      image: "../images/poke.jpg",
      alt: "Poke bowl au thon mariné avec mangue et edamame"
    },
    {
      category: "Poke",
      title: "Poke Bowl Crevettes",
      description: "Poke bowl aux crevettes grillées, quinoa, ananas, concombre et sauce sésame.",
      price: "12€",
      image: "../images/poke.jpg",
      alt: "Poke bowl aux crevettes grillées avec ananas et concombre"
    },
    // Wraps
    {
      category: "Wrap",
      title: "Au carrote fraiche",
      description: "Un wrap savoureux avec des légumes grillés, houmous et salade fraîche.",
      price: "8€",
      image: "../images/wrap.webp",
      alt: "Wrap végétarien avec légumes grillés et houmous"
    },
    {
      category: "Wrap",
      title: "Wrap Poulet",
      description: "Wrap au poulet mariné, tomates, laitue, et sauce au yaourt.",
      price: "9€",
      image: "../images/wrap.webp",
      alt: "Wrap au poulet mariné avec tomates et laitue"
    },
    {
      category: "Wrap",
      title: "Wrap Falafel",
      description: "Wrap avec des falafels maison, tahini, pickles et herbes fraîches.",
      price: "8€",
      image: "../images/wrap.webp",
      alt: "Wrap falafel avec tahini et pickles"
    },
    // Burgers
    {
      category: "Burger",
      title: "Burger Gourmet",
      description: "Burger de bœuf de qualité supérieure avec fromage, oignons caramélisés et frites maison.",
      price: "10€",
      image: "../images/burger.jpg",
      alt: "Burger gourmet avec fromage et frites maison"
    },
    {
      category: "Burger",
      title: "Burger Poulet",
      description: "Burger au poulet croustillant, salade, tomates et sauce épicée.",
      price: "9€",
      image: "../images/burger.jpg",
      alt: "Burger au poulet croustillant avec sauce épicée"
    },
    {
      category: "Burger",
      title: "Burger Végétarien",
      description: "Burger végétarien avec galette de légumes, avocat, et sauce au pesto.",
      price: "9€",
      image: "../images/burger.jpg",
      alt: "Burger végétarien avec galette de légumes et pesto"
    }
  ];
  
  // Fonction pour générer les cartes de menus
  function generateMenuCards(filterCategory = null) {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = ''; // Vider le contenu existant
  
    // Filtrer les menus si une catégorie est sélectionnée
    const filteredMenus = filterCategory ? menus.filter(menu => menu.category === filterCategory) : menus;
  
    filteredMenus.forEach(menu => {
      // Création des éléments
      const col = document.createElement('div');
      col.className = 'col-md-4';
  
      const card = document.createElement('div');
      card.className = 'card mb-4 menu-card';
  
      const img = document.createElement('img');
      img.className = 'card-img-top';
      img.src = menu.image;
      img.alt = menu.alt;
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = menu.title;
  
      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = menu.description;
  
      const cardPrice = document.createElement('p');
      cardPrice.className = 'card-text';
      const strong = document.createElement('strong');
      strong.textContent = `Prix : ${menu.price}`;
      cardPrice.appendChild(strong);
  
      // Assemblage des éléments
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardPrice);
  
      card.appendChild(img);
      card.appendChild(cardBody);
  
      col.appendChild(card);
  
      // Ajout de la carte au conteneur
      menuContainer.appendChild(col);
    });
  }
  
  // Fonction pour gérer le clic sur les boutons de filtre
  function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
        if (category === 'All') {
          generateMenuCards();
        } else {
          generateMenuCards(category);
        }
      });
    });
  }
  
  // Appel des fonctions au chargement du DOM
  document.addEventListener('DOMContentLoaded', () => {
    generateMenuCards();
    setupFilterButtons();
  });
  