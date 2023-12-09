const addToCartButtons = document.querySelectorAll('.add');
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
    }