


window.imageExtensions = window.imageExtensions || [".png", ".jpg", ".jpeg", ".webp"];
const fallbackImage = "img/thumbnail/fallback.png";

// Get first word before dash or space
function getFirstWord(str) {
    return str.split(/[\s-]/)[0]; // e.g. "Sharp - Cheese" → "Sharp"
}

function resolveProductImage(productName) {
    return new Promise((resolve) => {
        const baseName = getFirstWord(productName).toLowerCase(); // e.g. "sharp"
        let index = 0;

        function tryNext() {
            if (index >= imageExtensions.length) {
                console.warn(`⚠️ No image for "${productName}". Using fallback.`);
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
        console.log(`✅ ${product.name} → ${product.image}`);
    }

    // Use after all images are resolved
    renderProducts(products);
}

// Example renderer
function renderProducts(products) {
    const container = document.querySelector("#products");
    products.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}" width="100">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
    });
}

// Product list
const cheeseProducts = [
    { name: "Sharp - Cheddar Cheese 200g", category: "cheese", price: "₱350.00" },
    { name: "Arla - Mozzarella Cheese 200g", category: "cheese", price: "₱320.00" },
    { name: "Santini - Parmesan 222g", category: "cheese", price: "₱250.00" },
    { name: "Bulla - Cottage Cheese 250g", category: "cheese", price: "₱350.00" },
    { name: "Philadelphia - Cream Cheese", category: "cheese", price: "₱185.00" },
    { name: "Kraft - Singles American Cheese", category: "cheese", price: "₱200.00" },
    { name: "Laughing Cow - Creamy Cheese", category: "cheese", price: "₱150.00" },
    { name: "Gouda Cheese Block 200g", category: "cheese", price: "₱300.00" },
    { name: "Feta Cheese Original 150g", category: "cheese", price: "₱220.00" },
    { name: "Blue Cheese Original 100g", category: "cheese", price: "₱400.00" },
    { name: "Ricotta Cheese 250g", category: "cheese", price: "₱250.00" },
];

const milkProducts = [
    { name: "Nestle - Low Fat Milk 1L", category: "milk", price: "₱110.00" },
    { name: "Emborg - Skimmed Milk 1L", category: "milk", price: "₱125.00" },
    { name: "Milk Magic - Choco Milk 250ml", category: "milk", price: "₱100.00" },
    { name: "Silk - Almond Milk Original 946ml", category: "milk", price: "₱180.00" },
    { name: "Arla - Lactose Free Milk 1L", category: "milk", price: "₱135.00" },
    { name: "Robina - Fresh Eggs Medium", category: "milk", price: "₱135.00" },
    { name: "Nestle - Full Cream Milk 1L", category: "milk", price: "₱120.00" },
    { name: "Alpro - Soya Milk 1L", category: "milk", price: "₱150.00" },
    { name: "Oatly - Oats Milk 1L", category: "milk", price: "₱200.00" },
    { name: "Anchor - Cream Milk Powder", category: "milk", price: "₱350.00" },
    { name: "Milo - Chocolate Malt Drink 1L", category: "milk", price: "₱140.00" },
];

const poultryProducts = [
    { name: "Bounty Fresh Chicken (1.2kg)", category: "poultry", price: "₱300.00" },
    { name: "Tyson Chicken Tenderloins (500g)", category: "poultry", price: "₱220.00" },
    { name: "San Mig - Chicken Longganisa (250g)", category: "poultry", price: "₱150.00" },
    { name: "Magnolia Vienna Sausage (200g)", category: "poultry", price: "₱100.00" },
    { name: "Farmwell Thigh Fillet (500g)", category: "poultry", price: "₱200.00" },
    { name: "Purefoods Chicken Nuggets (500g)", category: "poultry", price: "₱250.00" },
    { name: "Magnolia Chicken Jumbo Hotdog (400g)", category: "poultry", price: "₱180.00" },
    { name: "Bounty Fresh Whole Chicken (1.5kg)", category: "poultry", price: "₱350.00" },
    { name: "Purefoods Chicken Tocino (500g)", category: "poultry", price: "₱220.00" },
    { name: "Magnolia Chicken Jumbo Cream Fillet (500g)", category: "poultry", price: "₱240.00" },
    { name: "Farmwell Chicken Stress Free Wings (1kg)", category: "poultry", price: "₱300.00" },
];

const shellfishProducts = [
    { name: "Dampa Fresh Crabs (per kg)", category: "shellfish", price: "₱400.00" },
    { name: "John Dory Fillet (250g)", category: "shellfish", price: "₱250.00" },
    { name: "Century Bangus Can (350g)", category: "shellfish", price: "₱120.00" },
    { name: "Sea Queen Shrimp (300g)", category: "shellfish", price: "₱260.00" },
    { name: "Hito Catfish Slices (per kg)", category: "shellfish", price: "₱350.00" },
    { name: "Fresh Mussels (per kg)", category: "shellfish", price: "₱300.00" },
    { name: "Live Lobster (per kg)", category: "shellfish", price: "₱800.00" },
    { name: "Prawns Shellfish (500g)", category: "shellfish", price: "₱500.00" },
    { name: "Fish Fillet Mix (500g)", category: "shellfish", price: "₱300.00" },
    { name: "Canned Sardines (400g)", category: "shellfish", price: "₱80.00" },
    { name: "Dried Instant Cook Fish (500g)", category: "shellfish", price: "₱150.00" },
];

const pastryProducts = [
    { name: "Goldilocks Ensaymada Piece", category: "Pastries & Cakes", price: "₱35.00" },
    { name: "RedRibbon Ube Roll (8 pcs)", category: "Pastries & Cakes", price: "₱480.00" },
    { name: "French Baker Croissant", category: "Pastries & Cakes", price: "₱60.00" },
    { name: "Conti Mango Chiffon", category: "Pastries & Cakes", price: "₱150.00" },
    { name: "BreadTalk Almond Bun", category: "Pastries & Cakes", price: "₱50.00" },
    { name: "Goldilocks Chocolate Cake", category: "Pastries & Cakes", price: "₱600.00" },
    { name: "RedRibbon Ube Roll (14 pcs)", category: "Pastries & Cakes", price: "₱600.00" },
    { name: "French Baker Danish Pastry", category: "Pastries & Cakes", price: "₱70.00" },
    { name: "Conti's Chocolate Mousse", category: "Pastries & Cakes", price: "₱200.00" },
    { name: "BreadTalk Cheese Tart", category: "Pastries & Cakes", price: "₱80.00" },
    { name: "Goldilocks Leche Flan", category: "Pastries & Cakes", price: "₱120.00" },
];

const breadProducts = [
    { name: "Gardenia White Bread (680g)", category: "Bread Rolls & Buns", price: "₱75.00" },
    { name: "Pacific Hotdog Buns(6pcs)", category: "Bread Rolls & Buns", price: "₱80.00" },
    { name: "Baguio Raisin Bread (600g)", category: "Bread Rolls & Buns", price: "₱140.00" },
    { name: "PanManila Pandesal (6pcs)", category: "Bread Rolls & Buns", price: "₱30.00" },
    { name: "Ministop Garlic Rolls (4pcs)", category: "Bread Rolls & Buns", price: "₱55.00" },
    { name: "Gardenia White Bread (880g)", category: "Bread Rolls & Buns", price: "₱85.00" },
    { name: "Pacific Hotdog Buns (4pcs)", category: "Bread Rolls & Buns", price: "₱90.00" },
    { name: "Baguio Cheese Bread (600g)", category: "Bread Rolls & Buns", price: "₱150.00" },
    { name: "PanManila Cheese Pandesal (6pcs)", category: "Bread Rolls & Buns", price: "₱40.00" },
    { name: "Ministop Sweet Rolls (4pcs)", category: "Bread Rolls & Buns", price: "₱60.00" },
    { name: "Gardenia Multigrain Bread (680g)", category: "Bread Rolls & Buns", price: "₱90.00" },
];

const chipsProducts = [
    { name: "JackJill Potato Chips (70g)", category: "Chips & Crackers", price: "₱45.00" },
    { name: "Piattos Sour Cream (72g)", category: "Chips & Crackers", price: "₱50.00" },
    { name: "Rebisco Assorted Crackers (100g)", category: "Chips & Crackers", price: "₱40.00" },
    { name: "Chippy Corn Chips (80g)", category: "Chips & Crackers", price: "₱35.00" },
    { name: "Ligo Fish Skin (55g)", category: "Chips & Crackers", price: "₱55.00" },
    { name: "Tostitos Tortilla Chips (150g)", category: "Chips & Crackers", price: "₱120.00" },
    { name: "Doritos Nacho Cheese (150g)", category: "Chips & Crackers", price: "₱100.00" },
    { name: "Pringles Original (150g)", category: "Chips & Crackers", price: "₱150.00" },
    { name: "Cheetos Cheese (70g)", category: "Chips & Crackers", price: "₱50.00" },
    { name: "Lays Classic Chips (150g)", category: "Chips & Crackers", price: "₱120.00" },
    { name: "Oreo Thins Crisps (100g)", category: "Chips & Crackers", price: "₱80.00" },
];

const delicacyProducts = [
    { name: "Oishi Prawn Crackers (80g)", category: "Local Delicacies", price: "₱45.00" },
    { name: "Sabamana Banana Chips (100g)", category: "Local Delicacies", price: "₱60.00" },
    { name: "Bulaklak Chicharon Pack", category: "Local Delicacies", price: "₱75.00" },
    { name: "Goodah Vanilla Polvoron (6pcs)", category: "Local Delicacies", price: "₱120.00" },
    { name: "Lara Cebu Chorizo (per pack)", category: "Local Delicacies", price: "₱200.00" },
    { name: "Chocnut (10 pcs)", category: "Local Delicacies", price: "₱50.00" },
    { name: "Puto Bumbong (6 pcs)", category: "Local Delicacies", price: "₱100.00" },
    { name: "Kakanin Assorted Pack", category: "Local Delicacies", price: "₱150.00" },
    { name: "Biko (Rice Cake)", category: "Local Delicacies", price: "₱80.00" },
    { name: "Suman (Sticky Rice)", category: "Local Delicacies", price: "₱70.00" },
    { name: "Turon (Banana Lumpia)", category: "Local Delicacies", price: "₱60.00" },
];

const organicFruits = [
    { name: "Davao Organic Mangoes", category: "Organic Fruits & Veggies", price: "₱250.00" },
    { name: "Baguio Lettuce Head", category: "Organic Fruits & Veggies", price: "₱80.00" },
    { name: "Benguet Organic Strawberries", category: "Organic Fruits & Veggies", price: "₱200.00" },
    { name: "Mindanao Organic Pineapple", category: "Organic Fruits & Veggies", price: "₱120.00" },
    { name: "Quezon Malunggay Leaves", category: "Organic Fruits & Veggies", price: "₱50.00" },
    { name: "Organic Bananas (1kg)", category: "Organic Fruits & Veggies", price: "₱100.00" },
    { name: "Organic Apples (1kg)", category: "Organic Fruits & Veggies", price: "₱180.00" },
    { name: "Organic Tomatoes (500g)", category: "Organic Fruits & Veggies", price: "₱90.00" },
    { name: "Organic Carrots (500g)", category: "Organic Fruits & Veggies", price: "₱70.00" },
    { name: "Organic Cucumbers (500g)", category: "Organic Fruits & Veggies", price: "₱60.00" },
    { name: "Organic Bell Peppers (500g)", category: "Organic Fruits & Veggies", price: "₱150.00" },
];

const organicGrains = [
    { name: "Bong Bong Marcos Rice", category: "Organic Grains & Staples", price: "₱20.00" },
    { name: "Healthy Options Quinoa", category: "Organic Grains & Staples", price: "₱400.00" },
    { name: "EarthOrigins Rolled Oats", category: "Organic Grains & Staples", price: "₱120.00" },
    { name: "Ayala Moringa Powder", category: "Organic Grains & Staples", price: "₱180.00" },
    { name: "LaMer Coconut Sugar", category: "Organic Grains & Staples", price: "₱110.00" },
    { name: "Organic Brown Rice (1kg)", category: "Organic Grains & Staples", price: "₱80.00" },
    { name: "Organic Millet (500g)", category: "Organic Grains & Staples", price: "₱150.00" },
    { name: "Organic Barley (500g)", category: "Organic Grains & Staples", price: "₱200.00" },
    { name: "Organic Chia Seeds (250g)", category: "Organic Grains & Staples", price: "₱300.00" },
    { name: "Organic Flaxseeds (250g)", category: "Organic Grains & Staples", price: "₱250.00" },
    { name: "Organic Spelt Flour (1kg)", category: "Organic Grains & Staples", price: "₱220.00" },
];



document.addEventListener("DOMContentLoaded", () => {
    assignImages(cheeseProducts);
    assignImages(milkProducts);
    assignImages(poultryProducts);
    assignImages(shellfishProducts);
    assignImages(pastryProducts);
    assignImages(breadProducts);
    assignImages(organicGrains);
    assignImages(organicFruits);
    assignImages(chipsProducts);
    assignImages(delicacyProducts);
});
