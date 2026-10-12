// Catálogo transcrito de la carta aportada por el usuario (6 páginas).
// Los alérgenos y opciones vegetarianas no se deducen: requieren confirmación de Marce.
export const restaurante = {
  "nombre": "Restaurante Marce",
  "moneda": "MXN",
  "menuProvisional": false,
  "fuente": "Carta Restaurate Marce.pdf",
  "ivaIncluido": true,
  "vegetarianosConfirmados": false
};

export const categoriasMenu = ["sopas","carnes","surtido","extras","antojitos","peques","saludable","desayunos","postres","bebidas","cervezas","licores","preparados"];

export const modeloDemostracion = {
  "id": "demo-canasta",
  "modeloPrueba": true,
  "modelo3D": "assets/models/platillo_especial.optimizado.glb",
  "textos": {
    "es": {
      "nombre": "Canasta de temporada"
    },
    "en": {
      "nombre": "Seasonal basket"
    },
    "fr": {
      "nombre": "Panier de saison"
    }
  },
  "modeloTextos": {
    "es": {
      "nombre": "Canasta de temporada",
      "nota": "Este archivo muestra una canasta decorativa para probar la AR. Los modelos de los platillos de la carta están pendientes; la escala es aproximada."
    },
    "en": {
      "nombre": "Seasonal basket",
      "nota": "This decorative basket is for testing AR. Models of the menu dishes are pending; scale is approximate."
    },
    "fr": {
      "nombre": "Panier de saison",
      "nota": "Ce panier décoratif permet de tester la RA. Les modèles des plats de la carte restent à ajouter ; l’échelle est approximative."
    }
  }
};

export const platillos = [
  {
    "id": "consome-pollo",
    "categoria": "sopas",
    "precio": 57,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Consomé con pollo deshebrado, arroz y verdura",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken consommé with shredded chicken, rice and vegetables",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Consommé de poulet effiloché, riz et légumes",
        "descripcion": ""
      }
    }
  },
  {
    "id": "chileatole-pollo",
    "categoria": "sopas",
    "precio": 76,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Chileatole de pollo con pierna y muslo",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken chileatole with leg and thigh",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Chileatole de poulet avec cuisse et pilon",
        "descripcion": ""
      }
    }
  },
  {
    "id": "sopa-azteca",
    "categoria": "sopas",
    "precio": 53,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sopa Azteca",
        "descripcion": ""
      },
      "en": {
        "nombre": "Aztec tortilla soup",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Soupe aztèque aux tortillas",
        "descripcion": ""
      }
    }
  },
  {
    "id": "caldo-tlalpeno",
    "categoria": "sopas",
    "precio": 53,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Caldo Tlalpeño",
        "descripcion": ""
      },
      "en": {
        "nombre": "Tlalpeño soup",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Soupe Tlalpeño",
        "descripcion": ""
      }
    }
  },
  {
    "id": "sopa-pasta",
    "categoria": "sopas",
    "precio": 45,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sopa de pasta",
        "descripcion": ""
      },
      "en": {
        "nombre": "Pasta soup",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Soupe aux pâtes",
        "descripcion": ""
      }
    }
  },
  {
    "id": "sopa-pasta-pollo",
    "categoria": "sopas",
    "precio": 53,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sopa de pasta con pollo deshebrado",
        "descripcion": ""
      },
      "en": {
        "nombre": "Pasta soup with shredded chicken",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Soupe aux pâtes et poulet effiloché",
        "descripcion": ""
      }
    }
  },
  {
    "id": "arroz-rojo",
    "categoria": "sopas",
    "precio": 46,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de arroz rojo",
        "descripcion": ""
      },
      "en": {
        "nombre": "Red rice side",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Portion de riz rouge",
        "descripcion": ""
      }
    }
  },
  {
    "id": "arroz-platanos",
    "categoria": "sopas",
    "precio": 59,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de arroz con plátanos fritos",
        "descripcion": ""
      },
      "en": {
        "nombre": "Rice with fried plantains",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Riz aux bananes plantains frites",
        "descripcion": ""
      }
    }
  },
  {
    "id": "arroz-huevos",
    "categoria": "sopas",
    "precio": 57,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de arroz con huevos estrellados",
        "descripcion": ""
      },
      "en": {
        "nombre": "Rice with fried eggs",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Riz aux œufs au plat",
        "descripcion": ""
      }
    }
  },
  {
    "id": "frijoles",
    "categoria": "sopas",
    "precio": 46,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Beans side",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Portion de haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "alambre",
    "categoria": "carnes",
    "precio": 120,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Alambre",
        "descripcion": "Longaniza, carne salada de cerdo, champiñones y queso manchego."
      },
      "en": {
        "nombre": "Alambre",
        "descripcion": "Longaniza sausage, salted pork, mushrooms and Manchego cheese."
      },
      "fr": {
        "nombre": "Alambre",
        "descripcion": "Longaniza, porc salé, champignons et fromage manchego."
      }
    }
  },
  {
    "id": "tampiquena",
    "categoria": "carnes",
    "precio": 158,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Tampiqueña",
        "descripcion": "Carne asada, chilaquiles, arroz, plátanos fritos, frijoles y ensalada."
      },
      "en": {
        "nombre": "Tampiqueña steak platter",
        "descripcion": "Grilled beef, chilaquiles, rice, fried plantains, beans and salad."
      },
      "fr": {
        "nombre": "Assiette Tampiqueña",
        "descripcion": "Bœuf grillé, chilaquiles, riz, bananes plantains frites, haricots et salade."
      }
    }
  },
  {
    "id": "bistec-res",
    "categoria": "carnes",
    "precio": 109,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Bistec de res a la mexicana o encebollado",
        "descripcion": "Con frijoles y arroz."
      },
      "en": {
        "nombre": "Mexican-style or onion beef steak",
        "descripcion": "With beans and rice."
      },
      "fr": {
        "nombre": "Steak de bœuf à la mexicaine ou aux oignons",
        "descripcion": "Avec haricots et riz."
      }
    }
  },
  {
    "id": "milanesa",
    "categoria": "carnes",
    "precio": 115,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Milanesa de res o pollo",
        "descripcion": "Con papas a la francesa y frijoles."
      },
      "en": {
        "nombre": "Breaded beef or chicken",
        "descripcion": "With fries and beans."
      },
      "fr": {
        "nombre": "Escalope panée de bœuf ou de poulet",
        "descripcion": "Avec frites et haricots."
      }
    }
  },
  {
    "id": "pollo-frito",
    "categoria": "carnes",
    "precio": 98,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pollo frito o empanizado",
        "descripcion": "Con papas a la francesa y frijoles."
      },
      "en": {
        "nombre": "Fried or breaded chicken",
        "descripcion": "With fries and beans."
      },
      "fr": {
        "nombre": "Poulet frit ou pané",
        "descripcion": "Avec frites et haricots."
      }
    }
  },
  {
    "id": "mole-pollo",
    "categoria": "carnes",
    "precio": 120,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Mole con pollo y arroz",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken in mole sauce with rice",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Poulet au mole et riz",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pierna-cerdo-completa",
    "categoria": "carnes",
    "precio": 105,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pierna de cerdo adobada con arroz y frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Marinated pork leg with rice and beans",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Cuisse de porc marinée avec riz et haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pierna-cerdo-orden",
    "categoria": "carnes",
    "precio": 70,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pierna de cerdo adobada (orden)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Marinated pork leg (portion)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Cuisse de porc marinée (portion)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "patitas-completas",
    "categoria": "carnes",
    "precio": 95,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Patitas de cerdo en escabeche",
        "descripcion": "Con arroz y frijoles."
      },
      "en": {
        "nombre": "Pickled pork trotters",
        "descripcion": "With rice and beans."
      },
      "fr": {
        "nombre": "Pieds de porc en escabèche",
        "descripcion": "Avec riz et haricots."
      }
    }
  },
  {
    "id": "patitas-solas",
    "categoria": "carnes",
    "precio": 65,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Patitas de cerdo en escabeche (solas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Pickled pork trotters (on their own)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Pieds de porc en escabèche (seuls)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "longaniza-salsa",
    "categoria": "carnes",
    "precio": 103,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Longaniza en salsa roja con frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Longaniza in red sauce with beans",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Longaniza en sauce rouge avec haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "longaniza-orden",
    "categoria": "carnes",
    "precio": 60,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de longaniza (2 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Longaniza (2 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Longaniza (2 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "longaniza-arroz",
    "categoria": "carnes",
    "precio": 92,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de longaniza con arroz y frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Longaniza with rice and beans",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Longaniza avec riz et haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "rellena",
    "categoria": "carnes",
    "precio": 85,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Rellena (moronga) encebollada o en salsa roja",
        "descripcion": "Acompañada con frijoles."
      },
      "en": {
        "nombre": "Blood sausage with onions or red sauce",
        "descripcion": "Served with beans."
      },
      "fr": {
        "nombre": "Boudin aux oignons ou en sauce rouge",
        "descripcion": "Servi avec haricots."
      }
    }
  },
  {
    "id": "costilla-cerdo",
    "categoria": "carnes",
    "precio": 93,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Costilla de cerdo en salsa roja, verde o negra",
        "descripcion": "Con frijoles y arroz."
      },
      "en": {
        "nombre": "Pork ribs in red, green or black sauce",
        "descripcion": "With beans and rice."
      },
      "fr": {
        "nombre": "Côtes de porc en sauce rouge, verte ou noire",
        "descripcion": "Avec haricots et riz."
      }
    }
  },
  {
    "id": "arrachera",
    "categoria": "carnes",
    "precio": 180,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Arrachera",
        "descripcion": "Con papas en gajo, guacamole, cebollinas y frijoles."
      },
      "en": {
        "nombre": "Skirt steak",
        "descripcion": "With potato wedges, guacamole, spring onions and beans."
      },
      "fr": {
        "nombre": "Bavette grillée",
        "descripcion": "Avec quartiers de pommes de terre, guacamole, oignons nouveaux et haricots."
      }
    }
  },
  {
    "id": "taco-arrachera",
    "categoria": "carnes",
    "precio": 60,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Taco de arrachera",
        "descripcion": "Tortilla de maíz o harina."
      },
      "en": {
        "nombre": "Skirt steak taco",
        "descripcion": "Corn or flour tortilla."
      },
      "fr": {
        "nombre": "Taco de bavette",
        "descripcion": "Tortilla de maïs ou de blé."
      }
    }
  },
  {
    "id": "taco-arrachera-queso",
    "categoria": "carnes",
    "precio": 68,
    "fuentePagina": 2,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Taco de arrachera con queso",
        "descripcion": "Tortilla de maíz o harina."
      },
      "en": {
        "nombre": "Skirt steak taco with cheese",
        "descripcion": "Corn or flour tortilla."
      },
      "fr": {
        "nombre": "Taco de bavette au fromage",
        "descripcion": "Tortilla de maïs ou de blé."
      }
    }
  },
  {
    "id": "chipotles-rellenos",
    "categoria": "carnes",
    "precio": 88,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de chiles chipotle rellenos",
        "descripcion": "2 piezas acompañadas con arroz y frijoles. Especialidad de la casa."
      },
      "en": {
        "nombre": "Stuffed chipotle peppers",
        "descripcion": "2 pieces with rice and beans. House specialty."
      },
      "fr": {
        "nombre": "Piments chipotle farcis",
        "descripcion": "2 pièces avec riz et haricots. Spécialité de la maison."
      }
    },
    "especial": true
  },
  {
    "id": "chipotles-solos",
    "categoria": "carnes",
    "precio": 56,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de chile chipotle solos (2 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chipotle peppers on their own (2 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Piments chipotle seuls (2 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "carne-asada-arroz",
    "categoria": "carnes",
    "precio": 100,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Carne asada con frijoles, arroz y ensalada",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled beef with beans, rice and salad",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Bœuf grillé avec haricots, riz et salade",
        "descripcion": ""
      }
    }
  },
  {
    "id": "carne-asada-papas",
    "categoria": "carnes",
    "precio": 110,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Carne asada con papas a la francesa y frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled beef with fries and beans",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Bœuf grillé avec frites et haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "carne-asada-enmoladas",
    "categoria": "carnes",
    "precio": 117,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Carne asada con enmoladas y arroz",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled beef with mole enchiladas and rice",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Bœuf grillé avec enmoladas et riz",
        "descripcion": ""
      }
    }
  },
  {
    "id": "carne-asada-chilaquiles",
    "categoria": "carnes",
    "precio": 115,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Carne asada con chilaquiles o enchiladas sencillas",
        "descripcion": "Con frijoles y ensalada."
      },
      "en": {
        "nombre": "Grilled beef with chilaquiles or plain enchiladas",
        "descripcion": "With beans and salad."
      },
      "fr": {
        "nombre": "Bœuf grillé avec chilaquiles ou enchiladas simples",
        "descripcion": "Avec haricots et salade."
      }
    }
  },
  {
    "id": "carne-asada-gorditas",
    "categoria": "carnes",
    "precio": 115,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Carne asada con gorditas (3 piezas)",
        "descripcion": "Con frijoles y ensalada."
      },
      "en": {
        "nombre": "Grilled beef with gorditas (3 pieces)",
        "descripcion": "With beans and salad."
      },
      "fr": {
        "nombre": "Bœuf grillé avec gorditas (3 pièces)",
        "descripcion": "Avec haricots et salade."
      }
    }
  },
  {
    "id": "milanesa-enchiladas",
    "categoria": "carnes",
    "precio": 120,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Milanesa con enchiladas",
        "descripcion": ""
      },
      "en": {
        "nombre": "Breaded cutlet with enchiladas",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Escalope panée avec enchiladas",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pechuga-arroz",
    "categoria": "carnes",
    "precio": 98,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pechuga de pollo a la plancha con arroz y frijoles",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled chicken breast with rice and beans",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Blanc de poulet grillé avec riz et haricots",
        "descripcion": ""
      }
    }
  },
  {
    "id": "surtido-casa",
    "categoria": "surtido",
    "precio": 250,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Surtido de la Casa",
        "descripcion": "Chile chipotle relleno de picadillo, longaniza, pierna de cerdo adobada, patitas de cerdo en escabeche, carne asada, gorditas con asientos de chicharrón (3), arroz rojo, frijoles refritos con totopos, café americano y dulce casero."
      },
      "en": {
        "nombre": "House assortment",
        "descripcion": "Chipotle stuffed with picadillo, longaniza, marinated pork leg, pickled pork trotters, grilled beef, gorditas with pork crackling drippings (3), red rice, refried beans with tortilla chips, Americano coffee and a homemade sweet."
      },
      "fr": {
        "nombre": "Assortiment de la maison",
        "descripcion": "Chipotle farci au picadillo, longaniza, cuisse de porc marinée, pieds de porc en escabèche, bœuf grillé, gorditas aux résidus de chicharrón (3), riz rouge, haricots refrits et totopos, café américain et douceur maison."
      }
    },
    "imagen": "assets/img/marce-surtido.jpg",
    "imagenDeCarta": true
  },
  {
    "id": "guacamole",
    "categoria": "extras",
    "precio": 50,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Orden de guacamole",
        "descripcion": ""
      },
      "en": {
        "nombre": "Guacamole side",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Portion de guacamole",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pieza-pollo",
    "categoria": "extras",
    "precio": 22,
    "fuentePagina": 3,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pieza de pollo (pierna o muslo)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken piece (leg or thigh)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Morceau de poulet (pilon ou cuisse)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "gorditas-asientos",
    "categoria": "antojitos",
    "precio": 70,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Gorditas con asientos de chicharrón (5 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Gorditas with pork crackling drippings (5 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Gorditas aux résidus de chicharrón (5 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "gorditas-sencillas",
    "categoria": "antojitos",
    "precio": 78,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Gorditas surtidas sencillas (5 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Assorted plain gorditas (5 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Gorditas simples assorties (5 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "gorditas-preparadas",
    "categoria": "antojitos",
    "precio": 83,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Gorditas surtidas preparadas (5 piezas)",
        "descripcion": "Pollo, pierna de cerdo adobada o longaniza."
      },
      "en": {
        "nombre": "Assorted filled gorditas (5 pieces)",
        "descripcion": "Chicken, marinated pork leg or longaniza."
      },
      "fr": {
        "nombre": "Gorditas garnies assorties (5 pièces)",
        "descripcion": "Poulet, cuisse de porc marinée ou longaniza."
      }
    }
  },
  {
    "id": "empanadas",
    "categoria": "antojitos",
    "precio": 78,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Empanadas (3 piezas)",
        "descripcion": "Jamón/queso, queso/champiñones, carne enchilada, pollo o longaniza."
      },
      "en": {
        "nombre": "Empanadas (3 pieces)",
        "descripcion": "Ham/cheese, cheese/mushrooms, chili-marinated meat, chicken or longaniza."
      },
      "fr": {
        "nombre": "Empanadas (3 pièces)",
        "descripcion": "Jambon/fromage, fromage/champignons, viande marinée au piment, poulet ou longaniza."
      }
    }
  },
  {
    "id": "chilaquiles",
    "categoria": "antojitos",
    "precio": 92,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Chilaquiles rojos o verdes",
        "descripcion": "Pollo o longaniza. Con frijoles y ensalada."
      },
      "en": {
        "nombre": "Red or green chilaquiles",
        "descripcion": "Chicken or longaniza. With beans and salad."
      },
      "fr": {
        "nombre": "Chilaquiles rouges ou verts",
        "descripcion": "Poulet ou longaniza. Avec haricots et salade."
      }
    }
  },
  {
    "id": "enchiladas",
    "categoria": "antojitos",
    "precio": 90,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Enchiladas rojas o verdes rellenas",
        "descripcion": "Pollo, huevo o longaniza. Con frijoles."
      },
      "en": {
        "nombre": "Filled red or green enchiladas",
        "descripcion": "Chicken, egg or longaniza. With beans."
      },
      "fr": {
        "nombre": "Enchiladas farcies rouges ou vertes",
        "descripcion": "Poulet, œuf ou longaniza. Avec haricots."
      }
    }
  },
  {
    "id": "enchiladas-suizas",
    "categoria": "antojitos",
    "precio": 98,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Enchiladas suizas rojas o verdes (4 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Red or green Swiss-style enchiladas (4 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Enchiladas suizas rouges ou vertes (4 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "enmoladas",
    "categoria": "antojitos",
    "precio": 93,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Enmoladas rellenas",
        "descripcion": "Pollo, picadillo, huevo o longaniza. Con arroz."
      },
      "en": {
        "nombre": "Filled mole enchiladas",
        "descripcion": "Chicken, picadillo, egg or longaniza. With rice."
      },
      "fr": {
        "nombre": "Enmoladas farcies",
        "descripcion": "Poulet, picadillo, œuf ou longaniza. Avec riz."
      }
    }
  },
  {
    "id": "enfrijoladas",
    "categoria": "antojitos",
    "precio": 87,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Enfrijoladas rellenas",
        "descripcion": "Pollo, huevo o longaniza."
      },
      "en": {
        "nombre": "Filled bean-sauce enchiladas",
        "descripcion": "Chicken, egg or longaniza."
      },
      "fr": {
        "nombre": "Enfrijoladas farcies",
        "descripcion": "Poulet, œuf ou longaniza."
      }
    }
  },
  {
    "id": "huevos-longaniza-salsa",
    "categoria": "antojitos",
    "precio": 90,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Huevos con longaniza en salsa roja",
        "descripcion": "Con frijoles."
      },
      "en": {
        "nombre": "Eggs with longaniza in red sauce",
        "descripcion": "With beans."
      },
      "fr": {
        "nombre": "Œufs à la longaniza en sauce rouge",
        "descripcion": "Avec haricots."
      }
    }
  },
  {
    "id": "mini-empanadas",
    "categoria": "peques",
    "precio": 51,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Mini empanadas (3 piezas)",
        "descripcion": "Jamón/queso, queso/champiñones, carne enchilada, pollo o longaniza."
      },
      "en": {
        "nombre": "Mini empanadas (3 pieces)",
        "descripcion": "Ham/cheese, cheese/mushrooms, chili-marinated meat, chicken or longaniza."
      },
      "fr": {
        "nombre": "Mini empanadas (3 pièces)",
        "descripcion": "Jambon/fromage, fromage/champignons, viande marinée au piment, poulet ou longaniza."
      }
    }
  },
  {
    "id": "papas-francesa",
    "categoria": "peques",
    "precio": 60,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Papas a la francesa",
        "descripcion": ""
      },
      "en": {
        "nombre": "French fries",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Frites",
        "descripcion": ""
      }
    }
  },
  {
    "id": "papas-gajo",
    "categoria": "peques",
    "precio": 65,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Papas gajo",
        "descripcion": ""
      },
      "en": {
        "nombre": "Potato wedges",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Quartiers de pommes de terre",
        "descripcion": ""
      }
    }
  },
  {
    "id": "nuggets",
    "categoria": "peques",
    "precio": 57,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Nuggets de pollo (6 piezas)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken nuggets (6 pieces)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Nuggets de poulet (6 pièces)",
        "descripcion": ""
      }
    }
  },
  {
    "id": "nuggets-papas",
    "categoria": "peques",
    "precio": 85,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Nuggets de pollo con papas",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chicken nuggets with fries",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Nuggets de poulet avec pommes de terre",
        "descripcion": ""
      }
    }
  },
  {
    "id": "sincronizadas",
    "categoria": "peques",
    "precio": 46,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sincronizadas",
        "descripcion": ""
      },
      "en": {
        "nombre": "Sincronizadas",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Sincronizadas",
        "descripcion": ""
      }
    }
  },
  {
    "id": "omelette",
    "categoria": "peques",
    "precio": 85,
    "fuentePagina": 4,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Omelette relleno",
        "descripcion": "2 ingredientes a elegir: champiñones, queso, longaniza, verduras o jamón."
      },
      "en": {
        "nombre": "Filled omelette",
        "descripcion": "Choose 2 ingredients: mushrooms, cheese, longaniza, vegetables or ham."
      },
      "fr": {
        "nombre": "Omelette garnie",
        "descripcion": "2 ingrédients au choix : champignons, fromage, longaniza, légumes ou jambon."
      }
    }
  },
  {
    "id": "sopa-verduras",
    "categoria": "saludable",
    "precio": 49,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sopa de verduras",
        "descripcion": ""
      },
      "en": {
        "nombre": "Vegetable soup",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Soupe de légumes",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pechuga-verduras",
    "categoria": "saludable",
    "precio": 115,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pechuga a la plancha con verduras mixtas al vapor",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled chicken breast with steamed mixed vegetables",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Blanc de poulet grillé avec légumes variés vapeur",
        "descripcion": ""
      }
    }
  },
  {
    "id": "ensalada-cesar",
    "categoria": "saludable",
    "precio": 92,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Ensalada César",
        "descripcion": ""
      },
      "en": {
        "nombre": "Caesar salad",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Salade César",
        "descripcion": ""
      }
    }
  },
  {
    "id": "aguacate-atun",
    "categoria": "saludable",
    "precio": 79,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Aguacate relleno de atún con ensalada",
        "descripcion": ""
      },
      "en": {
        "nombre": "Tuna-stuffed avocado with salad",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Avocat farci au thon avec salade",
        "descripcion": ""
      }
    }
  },
  {
    "id": "sandwich-atun",
    "categoria": "saludable",
    "precio": 57,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Sándwich de atún",
        "descripcion": ""
      },
      "en": {
        "nombre": "Tuna sandwich",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Sandwich au thon",
        "descripcion": ""
      }
    }
  },
  {
    "id": "pechuga-champinones",
    "categoria": "saludable",
    "precio": 122,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Pechuga a la plancha con champiñones, verduras y ensalada",
        "descripcion": ""
      },
      "en": {
        "nombre": "Grilled chicken breast with mushrooms, vegetables and salad",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Blanc de poulet grillé avec champignons, légumes et salade",
        "descripcion": ""
      }
    }
  },
  {
    "id": "desayuno-americano",
    "categoria": "desayunos",
    "precio": 98,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Americano",
        "descripcion": "Huevos al gusto, rancheros, estrellados o divorciados, con frijoles refritos."
      },
      "en": {
        "nombre": "American breakfast",
        "descripcion": "Eggs to order, ranchero-style, fried or divorciados-style, with refried beans."
      },
      "fr": {
        "nombre": "Petit-déjeuner américain",
        "descripcion": "Œufs au choix, rancheros, au plat ou divorciados, avec haricots refrits."
      }
    },
    "disponibilidad": "desayuno"
  },
  {
    "id": "desayuno-mexicano",
    "categoria": "desayunos",
    "precio": 98,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Mexicano",
        "descripcion": "Chilaquiles, enchiladas, enfrijoladas o enmoladas, con huevos estrellados o revueltos."
      },
      "en": {
        "nombre": "Mexican breakfast",
        "descripcion": "Chilaquiles, enchiladas, bean-sauce or mole enchiladas, with fried or scrambled eggs."
      },
      "fr": {
        "nombre": "Petit-déjeuner mexicain",
        "descripcion": "Chilaquiles, enchiladas, enfrijoladas ou enmoladas avec œufs au plat ou brouillés."
      }
    },
    "disponibilidad": "desayuno"
  },
  {
    "id": "naolinqueno-1",
    "categoria": "desayunos",
    "precio": 98,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Naolinqueño 1",
        "descripcion": "Carne salada de cerdo, dobladitas rojas y frijoles refritos."
      },
      "en": {
        "nombre": "Naolinqueño 1",
        "descripcion": "Salted pork, red-sauce folded tortillas and refried beans."
      },
      "fr": {
        "nombre": "Naolinqueño 1",
        "descripcion": "Porc salé, tortillas pliées en sauce rouge et haricots refrits."
      }
    },
    "disponibilidad": "desayuno"
  },
  {
    "id": "naolinqueno-2",
    "categoria": "desayunos",
    "precio": 98,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Naolinqueño 2",
        "descripcion": "Carne enchilada de cerdo, dobladitas de frijol y queso."
      },
      "en": {
        "nombre": "Naolinqueño 2",
        "descripcion": "Chili-marinated pork, folded tortillas with beans and cheese."
      },
      "fr": {
        "nombre": "Naolinqueño 2",
        "descripcion": "Porc mariné au piment, tortillas pliées aux haricots et fromage."
      }
    },
    "disponibilidad": "desayuno"
  },
  {
    "id": "naolinqueno-3",
    "categoria": "desayunos",
    "precio": 98,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Naolinqueño 3",
        "descripcion": "Huevos revueltos con longaniza y frijoles refritos."
      },
      "en": {
        "nombre": "Naolinqueño 3",
        "descripcion": "Scrambled eggs with longaniza and refried beans."
      },
      "fr": {
        "nombre": "Naolinqueño 3",
        "descripcion": "Œufs brouillés à la longaniza et haricots refrits."
      }
    },
    "disponibilidad": "desayuno"
  },
  {
    "id": "hot-cakes",
    "categoria": "postres",
    "precio": 60,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Hot cakes (3)",
        "descripcion": "Con lechera o mermelada."
      },
      "en": {
        "nombre": "Pancakes (3)",
        "descripcion": "With condensed milk or jam."
      },
      "fr": {
        "nombre": "Pancakes (3)",
        "descripcion": "Avec lait concentré ou confiture."
      }
    }
  },
  {
    "id": "platanos-fritos",
    "categoria": "postres",
    "precio": 56,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Plátanos fritos",
        "descripcion": "Con rompope, lechera o crema y queso."
      },
      "en": {
        "nombre": "Fried plantains",
        "descripcion": "With rompope, condensed milk or cream and cheese."
      },
      "fr": {
        "nombre": "Bananes plantains frites",
        "descripcion": "Avec rompope, lait concentré ou crème et fromage."
      }
    }
  },
  {
    "id": "duraznos",
    "categoria": "postres",
    "precio": 49,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Duraznos en almíbar",
        "descripcion": "Con crema, rompope o lechera."
      },
      "en": {
        "nombre": "Peaches in syrup",
        "descripcion": "With cream, rompope or condensed milk."
      },
      "fr": {
        "nombre": "Pêches au sirop",
        "descripcion": "Avec crème, rompope ou lait concentré."
      }
    }
  },
  {
    "id": "dulce-casero",
    "categoria": "postres",
    "precio": 15,
    "fuentePagina": 5,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Dulce casero tradicional",
        "descripcion": ""
      },
      "en": {
        "nombre": "Traditional homemade sweet",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Douceur traditionnelle maison",
        "descripcion": ""
      }
    }
  },
  {
    "id": "agua-frutas",
    "categoria": "bebidas",
    "precio": 37,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Agua de frutas naturales",
        "descripcion": ""
      },
      "en": {
        "nombre": "Fresh fruit agua fresca",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Eau fraîche aux fruits naturels",
        "descripcion": ""
      }
    },
    "variantes": [
      {
        "precio": 37,
        "textos": {
          "es": "Vaso",
          "en": "Glass",
          "fr": "Verre"
        }
      },
      {
        "precio": 99,
        "textos": {
          "es": "Jarra",
          "en": "Pitcher",
          "fr": "Pichet"
        }
      }
    ]
  },
  {
    "id": "horchata",
    "categoria": "bebidas",
    "precio": 44,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Agua de horchata de arroz",
        "descripcion": ""
      },
      "en": {
        "nombre": "Rice horchata",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Horchata de riz",
        "descripcion": ""
      }
    },
    "variantes": [
      {
        "precio": 44,
        "textos": {
          "es": "Vaso",
          "en": "Glass",
          "fr": "Verre"
        }
      },
      {
        "precio": 109,
        "textos": {
          "es": "Jarra",
          "en": "Pitcher",
          "fr": "Pichet"
        }
      }
    ]
  },
  {
    "id": "jugo-naranja",
    "categoria": "bebidas",
    "precio": 43,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Jugo de naranja",
        "descripcion": ""
      },
      "en": {
        "nombre": "Orange juice",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Jus d’orange",
        "descripcion": ""
      }
    }
  },
  {
    "id": "limonada-naranjada",
    "categoria": "bebidas",
    "precio": 40,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Limonada o naranjada preparada",
        "descripcion": "Con agua mineral."
      },
      "en": {
        "nombre": "Sparkling lemonade or orangeade",
        "descripcion": "With sparkling water."
      },
      "fr": {
        "nombre": "Citronnade ou orangeade pétillante",
        "descripcion": "À l’eau gazeuse."
      }
    },
    "variantes": [
      {
        "precio": 40,
        "textos": {
          "es": "Vaso",
          "en": "Glass",
          "fr": "Verre"
        }
      },
      {
        "precio": 115,
        "textos": {
          "es": "Jarra",
          "en": "Pitcher",
          "fr": "Pichet"
        }
      }
    ]
  },
  {
    "id": "malteadas",
    "categoria": "bebidas",
    "precio": 42,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Malteadas",
        "descripcion": "Chocolate, vainilla, fresa o rompope."
      },
      "en": {
        "nombre": "Milkshakes",
        "descripcion": "Chocolate, vanilla, strawberry or rompope."
      },
      "fr": {
        "nombre": "Milk-shakes",
        "descripcion": "Chocolat, vanille, fraise ou rompope."
      }
    }
  },
  {
    "id": "cafe-americano",
    "categoria": "bebidas",
    "precio": 29,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Café americano",
        "descripcion": ""
      },
      "en": {
        "nombre": "Americano coffee",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Café américain",
        "descripcion": ""
      }
    }
  },
  {
    "id": "cafe-lechero",
    "categoria": "bebidas",
    "precio": 36,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Café lechero",
        "descripcion": ""
      },
      "en": {
        "nombre": "Milky coffee",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Café au lait",
        "descripcion": ""
      }
    }
  },
  {
    "id": "cafe-lechero-deslactosado",
    "categoria": "bebidas",
    "precio": 39,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Café lechero deslactosado",
        "descripcion": ""
      },
      "en": {
        "nombre": "Lactose-free milky coffee",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Café au lait sans lactose",
        "descripcion": ""
      }
    }
  },
  {
    "id": "leche-nescafe",
    "categoria": "bebidas",
    "precio": 33,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Leche para Nescafé",
        "descripcion": ""
      },
      "en": {
        "nombre": "Milk for Nescafé",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Lait pour Nescafé",
        "descripcion": ""
      }
    }
  },
  {
    "id": "chocolate",
    "categoria": "bebidas",
    "precio": 39,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Chocolate",
        "descripcion": ""
      },
      "en": {
        "nombre": "Hot chocolate",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Chocolat chaud",
        "descripcion": ""
      }
    }
  },
  {
    "id": "chocolate-deslactosado",
    "categoria": "bebidas",
    "precio": 48,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Chocolate deslactosado",
        "descripcion": ""
      },
      "en": {
        "nombre": "Lactose-free chocolate",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Chocolat sans lactose",
        "descripcion": ""
      }
    }
  },
  {
    "id": "capuchino",
    "categoria": "bebidas",
    "precio": 49,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Capuchino",
        "descripcion": "Frío o caliente; natural o rompope."
      },
      "en": {
        "nombre": "Cappuccino",
        "descripcion": "Iced or hot; plain or rompope."
      },
      "fr": {
        "nombre": "Cappuccino",
        "descripcion": "Froid ou chaud ; nature ou rompope."
      }
    }
  },
  {
    "id": "capuchino-deslactosado",
    "categoria": "bebidas",
    "precio": 54,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Capuchino deslactosado",
        "descripcion": "Frío o caliente."
      },
      "en": {
        "nombre": "Lactose-free cappuccino",
        "descripcion": "Iced or hot."
      },
      "fr": {
        "nombre": "Cappuccino sans lactose",
        "descripcion": "Froid ou chaud."
      }
    }
  },
  {
    "id": "agua-nescafe",
    "categoria": "bebidas",
    "precio": 29,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Agua para Nescafé",
        "descripcion": ""
      },
      "en": {
        "nombre": "Water for Nescafé",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Eau pour Nescafé",
        "descripcion": ""
      }
    }
  },
  {
    "id": "te",
    "categoria": "bebidas",
    "precio": 29,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Té",
        "descripcion": ""
      },
      "en": {
        "nombre": "Tea",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Thé",
        "descripcion": ""
      }
    }
  },
  {
    "id": "refrescos",
    "categoria": "cervezas",
    "precio": 32,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Refrescos y agua natural",
        "descripcion": "Coca-Cola, Sidral Mundet, Squirt, Mirinda, Peñafiel de manzana o agua natural."
      },
      "en": {
        "nombre": "Soft drinks and still water",
        "descripcion": "Coca-Cola, Sidral Mundet, Squirt, Mirinda, apple Peñafiel or still water."
      },
      "fr": {
        "nombre": "Sodas et eau plate",
        "descripcion": "Coca-Cola, Sidral Mundet, Squirt, Mirinda, Peñafiel pomme ou eau plate."
      }
    }
  },
  {
    "id": "cervezas-clasicas",
    "categoria": "cervezas",
    "precio": 36,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Cerveza Sol Clara, Indio o XX Lager",
        "descripcion": ""
      },
      "en": {
        "nombre": "Sol Clara, Indio or XX Lager beer",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Bière Sol Clara, Indio ou XX Lager",
        "descripcion": ""
      }
    }
  },
  {
    "id": "cervezas-seleccion",
    "categoria": "cervezas",
    "precio": 39,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Cerveza Corona, Victoria, Tecate, Bohemia, Negra Modelo o Modelo Especial",
        "descripcion": ""
      },
      "en": {
        "nombre": "Corona, Victoria, Tecate, Bohemia, Negra Modelo or Modelo Especial beer",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Bière Corona, Victoria, Tecate, Bohemia, Negra Modelo ou Modelo Especial",
        "descripcion": ""
      }
    }
  },
  {
    "id": "chelada",
    "categoria": "cervezas",
    "precio": 12,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Chelada (sal y limón)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Chelada (salt and lime)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Chelada (sel et citron vert)",
        "descripcion": ""
      }
    },
    "suplemento": true
  },
  {
    "id": "michelada",
    "categoria": "cervezas",
    "precio": 17,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Michelada (limón, salsas y sal)",
        "descripcion": ""
      },
      "en": {
        "nombre": "Michelada (lime, sauces and salt)",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Michelada (citron vert, sauces et sel)",
        "descripcion": ""
      }
    },
    "suplemento": true
  },
  {
    "id": "michelada-clamato",
    "categoria": "cervezas",
    "precio": 25,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Michelada con Clamato",
        "descripcion": ""
      },
      "en": {
        "nombre": "Michelada with Clamato",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Michelada au Clamato",
        "descripcion": ""
      }
    },
    "suplemento": true
  },
  {
    "id": "licores-60",
    "categoria": "licores",
    "precio": 60,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Bacardí, Fundador, Terry, Centenario, Jimador, anís o José Cuervo Especial",
        "descripcion": "Bacardí Añejo o Blanco, Fundador, Terry, Centenario, Jimador, anís dulce o seco, tequila José Cuervo Especial. En copeo se incluye un refresco."
      },
      "en": {
        "nombre": "Bacardí, Fundador, Terry, Centenario, Jimador, anise or José Cuervo Especial",
        "descripcion": "Bacardí Añejo or Blanco, Fundador, Terry, Centenario, Jimador, sweet or dry anise, José Cuervo Especial tequila. A soft drink is included per serving."
      },
      "fr": {
        "nombre": "Bacardí, Fundador, Terry, Centenario, Jimador, anis ou José Cuervo Especial",
        "descripcion": "Bacardí Añejo ou Blanco, Fundador, Terry, Centenario, Jimador, anis doux ou sec, tequila José Cuervo Especial. Un soda est inclus au verre."
      }
    }
  },
  {
    "id": "licores-70",
    "categoria": "licores",
    "precio": 70,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Torres 5 o tequila 100 Años",
        "descripcion": "En copeo se incluye un refresco."
      },
      "en": {
        "nombre": "Torres 5 or 100 Años tequila",
        "descripcion": "A soft drink is included per serving."
      },
      "fr": {
        "nombre": "Torres 5 ou tequila 100 Años",
        "descripcion": "Un soda est inclus au verre."
      }
    }
  },
  {
    "id": "licores-75",
    "categoria": "licores",
    "precio": 75,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Torres 10 o tequila José Cuervo Tradicional",
        "descripcion": "En copeo se incluye un refresco."
      },
      "en": {
        "nombre": "Torres 10 or José Cuervo Tradicional tequila",
        "descripcion": "A soft drink is included per serving."
      },
      "fr": {
        "nombre": "Torres 10 ou tequila José Cuervo Tradicional",
        "descripcion": "Un soda est inclus au verre."
      }
    }
  },
  {
    "id": "licores-75-whisky",
    "categoria": "licores",
    "precio": 75,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Whisky Etiqueta Roja o tequila Cazadores",
        "descripcion": "En copeo se incluye un refresco."
      },
      "en": {
        "nombre": "Red Label whisky or Cazadores tequila",
        "descripcion": "A soft drink is included per serving."
      },
      "fr": {
        "nombre": "Whisky Red Label ou tequila Cazadores",
        "descripcion": "Un soda est inclus au verre."
      }
    }
  },
  {
    "id": "whisky-etiqueta-negra",
    "categoria": "licores",
    "precio": 85,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Whisky Etiqueta Negra",
        "descripcion": "En copeo se incluye un refresco."
      },
      "en": {
        "nombre": "Black Label whisky",
        "descripcion": "A soft drink is included per serving."
      },
      "fr": {
        "nombre": "Whisky Black Label",
        "descripcion": "Un soda est inclus au verre."
      }
    }
  },
  {
    "id": "paloma-tres-piedras-vampiro",
    "categoria": "preparados",
    "precio": 70,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Paloma, Tres Piedras o Vampiro",
        "descripcion": ""
      },
      "en": {
        "nombre": "Paloma, Tres Piedras or Vampiro",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Paloma, Tres Piedras ou Vampiro",
        "descripcion": ""
      }
    }
  },
  {
    "id": "burro-vino",
    "categoria": "preparados",
    "precio": 39,
    "fuentePagina": 6,
    "alergenos": null,
    "vegetariano": null,
    "textos": {
      "es": {
        "nombre": "Burro o vino tradicional",
        "descripcion": ""
      },
      "en": {
        "nombre": "Burro or traditional wine",
        "descripcion": ""
      },
      "fr": {
        "nombre": "Burro ou vin traditionnel",
        "descripcion": ""
      }
    }
  }
];
