"use client";
import Link from "next/link";
import { BarChart3, Boxes, Settings } from "lucide-react";

const phone = "6281933608453";
const message =
  "Halo AmbisTech, saya tertarik dengan layanan ERP Anda. Bisa minta demo atau penjelasan lebih lanjut?";

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-[120px] pt-[140px] text-gray-900 dark:bg-[#0f172a] dark:text-white">
      {/* 🔵 Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-10 blur-[120px] dark:opacity-20"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500 opacity-10 blur-[120px] dark:opacity-20"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row">
          {/* LEFT */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Kelola Keuangan, Stok & Operasional
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                dalam Satu Dashboard
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Solusi ERP sederhana untuk UMKM. Pantau bisnis Anda secara
              real-time tanpa ribet.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href={url}
                target="_blank"
                className="rounded-xl bg-blue-600 px-7 py-3 text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/30"
              >
                Get Started
              </Link>
            </div>

            {/*ICON FEATURES */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-white/10">
                  <BarChart3 size={22} />
                </div>
                <h4 className="font-semibold">Kelola Keuangan</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pantau arus kas & laporan secara real-time
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-white/10">
                  <Boxes size={22} />
                </div>
                <h4 className="font-semibold">Manajemen Stok</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Kelola barang masuk & keluar dengan mudah
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-white/10">
                  <Settings size={22} />
                </div>
                <h4 className="font-semibold">Operasional</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Semua proses bisnis dalam satu sistem
                </p>
              </div>
            </div>

            {/* Trust */}
            <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
              Dipercaya oleh 100+ UMKM di Indonesia
            </p>
          </div>

          {/* RIGHT */}
          <div className="mt-12 flex justify-center lg:mt-0 lg:w-1/2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl"></div>

              <img
                src="/images/hero/dashboard-light.png"
                className="block rounded-2xl shadow-2xl dark:hidden"
              />

              <img
                src="/images/hero/dashboard.png"
                className="hidden rounded-2xl shadow-2xl dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
