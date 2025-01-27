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
Os produtos são listados pela Stripe e adicionados ao banco de dados, onde são gerenciados pela rota `/api/products/add`. Essa rota atualiza o banco de dados com os novos produtos. Todos os usuários precisam fazer login com o Google para adicionar produtos ao carrinho e finalizar a compra. Os usuários podem filtrar produtos por nome, preço, tamanho e categoria. Após escolher o produto desejado, é possível adicioná-lo ao banco de dados, onde é cuidadosamente validado tanto no front-end quanto no back-end. Outra funcionalidade muito importante é a de finalizar a compra. Quando o usuário finaliza a compra, todos os produtos do carrinho são validados e uma URL de checkout é gerada (na rota `/api/checkout`). Após isso, se tudo ocorrer certo, o usuário será redirecionado para a página de sucesso.
 
