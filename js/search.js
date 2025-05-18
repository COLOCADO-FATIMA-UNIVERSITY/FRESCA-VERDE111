document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBox");
    const resultContainer = document.getElementById("results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        displayResults(filtered);
    });

    function displayResults(products) {
        resultContainer.innerHTML = "";

        if (products.length === 0) {
            resultContainer.innerHTML = `
                <p style="
                    background-color:rgb(151, 118, 19);
                    padding: 12px 20px;
                    border-radius: 8px;
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    margin: 20px auto;
                    width: 100%;
                    max-width: 300px;
                ">
                ⚠️No results found.
                </p>
            `;

            return;
        }

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button><img src="img/icons/download.svg" alt="">ADD TO CART</button>
            </div>
        `;

            const button = card.querySelector("button");

            // ✅ ATTACH CLICK HANDLER DIRECTLY
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

                if (!isLoggedIn) {
                    showToast1("⚠️ Please sign in first!");
                    button.classList.add("cant-add");
                    button.innerHTML = `Oops! Not now`;

                    // Restart animation
                    button.style.animation = 'none';
                    button.offsetHeight;
                    button.style.animation = '';

                    setTimeout(() => {
                        button.innerHTML = `<img src="img/icons/download.svg" alt="">ADD TO CART`;
                        button.classList.remove("cant-add");
                    }, 2000);

                    return;
                }

                const name = product.name;
                const image = product.image;
                const price = parseFloat(product.price.replace("₱", "")) || 0;
                const item = { name, image, price, quantity: 1 };

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existing = cart.find(p => p.name === item.name);
                if (existing) {
                    existing.quantity += 1;
                } else {
                    cart.push(item);
                }
                localStorage.setItem("cart", JSON.stringify(cart));

                const toast = document.getElementById("toast");
                toast.innerText = `${item.name} added to cart!`;
                toast.classList.add("show");
                setTimeout(() => toast.classList.remove("show"), 3000);
            });

            resultContainer.appendChild(card);
        });
    }


    function showToast1(message) {
        let toast = document.createElement('div');
        toast.textContent = message;
        toast.className = 'custom-toast';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }
});
