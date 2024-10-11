**Proyek: "Task Tele"**

**Tujuan:**
Membuat website berbahasa Indonesia bernama **"Task Tele"** yang berfungsi untuk mengambil data dari channel Telegram dan menampilkannya sesuai kategori dan menu yang ditentukan.

---

### **Platform dan Teknologi:**

- **Hosting:** Vercel
- **Pengembangan Kode:** GitHub versi web
- **Database:** MongoDB Atlas
- **Teknologi Web Terbaru:** Gunakan framework yang ringan dan modern (misalnya Next.js)
- **Keamanan:** Sistem login admin dengan keamanan tinggi
- **Konfigurasi Rahasia:** Semua data sensitif (username, password admin, secret key, API Telegram) diatur melalui environment variables di Vercel

---

### **Kerangka dan Fitur Utama:**

1. **Halaman Utama / Landing Page:**

   - **Menu yang Ditampilkan:**
     - **Task Baru**
     - **Testnet**
     - **Daily**
   - **Menu Tersembunyi:**
     - **Login** (tidak ditampilkan di navigasi)
     - **Pengaturan** (hanya untuk admin setelah login)

2. **Sistem Login Admin:**

   - Hanya admin terdaftar yang dapat mengakses panel pengaturan
   - Keamanan tinggi dengan verifikasi kredensial

3. **Panel Pengaturan (Admin):**

   - **Pengaturan Channel Telegram:**
     - Tambah, edit, hapus channel melalui URL atau username
   - **Pengambilan Data Otomatis:**
     - Mengambil data terbaru dari channel yang ditentukan
     - Data yang diambil meliputi:
       - Judul tugas (baris pertama pesan)
       - Isi pesan (termasuk link dan media)
       - Link ke pesan asli di channel
       - Tanggal posting
       - Nama channel
     - Opsi untuk memilih channel sebelum pengambilan data
   - **Pengambilan Data Manual:**
     - Mengambil data berdasarkan rentang tanggal
     - Opsi untuk memilih channel sebelum pengambilan data
     - Menampilkan informasi terakhir kali data diambil
     - Peringatan jika data sudah diambil pada hari tersebut
   - **Pengaturan Data Baru:**
     - Menampilkan data yang baru diambil dan belum diatur
     - Menentukan **kategori** dan **jenis** (dengan checkbox multi-pilihan)
     - Menentukan halaman/menu untuk menampilkan data
     - Setelah diatur, data ditampilkan di menu utama sesuai pengaturan
     - Data yang sudah diatur tidak lagi muncul di daftar ini
   - **Pengaturan Kategori:**
     - Tambah, edit, hapus kategori tugas
   - **Pengaturan Jenis:**
     - Tambah, edit, hapus jenis tugas
   - **Pengaturan Menu:**
     - Tambah, edit, hapus menu pada halaman utama

---

### **Alur Kerja:**

1. **Admin Login:**
   - Admin masuk melalui halaman login untuk mengakses panel pengaturan.

2. **Mengatur Channel Telegram:**
   - Admin menambahkan channel-channel Telegram yang akan diambil datanya.

3. **Pengambilan Data:**
   - **Otomatis:** Sistem mengambil data terbaru dari channel secara otomatis.
   - **Manual:** Admin dapat mengambil data berdasarkan rentang tanggal tertentu.

4. **Mengatur Data Baru:**
   - Data yang diambil ditampilkan dalam daftar.
   - Admin mengkategorikan dan menentukan jenis serta menu tampilan untuk setiap data.
   - Data yang sudah diatur akan muncul di halaman utama sesuai pengaturan.

5. **Pengaturan Tambahan:**
   - Admin dapat menambah atau mengubah kategori, jenis, dan menu sesuai kebutuhan.

---

### **Catatan Penting:**

- **Keamanan Data:**
  - Semua data rahasia disimpan sebagai environment variables di Vercel.
  - Jangan menuliskan data sensitif langsung dalam kode sumber.

- **Teknologi yang Digunakan:**
  - Gunakan framework modern yang mendukung performa tinggi dan keamanan.
  - Pastikan website responsif dan cepat diakses.

- **Fokus Pengembangan:**
  - Prioritaskan pembuatan kerangka kerja dan fitur utama terlebih dahulu.
  - Pastikan setiap fitur berfungsi dengan baik sebelum menambahkan fitur tambahan.

---

Dengan kerangka dan fitur di atas, diharapkan bot dapat memahami dan membantu dalam pembuatan kode untuk proyek **"Task Tele"** sesuai kebutuhan Anda.
