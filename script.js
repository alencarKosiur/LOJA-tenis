// Seleciona os elementos
const cartCountElement = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.btn-buy');

let cartItems = 0;

// Função para adicionar ao carrinho
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCountElement.innerText = cartItems;
        
        // Efeito visual simples
        const productName = button.getAttribute('data-name');
        alert(`${productName} adicionado ao carrinho!`);
        
        // Opcional: Animação no ícone do carrinho
        cartCountElement.parentElement.style.color = '#ff4d00';
        setTimeout(() => {
            cartCountElement.parentElement.style.color = '#fff';
        }, 500);
    });
});