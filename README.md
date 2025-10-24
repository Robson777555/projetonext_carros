Projeto Next.js Carros

Este é um projeto Next.js para exibir informações sobre carros. Ele foi desenvolvido com foco em performance e experiência do usuário, utilizando as últimas tecnologias do ecossistema React e Next.js.

Funcionalidades

•
Listagem de carros

•
Detalhes de cada carro

•
Formulário de contato com envio automático de email

•
Integração com WhatsApp para contato direto

Tecnologias Utilizadas

•
Next.js: Framework React para aplicações web de produção.

•
React: Biblioteca JavaScript para construção de interfaces de usuário.

•
Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.

•
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.

•
Vitest: Framework de teste rápido para JavaScript/TypeScript.

•
clsx: Utilitário para construir strings de className condicionalmente.

•
Nodemailer: Biblioteca para envio de emails via Node.js.

Formulário de Contato

O site possui um formulário de contato completo que permite aos visitantes entrarem em contato facilmente:

Funcionalidades do Formulário:
•
Validação em tempo real de todos os campos
•
Envio automático de email para o proprietário do site
•
Abertura automática do WhatsApp com mensagem pré-formatada
•
Interface responsiva e moderna
•
Feedback visual de sucesso/erro

Configuração do Email:
Para que o formulário funcione, é necessário configurar as variáveis de ambiente:

1. Crie um arquivo .env.local na raiz do projeto
2. Adicione a senha de aplicativo do Gmail:

```bash
EMAIL_PASSWORD=sua_senha_de_aplicativo_aqui
```

Como obter a senha de aplicativo:
1. Acesse: https://myaccount.google.com/security
2. Ative a verificação em duas etapas
3. Gere uma senha de aplicativo
4. Use essa senha no arquivo .env.local

Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1.
Clone o repositório:

2.
Instale as dependências:

Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

Bash


npm run dev
# ou yarn dev
# ou pnpm dev


O aplicativo estará disponível em http://localhost:3000.

Testando o Formulário de Contato

Para testar o formulário de contato:

1. Acesse: http://localhost:3000/contact
2. Preencha todos os campos obrigatórios
3. Clique em "Enviar Mensagem"
4. Verifique se você recebeu o email em robsonjobim2018@rede.ulbra.br
5. Confirme se o WhatsApp abriu com a mensagem pré-formatada

Fluxo do Formulário:
1. Usuário preenche o formulário
2. Sistema valida os dados
3. Email é enviado automaticamente para o proprietário
4. WhatsApp abre com mensagem pré-formatada
5. Usuário clica "Enviar" no WhatsApp
6. Proprietário recebe tanto email quanto WhatsApp

Testes

Para executar os testes unitários e de integração:

Bash


npm run test
# ou yarn test
# ou pnpm test


Para executar os testes com interface de usuário:

Bash


npm run test:ui
# ou yarn test:ui
# ou pnpm test:ui


Para verificar a cobertura de código:

Bash


npm run test:coverage
# ou yarn test:coverage
# ou pnpm test:coverage

## Licença  
Este projeto está licenciado sob a [MIT License](LICENSE).  

Desenvolvido por Robson Santos Jobim. 




