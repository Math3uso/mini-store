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
    Filtrar produtos
  </li>
  <li>
    Login com o Google
  </li>
  <li>
    Checkout
  </li>
</ul>

## Visão geral:
Os produtos são listados pela stripe e adicionadas no banco de dados, onde são gerenciados, pela rota `/api/products/add` essa rota atualiza o banco de dados com os novos produtos. Todos os usuarios precisam fazer login com o google para adicionar produtos no carrinho e finalizar compra. Os usuarios podem filtrar produtos por nome, preço, tamaho e categoria. Após escolher os produto desejado, é possivel adicinar no banco de dados, onde são cuidadosamente validados tando no front-end quando no back-end. Outra funcionalidade muito importante é a de finalizar compra, quando o usuario finaliza a compra, todos os produtos do carrinho são validados e é gerada uma URL de checkout (na rota `/api/checkout`), aoós isso caso ocorra tudo certo o usuario será redirecionado para pagina de sucesso.
 
