// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  // TODO
}

function contarItens(itens) {
  // TODO
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
    switch (codigo) {
    case "DESC10":
      return subtotal * 0.1;
    case "DESC20":
      return subtotal >= 200 ? subtotal * 0.2 : 0;
  case "FRETEGRATIS":
      return 15; // simula o frete
    default:
      return 0; // cupom inválido
  }
}


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  return { subtotal: 0, desconto: 0, total: 0 }; // TODO: integrar carrinho e cupom
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));