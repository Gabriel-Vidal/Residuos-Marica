Sistema de Gestão de Resíduos Sólidos em Maricá
Descrição do Projeto
Este projeto tem como objetivo criar uma aplicação para o gerenciamento eficiente de resíduos sólidos na cidade de Maricá. A solução inclui funcionalidades como cadastro de pontos de coleta, registro de resíduos, geração de relatórios e emissão de alertas, promovendo práticas sustentáveis e um melhor monitoramento do descarte.

Tecnologias Utilizadas
Backend
Node.js com Express.js
JWT para autenticação
MongoDB (autenticação) e banco relacional para o CRUD
Integração com Swagger para documentação das APIs
Controle de permissões (Roles: Admin e Usuário)
Frontend
React.js com Styled Components ou TailwindCSS
Storybook para documentação de componentes
Interface responsiva e intuitiva
Arquitetura
Monolítico com integração de dois microsserviços
Padrões de Clean Code, SOLID e TDD
Padrões de projeto aplicados com justificativa
Funcionalidades Principais
Cadastro de Pontos de Coleta
Identificação única, nome e localização geográfica.
Registro de Resíduos
Tipos: Orgânico, Reciclável, Perigoso, etc.
Relatórios Detalhados
Geração de relatórios sobre volume de resíduos por categoria e região.
Alertas Automáticos
Notificação de excesso de resíduos em pontos específicos.
Gestão de Usuários
Controle de permissões (Administrador e Usuário).
Como Rodar o Projeto
Requisitos
Node.js (versão 16 ou superior)
MongoDB (banco de dados local ou remoto)
Ferramenta para rodar containers (opcional, Docker recomendado)
Passo a Passo
Clone o Repositório

bash
Copiar código
git clone https://github.com/seu-usuario/sistema-residuos-marica.git  
cd sistema-residuos-marica  
Instale as Dependências
Backend:

bash
Copiar código
cd backend  
npm install  
Frontend:

bash
Copiar código
cd frontend  
npm install  
Configure as Variáveis de Ambiente
Crie um arquivo .env no diretório do backend com as seguintes informações:

env
Copiar código
MONGO_URI=<URL_DO_BANCO_MONGODB>  
JWT_SECRET=<SUA_CHAVE_SECRETA>  
Inicie o Projeto
Backend:

bash
Copiar código
cd backend  
npm start  
Frontend:

bash
Copiar código
cd frontend  
npm start  
Acesse a Aplicação

Backend: http://localhost:5000
Frontend: http://localhost:3000
Roadmap
 Levantamento de requisitos funcionais e não funcionais
 Diagramas UML (Casos de Uso, Classes, Atividades)
 Protótipo funcional com cadastro de pontos de coleta
 Implementação final com microsserviços e TDD
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

Faça um fork do repositório
Crie uma branch para sua funcionalidade (git checkout -b feature/nome-da-feature)
Faça commit das suas alterações (git commit -m 'Adicionar nova funcionalidade')
Faça push para a branch (git push origin feature/nome-da-feature)
Abra um Pull Request
Licença
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

