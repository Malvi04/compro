import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import SingleBlog from "@/components/Blog/SingleBlog";
import getBlogData from "@/components/Blog/blogData";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformasi Digital: Mengapa UMKM Harus Mulai Sekarang? | AmbisTech",
  description: "Dunia bisnis sedang mengalami pergeseran paradigma yang fundamental...",
};

const BlogDetailsPage = () => {
  const blogs = getBlogData();

  return (
    <>
      <section className="pb-[120px] pt-[150px] bg-[#FAFAFA] dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* MAIN CONTENT COLUMN */}
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-block rounded-full bg-primary bg-opacity-10 px-4 py-1 text-sm font-semibold text-primary">
                    Edukasi Bisnis
                  </span>
                  <span className="text-sm font-medium text-body-color">
                    15 Okt 2024
                  </span>
                </div>
                
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
                  Transformasi Digital: Mengapa UMKM Harus Mulai Sekarang?
                </h1>
                
                <div className="mb-10 flex items-center pb-4">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full relative">
                    <Image
                      src={getImagePath("/images/blog/author-02.png")}
                      alt="author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">
                      Adinda Putri
                    </h4>
                    <p className="text-xs text-body-color">Strategic Digital Advisor</p>
                  </div>
                </div>

                {/* HERO IMAGE */}
                <div className="mb-10 w-full overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={getImagePath("/images/blog/blog-details-02.jpg")}
                      alt="Transformasi Digital"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="prose max-w-none dark:prose-invert">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Dunia bisnis sedang mengalami pergeseran paradigma yang fundamental. Bukan lagi tentang siapa yang paling lama berdiri, melainkan siapa yang paling cepat beradaptasi dengan teknologi. Bagi Usaha Mikro, Kecil, dan Menengah (UMKM), transformasi digital bukan lagi sekadar pilihan &quot;mewah&quot;, melainkan strategi bertahan hidup yang krusial.
                  </p>

                  <h3 className="mb-6 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
                    Efisiensi Operasional Melalui Sistem ERP
                  </h3>
                  
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Salah satu hambatan terbesar UMKM adalah manajemen data yang terfragmentasi. Bayangkan Anda harus mengecek stok di gudang secara manual, mencatat pesanan di buku fisik, dan menghitung keuangan di Excel yang berbeda. Di sinilah sistem Enterprise Resource Planning (ERP) masuk sebagai solusi penyelamat.
                  </p>
                  
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Dengan mengintegrasikan seluruh proses bisnis ke dalam satu platform digital, pemilik usaha dapat memantau inventaris secara real-time, mengotomatisasi invoice, dan mendapatkan laporan keuangan yang akurat hanya dengan beberapa klik. Ini bukan hanya menghemat waktu, tapi meminimalisir risiko <em>human error</em> yang seringkali merugikan finansial.
                  </p>

                  {/* BLOCKQUOTE */}
                  <div className="relative z-10 my-10 overflow-hidden rounded-xl bg-blue-50 px-8 py-10 dark:bg-blue-900/20 sm:p-12">
                    <p className="text-center text-lg font-medium italic leading-relaxed text-blue-700 dark:text-blue-300 sm:text-xl">
                      &quot;Digitalisasi bukan tentang mengganti manusia dengan mesin, melainkan memberikan alat yang tepat agar manusia bisa fokus pada inovasi dan strategi pertumbuhan.&quot;
                    </p>
                    {/* Decorative SVGs for Blockquote */}
                    <span className="absolute left-0 top-0 z-[-1] text-blue-200 dark:text-blue-800/30">
                      <svg width="132" height="109" viewBox="0 0 132 109" fill="currentColor">
                        <path d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="mb-6 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
                    Akses ke Pasar yang Lebih Luas
                  </h3>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Tanpa kehadiran digital, jangkauan UMKM terbatas pada radius fisik toko. Dengan mengadopsi teknologi, batas geografis tersebut hilang. Integrasi sistem manajemen toko dengan kanal e-commerce memungkinkan pelaku usaha untuk melayani pelanggan dari seluruh penjuru negeri, bahkan dunia, tanpa perlu menambah banyak staf admin.
                  </p>
                  
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Kesimpulannya, menunggu untuk mendigitalisasi bisnis Anda hanya akan memberikan celah bagi kompetitor untuk melompat lebih jauh. Mulailah dari langkah kecil, seperti mengadopsi sistem pencatatan digital atau manajemen stok berbasis cloud, untuk membangun fondasi bisnis yang lebih tangguh di era industri 4.0.
                  </p>
                </div>

                {/* AUTHOR BIO BOX */}
                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-dark sm:flex-row sm:items-start">
                  <div className="relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={getImagePath("/images/blog/author-02.png")}
                      alt="Adinda Putri"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="mb-2 text-xl font-bold text-black dark:text-white">
                      Adinda Putri
                    </h4>
                    <p className="mb-4 text-sm leading-relaxed text-body-color">
                      Berpengalaman lebih dari 5 tahun dalam membantu UMKM di Asia Tenggara bermigrasi ke ekosistem digital. Adinda percaya bahwa teknologi harus inklusif dan mudah diakses oleh semua skala bisnis.
                    </p>
                    <div className="flex justify-center gap-4 sm:justify-start">
                      <a href="#" className="text-primary hover:text-blue-700">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h11.01v-8.95H9.76v-3.48h3.02V9.03c0-3 1.83-4.63 4.5-4.63 1.28 0 2.38.1 2.7.14v3.13h-1.85c-1.45 0-1.73.69-1.73 1.7v2.23h3.46l-.45 3.48h-3.01V24h5.83c.96 0 1.75-.77 1.75-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* SIDEBAR COLUMN */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="sticky top-[120px] mb-10">
                <NewsLatterBox />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES SECTION (Full Width Background, Container Content) */}
      <section className="bg-white py-16 dark:bg-black">
        <div className="container">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Artikel Terkait
            </h2>
            <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
              Lihat Semua &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
