// ==========================================
// Get Elements
// ==========================================

const productForm = document.getElementById("productForm");

const productName = document.getElementById("productName");

const productDescription = document.getElementById("productDescription");

const productColor = document.getElementById("productColor");

const outOfStock = document.getElementById("outOfStock");

const productsTable = document.getElementById("productsTable");

const searchInput = document.getElementById("searchInput");

const stockFilter = document.getElementById("stockFilter");

const addButton = document.getElementById("addButton");

const updateButton = document.getElementById("updateButton");

const nameError = document.getElementById("nameError");

const descriptionError = document.getElementById("descriptionError");

// ==========================================
// Products Array
// ==========================================

let products = JSON.parse(localStorage.getItem("products")) || [];

// ==========================================
// Current Product ID
// ==========================================

let currentProductId = null;

// ==========================================
// Display Products When Page Loads
// ==========================================

displayProducts(products);

// ==========================================
// Add Product
// ==========================================

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear errors

  nameError.textContent = "";

  descriptionError.textContent = "";

  // Get values

  const name = productName.value.trim();

  const description = productDescription.value.trim();

  const color = productColor.value;

  const stock = outOfStock.checked;

  // ======================================
  // Validation
  // ======================================

  // Product Name

  if (name.length <= 3) {
    nameError.textContent = "Name must be more than 3 characters.";

    return;
  }

  // Product Description

  if (description.length < 10 || description.length > 30) {
    descriptionError.textContent =
      "Description must be between 10 and 30 characters.";

    return;
  }

  // Product Color

  if (color === "") {
    alert("Please select a color.");

    return;
  }

  // ======================================
  // Create Product Object
  // ======================================

  const product = {
    id: Date.now(),

    name: name,

    description: description,

    color: color,

    outOfStock: stock,
  };

  // ======================================
  // Add Product To Array
  // ======================================

  products.push(product);

  // ======================================
  // Save To Local Storage
  // ======================================

  saveProducts();

  // ======================================
  // Display Products
  // ======================================

  displayProducts(products);

  // ======================================
  // Reset Form
  // ======================================

  productForm.reset();
});

// ==========================================
// Save Products
// ==========================================

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

// ==========================================
// Display Products
// ==========================================

function displayProducts(productsArray) {
  productsTable.innerHTML = "";

  // No Products

  if (productsArray.length === 0) {
    productsTable.innerHTML = `

            <tr>

                <td colspan="5">
                    No Products Found
                </td>

            </tr>

        `;

    return;
  }

  // Display Products

  productsArray.forEach(function (product) {
    const row = document.createElement("tr");

    row.innerHTML = `

                <td>
                    ${product.name}
                </td>


                <td>
                    ${product.description}
                </td>


                <td>
                    ${product.color}
                </td>


                <td>

                    ${
                      product.outOfStock
                        ? `<span class="out-stock">
                            Out Of Stock
                        </span>`
                        : `<span class="in-stock">
                            In Stock
                        </span>`
                    }

                </td>


                <td>

                    <button
                        class="view"
                        onclick="viewProduct(${product.id})"
                    >
                        View
                    </button>


                    <button
                        class="edit"
                        onclick="editProduct(${product.id})"
                    >
                        Update
                    </button>


                    <button
                        class="delete"
                        onclick="deleteProduct(${product.id})"
                    >
                        Delete
                    </button>

                </td>

            `;

    productsTable.appendChild(row);
  });
}

// ==========================================
// View Product
// ==========================================

function viewProduct(id) {
  const product = products.find(function (product) {
    return product.id === id;
  });

  if (!product) {
    return;
  }

  alert(
    "Product Name: " +
      product.name +
      "\n\nDescription: " +
      product.description +
      "\n\nColor: " +
      product.color +
      "\n\nStatus: " +
      (product.outOfStock ? "Out Of Stock" : "In Stock"),
  );
}

// ==========================================
// Delete Product
// ==========================================

function deleteProduct(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this product?",
  );

  if (!confirmDelete) {
    return;
  }

  products = products.filter(function (product) {
    return product.id !== id;
  });

  saveProducts();

  displayProducts(products);
}

// ==========================================
// Edit Product
// ==========================================

function editProduct(id) {
  const product = products.find(function (product) {
    return product.id === id;
  });

  if (!product) {
    return;
  }

  // Put Product Data Into Form

  productName.value = product.name;

  productDescription.value = product.description;

  productColor.value = product.color;

  outOfStock.checked = product.outOfStock;

  // Save ID

  currentProductId = id;

  // Change Buttons

  addButton.classList.add("hidden");

  updateButton.classList.remove("hidden");

  // Go To Form

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ==========================================
// Update Product
// ==========================================

updateButton.addEventListener("click", function () {
  // Clear Errors

  nameError.textContent = "";

  descriptionError.textContent = "";

  // Get Values

  const name = productName.value.trim();

  const description = productDescription.value.trim();

  const color = productColor.value;

  const stock = outOfStock.checked;

  // ======================================
  // Validation
  // ======================================

  if (name.length <= 3) {
    nameError.textContent = "Name must be more than 3 characters.";

    return;
  }

  if (description.length < 10 || description.length > 30) {
    descriptionError.textContent =
      "Description must be between 10 and 30 characters.";

    return;
  }

  if (color === "") {
    alert("Please select a color.");

    return;
  }

  // ======================================
  // Find Product
  // ======================================

  const product = products.find(function (product) {
    return product.id === currentProductId;
  });

  if (!product) {
    return;
  }

  // ======================================
  // Update Product
  // ======================================

  product.name = name;

  product.description = description;

  product.color = color;

  product.outOfStock = stock;

  // ======================================
  // Save
  // ======================================

  saveProducts();

  // ======================================
  // Display
  // ======================================

  displayProducts(products);

  // ======================================
  // Reset
  // ======================================

  productForm.reset();

  currentProductId = null;

  // ======================================
  // Buttons
  // ======================================

  addButton.classList.remove("hidden");

  updateButton.classList.add("hidden");
});

// ==========================================
// Search
// ==========================================

searchInput.addEventListener("input", searchProducts);

stockFilter.addEventListener("change", searchProducts);

// ==========================================
// Search Function
// ==========================================

function searchProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();

  const stockValue = stockFilter.value;

  const filteredProducts = products.filter(function (product) {
    // Search Name

    const nameMatch = product.name.toLowerCase().includes(searchValue);

    // Search Description

    const descriptionMatch = product.description
      .toLowerCase()
      .includes(searchValue);

    // Search Color

    const colorMatch = product.color.toLowerCase().includes(searchValue);

    // Search Stock

    const stockText = product.outOfStock ? "out of stock" : "in stock";

    const stockMatch = stockText.includes(searchValue);

    // Text Search

    const textMatch = nameMatch || descriptionMatch || colorMatch || stockMatch;

    // ==================================
    // Stock Filter
    // ==================================

    let statusMatch = true;

    if (stockValue === "out") {
      statusMatch = product.outOfStock === true;
    }

    if (stockValue === "in") {
      statusMatch = product.outOfStock === false;
    }

    return textMatch && statusMatch;
  });

  displayProducts(filteredProducts);
}
