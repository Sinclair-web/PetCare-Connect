# Gunakan image resmi Node.js
FROM node:18

# Tentukan direktori kerja di dalam kontainer
WORKDIR /app

# Salin file dependensi
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin seluruh file backend
COPY . .

# Buka port backend
EXPOSE 5000

# Perintah untuk menjalankan server
CMD ["node", "server.js"]