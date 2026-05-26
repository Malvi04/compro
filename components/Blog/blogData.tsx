import { getImagePath } from "@/lib/utils";
import { Blog } from "@/types/blog";

const getBlogData = (): Blog[] => [
  {
    id: 1,
    title: "Tips Mengelola Stok Barang Agar Tidak Rugi dengan Sistem ERP",
    paragraph:
      "Manajemen inventaris yang buruk bisa berujung pada kerugian. Pelajari bagaimana sistem ERP AmbisTech membantu melacak stok secara real-time.",
    image: getImagePath("/images/blog/blog-01.jpg"),
    author: {
      name: "Rita",
      image: getImagePath("/images/blog/author-01.png"),
      designation: "Business Analyst",
    },
    tags: ["ERP", "Stok"],
    publishDate: "12 Mei 2026",
    content: (
      <>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Mengelola stok barang secara manual sering kali menjadi mimpi buruk bagi pemilik bisnis. Mulai dari kesalahan pencatatan, barang yang terselip di gudang, hingga penumpukan produk mati (dead stock) yang membuat modal Anda mandek. Tanpa sistem yang terintegrasi, kebocoran operasional seperti ini sangat sulit dideteksi sejak dini dan lambat laun bisa memicu kerugian finansial yang besar.
        </p>

        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Di sinilah sistem ERP (Enterprise Resource Planning) hadir sebagai solusi penentu. Dengan mengotomatiskan seluruh pencatatan inventaris, Anda tidak perlu lagi melakukan cek fisik berulang kali secara manual yang melelahkan dan rentan kesalahan.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Berikut adalah beberapa strategi utama mengelola stok secara efektif menggunakan sistem ERP:
        </p>
        <ul className="mb-10 ml-5 list-disc text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <li><strong>Pemantauan Real-Time Otomatis:</strong> Setiap ada barang masuk dari supplier atau keluar karena penjualan, sistem akan langsung memperbarui data stok detik itu juga di seluruh cabang bisnis Anda.</li>
          <li><strong>Prediksi Kebutuhan Pasar (Forecasting):</strong> Sistem ERP mampu menganalisis data penjualan historis untuk memberi tahu Anda kapan harus menyetok kembali (restock) produk terlaris sebelum kehabisan.</li>
          <li><strong>Notifikasi Stok Menipis (Minimum Stock Alert):</strong> Anda akan mendapatkan peringatan otomatis jika persediaan barang tertentu sudah menyentuh batas minimum, sehingga operasional jualan tidak terganggu.</li>
        </ul>
        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Mengapa ini penting untuk bisnis Anda?
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Setiap bisnis membutuhkan adaptasi terhadap perkembangan teknologi terkini. Langkah ini bukan sekadar mengikuti tren, tetapi merupakan strategi krusial untuk memastikan efisiensi operasional dan memberikan nilai tambah pada klien Anda.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Ketika tata kelola stok barang Anda sudah berjalan rapi dan otomatis, Anda dapat memangkas biaya operasional yang terbuang sia-sia akibat human error. Lebih dari itu, kepuasan pelanggan akan meningkat pesat karena Anda selalu bisa menjamin ketersediaan barang secara akurat saat mereka memesannya. Digitalisasi inventaris bersama AmbisTech adalah investasi jangka panjang untuk mengamankan profitabilitas bisnis Anda di masa depan.
        </p>
        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Bagaimana AmbisTech Membantu Bisnis Anda?
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Dengan mengintegrasikan seluruh data dari berbagai cabang, Anda dapat mencegah kelebihan stok (overstock) maupun kekurangan stok (stockout). Hal ini tidak hanya menghemat biaya penyimpanan, tetapi juga meningkatkan kepuasan pelanggan.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Pentingnya Aplikasi POS Kasir untuk Mempercepat Transaksi",
    paragraph:
      "Tinggalkan pencatatan manual. Aplikasi POS (Point of Sales) modern membantu UMKM mempercepat antrean dan mencegah kesalahan hitung kasir.",
    image: getImagePath("/images/blog/blog-02.jpg"),
    author: {
      name: "Hardiansyah",
      image: getImagePath("/images/blog/author-02.png"),
      designation: "Retail Expert",
    },
    tags: ["POS", "Kasir"],
    publishDate: "18 Mei 2026",
    content: (
      <>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Antrean panjang dan proses pembayaran yang lambat dapat menurunkan minat pelanggan untuk kembali berbelanja. Aplikasi Point of Sales (POS) modern memecahkan masalah ini dengan sistem yang cepat dan terotomatisasi.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Ketika bisnis Anda mulai berkembang, mengandalkan kalkulator dan nota kertas saja tidak lagi cukup. Proses transaksi yang lambat bukan hanya membuat pelanggan tidak nyaman, tetapi juga memperbesar risiko salah hitung (human error) yang merugikan arus kas toko Anda.
        </p>

        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Aplikasi POS (Point of Sales) modern mengubah cara kerja konvensional tersebut menjadi serba digital. Hanya dengan beberapa klik atau pemindaian barcode, total belanjaan langsung terhitung secara akurat lengkap dengan integrasi berbagai metode pembayaran digital (cashless) seperti QRIS, transfer bank, hingga dompet digital. Kecepatan inilah yang membuat antrean kasir bergerak jauh lebih cepat dan meninggalkan kesan profesional di mata pelanggan.
        </p>

        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Berikut beberapa fitur utama POS yang langsung mendongkrak efisiensi toko:
        </p>

        <ul className="mb-8 ml-5 list-disc text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <li><strong>Integrasi Metode Pembayaran:</strong> Menerima berbagai jenis pembayaran non-tunai secara instan tanpa perlu repot menyiapkan banyak mesin EDC.</li>
          <li><strong>Manajemen Meja & Pesanan (untuk F&B):</strong> Mengatur pesanan pelanggan dari dapur hingga ke meja kasir tanpa takut ada menu yang terlewat.</li>
          <li><strong>Manajemen Promo Efektif:</strong> Menerapkan diskon, voucher, atau program membership pelanggan secara otomatis saat checkout.</li>
        </ul>

        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Laporan Harian dalam Genggaman
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Selain mencatat transaksi harian dengan presisi, aplikasi POS juga menyediakan analitik penjualan yang membantu Anda memahami produk mana yang paling laku, waktu tersibuk toko, dan tren belanja pelanggan Anda.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Hebatnya lagi, semua data ini dirangkum ke dalam dasbor yang bisa Anda akses kapan saja dan di mana saja melalui smartphone. Anda tidak perlu lagi datang ke toko setiap malam hanya untuk mencocokkan nota dan menutup buku. Laporan laba-rugi, performa staf kasir, hingga sisa stok akhir hari terkumpul secara otomatis dan akurat.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Dengan memangkas waktu urusan administrasi ini, Anda sebagai pemilik bisnis memiliki lebih banyak waktu luang untuk memikirkan strategi ekspansi dan inovasi bisnis ke depan.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Strategi Menghemat Biaya Operasional UMKM dengan Teknologi",
    paragraph:
      "Banyak UMKM membuang biaya untuk proses operasional yang tidak efisien. Simak cara teknologi sistem manajemen terpusat bisa menekan pengeluaran Anda.",
    image: getImagePath("/images/blog/blog-03.jpg"),
    author: {
      name: "Altfah ",
      image: getImagePath("/images/blog/author-03.png"),
      designation: "Tech Consultant",
    },
    tags: ["Efisiensi", "UMKM"],
    publishDate: "24 Mei 2026",
    content: (
      <>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Pengeluaran tak terduga dan operasional manual yang memakan waktu seringkali menghambat laju pertumbuhan UMKM. Teknologi sistem manajemen terpusat menjadi kunci utama untuk merampingkan seluruh proses tersebut.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Banyak pelaku UMKM mengira bahwa memotong biaya operasional berarti harus mengurangi kualitas produk atau memangkas jumlah karyawan. Padahal, pemborosan terbesar sering kali terjadi pada hidden costs (biaya tersembunyi) akibat proses kerja yang tidak efektif, seperti waktu yang terbuang untuk rekonsiliasi data manual, kertas yang menumpuk, atau rusaknya stok barang yang tidak terpantau.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Mengadopsi sistem manajemen terpusat berbasis cloud adalah investasi cerdas untuk menghentikan kebocoran anggaran tersebut. Teknologi ini merampingkan alur kerja dari hulu ke hilir, mulai dari pencatatan pembelian bahan baku hingga laporan laba rugi akhir bulan. Hasilnya, operasional bisnis berjalan lebih lincah dengan biaya yang jauh lebih hemat.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Berikut adalah beberapa pos pengeluaran yang bisa dipangkas secara signifikan dengan teknologi:
        </p>
        <ul className="mb-8 ml-5 list-disc text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <li><strong>Biaya Administrasi & Alat Tulis Kantor (ATK):</strong> Semua arsip, nota, dan laporan diubah menjadi format digital, menghemat biaya cetak dan ruang penyimpanan fisik.</li>
          <li><strong>Biaya Penyusutan Stok (Loss Prevention):</strong> Sistem manajemen otomatis meminimalkan risiko barang kedaluwarsa atau hilang di gudang karena pelacakan yang super ketat.</li>
          <li><strong>Optimalisasi Waktu Kerja:</strong> Mengurangi lembur karyawan karena pekerjaan yang dulunya memakan waktu berjam-jam (seperti menyusun laporan bulanan) kini bisa selesai dalam hitungan detik.</li>
        </ul>
        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Efisiensi Tanpa Batas
        </h3>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Dengan beralih dari pencatatan kertas ke platform digital, Anda mengurangi biaya cetak, meminimalisir human error, dan mengoptimalkan alokasi tenaga kerja sehingga tim Anda bisa fokus pada strategi ekspansi bisnis.
        </p>
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Pada akhirnya, efisiensi yang ditawarkan oleh teknologi bukan sekadar tentang cara menghemat uang, melainkan tentang bagaimana membangun fondasi bisnis yang kokoh dan adaptif. UMKM yang berani melangkah ke ekosistem digital akan memiliki margin keuntungan yang lebih sehat dan daya saing yang jauh lebih kuat di pasar. Mulailah langkah digitalisasi bisnis Anda hari ini demi operasional yang lebih efektif di masa depan.
        </p>
      </>
    ),
  },
];
export default getBlogData;
