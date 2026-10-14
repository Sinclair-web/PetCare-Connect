# PetCare Connect - Marketplace Layanan Perawatan Hewan Peliharaan

Proyek tugas kelompok menggunakan arsitektur *microservice* / *web service* terpisah (*Frontend* React.js & *Backend* Node.js)[cite: 1, 2].

## Cara Menjalankan Proyek untuk Anggota Tim:

1. **Clone Repository:**
   ```bash
   git clone [https://github.com/Sinclair-web/PetCare-Connect.git](https://github.com/Sinclair-web/PetCare-Connect.git)
   cd petcare-connect

# PetCare Connect - Marketplace Layanan Perawatan Hewan Peliharaan

Proyek tugas kelompok menggunakan arsitektur *microservice* / *web service* terpisah (*Frontend* React.js & *Backend* Node.js) dengan basis data MySQL[cite: 1, 2, 3].

---

## Alur Pengerjaan & Infrastruktur Sistem (DevOps & Database)

Berikut adalah dokumentasi tahapan perancangan dan infrastruktur yang telah disiapkan untuk proyek ini:

### 1. Perancangan Struktur Folder & Inisialisasi Repositori (Git/GitHub)
* **Membuat Folder Proyek:** Membentuk struktur direktori utama kelompok (`petcare-connect`) yang memisahkan folder `frontend` dan `backend`[cite: 4, 8].
* **Manajemen Git:** Menginisialisasi *repository*, mengatur berkas `.gitignore`, serta menghubungkan kode lokal ke *repository* utama kelompok secara kolaboratif[cite: 3, 8].

### 2. Pembuatan Basis Data & Skema Tabel (XAMPP / MySQL)
* **Inisialisasi Database:** Menyalakan layanan Apache dan MySQL di XAMPP lalu membuat basis data utama bernama `petcare_db`[cite: 3, 5, 8].
* **Pembuatan Tabel Relasional Inti:** Menyusun dan mengeksekusi skrip SQL untuk membuat tabel-tabel penting, yang meliputi:
  * Tabel `users` (manajemen data pengguna dan peran: *customer*, *partner*, *admin*)[cite: 3, 5, 8].
  * Tabel `services` (katalog layanan perawatan hewan peliharaan seperti *grooming* dan penitipan)[cite: 3, 8].
  * Tabel `bookings` (pencatatan transaksi jadwal pemesanan layanan)[cite: 3, 8].
* **Pengisian Data Awal:** Menambahkan contoh data uji coba ke dalam tabel katalog layanan[cite: 3, 8].

### 3. Kontainerisasi & Infrastruktur DevOps (Docker & Docker Compose)
* **Konfigurasi Dockerfile:** Membuat berkas konfigurasi *Docker* untuk membungkus server *backend* Node.js[cite: 3, 8].
* **Orkestrasi Sistem (Docker Compose):** Menyusun berkas `docker-compose.yml` di akar folder utama untuk menyatukan dan menjalankan seluruh lingkungan sistem secara otomatis[cite: 3, 8].
* **Manajemen Lingkungan:** Mengaktifkan *Virtual Machine Platform* / WSL di Windows serta memastikan *daemon* Docker Desktop berjalan stabil[cite: 7, 8].

### 4. Panduan Menjalankan Aplikasi untuk Tim
Bagi anggota kelompok yang ingin menjalankan proyek ini secara lokal:
1. Pastikan aplikasi **XAMPP** menyala (Apache & MySQL *Start*) dan buat database `petcare_db`[cite: 3, 5, 8].
2. Pastikan aplikasi **Docker Desktop** dalam keadaan aktif (*Running*).
3. Jalankan perintah berikut di terminal pada folder utama proyek:
   ```bash
   docker compose up --build