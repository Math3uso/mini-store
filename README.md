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
 
## Iniciando
Primeiro clone o repositorio
```bash
git clone https://github.com/Math3uso/mini-store.git
```
Depois navegue até o diretorio do projeto
```bash
cd mini-store
```
Crie um arquivo .env e adicione o conteudo abaixo
```bash
#subustitua as informações abaixo.

# Stripe
STRIPE_PUBLIC_KEY=chave pulica da stripe
STRIPE_PRIVATE_KEY=chat privada

# Next-auth
NEXTAUTH_SECRET=hash de autenticação do next-auth


# Google provider
GOOGLE_PUBLIC_KEY=chave publica para login com google
GOOGLE_SECRET_KEY=chave privada

#Next URL
NEXT_URL=http://localhost:3000
```

Por fim instale as dependencias e inicie o projeto
```bash
npm install
```
```bash
npm run dev
```
