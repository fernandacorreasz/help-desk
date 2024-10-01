# Stage 1: Build da aplicação React
FROM node:18-alpine AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Execute o build da aplicação
RUN npm run build

# Stage 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copie os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie o arquivo de configuração do Nginx, se necessário
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 para servir a aplicação
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
