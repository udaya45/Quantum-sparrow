// Add interactive features later such as adding to cart, form validation, etc.
document.addEventListener('DOMContentLoaded', () => {
  // Example: Add an event listener to the 'Shop Now' button.
  const shopNowButton = document.querySelector('.cta-button');
  shopNowButton.addEventListener('click', () => {
    alert('Redirecting to product page...');
    // Redirect to the product page later
    window.location.href = 'product.html';
  });
});
