# **Sistema de Gestão de Resíduos Sólidos em Maricá**

### **Descrição do Projeto**
Este projeto tem como objetivo criar uma aplicação para o gerenciamento eficiente de resíduos sólidos na cidade de Maricá. A solução inclui funcionalidades como cadastro de pontos de coleta, registro de resíduos, geração de relatórios e emissão de alertas, promovendo práticas sustentáveis e um melhor monitoramento do descarte.

---

## **Tecnologias Utilizadas**

### **Backend**
- **Node.js** com **Express.js**
- **JWT** para autenticação
- **MongoDB** (autenticação) e banco relacional para o CRUD
- Integração com **Swagger** para documentação das APIs
- Controle de permissões (Roles: Admin e Usuário)

### **Frontend**
- **React.js** com **Styled Components** ou **TailwindCSS**
- **Storybook** para documentação de componentes
- Interface responsiva e intuitiva

### **Arquitetura**
- Monolítico com integração de dois microsserviços
- Padrões de Clean Code, SOLID e TDD
- Padrões de projeto aplicados com justificativa

---

## **Funcionalidades Principais**
1. **Cadastro de Pontos de Coleta**
   - Identificação única, nome e localização geográfica.
2. **Registro de Resíduos**
   - Tipos: Orgânico, Reciclável, Perigoso, etc.
3. **Relatórios Detalhados**
   - Geração de relatórios sobre volume de resíduos por categoria e região.
4. **Alertas Automáticos**
   - Notificação de excesso de resíduos em pontos específicos.
5. **Gestão de Usuários**
   - Controle de permissões (Administrador e Usuário).

---

## **Como Rodar o Projeto**

### **Requisitos**
- Node.js (versão 16 ou superior)
- MongoDB (banco de dados local ou remoto)
- Ferramenta para rodar containers (opcional, Docker recomendado)

### **Passo a Passo**

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/sistema-residuos-marica.git
   cd sistema-residuos-marica

2. **Instale as Dependências Backend**
   ```bash
   cd backend
   npm install

2. **Instale as Dependências Backend**
   ```bash
   cd backend
   npm install


3. **Frontend**
   ```bash
   cd frontend
   npm install

5. **Acesse a Aplicação**
   Backend: http://localhost:5000
   Frontend: http://localhost:3000
