/*
 ** a quantidade cendida pode ser 1 ou mais
 ** se estoque ficar negativo uma exception deve ser lançada
 ** o valor de venda não pode ser maior que o valor de compra
 */
import Product from '../src/model/productModel';
import { sellProduct } from '../src/service/SellProduct';

describe('SellProduct', () => {
  it('deve validar baixa de estoque da venda de uma unidade', () => {
    const product = new Product('Celular', 500.0, 900.0, 10);

    sellProduct(product, 1);

    expect(product.stock).toBe(9);
  });

  it('deve aceitar a venda de qualquer quantidade', () => {
    const product = new Product('Celular', 500.0, 900.0, 10);

    sellProduct(product, 3);

    expect(product.stock).toBe(7);
  });

  it('deve retornar uma exception se o estoque ficar negativo', () => {
    const product = new Product('Celular', 500.0, 900.0, 10);

    sellProduct(product, 3);

    expect(product.stock).toBe(7);
  });
});
