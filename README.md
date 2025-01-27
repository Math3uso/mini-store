# Projeto full stack
## Uma pequena loja virtual completa, feito com React/NextJs + Stripe. A loja possue as seguintes funcionalidades:

<ul>
  <li>
     Listagem de produtos da Sprite
  </li>
  <li>
    Carrinho de compras
  </li>
  <li>
    Login com o Google
  </li>
  <li>
    Checkout
  </li>
  <li>
    Filtrar produtos
  </li>
</ul>

## Visão geral:
Os produtos são listados pela stripe e adicionadas no banco de dados, onde são gerenciados, pela rota `/api/products/add` essa roda atualiza o banco de dados com os novos produtos da stripe. Todos os usuarios precisam fazer login com o google para adicionar produtos no carrinho e finalizar compra. Os usuarios podem filtrar produtos por nome, preço, tamaho e categoria
