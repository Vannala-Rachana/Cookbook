export const colors = {
	COLOR_PRIMARY: "#6AD4DD",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

// Constant.js

export const categories = [
	{
	  id: '01',
	  name: 'Indian',
	  routeName: 'IndianFoodOptions',
	},
	{
	  id: '02',
	  name: 'Chinese',
	  routeName: 'ChineseFoodOptions',
	},
	{
	  id: '03',
	  name: 'Italian',
	  routeName: 'ItalianFoodOptions',
	},
  ];
  
  export const recipesByCategory = {
	Indian: [
	  {
		id: '001',
		name: 'Butter Chicken',
		image: require("../assets/images/chicken.jpeg"),
		ingredients: ["Fresh 500g Chicken pieces", "2 onions,finely chopped", "2 tomatoes, chopped", "Minced garlic, 3-4 cloves","1 inch ginger,grated","2-3 green chillies","1 teaspoon of red chilli powder and corriander powder","Salt to taste","Garam Masala"],
		time: "40 mins",
		color: "#006A4E",
		steps: [
			"Heat oil or ghee in a pan and add chopped onions. Sauté until golden brown.",
			"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
			"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates.",
			"Add chicken pieces and mix well to coat with the masala. Cook for 5-7 minutes.",
			"Add water as needed to achieve desired consistency. Cover and cook until chicken is tender.",
			"Sprinkle garam masala and garnish with fresh coriander leaves before serving."

		],
		
	  },
	  {
		id: '002',
		name: 'Paneer Tikka',
		image: require("../assets/images/paneer.jpeg"),
	
		ingredients: [
			"200g Paneer",
			"2 Onion",
			"2 Tomato",
			"2 Bell pepper",
			"Salt to taste",
			"1 teaspoon of red chilli, cumin powder and garam masala",
			"1 cup yogurt",
			"2 tablespoon ginger-garlic paste"
		],
		time: "40 mins",
		
		color: "#f39c12",

		steps: [
			"In a bowl, mix yogurt, ginger-garlic paste, turmeric powder, red chili powder, cumin powder, garam masala, and salt.",
			"Add paneer cubes, bell pepper, and onion to the marinade. Mix well and let it marinate for at least 30 minutes.",
			"Heat oil in a pan and add the marinated paneer, bell pepper, and onion mixture. Cook until paneer is slightly browned and vegetables are tender.",
			"Cook until paneer is slightly browned and vegetables are tender.",
			"Garnish with fresh coriander leaves before serving.",
		],
	  },
	  {
		id:'003',
		name: "Dal Tadka",
		image: require("../assets/images/dal.jpeg"),
	
		ingredients: ["1 cup yellow lentils (moong dal or toor dal), washed and drained", "1 onion, finely chopped", "2 tomatoes, chopped", "3-4 cloves garlic, minced","2 green chilies, slit","1 teaspoon of red chili powder and cumin seeds"],
		time: "20 mins",
		
		color: "#FF0000",
		
		steps: [
			"Pressure cook lentils with turmeric powder, salt, and enough water until soft and mushy.",
			"Heat ghee or oil in a pan and add cumin seeds and mustard seeds. Once they splutter, add chopped onions, minced garlic, grated ginger, and green chilies. Sauté until onions are translucent.",
			"Add chopped tomatoes, red chili powder, and salt. Cook until tomatoes are soft and mushy.",
			"Add the cooked lentils to the tomato mixture and mix well. Adjust consistency by adding water if needed. Simmer for 5-10 minutes.",
			"For tadka (tempering), heat a teaspoon of ghee in a small pan and add cumin seeds, red chili powder, and a pinch of asafoetida. Pour this tadka over the dal.",
			"Garnish with fresh coriander leaves before serving."
		],

	  },
	  {
		id :'004',
		name: "Egg Curry",
		image: require("../assets/images/egg.webp"),
		ingredients: ["4-6 hard-boiled eggs, peeled", "1 onion, finely chopped", "2 tomatoes, chopped", "1 tablespoon of Ginger-Garlic Paste","2-3 green chilies, slit","Salt to taste","1 teaspoon of red chilli powder, coriander powder and garam masala"],
		time: "30 mins",
		color: "#d35400",
		steps: [
			"Heat oil or ghee in a pan and add cumin seeds.",
			"Add chopped onions and sauté until golden brown.",
			"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
			"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates from the masala.",
			"Add halved hard-boiled eggs and gently mix to coat with the masala. ",
			"Add water to achieve desired gravy consistency. Cover and simmer for 10-15 minutes.",
			"Sprinkle garam masala and garnish with fresh coriander leaves before serving."
		],   

	  },
	  {
		id:'005',
		name: "Fish curry",
		image: require("../assets/images/fish.jpeg"),
		ingredients: ["Fish Fillets (such as tilapia, salmon, or cod)", "Onion", "Tomatoes", "Garlic", "Ginger", "Green Chilies", "Cumin Seeds", "Turmeric Powder", "Red Chili Powder", "Coriander Powder", "Garam Masala", "Salt", "Oil or Ghee", "Fresh Coriander Leaves"],
		time: "30 mins",
		color: "#8d4004",

		steps: [
					"Heat oil or ghee in a pan and add cumin seeds.",
					"Add chopped onions and sauté until golden brown.",
					"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
					"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates from the masala.",
					"Add fish pieces and gently mix to coat with the masala.",
					"Add water to achieve desired gravy consistency. Cover and simmer for 10-15 minutes or until fish is cooked through.",
					"Sprinkle garam masala and garnish with fresh coriander leaves before serving.",
				],


	  },
	  {
		id:'006',
		name: "Potato Curry",
		image: require("../assets/images/potato.jpeg"),
		ingredients: ["Potatoes", "Onion", "Tomatoes", "Garlic", "Ginger", "Green Chilies", "Cumin Seeds", "Turmeric Powder", "Red Chili Powder", "Coriander Powder", "Garam Masala", "Salt", "Oil or Ghee", "Fresh Coriander Leaves"],
		time: "20 mins",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
			steps: [
				"Heat oil or ghee in a pan and add cumin seeds.",
				"Add chopped onions and sauté until golden brown.",
				"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
				"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates from the masala.",
				"Add diced potatoes and mix well to coat with the masala.",
				"Add water to achieve desired gravy consistency. Cover and simmer for 15-20 minutes or until potatoes are tender.",
				"Sprinkle garam masala and garnish with fresh coriander leaves before serving.",
				],
	  },
	  {
		id:'007',
		name: "Chickpea Curry",
		image: require("../assets/images/chole.jpeg"),
		ingredients: ["Chickpeas (Kabuli Chana)", "Onion", "Tomatoes", "Garlic", "Ginger", "Green Chilies", "Cumin Seeds", "Turmeric Powder", "Red Chili Powder", "Coriander Powder", "Garam Masala", "Amchur (Dry Mango Powder)", "Salt", "Oil or Ghee", "Fresh Coriander Leaves"],
		time: "55 mins",
		color: "#d35400",
		steps: [
"Soak chickpeas overnight or for at least 6 hours.",
"Pressure cook the soaked chickpeas with salt until soft and tender.",
"Heat oil or ghee in a pan and add cumin seeds.",
"Add chopped onions and sauté until golden brown.",
"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates from the masala.",
"Add the cooked chickpeas and mix well with the masala.",
"Add amchur (dry mango powder) and garam masala. Stir well.",
"Add water to achieve desired gravy consistency. Cover and simmer for 10-15 minutes.",
"Garnish with fresh coriander leaves before serving.",
		],
	  },
	  {
		id:'008',
		name: "Rajma Masala",
		image: require("../assets/images/rajma.jpeg"),
		ingredients: ["Kidney Beans (Rajma)", "Onion", "Tomatoes", "Garlic", "Ginger", "Green Chilies", "Cumin Seeds", "Turmeric Powder", "Red Chili Powder", "Coriander Powder", "Garam Masala", "Salt", "Oil or Ghee", "Fresh Coriander Leaves"],
		time: "35 mins",
		color: "#f96163",
		
		steps: [
			"Soak kidney beans overnight or for at least 6-8 hours.",
"Pressure cook the soaked kidney beans with salt until soft and tender.",
"Heat oil or ghee in a pan and add cumin seeds.",
"Add chopped onions and sauté until golden brown.",
"Add minced garlic, grated ginger, and green chilies. Sauté for 2 minutes.",
"Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes are soft and oil separates from the masala.",
"Add the cooked kidney beans and mix well with the masala.",
"Add garam masala and stir well.",
"Add water to achieve desired gravy consistency. Cover and simmer for 10-15 minutes.",
"Garnish with fresh coriander leaves before serving.",
		]
	  },
	  
	],
	Chinese: [
	  {
		id: '101',
		name: 'Dumplings',
    image: require("../assets/images/dumplings.jpeg"),
    ingredients: [
      "250g ground pork",
      "1 cup cabbage, finely chopped",
      "2 green onions, chopped",
      "2 cloves garlic, minced",
      "1 inch ginger, minced",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "Salt and pepper to taste",
      "40 dumpling wrappers",
      "Water for sealing",
      "2 tbsp vegetable oil for frying"
    ],
    time: "50 mins",
    color: "#8A2BE2",
    steps: [
      "In a large bowl, combine ground pork, cabbage, green onions, garlic, ginger, soy sauce, sesame oil, salt, and pepper.",
      "Mix well until everything is well combined.",
      "Place a spoonful of the filling onto a dumpling wrapper.",
      "Moisten the edges with water and fold the dumpling in half, pressing to seal.",
      "Repeat with the remaining filling and wrappers.",
      "In a pan, heat vegetable oil over medium heat.",
      "Place the dumplings in the pan, flat side down.",
      "Fry until the bottoms are golden brown.",
      "Carefully add water to the pan, covering about halfway up the dumplings.",
      "Cover and cook until the dumplings are cooked through and the water has evaporated.",
      "Serve hot with dipping sauce."
    ]
  },
  

		{
		  id: '102',
		  name: 'Kung Pao Chicken',
		  image: require("../assets/images/kungpao.jpeg"),
		  ingredients: [
			"500g chicken breast, diced",
			"1 red bell pepper, diced",
			"1 green bell pepper, diced",
			"1/2 cup peanuts",
			"3-4 dried red chilies",
			"3 cloves garlic, minced",
			"1 inch ginger, minced",
			"2 green onions, chopped",
			"2 tbsp soy sauce",
			"1 tbsp rice vinegar",
			"1 tbsp hoisin sauce",
			"1 tbsp cornstarch dissolved in 2 tbsp water",
			"Salt to taste",
			"2 tbsp oil for cooking"
		  ],
		  time: "35 mins",
		  color: "#FF4500",
		  steps: [
			"Heat oil in a wok over high heat.",
			"Add dried red chilies, garlic, and ginger. Sauté for 30 seconds.",
			"Add chicken pieces and stir-fry until they turn white.",
			"Add bell peppers and continue to stir-fry for 2 minutes.",
			"Add soy sauce, rice vinegar, and hoisin sauce. Mix well.",
			"Pour in the cornstarch mixture to thicken the sauce.",
			"Add peanuts and green onions. Stir well to combine.",
			"Serve hot with steamed rice."
		  ]
		},
		{
		  id: '103',
		  name: 'Sweet and Sour Pork',
		  image: require("../assets/images/sweetsourpork.jpeg"),
		  ingredients: [
			"500g pork tenderloin, diced",
			"1 red bell pepper, diced",
			"1 green bell pepper, diced",
			"1 carrot, sliced",
			"1 onion, diced",
			"1 cup pineapple chunks",
			"3 cloves garlic, minced",
			"1 inch ginger, minced",
			"2 tbsp soy sauce",
			"2 tbsp vinegar",
			"3 tbsp ketchup",
			"2 tbsp brown sugar",
			"1 tbsp cornstarch dissolved in 2 tbsp water",
			"Salt to taste",
			"2 tbsp oil for cooking"
		  ],
		  time: "40 mins",
		  color: "#FFD700",
		  steps: [
			"In a bowl, marinate pork with soy sauce and ginger for 15 minutes.",
			"Heat oil in a pan over medium-high heat.",
			"Add marinated pork and cook until browned.",
			"Remove pork from the pan and set aside.",
			"In the same pan, add garlic, ginger, and onions. Sauté until fragrant.",
			"Add bell peppers, carrot, and pineapple chunks. Stir-fry for 3-4 minutes.",
			"In a separate bowl, mix soy sauce, vinegar, ketchup, and brown sugar.",
			"Pour the sauce mixture into the pan and bring to a simmer.",
			"Add the pork back to the pan and mix well.",
			"Pour in the cornstarch mixture to thicken the sauce.",
			"Serve hot with steamed rice."
		  ]
		},
		{
		  id: '104',
		  name: 'Mongolian Beef',
		  image: require("../assets/images/mangolianbeef.jpeg"),
		  ingredients: [
			"500g beef sirloin, thinly sliced",
			"1/4 cup soy sauce",
			"2 tbsp hoisin sauce",
			"2 tbsp brown sugar",
			"3 cloves garlic, minced",
			"1 inch ginger, minced",
			"2 green onions, chopped",
			"2 tbsp cornstarch",
			"1/4 cup water",
			"Salt to taste",
			"2 tbsp oil for cooking"
		  ],
		  time: "30 mins",
		  color: "#8B4513",
		  steps: [
			"In a bowl, mix soy sauce, hoisin sauce, and brown sugar.",
			"Add beef slices to the marinade and let it sit for 15 minutes.",
			"Heat oil in a pan over high heat.",
			"Add garlic and ginger. Sauté until fragrant.",
			"Add marinated beef slices and stir-fry until browned.",
			"In a separate bowl, dissolve cornstarch in water.",
			"Pour the cornstarch mixture into the pan to thicken the sauce.",
			"Add green onions and stir well to combine.",
			"Serve hot with steamed rice."
		  ]
		},
		{
			id: '105',
			name: 'Mapo Tofu',
			image: require("../assets/images/mapotofu.jpeg"),
			ingredients: [
			  "300g tofu, cubed",
			  "100g ground pork",
			  "2 green onions, chopped",
			  "2 cloves garlic, minced",
			  "1 inch ginger, minced",
			  "2 tbsp doubanjiang (spicy bean paste)",
			  "1 tbsp soy sauce",
			  "1 tsp sugar",
			  "1 cup chicken stock",
			  "2 tbsp cornstarch",
			  "2 tbsp water",
			  "2 tbsp vegetable oil",
			  "Salt to taste"
			],
			time: "25 mins",
			color: "#483D8B",
			steps: [
			  "In a small bowl, mix cornstarch and water to make a slurry.",
			  "Heat oil in a pan over medium heat.",
			  "Add garlic, ginger, and green onions. Sauté until fragrant.",
			  "Add ground pork and cook until browned.",
			  "Stir in doubanjiang, soy sauce, and sugar.",
			  "Pour in chicken stock and bring to a simmer.",
			  "Gently add tofu cubes and cook for 5-7 minutes.",
			  "Stir in the cornstarch slurry to thicken the sauce.",
			  "Season with salt and garnish with more green onions.",
			  "Serve hot with steamed rice."
			]
		  },
		  {
			id: '106',
			name: 'Chow Mein',
			image: require("../assets/images/chowmein.jpeg"),
			ingredients: [
			  "200g egg noodles",
			  "200g chicken breast, sliced",
			  "1 bell pepper, sliced",
			  "1 carrot, julienned",
			  "1 cup cabbage, shredded",
			  "3 cloves garlic, minced",
			  "2 green onions, chopped",
			  "2 tbsp soy sauce",
			  "1 tbsp oyster sauce",
			  "1 tbsp sesame oil",
			  "2 tbsp vegetable oil",
			  "Salt and pepper to taste"
			],
			time: "20 mins",
			color: "#4682B4",
			steps: [
			  "Cook egg noodles according to package instructions. Drain and set aside.",
			  "In a pan, heat vegetable oil over medium-high heat.",
			  "Add garlic and green onions. Sauté until fragrant.",
			  "Add chicken slices and cook until browned.",
			  "Add bell pepper, carrot, and cabbage. Stir-fry for 3-4 minutes.",
			  "Add cooked noodles to the pan.",
			  "Season with soy sauce, oyster sauce, sesame oil, salt, and pepper.",
			  "Stir well to combine all ingredients.",
			  "Serve hot as a main dish or side."
			]
		  },
	
		{
		  id: '107',
		  name: 'Spring Rolls',
		  image: require("../assets/images/springrolls.jpeg"),
		  ingredients: [
			"10 spring roll wrappers",
			"200g ground pork",
			"1 carrot, shredded",
			"1 cup cabbage, shredded",
			"2 cloves garlic, minced",
			"1 inch ginger, minced",
			"2 green onions, chopped",
			"2 tbsp soy sauce",
			"1 tbsp oyster sauce",
			"1 tbsp sesame oil",
			"Salt and pepper to taste",
			"2 cups vegetable oil for frying"
		  ],
		  time: "45 mins",
		  color: "#228B22",
		  steps: [
			"In a pan, heat sesame oil over medium heat.",
			"Add garlic, ginger, and green onions. Sauté until fragrant.",
			"Add ground pork and cook until browned.",
			"Add shredded carrot and cabbage. Stir-fry for 3-4 minutes.",
			"Season with soy sauce, oyster sauce, salt, and pepper.",
			"Remove from heat and let it cool.",
			"Place a spoonful of the filling onto a spring roll wrapper.",
			"Roll it.",
		  ]
		},
		{

			id: '108',
			name: 'Peking Duck',
  image: require("../assets/images/pekinduck.jpeg"),
  ingredients: [
    "1 whole duck",
    "4 cups water",
    "1 cup maltose or honey",
    "2 tbsp soy sauce",
    "1 tbsp rice vinegar",
    "2 cloves garlic, minced",
    "1 inch ginger, sliced",
    "1 star anise",
    "1 cinnamon stick",
    "Salt to taste",
    "Spring onions and cucumber, thinly sliced for garnish",
    "Pancakes or steamed buns for serving"
  ],
  time: "2 hrs",
  color: "#DAA520",
  steps: [
    "Clean and rinse the duck thoroughly. Pat dry with paper towels.",
    "In a large pot, bring water to a boil. Add maltose or honey, soy sauce, rice vinegar, garlic, ginger, star anise, cinnamon stick, and salt.",
    "Place the duck in the pot, breast side down. Lower the heat to a simmer and cook for about 1 hour, turning occasionally.",
    "Remove the duck from the pot and let it cool.",
    "Preheat the oven to 400°F (200°C).",
    "Place the duck on a roasting rack and roast in the oven for about 30-40 minutes or until the skin is crispy and golden.",
    "Remove from the oven and let it rest for a few minutes before slicing.",
    "Serve the Peking duck slices with pancakes or steamed buns, garnished with spring onions and cucumber."
  ]

		},
		
	],
	Italian: [
		
		{
		  id: '201',
		  name: 'Margherita Pizza',
		  image: require("../assets/images/margherita_pizza.webp"),
		  ingredients: [
			"1 pizza dough",
			"1 cup tomato sauce",
			"2 cups mozzarella cheese, shredded",
			"Fresh basil leaves",
			"2 cloves garlic, minced",
			"Olive oil",
			"Salt and pepper to taste"
		  ],
		  time: "30 mins",
		  color: "#FF0000",
		  steps: [
			"Preheat the oven to 475°F (245°C).",
			"Roll out the pizza dough on a floured surface to your desired thickness.",
			"Spread the tomato sauce evenly over the dough.",
			"Sprinkle the shredded mozzarella cheese on top.",
			"Drizzle some olive oil over the pizza and sprinkle with minced garlic, salt, and pepper.",
			"Bake in the preheated oven for about 10-15 minutes or until the crust is golden and the cheese is bubbly.",
			"Remove from the oven, garnish with fresh basil leaves, and serve hot."
		  ]
		},
		{
		  id: '202',
		  name: 'Spaghetti Carbonara',
		  image: require("../assets/images/carbonara.jpeg"),
		  ingredients: [
			"8 oz spaghetti",
			"4 oz pancetta or bacon, diced",
			"3 large eggs",
			"1 cup grated Pecorino Romano cheese",
			"1 clove garlic, minced",
			"Salt and black pepper to taste"
		  ],
		  time: "20 mins",
		  color: "#008000",
		  steps: [
			"Cook the spaghetti in a large pot of boiling salted water until al dente. Drain well.",
			"In a large skillet, cook the pancetta or bacon until crispy. Add the minced garlic and cook for another minute.",
			"In a bowl, whisk together the eggs, grated Pecorino Romano cheese, salt, and black pepper.",
			"Add the drained spaghetti to the skillet with the pancetta or bacon. Remove from heat and quickly stir in the egg and cheese mixture, tossing well to coat the pasta.",
			"Serve immediately with additional Pecorino Romano cheese and black pepper."
		  ]
		},
		{
		  id: '203',
		  name: 'Risotto alla Milanese',
		  image: require("../assets/images/risotto.webp"),
		  ingredients: [
			"1 cup Arborio rice",
			"4 cups chicken or vegetable broth",
			"1/2 cup dry white wine",
			"1/2 cup grated Parmesan cheese",
			"1 small onion, finely chopped",
			"2 tbsp butter",
			"1/2 tsp saffron threads",
			"Salt to taste"
		  ],
		  time: "30 mins",
		  color: "#FFD700",
		  steps: [
			"In a saucepan, bring the broth to a simmer. Keep warm.",
			"In another large saucepan, melt the butter over medium heat. Add the chopped onion and sauté until translucent.",
			"Add the Arborio rice to the pan and stir to coat with the butter and onions. Cook for about 1-2 minutes.",
			"Pour in the white wine and cook until it is absorbed by the rice.",
			"Add a ladleful of the warm broth to the rice and stir continuously until the liquid is absorbed. Continue adding the broth, one ladleful at a time, stirring frequently, until the rice is creamy and al dente (about 20-25 minutes).",
			"Stir in the saffron threads and grated Parmesan cheese. Season with salt to taste.",
			"Remove from heat and let it rest for a few minutes before serving."
		  ]
		},
		{
		  id: '204',
		  name: 'Bruschetta',
		  image: require("../assets/images/bruschetta.jpeg"),
		  ingredients: [
			"1 baguette, sliced",
			"4-5 ripe tomatoes, diced",
			"2 cloves garlic, minced",
			"Fresh basil leaves, chopped",
			"Olive oil",
			"Balsamic vinegar",
			"Salt and pepper to taste"
		  ],
		  time: "15 mins",
		  color: "#FF4500",
		  steps: [
			"Preheat the oven to 400°F (200°C).",
			"Place the baguette slices on a baking sheet and drizzle with olive oil. Bake for about 5-7 minutes or until lightly toasted.",
			"In a bowl, mix together the diced tomatoes, minced garlic, chopped basil, olive oil, balsamic vinegar, salt, and pepper.",
			"Top each toasted baguette slice with the tomato mixture.",
			"Serve immediately as an appetizer or snack."
		  ]
		},
		{
		  id: '205',
		  name: 'Tiramisu',
		  image: require("../assets/images/tiramisu.jpeg"),
		  ingredients: [
			"1 cup mascarpone cheese",
			"1 cup heavy cream",
			"1/2 cup granulated sugar",
			"1/2 cup brewed espresso or strong coffee",
			"2 tbsp coffee liqueur (optional)",
			"24-30 ladyfinger cookies",
			"Cocoa powder for dusting",
			"Shaved chocolate for garnish"
		  ],
		  time: "4 hrs",
		  color: "#8B4513",
		  steps: [
			"In a mixing bowl, beat the heavy cream and sugar until stiff peaks form.",
			"In another bowl, whisk the mascarpone cheese until smooth. Gently fold in the whipped cream mixture.",
			"In a shallow dish, mix together the brewed espresso and coffee liqueur.",
			"Quickly dip each ladyfinger into the coffee mixture, making sure not to soak them too much.",
    "Arrange a layer of soaked ladyfingers in the bottom of a serving dish or individual cups.",
    "Spread half of the mascarpone mixture over the ladyfingers.",
    "Repeat with another layer of soaked ladyfingers and the remaining mascarpone mixture.",
    "Cover and refrigerate for at least 2 hours, or overnight, to set.",
    "Before serving, dust the top with unsweetened cocoa powder and garnish with shaved chocolate."
		  ]

	 },
	 {
		
			id: '206',
			name: 'Osso Buco',
			image: require("../assets/images/ossobuco.jpeg"),
			ingredients: [
			  "4 veal shanks, about 1.5 inches thick",
			  "1/2 cup all-purpose flour",
			  "1 onion, finely chopped",
			  "1 carrot, finely chopped",
			  "1 celery stalk, finely chopped",
			  "2 cloves garlic, minced",
			  "1 can (14 oz) crushed tomatoes",
			  "1 cup dry white wine",
			  "1 cup beef or chicken broth",
			  "2 tbsp olive oil",
			  "Salt and pepper to taste",
			  "Gremolata for garnish (optional)"
			],
			time: "2 hrs 30 mins",
			color: "#8B4513",
			steps: [
			  "Preheat the oven to 350°F (175°C).",
			  "Season the veal shanks with salt and pepper, then dredge in flour, shaking off any excess.",
			  "In a large ovenproof skillet or Dutch oven, heat the olive oil over medium-high heat. Add the veal shanks and brown on both sides. Remove and set aside.",
			  "In the same skillet, add the chopped onion, carrot, celery, and garlic. Sauté until softened.",
			  "Add the crushed tomatoes, white wine, and broth to the skillet, stirring to combine.",
			  "Return the browned veal shanks to the skillet, nestling them into the sauce.",
			  "Cover and transfer to the preheated oven. Cook for about 2 hours or until the meat is tender and falling off the bone.",
			  "Serve hot, garnished with gremolata if desired."
			]
		  },
		  {
			id: '207',
			name: 'Fettuccine Alfredo',
			image: require("../assets/images/fettuccine.jpeg"),
			ingredients: [
			  "8 oz fettuccine pasta",
			  "1/2 cup unsalted butter",
			  "1 cup heavy cream",
			  "1 cup grated Parmesan cheese",
			  "2 cloves garlic, minced",
			  "Salt and white pepper to taste",
			  "Fresh parsley for garnish"
			],
			time: "20 mins",
			color: "#FFD700",
			steps: [
			  "Cook the fettuccine pasta in a large pot of boiling salted water until al dente. Drain well.",
			  "In a large skillet, melt the butter over medium heat. Add the minced garlic and sauté until fragrant.",
			  "Add the heavy cream to the skillet and bring to a simmer. Reduce heat to low.",
			  "Stir in the grated Parmesan cheese until the sauce is smooth and creamy.",
			  "Season with salt and white pepper to taste.",
			  "Add the cooked fettuccine to the skillet, tossing well to coat the pasta in the Alfredo sauce.",
			  "Transfer to serving plates and garnish with fresh parsley.",
			  "Serve immediately."
			]
		  },
		  {
			id: '208',
			name: 'Minestrone Soup',
			image: require("../assets/images/minestrone.jpeg"),
			ingredients: [
			  "2 tbsp olive oil",
			  "1 onion, chopped",
			  "2 carrots, diced",
			  "2 celery stalks, diced",
			  "3 cloves garlic, minced",
			  "1 zucchini, diced",
			  "1 can (14 oz) diced tomatoes",
			  "6 cups vegetable broth",
			  "1 cup small pasta (like ditalini or elbow)",
			  "1 can (14 oz) cannellini beans, drained and rinsed",
			  "1 tsp dried oregano",
			  "1 tsp dried basil",
			  "Salt and pepper to taste",
			  "Grated Parmesan cheese for serving"
			],
			time: "1 hr",
			color: "#008000",
			steps: [
			  "In a large pot, heat the olive oil over medium heat. Add the chopped onion, carrots, celery, and garlic. Sauté until softened.",
			  "Add the diced zucchini, diced tomatoes, vegetable broth, dried oregano, and dried basil to the pot. Bring to a boil.",
			  "Reduce heat to low and simmer for about 20-30 minutes.",
			  "Add the small pasta and cannellini beans to the pot. Continue to simmer until the pasta is cooked al dente.",
			  "Season with salt and pepper to taste.",
			  "Serve hot, garnished with grated Parmesan cheese."
			],

		  },
		
		],

Mexican: [
	
		{
			id: '301',
			name: 'Tacos al Pastor',
			image: require("../assets/images/tacos.jpeg"),
			ingredients: [
			  "1 kg pork shoulder",
			  "3 dried guajillo chilies",
			  "2 dried ancho chilies",
			  "1/2 cup pineapple juice",
			  "1/4 cup white vinegar",
			  "3 cloves garlic",
			  "1 tbsp achiote paste",
			  "1 tsp ground cumin",
			  "1 tsp dried oregano",
			  "Salt to taste",
			  "Tortillas and toppings (like cilantro, onions, and pineapple)"
			],
			time: "2 hrs",
			color: "#FF4500",
			steps: [
			  "Soak the dried chilies in hot water for 20 minutes.",
			  "Blend the soaked chilies, pineapple juice, vinegar, garlic, achiote paste, cumin, oregano, and salt to make the marinade.",
			  "Marinate the pork shoulder in the mixture overnight.",
			  "Slice the marinated pork thinly and grill until cooked through.",
			  "Serve the grilled pork on tortillas with your choice of toppings."
			]
		  },
		  {
			id: '302',
			name: 'Guacamole',
			image: require("../assets/images/guacamole.jpeg"),
			ingredients: [
			  "3 ripe avocados",
			  "1 small onion, finely chopped",
			  "1-2 jalapeño peppers, seeded and minced",
			  "1 large tomato, seeded and chopped",
			  "1/4 cup fresh cilantro, chopped",
			  "2 cloves garlic, minced",
			  "1 lime, juiced",
			  "Salt to taste"
			],
			time: "15 mins",
			color: "#228B22",
			steps: [
			  "Mash the avocados in a bowl.",
			  "Stir in the onion, jalapeño, tomato, cilantro, and garlic.",
			  "Add lime juice and salt, mix well.",
			  "Taste and adjust seasoning if necessary.",
			  "Serve immediately with tortilla chips or as a topping."
			]
		  },
		  {
			id: '303',
			name: 'Enchiladas Verdes',
			image: require("../assets/images/enchiladas.jpeg"),
			ingredients: [
			  "12 corn tortillas",
			  "2 cups shredded chicken",
			  "2 cups salsa verde",
			  "1/2 cup sour cream",
			  "1 cup shredded cheese (like Monterey Jack or Cheddar)",
			  "1/4 cup chopped onions",
			  "1/4 cup chopped fresh cilantro",
			  "Oil for frying",
			  "Salt to taste"
			],
			time: "45 mins",
			color: "#008000",
			steps: [
			  "Preheat oven to 350°F (175°C).",
			  "In a skillet, heat the oil and lightly fry each tortilla for a few seconds on each side.",
			  "Dip the fried tortilla in salsa verde, fill with shredded chicken, and roll it up.",
			  "Place the filled tortillas seam-side down in a baking dish.",
			  "Pour the remaining salsa verde over the top of the enchiladas.",
			  "Dollop sour cream over the top and sprinkle with cheese.",
			  "Bake for 20 minutes or until cheese is melted and bubbly.",
			  "Garnish with chopped onions and cilantro before serving."
			]
		  },
		  {
			id: '304',
			name: 'Chiles Rellenos',
			image: require("../assets/images/chiles.webp"),
			ingredients: [
			  "4 large poblano peppers",
			  "2 cups shredded cheese (like Oaxaca or mozzarella)",
			  "1 cup flour",
			  "4 large eggs, separated",
			  "Oil for frying",
			  "Salt to taste"
			],
			time: "1 hr",
			color: "#8B4513",
			steps: [
			  "Roast the poblano peppers over an open flame or under a broiler until the skin is charred and blistered.",
			  "Place the roasted peppers in a plastic bag and let them steam for 10 minutes.",
			  "Peel off the charred skin, make a slit down one side, and remove the seeds.",
			  "Stuff each pepper with shredded cheese.",
			  "Dust the stuffed peppers with flour.",
			  "In a separate bowl, beat the egg whites until stiff peaks form. Gently fold in the egg yolks.",
			  "Dip each pepper in the egg mixture, ensuring it's fully coated.",
			  "In a skillet, heat oil over medium-high heat and fry the coated peppers until golden brown.",
			  "Serve immediately."
			]
		  },
		  {
			id: '305',
			name: 'Pozole',
			image: require("../assets/images/pozole.jpeg"),
			ingredients: [
			  "1 kg pork shoulder, cut into chunks",
			  "2 cans (15 oz each) hominy, drained and rinsed",
			  "1 large onion, chopped",
			  "3 cloves garlic, minced",
			  "2 dried ancho chilies",
			  "1 tsp dried oregano",
			  "1 tsp ground cumin",
			  "Salt to taste",
			  "6 cups chicken broth",
			  "Toppings: shredded lettuce, chopped radishes, chopped onions, sliced radishes, lime wedges, dried oregano, and crushed red pepper flakes"
			],
			time: "2 hrs 30 mins",
			color: "#FF8C00",
			steps: [
			  "In a large pot, add the pork shoulder, onion, garlic, ancho chilies, oregano, cumin, and salt.",
			  "Pour in the chicken broth and bring to a boil.",
			  "Reduce heat and simmer for about 1.5 to 2 hours or until the pork is tender.",
			  "Remove the ancho chilies, puree them with a little broth, and return the puree to the pot.",
			  "Stir in the hominy and simmer for an additional 30 minutes.",
			  "Taste and adjust seasoning if necessary.",
			  "Serve hot in bowls with the desired toppings."
			]
		  },
		  {
			id: '306',
			name: 'Quesadillas',
			image: require("../assets/images/quesadillas.jpeg"),
			ingredients: [
			  "8 large flour tortillas",
			  "2 cups shredded cheese (like Cheddar or Monterey Jack)",
			  "1 cup cooked chicken or beef, shredded (optional)",
			  "1/2 cup diced tomatoes",
			  "1/4 cup chopped green onions",
			  "Sour cream, salsa, and guacamole for serving",
			  "Oil or butter for frying",
			  "Salt to taste"
			],
			time: "20 mins",
			color: "#FFD700",
			steps: [
			  "Heat a skillet or griddle over medium heat.",
			  "Place one tortilla on the skillet and sprinkle with cheese.",
			  "Add the cooked chicken or beef, if using, followed by tomatoes and green onions.",
			  "Top with another tortilla.",
			  "Cook until the bottom tortilla is golden brown, then flip and cook the other side.",
			  "Remove from heat, let it cool slightly, and cut into wedges.",
			  "Serve hot with sour cream, salsa, and guacamole."
			]
		  },
		  {
			id: '307',
			name: 'Mole Poblano',
			image: require("../assets/images/mole.jpeg"),
			ingredients: [
			  "4 dried ancho chilies",
			  "2 dried pasilla chilies",
			  "2 dried mulato chilies",
			  "3 cups chicken broth",
			  "1/2 cup blanched almonds",
			  "1/4 cup raisins",
			  "1/4 cup sesame seeds",
			  "3 cloves garlic",
			  "1 small onion, chopped",
			  "2 oz dark chocolate",
			  "1 tsp ground cinnamon",
			  "1 tsp ground cumin",
			  "Salt to taste",
			  "Oil for frying"
			],
			time: "1 hr 30 mins",
			color: "#8B4513",
			steps: [
			  "Remove stems and seeds from the dried chilies.",
			  "In a skillet, lightly toast the chilies, almonds, raisins, and sesame seeds until fragrant.",
			  "Transfer the toasted ingredients to a blender, add garlic, onion, chocolate, cinnamon, cumin, and chicken broth. Blend until smooth.",
			  "In a large pot, heat oil over medium heat and pour in the blended mixture.",
			  "Stir and simmer for about 30-40 minutes, stirring occasionally.",
			  "Season with salt to taste.",
			  "Serve over cooked chicken or turkey with rice on the side."
			]
		  },
		  {
			id: '308',
			name: 'Churros',
			image: require("../assets/images/churros.jpeg"),
			ingredients: [
			  "1 cup water",
			  "2 1/2 tbsp white sugar",
			  "1/2 tsp salt",
			  "2 tbsp vegetable oil",
			  "1 cup all-purpose flour",
			  "Oil for frying",
			  "1/2 cup white sugar",
			  "1 tsp ground cinnamon",
			  "Chocolate sauce or caramel sauce for dipping"
			],
			time: "45 mins",
			color: "#8B4513",
			steps: [
			  "In a saucepan, combine water, sugar, salt, and vegetable oil. Bring to a boil.",
			  "Remove from heat and stir in the flour until the mixture forms a ball.",
			  "Heat oil for frying in a deep-fryer or deep skillet to 375°F (190°C).",
			  "Transfer the dough to a pastry bag fitted with a large star tip.",
			  "Squeeze 4-inch strips of dough into the hot oil and fry until golden brown.",
			  "Remove from oil and drain on paper towels.",
			  "Combine 1/2 cup sugar and cinnamon in a bowl; roll the hot churros in the mixture.",
			  "Serve warm with chocolate or caramel sauce."
			]
		  }
		],		  
		  American :[

			{
				id: '401',
				name: 'Burger',
				image: require("../assets/images/burger.jpeg"),
				ingredients: [
				  "1 lb ground beef",
				  "Salt and pepper to taste",
				  "4 hamburger buns",
				  "Lettuce, tomato, onion, pickles for toppings",
				  "Cheese slices (optional)"
				],
				time: "20 mins",
				color: "#B22222",
				steps: [
				  "Preheat grill or skillet over medium-high heat.",
				  "Season ground beef with salt and pepper, then form into patties.",
				  "Cook patties for about 4-5 minutes per side or until desired doneness.",
				  "Toast the buns lightly on the grill.",
				  "Assemble burgers with desired toppings.",
				  "Serve hot with fries or salad."
				]
			  },
			  {
				id: '402',
				name: 'Mac and Cheese',
				image: require("../assets/images/maccheese.jpeg"),
				ingredients: [
				  "2 cups macaroni",
				  "2 cups shredded cheddar cheese",
				  "1/2 cup milk",
				  "2 tbsp butter",
				  "Salt and pepper to taste"
				],
				time: "30 mins",
				color: "#FFD700",
				steps: [
				  "Cook macaroni according to package instructions.",
				  "In a saucepan, melt butter and add milk.",
				  "Add shredded cheese and stir until melted and creamy.",
				  "Combine cheese sauce with cooked macaroni.",
				  "Season with salt and pepper to taste.",
				  "Serve hot."
				]
			  },
			  {
				id: '403',
				name: 'Fried Chicken',
				image: require("../assets/images/friedchicken.jpeg"),
				ingredients: [
				  "4 chicken thighs",
				  "1 cup buttermilk",
				  "1 cup flour",
				  "1 tsp salt",
				  "1/2 tsp pepper",
				  "Oil for frying"
				],
				time: "40 mins",
				color: "#B22222",
				steps: [
				  "Marinate chicken thighs in buttermilk for at least 1 hour.",
				  "In a shallow dish, combine flour, salt, and pepper.",
				  "Remove chicken from buttermilk and dredge in flour mixture.",
				  "Heat oil in a frying pan over medium heat.",
				  "Fry chicken for about 6-8 minutes per side or until golden and cooked through.",
				  "Remove from oil and drain on paper towels.",
				  "Serve hot with mashed potatoes and gravy."
				]
			  },
			  {
				id: '404',
				name: 'Pancakes',
				image: require("../assets/images/pancakes.jpeg"),
				ingredients: [
				  "1 1/2 cups all-purpose flour",
				  "3 1/2 tsp baking powder",
				  "1 tsp salt",
				  "1 tbsp white sugar",
				  "1 1/4 cups milk",
				  "1 egg",
				  "3 tbsp butter, melted"
				],
				time: "30 mins",
				color: "#FFD700",
				steps: [
				  "In a large bowl, sift together flour, baking powder, salt, and sugar.",
				  "Make a well in the center and pour in milk, egg, and melted butter.",
				  "Mix until smooth.",
				  "Heat a lightly oiled griddle or frying pan over medium-high heat.",
				  "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
				  "Cook until bubbles form on the surface, then flip and cook until golden brown.",
				  "Serve hot with maple syrup or fruit."
				]
			  },
			  {
				id: '405',
				name: 'Apple Pie',
				image: require("../assets/images/applepie.jpeg"),
				ingredients: [
				  "6 cups sliced apples",
				  "3/4 cup white sugar",
				  "1 tbsp all-purpose flour",
				  "1/2 tsp ground cinnamon",
				  "1/4 tsp ground nutmeg",
				  "1 recipe pastry for a 9-inch double-crust pie"
				],
				time: "1 hr 30 mins",
				color: "#8B4513",
				steps: [
				  "Preheat oven to 425°F (220°C).",
				  "Mix sugar, flour, cinnamon, and nutmeg together.",
				  "Line a 9-inch pie dish with pastry.",
				  "Layer apples in pie crust, sprinkling each layer with the sugar mixture.",
				  "Cover apples with a second pastry crust, sealing edges and cutting slits in the top.",
				  "Bake in preheated oven for 40-50 minutes, or until crust is golden brown and filling is bubbly.",
				  "Cool slightly before serving."
				]
			  },
			  {
				id: '406',
				name: 'BBQ Ribs',
				image: require("../assets/images/bbqribs.jpeg"),
				ingredients: [
				  "3 lbs pork ribs",
				  "1 cup BBQ sauce",
				  "2 tbsp brown sugar",
				  "1 tbsp paprika",
				  "1 tsp garlic powder",
				  "Salt and pepper to taste"
				],
				time: "2 hrs 30 mins",
				color: "#8B4513",
				steps: [
				  "Preheat oven to 300°F (150°C).",
				  "In a bowl, mix together brown sugar, paprika, garlic powder, salt, and pepper.",
				  "Rub mixture evenly over ribs.",
				  "Place ribs on a baking sheet and bake for 2 hours.",
				  "Brush ribs with BBQ sauce and bake for an additional 30 minutes.",
				  "Let rest for 10 minutes before serving."
				]
			  },
			  {
				id: '407',
				name: 'Macaroni and Cheese',
				image: require("../assets/images/macandcheese.jpeg"),
				ingredients: [
				  "2 cups elbow macaroni",
				  "4 cups shredded cheddar cheese",
				  "2 cups milk",
				  "1/4 cup butter",
				  "2 tbsp all-purpose flour",
				  "Salt and pepper to taste"
				],
				time: "45 mins",
				color: "#8B4513",
				steps: [
				  "Preheat oven to 350°F (175°C).",
				  "Cook macaroni according to package instructions, then drain.",
				  "In a saucepan, melt butter over medium heat.",
				  "Stir in flour until smooth.",
				  "Gradually add milk, stirring constantly until thickened.",
				  "Add 3 cups of shredded cheese and stir until melted.",
				  "Combine cheese sauce with macaroni and pour into a greased baking dish.",
				  "Sprinkle remaining cheese on top.",
				  "Bake for 20-25 minutes or until golden and bubbly."
				]
			  },
			  {
				id: '408',
				name: 'Peanut Butter Cookies',
				image: require("../assets/images/cookies.jpeg"),
				ingredients: [
				  "1 cup peanut butter",
				  "1 cup sugar",
				  "1 large egg",
				  "1 tsp vanilla extract",
				  "1/2 tsp baking soda",
				  "1/4 tsp salt"
				],
				time: "20 mins",
				color: "#8B4513",
				steps: [
				  "Preheat oven to 350°F (175°C).",
				  "In a bowl, cream together peanut butter and sugar.",
				  "Add egg, vanilla, baking soda, and salt. Mix until combined.",
				  "Roll dough into 1-inch balls and place on a baking sheet lined with parchment paper.",
				  "Using a fork, gently press down on each cookie to create a crisscross pattern.",
				  "Bake for 8-10 minutes or until edges are lightly golden.",
				  "Let cookies cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
				]
			  }
			  
			  

		  ]


	}