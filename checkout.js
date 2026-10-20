// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  let subtotal = 0;
  for (let i = 0; i < itens.length; i++) {
    subtotal += itens[i].preco * itens[i].quantidade;
  }
  return subtotal;
}

function contarItens(itens) {
  let total = 0;
  for (const item of itens) {
    total += item.quantidade;
  }
  return total;
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
  const subtotal = calcularSubtotal(itens);
  return { subtotal, desconto: 0, total: subtotal };
}
// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));