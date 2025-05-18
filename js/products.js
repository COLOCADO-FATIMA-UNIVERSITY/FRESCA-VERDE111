const allProducts = [
    {
        name: "Nestle - Low Fat Milk 1L",
        category: "Dairy & Eggs",
        image: "img/thumbnail/MILK/Nestle - Low Fat Milk.png",
        price: "₱110.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Emborg - Skimmed Milk 1L",
        category: "Dairy & Eggs",
        image: "img/thumbnail/MILK/Emborg - Skimmed Milk.png",
        price: "₱125.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Milk Magic - Choco Milk 250ml",
        category: "Dairy & Eggs",
        image: "img/thumbnail/MILK/Milk Magic - Flavored Milk.png",
        price: "₱100.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Silk - Almond Milk Original 946ml",
        category: "Dairy & Eggs",
        image: "img/thumbnail/MILK/Silk - Almond Milk.png",
        price: "₱180.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Arla - Lactose Free Milk 1L",
        category: "Dairy & Eggs",
        image: "img/thumbnail/MILK/Arla - Lactose Free.png",
        price: "₱135.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Sharp - Cheddar Cheese 200g",
        category: "Dairy & Eggs",
        image: "img/thumbnail/CHEESE/Sharp - Cheddar Cheese.png",
        price: "₱350.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Arla - Mozzarella Cheese 200g",
        category: "Dairy & Eggs",
        image: "img/thumbnail/CHEESE/Arla - Mozzarella.png",
        price: "₱320.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Santini - Parmesan 222g",
        category: "Dairy & Eggs",
        image: "img/thumbnail/CHEESE/Santini - Parmesan.png",
        price: "₱250.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Bulla - Cottage Cheese 250g",
        category: "Dairy & Eggs",
        image: "img/thumbnail/CHEESE/Bulla - Cottage Cheese.png",
        price: "₱280.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Philadelphia - Cream Cheese",
        category: "Dairy & Eggs",
        image: "img/thumbnail/CHEESE/Philadelphia - Cream Cheese.png",
        price: "₱180.00",
        link: "dairy&eggs.html"
    },
    {
        name: "Dampa Fresh Crabs (per kg)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/SHELLFISH/steamed-blue-crab-with-spicy-seafood-sauce-isolated-transparent-background_220739-67654-removebg-preview.png",
        price: "₱400.00",
        link: "meat&seafoods.html"
    },
    {
        name: "John Dory Fillet (250g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/SHELLFISH/john dory fillet.png",
        price: "₱250.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Century Bangus Can (350g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/SHELLFISH/century bangus.png",
        price: "₱120.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Sea Queen Shrimp (300g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/SHELLFISH/sea queen shrimp.png",
        price: "₱260.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Hito Catfish Slices (per kg)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/SHELLFISH/Hito Catfish Slices.png",
        price: "₱350.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Bounty Fresh Chicken (1.2kg)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/POULTRY/bounty chicken.png",
        price: "₱300.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Tyson Chicken Tenderloins (500g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/POULTRY/tyson chicken tenderloins.png",
        price: "₱220.00",
        link: "meat&seafoods.html"
    },
    {
        name: "San Mig - Chicken Longganisa (250g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/POULTRY/chicken longganisa.png",
        price: "₱150.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Magnolia Vienna Sausage (200g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/POULTRY/magnolia sausage.png",
        price: "₱100.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Farmwell Thigh Fillet (500g)",
        category: "Meat & Seafood",
        image: "img/thumbnail/Meat and Seafood/POULTRY/thigh fillet.png",
        price: "₱200.00",
        link: "meat&seafoods.html"
    },
    {
        name: "Goldilocks Ensaymada Piece",
        category: "Pastries & Cakes",
        image: "img/thumbnail/Bakery Treats/PASTRIES & CAKES/ensaymada.png",
        price: "₱35.00",
        link: "bakery.html"
    },
    {
        name: "RedRibbon Ube Roll (8 pcs)",
        category: "Pastries & Cakes",
        image: "img/thumbnail/Bakery Treats/PASTRIES & CAKES/Ube cake roll.png",
        price: "₱480.00",
        link: "bakery.html"
    },
    {
        name: "French Baker Croissant",
        category: "Pastries & Cakes",
        image: "img/thumbnail/Bakery Treats/PASTRIES & CAKES/croissant.png",
        price: "₱60.00",
        link: "bakery.html"
    },
    {
        name: "Conti Mango Chiffon",
        category: "Pastries & Cakes",
        image: "img/thumbnail/Bakery Treats/PASTRIES & CAKES/contis mango chiffon.png",
        price: "₱150.00",
        link: "bakery.html"
    },
    {
        name: "BreadTalk Almond Bun",
        category: "Pastries & Cakes",
        image: "img/thumbnail/Bakery Treats/PASTRIES & CAKES/almond bun.png",
        price: "₱50.00",
        link: "bakery.html"
    },
    {
        name: "Gardenia White Bread (680g)",
        category: "Bread Rolls & Buns",
        image: "img/thumbnail/Bakery Treats/BREAD ROLLS & BUNS/gardenia bread.png",
        price: "₱75.00",
        link: "bakery.html"
    },
    {
        name: "Pacific Hotdog Buns(6pcs)",
        category: "Bread Rolls & Buns",
        image: "img/thumbnail/Bakery Treats/BREAD ROLLS & BUNS/pacific hot dog buns.png",
        price: "₱80.00",
        link: "bakery.html"
    },
    {
        name: "Baguio Raisin Bread (600g)",
        category: "Bread Rolls & Buns",
        image: "img/thumbnail/Bakery Treats/BREAD ROLLS & BUNS/baguio raisin bread.png",
        price: "₱140.00",
        link: "bakery.html"
    },
    {
        name: "PanManila Pandesal (6pcs)",
        category: "Bread Rolls & Buns",
        image: "img/thumbnail/Bakery Treats/BREAD ROLLS & BUNS/pandesal.png",
        price: "₱30.00",
        link: "bakery.html"
    },
    {
        name: "Ministop Garlic Rolls (4pcs)",
        category: "Bread Rolls & Buns",
        image: "img/thumbnail/Bakery Treats/BREAD ROLLS & BUNS/garlic bread.png",
        price: "₱55.00",
        link: "bakery.html"
    },
    {
        name: "JackJill Potato Chips",
        category: "Chips & Crackers",
        image: "img/thumbnail/Snacks & Sweets/CHIPS & CRACKERS/jackjill potato chips.png",
        price: "₱45.00",
        link: "snacks.html"
    },
    {
        name: "Piattos Sour Cream",
        category: "Chips & Crackers",
        image: "img/thumbnail/Snacks & Sweets/CHIPS & CRACKERS/piattos.png",
        price: "₱50.00",
        link: "snacks.html"
    },
    {
        name: "Rebisco Assorted Crackers",
        category: "Chips & Crackers",
        image: "img/thumbnail/Snacks & Sweets/CHIPS & CRACKERS/rebisco.png",
        price: "₱40.00",
        link: "snacks.html"
    },
    {
        name: "Chippy Corn Chips",
        category: "Chips & Crackers",
        image: "img/thumbnail/Snacks & Sweets/CHIPS & CRACKERS/chippy.png",
        price: "₱35.00",
        link: "snacks.html"
    },
    {
        name: "Ligo Fish Skin",
        category: "Chips & Crackers",
        image: "img/thumbnail/Snacks & Sweets/CHIPS & CRACKERS/fish skin.png",
        price: "₱55.00",
        link: "snacks.html"
    },
    {
        name: "Oishi Prawn Crackers",
        category: "Local Delicacies",
        image: "img/thumbnail/Snacks & Sweets/LOCAL DELICACIES/oishi prawn crackers.png",
        price: "₱45.00",
        link: "snacks.html"
    },
    {
        name: "Mamasita Banana Chips",
        category: "Local Delicacies",
        image: "img/thumbnail/Snacks & Sweets/LOCAL DELICACIES/banana chips.png",
        price: "₱60.00",
        link: "snacks.html"
    },
    {
        name: "Bulaklak Chicharon Pack",
        category: "Local Delicacies",
        image: "img/thumbnail/Snacks & Sweets/LOCAL DELICACIES/chicharon bulaklak.png",
        price: "₱75.00",
        link: "snacks.html"
    },
    {
        name: "Goodah Vanilla Polvoron",
        category: "Local Delicacies",
        image: "img/thumbnail/Snacks & Sweets/LOCAL DELICACIES/polvoron.png",
        price: "₱120.00",
        link: "snacks.html"
    },
    {
        name: "Lara Cebu Chorizo",
        category: "Local Delicacies",
        image: "img/thumbnail/Snacks & Sweets/LOCAL DELICACIES/cebu chorizo.png",
        price: "₱200.00",
        link: "snacks.html"
    },
    {
        name: "Davao Organic Mangoes (per kg)",
        category: "Organic Fruits & Veggies",
        image: "img/thumbnail/Organic Products/ORGANIC FRUIT & VEGGIES/mango.png",
        price: "₱250.00",
        link: "organic.html"
    },
    {
        name: "Baguio Lettuce Head",
        category: "Organic Fruits & Veggies",
        image: "img/thumbnail/Organic Products/ORGANIC FRUIT & VEGGIES/baguio lettuce.png",
        price: "₱80.00",
        link: "organic.html"
    },
    {
        name: "Benguet Organic Strawberries",
        category: "Organic Fruits & Veggies",
        image: "img/thumbnail/Organic Products/ORGANIC FRUIT & VEGGIES/strawberry.png",
        price: "₱200.00",
        link: "organic.html"
    },
    {
        name: "Mindanao Organic Pineapple",
        category: "Organic Fruits & Veggies",
        image: "img/thumbnail/Organic Products/ORGANIC FRUIT & VEGGIES/pineapple.png",
        price: "₱120.00",
        link: "organic.html"
    },
    {
        name: "Quezon Malunggay Leaves",
        category: "Organic Fruits & Veggies",
        image: "img/thumbnail/Organic Products/ORGANIC FRUIT & VEGGIES/malunggay leaves.png",
        price: "₱50.00",
        link: "organic.html"
    },
    {
        name: "Prince Brown Rice (1kg)",
        category: "Organic Grains & Staples",
        image: "img/thumbnail/Organic Products/ORGANIC GRAINS & STAPLES/brown rice.png",
        price: "₱20.00",
        link: "organic.html"
    },
    {
        name: "Healthy Options Quinoa (500g)",
        category: "Organic Grains & Staples",
        image: "img/thumbnail/Organic Products/ORGANIC GRAINS & STAPLES/healthy options quinoa.png",
        price: "₱400.00",
        link: "organic.html"
    },
    {
        name: "EarthOrigins Rolled Oats (500g)",
        category: "Organic Grains & Staples",
        image: "img/thumbnail/Organic Products/ORGANIC GRAINS & STAPLES/eart origins rolled oats.png",
        price: "₱120.00",
        link: "organic.html"
    },
    {
        name: "Ayala Moringa Powder (100g)",
        category: "Organic Grains & Staples",
        image: "img/thumbnail/Organic Products/ORGANIC GRAINS & STAPLES/moringa powder.png",
        price: "₱180.00",
        link: "organic.html"
    },
    {
        name: "LaMer Coconut Sugar (250g)",
        category: "Organic Grains & Staples",
        image: "img/thumbnail/Organic Products/ORGANIC GRAINS & STAPLES/coconut sugar.png",
        price: "₱110.00",
        link: "organic.html"
    }
];