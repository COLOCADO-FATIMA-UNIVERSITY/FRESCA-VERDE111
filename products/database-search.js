window.imageExtensions = [".png", ".jpg", ".jpeg", ".webp"];
const fallbackImage = "img/thumbnail/fallback.png";

function getFirstWord(str) {
    return str.split(/[\s-]/)[0].toLowerCase();
}

function resolveProductImage(productName) {
    return new Promise((resolve) => {
        const baseName = getFirstWord(productName);
        let index = 0;

        function tryNext() {
            if (index >= imageExtensions.length) {
                resolve(fallbackImage);
                return;
            }

            const ext = imageExtensions[index];
            const imagePath = `img/thumbnail/${baseName}${ext}`;
            const img = new Image();

            img.onload = () => resolve(imagePath);
            img.onerror = () => {
                index++;
                tryNext();
            };

            img.src = imagePath;
        }

        tryNext();
    });
}

async function assignImages(products) {
    for (const product of products) {
        product.image = await resolveProductImage(product.name);
    }
    return products;
}

window.ALL_PRODUCTS = [
    { name: "Sharp - Cheddar Cheese 200g", price: "₱350.00" },
    { name: "Borden - Cheddar Cheese 200g", price: "₱320.00" },
    { name: "Santini - Parmesan 222g", price: "₱250.00" },
    { name: "Bulla - Cottage Cheese 250g", price: "₱350.00" },
    { name: "Philadelphia - Cream Cheese", price: "₱185.00" },
    { name: "Kraft - Singles American Cheese", price: "₱200.00" },
    { name: "Laughing Cow - Creamy Cheese", price: "₱150.00" },
    { name: "Gouda Cheese Block 200g", price: "₱300.00" },
    { name: "Feta Cheese Original 150g", price: "₱220.00" },
    { name: "Blue Cheese Original 100g", price: "₱400.00" },

    { name: "Nestle - Low Fat Milk 1L", price: "₱110.00" },
    { name: "Emborg - Skimmed Milk 1L", price: "₱125.00" },
    { name: "Milk Magic - Choco Milk 250ml", price: "₱100.00" },
    { name: "Silk - Almond Milk Original 946ml", price: "₱180.00" },
    { name: "Arla - Lactose Free Milk 1L", price: "₱135.00" },
    { name: "Robina - Fresh Eggs Medium", price: "₱135.00" },
    { name: "Unica - Full Cream Milk 1L", price: "₱120.00" },
    { name: "Alpro - Soya Milk 1L", price: "₱150.00" },
    { name: "Oatly - Oats Milk 1L", price: "₱200.00" },
    { name: "Anchor - Cream Milk Powder", price: "₱350.00" },

    { name: "Pork Liempo (500g)", price: "₱250.00" },
    { name: "HQ Beef Cubes (500g)", price: "₱280.00" },
    { name: "Horse Meat (1.5kg)", price: "₱350.00" },
    { name: "Cut Pork Kasim (500g)", price: "₱220.00" },
    { name: "Beef Tenderloin (500g)", price: "₱240.00" },
    { name: "Bounty Fresh Chicken (1.2kg)", price: "₱300.00" },
    { name: "Tyson Chicken Tenderloins (500g)", price: "₱220.00" },
    { name: "San Mig - Chicken Longganisa (250g)", price: "₱150.00" },
    { name: "Magnolia Vienna Sausage (200g)", price: "₱100.00" },
    { name: "Farmwell Thigh Fillet (500g)", price: "₱200.00" },

    { name: "Dampa Fresh Crabs (per kg)", price: "₱400.00" },
    { name: "Hito Catfish Slices (per kg)", price: "₱350.00" },
    { name: "Fresh Mussels (per kg)", price: "₱300.00" },
    { name: "Live Lobster (per kg)", price: "₱800.00" },
    { name: "John Dory Fillet (250g)", price: "₱250.00" },
    { name: "Century Bangus Can (350g)", price: "₱120.00" },
    { name: "Sea Queen Shrimp (300g)", price: "₱260.00" },
    { name: "Prawns Shellfish (500g)", price: "₱500.00" },
    { name: "Fish Fillet Mix (500g)", price: "₱300.00" },
    { name: "GGN Sardines (400g)", price: "₱80.00" },

    { name: "Goldilocks Ensaymada 1s", price: "₱35.00" },
    { name: "RedRibbon Ube Roll (8 pcs)", price: "₱480.00" },
    { name: "French Baker Croissant", price: "₱60.00" },
    { name: "Conti Mango Chiffon", price: "₱150.00" },
    { name: "BreadTalk Almond Bun", price: "₱50.00" },
    { name: "Goldilocks Ensaymada 2s", price: "₱600.00" },
    { name: "RedRibbon Ube Roll (14 pcs)", price: "₱600.00" },
    { name: "Danish French Baker Pastry", price: "₱70.00" },
    { name: "Conti's Chocolate Mousse", price: "₱200.00" },
    { name: "BreadTalk Cheese Tart", price: "₱80.00" },

    { name: "Gardenia White Bread (680g)", price: "₱75.00" },
    { name: "Pacific Hotdog Buns(6pcs)", price: "₱80.00" },
    { name: "Baguio Raisin Bread (600g)", price: "₱140.00" },
    { name: "PanManila Pandesal (12pcs)", price: "₱30.00" },
    { name: "Ministop Garlic Rolls (4pcs)", price: "₱55.00" },
    { name: "Gardenia White Bread (880g)", price: "₱85.00" },
    { name: "Pacific Hotdog Buns (12pcs)", price: "₱90.00" },
    { name: "Baguio Cheese Bread (600g)", price: "₱150.00" },
    { name: "PanManila Cheese Pandesal (6pcs)", price: "₱40.00" },
    { name: "Ministop Sweet Rolls (8pcs)", price: "₱60.00" },

    { name: "JackJill Potato Chips (70g)", price: "₱45.00" },
    { name: "Piattos Sour Cream (72g)", price: "₱50.00" },
    { name: "Rebisco Assorted Crackers (100g)", price: "₱40.00" },
    { name: "Chippy Corn Chips (80g)", price: "₱35.00" },
    { name: "Ligo Fish Skin (55g)", price: "₱55.00" },
    { name: "Tostitos Tortilla Chips (150g)", price: "₱120.00" },
    { name: "Doritos Nacho Cheese (150g)", price: "₱100.00" },
    { name: "Pringles Original (150g)", price: "₱150.00" },
    { name: "Cheetos Cheese (70g)", price: "₱50.00" },
    { name: "Lays Classic Chips (150g)", price: "₱120.00" },
    { name: "Oreo Thins Crisps (100g)", price: "₱80.00" },

    { name: "Oishi Prawn Crackers (80g)", price: "₱45.00" },
    { name: "Sabamana Banana Chips (100g)", price: "₱60.00" },
    { name: "Bulaklak Chicharon Pack", price: "₱75.00" },
    { name: "Goodah Vanilla Polvoron (6pcs)", price: "₱120.00" },
    { name: "Lara Cebu Chorizo (per pack)", price: "₱200.00" },
    { name: "Coconut Pudding 1s", price: "₱50.00" },
    { name: "Puto Bumbong (6 pcs)", price: "₱100.00" },
    { name: "Kakanin Assorted Pack", price: "₱150.00" },
    { name: "Biko (Rice Cake) 50s", price: "₱80.00" },
    { name: "Suman (Sticky Rice)", price: "₱70.00" },
    { name: "Turon (Banana Lumpia)", price: "₱60.00" },

    { name: "Davao Organic Mangoes", price: "₱250.00" },
    { name: "Baguio Lettuce Head", price: "₱80.00" },
    { name: "Benguet Organic Strawberries", price: "₱200.00" },
    { name: "Mindanao Organic Pineapple", price: "₱120.00" },
    { name: "Quezon Malunggay Leaves", price: "₱50.00" },
    { name: "Bananas Organic (1kg)", price: "₱100.00" },
    { name: "Apples Organic (1kg)", price: "₱180.00" },
    { name: "Tomatoes Organic (500g)", price: "₱90.00" },
    { name: "Carrots Organic (500g)", price: "₱70.00" },
    { name: "Cucumbers Organic (500g)", price: "₱60.00" },

    { name: "Bong Bong Marcos Rice", price: "₱20.00" },
    { name: "Healthy Options Quinoa", price: "₱400.00" },
    { name: "EarthOrigins Rolled Oats", price: "₱120.00" },
    { name: "Ayala Moringa Powder", price: "₱180.00" },
    { name: "LaMer Coconut Sugar", price: "₱110.00" },
    { name: "Brown Rice Organic (1kg)", price: "₱80.00" },
    { name: "Millet Organic (500g)", price: "₱150.00" },
    { name: "Barley Organic (500g)", price: "₱200.00" },
    { name: "Chia Seeds Organic (250g)", price: "₱300.00" },
    { name: "Flaxseeds Organic (250g)", price: "₱250.00" }
];


window.assignImages = assignImages;
