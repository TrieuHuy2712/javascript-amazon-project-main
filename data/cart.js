export const cart = [];

export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantiy += 1;
    } else {
      cart.push({
        productId: productId,
        quantiy: 1
      });
    }
  }