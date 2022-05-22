/*
 ** a quantidade cendida pode ser 1 ou mais
 ** se estoque ficar negativo uma exception deve ser lançada
 ** o valor de venda não pode ser maior que o valor de compra
 */
import Product from '../model/productModel';

function sellProduct(product, amount) {
  product.stock -= amount;

  return product;
}

export { sellProduct };
