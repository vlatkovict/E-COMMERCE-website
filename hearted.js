document.addEventListener('DOMContentLoaded', () => {
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(icon => icon.addEventListener('click', addToHearted));
});

function addToHearted(event) {
    event.preventDefault();
    
    const productName = getProductTitle(event.target);
    const heartedProducts = JSON.parse(localStorage.getItem('heartedProducts')) || [];
    
    if (!heartedProducts.includes(productName)) {
        heartedProducts.push(productName);
        localStorage.setItem('heartedProducts', JSON.stringify(heartedProducts));
    }
}

function getProductTitle(iconElement) {
    const cardBody = iconElement.closest('.card-body');
    return cardBody.querySelector('.card-title').textContent;
}