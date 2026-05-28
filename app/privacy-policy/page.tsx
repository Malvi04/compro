import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | AmbisTech",
  description:
    "Kebijakan Privasi AmbisTech menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan platform B2B SaaS kami.",
};

const sections = [
  {
    id: 1,
    title: "Pendahuluan",
    content: (
      <>
        <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Selamat datang di Ambis Tech. Kami berkomitmen untuk melindungi informasi pribadi
          Anda dan hak atas privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami
          mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat
          Anda menggunakan platform B2B SaaS kami.
        </p>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Dengan mengakses atau menggunakan layanan kami, Anda setuju dengan pengumpulan
          dan penggunaan informasi sesuai dengan kebijakan ini. Kami menyarankan Anda untuk
          membaca dokumen ini secara menyeluruh untuk memahami pendekatan kami terhadap
          data organisasi dan personal Anda.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Informasi yang Kami Kumpulkan",
    content: (
      <>
        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Kami mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan
          layanan kami kepada Anda.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Data Akun",
              desc: "Nama, alamat email profesional, jabatan, dan informasi profil perusahaan.",
            },
            {
              label: "Data Transaksi",
              desc: "Detail pembayaran dan riwayat langganan untuk akses bisnis.",
            },
            {
              label: "Data Penggunaan",
              desc: "Log aktivitas, alamat IP, tipe browser, dan metrik interaksi platform.",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <span className="font-semibold text-black dark:text-white">{item.label}:</span>{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Penggunaan Informasi",
    content: (
      <>
        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Ambis Tech menggunakan data yang dikumpulkan untuk tujuan berikut:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Operasional",
              desc: "Menyelenggarakan dan memelihara infrastruktur layanan SaaS kami.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Analitik",
              desc: "Menganalisis tren penggunaan untuk meningkatkan kualitas layanan pelanggan.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-stroke bg-white p-5 dark:border-strokedark dark:bg-blacksection"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">{item.title}</h4>
              <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Keamanan Data",
    content: (
      <>
        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Keamanan data Anda adalah prioritas utama kami. Kami menerapkan standar industri
          seperti enkripsi AES-256 dan protokol TLS untuk melindungi data saat transit dan
          saat istirahat.
        </p>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 flex-shrink-0 text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-sm italic leading-relaxed text-body-color dark:text-body-color-dark">
              &quot;Kami secara rutin melakukan audit keamanan pihak ketiga untuk memastikan
              bahwa platform kami terap memenuhi standar keamanan yang aman bagi data
              perusahaan Anda.&quot;
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Hak Pengguna",
    content: (
      <>
        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          Sebagai pengguna Ambis Tech, Anda memiliki hak untuk:
        </p>
        <ul className="space-y-3">
          {[
            "Mengakses dan mendapatkan salinan data yang kami simpan.",
            "Memperbarui informasi yang tidak akurat atau tidak lengkap.",
            "Meminta penghapusan data (Hak untuk Dilupakan) dalam kondisi tertentu.",
            "Membatasi atau menolak pemrosesan data tertentu untuk tujuan pemasaran.",
          ].map((right, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {right}
              </p>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-10 pt-36 lg:pt-44">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-medium text-primary">Privasi Anda, Prioritas Kami</span>
            </div>

            <h1 className="mb-5 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Kebijakan Privasi
            </h1>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Terakhir diperbarui: 24 Mei 2024
            </p>
          </div>
        </div>

        {/* decorative bg blobs */}
        <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-primary opacity-5 blur-3xl" />
        <div className="absolute right-0 top-20 -z-10 h-64 w-64 rounded-full bg-blue-400 opacity-5 blur-3xl" />
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Main card */}
            <div className="overflow-hidden rounded-2xl border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-blacksection">
              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  className={`p-8 sm:p-10 ${
                    idx !== sections.length - 1
                      ? "border-b border-stroke dark:border-strokedark"
                      : ""
                  }`}
                >
                  {/* Section header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-white">
                      {section.id}
                    </div>
                    <h2 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  {section.content}
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-blacksection">
              <div className="p-8 sm:p-10">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Hubungi Kami
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik
                  perlindungan data kami, jangan ragu untuk menghubungi tim kepatuhan kami:
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-opacity-90"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Kirim Pertanyaan
                  </Link>

                  {/* Address card */}
                  <div className="flex flex-1 items-start gap-3 rounded-xl bg-gray-50 p-5 dark:bg-white/5">
                    <svg
                      className="mt-0.5 flex-shrink-0 text-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
                        KANTOR PUSAT
                      </p>
                      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        Jl. Teknologi Modern No. 88, Jakarta Selatan, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
