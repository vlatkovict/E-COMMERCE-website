/*const addToCartButtons = document.querySelectorAll('.add');
    const cartIcon = document.getElementById('cart-icon');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', event => {
        const card = event.target.closest('.card');
        const productName = card.querySelector('.card-title').textContent;
        const productPriceParagraph = card.querySelector('.price');
        const productPrice = parseFloat(productPriceParagraph.textContent.replace('$', '').replace(',', ''));
        
       
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
      
        existingCartItems.push({ name: productName, price: productPrice });
        
        // Store the updated cart items in Local Storage
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  
       
        updateCartIconCount(existingCartItems.length);
      });
    });
  
    function updateCartIconCount(itemCount) {
      cartIcon.textContent = itemCount;
    }*//*
    const addToCartButtons = document.querySelectorAll('.add');
const cartIcon = document.getElementById('cart-icon');

addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    const card = event.target.closest('.card');
    const productName = card.querySelector('.card-title').textContent;
    const productSize = card.querySelector('#size-select').value; // Get the selected size
    const productPriceParagraph = card.querySelector('.price');
    const productPrice = parseFloat(productPriceParagraph.textContent.replace('RSD', '').trim());
    
    if (productSize === 'default') {
      alert('Please select a size before adding to the cart.');
      return; // Prevent adding to cart without size
    }
    
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the product to the cart with size
    existingCartItems.push({ name: productName, size: productSize, price: productPrice });

    // Store the updated cart items in Local Storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    updateCartIconCount(existingCartItems.length);
  });
});

function updateCartIconCount(itemCount) {
  cartIcon.textContent = itemCount;
}
// Define the openProductInfoModal function
function openProductInfoModal(productId) {
  // Find the modal element by its ID
  const modal = document.getElementById(`productInfoModal-${productId}`);

  // Display the modal by setting its style to "block"
  if (modal) {
    modal.style.display = "block";
  }

  // Close the modal when the "X" button is clicked
  const closeModalButton = modal.querySelector("#closeModalButton");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Add to cart button
  const addToCartButton = modal.querySelector(".addToCartWithSize");
  addToCartButton.addEventListener("click", () => {
    // Retrieve product details from the modal and handle adding to the cart
    const sizeSelect = modal.querySelector(`#size-select${productId}`);
    const selectedSize = sizeSelect.value;
    const productDescription = modal.querySelector("#product-description").textContent;

    // For demonstration, let's display the selected item
    alert(`Added to cart:\nProduct Number: ${productId}\nSize: ${selectedSize}\nDescription: ${productDescription}`);

    // Close the modal
    modal.style.display = "none";
  });
}



// You can add additional logic as needed for your specific use case.
*//*
const sizeSelect = modal.querySelector(`#size-select${productId}`);
console.log('sizeSelect:', sizeSelect);

// Check if the element was found
if (!sizeSelect) {
  console.error(`Element with ID "size-select${productId}" not found.`);
}

const addToCartButtons = document.querySelectorAll('.add');
const cartIcon = document.getElementById('cart-icon');

addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    const card = event.target.closest('.card');
    const productName = card.querySelector('.card-title').textContent;
    const productSize = card.querySelector('#size-select').value; // Get the selected size
    const productPriceParagraph = card.querySelector('.price');
    const productPrice = parseFloat(productPriceParagraph.textContent.replace('RSD', '').trim());
    
    if (productSize === 'default') {
      alert('Please select a size before adding to the cart.');
      return; // Prevent adding to cart without size
    }
    
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the product to the cart with size
    existingCartItems.push({ name: productName, size: productSize, price: productPrice });

    // Store the updated cart items in Local Storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    updateCartIconCount(existingCartItems.length);
  });
});

function updateCartIconCount(itemCount) {
  cartIcon.textContent = itemCount;
}

// Define the openProductInfoModal function
function openProductInfoModal(productId) {
  // Find the modal element by its ID
  const modal = document.getElementById(`productInfoModal-${productId}`);

  // Display the modal by setting its style to "block"
  if (modal) {
    modal.style.display = "block";
  }

  // Close the modal when the "X" button is clicked
  const closeModalButton = modal.querySelector("#closeModalButton");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Add to cart button
  const addToCartButton = modal.querySelector(".addToCartWithSize");
  addToCartButton.addEventListener("click", () => {
    // Retrieve product details from the modal and handle adding to the cart
    const sizeSelect = modal.querySelector(`#size-select${productId}`);
    if (sizeSelect) {
      const selectedSize = sizeSelect.value;
      const productDescription = modal.querySelector("#product-description").textContent;

      // For demonstration, let's display the selected item
      alert(`Added to cart:\nProduct Number: ${productId}\nSize: ${selectedSize}\nDescription: ${productDescription}`);

      // Close the modal
      modal.style.display = "none";
    }
  });
}

    // Define the openProductInfoModal function
    document.addEventListener("DOMContentLoaded", function () {
      const addToCartButtons = document.querySelectorAll('.add');
      const cartIcon = document.getElementById('cart-icon');
    
      addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
          const card = event.target.closest('.card');
          const productName = card.querySelector('.card-title').textContent;
          const productSize = card.querySelector('#size-select').value; // Get the selected size
          const productPriceParagraph = card.querySelector('.price');
          const productPrice = parseFloat(productPriceParagraph.textContent.replace('RSD', '').trim());
    
          if (productSize === 'default') {
            alert('Please select a size before adding to the cart.');
            return; // Prevent adding to cart without size
          }
    
          const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
          // Add the product to the cart with size
          existingCartItems.push({ name: productName, size: productSize, price: productPrice });
    
          // Store the updated cart items in Local Storage
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    
          updateCartIconCount(existingCartItems.length);
        });
      });
    
      function updateCartIconCount(itemCount) {
        cartIcon.textContent = itemCount;
      }
    
      // Define the openProductInfoModal function
      function openProductInfoModal(productId) {
        // Find the modal element by its ID
        const modal = document.getElementById(`productInfoModal-${productId}`);
    
        // Display the modal by setting its style to "block"
        if (modal) {
          modal.style.display = "block";
        }
    
        // Close the modal when the "X" button is clicked
        const closeModalButton = modal.querySelector("#closeModalButton");
        closeModalButton.addEventListener("click", () => {
          modal.style.display = "none";
        });
    
        // Add to cart button
        const addToCartButton = modal.querySelector(".addToCartWithSize");
        addToCartButton.addEventListener("click", () => {
          // Retrieve product details from the modal and handle adding to the cart
          const sizeSelect = modal.querySelector(`#size-select${productId}`);
          if (sizeSelect) {
            const selectedSize = sizeSelect.value;
            const productDescription = modal.querySelector("#product-description").textContent;
    
            // For demonstration, let's display the selected item
            alert(`Added to cart:\nProduct Number: ${productId}\nSize: ${selectedSize}\nDescription: ${productDescription}`);
    
            // Close the modal
            modal.style.display = "none";
          }
        });
      }
      
      // Example: Call the openProductInfoModal function with product IDs
      openProductInfoModal(1); // Replace with the actual product ID
      openProductInfoModal(2); // Replace with the actual product ID
    });
    */ /*
    document.addEventListener("DOMContentLoaded", function () {
      const addToCartButtons = document.querySelectorAll('.add');
      const cartIcon = document.getElementById('cart-icon');
    
      addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
          const card = event.target.closest('.card');
          const productName = card.querySelector('.card-title').textContent;
          const productId = card.getAttribute('data-product-id'); // Get the product ID
          const productSizeSelect = card.querySelector(`#size-select${productId}`); // Use the product ID to select the size
          const productSize = productSizeSelect ? productSizeSelect.value : '';
          const productPriceParagraph = card.querySelector('.price');
          const productPrice = parseFloat(productPriceParagraph.textContent.replace('RSD', '').trim());
    
          if (productSize === 'default') {
            alert('Please select a size before adding to the cart.');
            return; // Prevent adding to cart without size
          }
    
          const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
          // Add the product to the cart with size
          existingCartItems.push({ name: productName, size: productSize, price: productPrice });
    
          // Store the updated cart items in Local Storage
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    
          updateCartIconCount(existingCartItems.length);
        });
      });
    
      function updateCartIconCount(itemCount) {
        cartIcon.textContent = itemCount;
      }
    
      // Define the openProductInfoModal function
      function openProductInfoModal(productId) {
        // Find the modal element by its ID
        const modal = document.getElementById(`productInfoModal-${productId}`);
    
        if (!modal) {
          console.error(`Modal not found for product ID: ${productId}`);
          return;
        }
    
        // Display the modal by setting its style to "block"
        modal.style.display = "block";
    
        // Close the modal when the "X" button is clicked
        const closeModalButton = modal.querySelector("#closeModalButton");
        if (closeModalButton) {
          closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
          });
        } else {
          console.error(`Close button not found for product ID: ${productId}`);
        }
    
        // Add to cart button
        const addToCartButton = modal.querySelector(".addToCartWithSize");
        addToCartButton.addEventListener("click", () => {
          // Retrieve product details from the modal and handle adding to the cart
          const productSizeSelect = modal.querySelector(`#size-select${productId}`);
          const productSize = productSizeSelect ? productSizeSelect.value : '';
          const productDescriptionElement = modal.querySelector(`#product-description${productId}`);
          const productDescription = productDescriptionElement ? productDescriptionElement.textContent : '';
    
          // For demonstration, let's display the selected item
          alert(`Added to cart:\nProduct Number: ${productId}\nSize: ${productSize}\nDescription: ${productDescription}`);
    
          // Close the modal
          modal.style.display = "none";
        });
      }
    
      
    });const productSizeSelect = card.querySelector(`#size-select${productId}`);

    */
    document.addEventListener("DOMContentLoaded", function () {
      const addToCartButtons = document.querySelectorAll('.add');
      const cartIcon = document.getElementById('cart-icon');
    
      addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', event => {
          const card = event.target.closest('.card');
          const productName = card.querySelector('.card-title').textContent;
          const productId = index +1; // Use the same productId for all sizes of the product
          const productSizeSelect = card.querySelector(`#size-select${productId}`);
          const productSize = productSizeSelect ? productSizeSelect.value : '';
          const productPriceParagraph = card.querySelector('.price');
          const productPrice = parseFloat(productPriceParagraph.textContent.replace('RSD', '').trim());
    
          if (productSize === 'default') {
            alert('Please select a size before adding to the cart.');
            return; // Prevent adding to cart without size
          }
    
          const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
          // Add the product to the cart with size
          existingCartItems.push({ name: productName, size: productSize, price: productPrice });
    
          // Store the updated cart items in Local Storage
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    
          updateCartIconCount(existingCartItems.length);
        });
      });
    
      function updateCartIconCount(itemCount) {
        cartIcon.textContent = itemCount;
      }
    
      // Define the openProductInfoModal function
      function openProductInfoModal(productId) {
        // Find the modal element by its ID
        const modal = document.getElementById(`productInfoModal-${productId}`);
    
        if (!modal) {
          console.error(`Modal not found for product ID: ${productId}`);
          return;
        }
    
        // Display the modal by setting its style to "block"
        modal.style.display = "block";
    
        // Close the modal when the "X" button is clicked
        const closeModalButton = modal.querySelector("#closeModalButton");
        if (closeModalButton) {
          closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
          });
        } else {
          console.error(`Close button not found for product ID: ${productId}`);
        }
    
        // Add to cart button
        const addToCartButton = modal.querySelector(".addToCartWithSize");
        addToCartButton.addEventListener("click", () => {
          // Retrieve product details from the modal and handle adding to the cart
          const productSizeSelect = modal.querySelector(`#size-select${productId}`);
          const productSize = productSizeSelect ? productSizeSelect.value : '';
          const productDescriptionElement = modal.querySelector(`#product-description${productId}`);
          const productDescription = productDescriptionElement ? productDescriptionElement.textContent : '';
    
          // For demonstration, let's display the selected item
          alert(`Added to cart:\nProduct Number: ${productId}\nSize: ${productSize}\nDescription: ${productDescription}`);
    
          // Close the modal
          modal.style.display = "none";
        });
      }
    });
    

    document.addEventListener("DOMContentLoaded", () => {
      // Get all "Pogledaj opis" buttons
      const viewDetailsButtons = document.querySelectorAll(".dodaj");
      const productInfoModal = document.getElementById('product-info-modal');
    
      // Add click event listeners to each button
      viewDetailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Find the closest parent card
          const card = button.closest(".card");
    
          // Find the product info modal within this card
          const productInfoModal = card.querySelector(".modal");
    
          // Display the modal
          productInfoModal.style.display = "block";
    
          // Close modal when the "X" button is clicked
          const closeModalButton = productInfoModal.querySelector("#closeModalButton");
          closeModalButton.addEventListener("click", () => {
            productInfoModal.style.display = "none";
          });
    
          // Add to cart button
          const addToCartButton = productInfoModal.querySelector(".addToCartWithSize");
          const cardNumber = button.getAttribute("data-card");
          const sizeSelectId = `size-select${cardNumber}`;
    
          addToCartButton.addEventListener("click", () => {
            // Retrieve product details from the modal and handle adding to the cart
            const sizeSelect = productInfoModal.querySelector(`#${sizeSelectId}`); 
            const selectedSize = sizeSelect.value;
            const productDescription = productInfoModal.querySelector("#product-description").textContent;
    
            // For demonstration, let's display the selected item
            alert(`Added to cart:\nProduct Number: ${cardNumber}\nSize: ${selectedSize}\nDescription: ${productDescription}`);
    
            ;
            // Close the modal
            productInfoModal.style.display = "none";
          });
        });
      });
    });
    
    