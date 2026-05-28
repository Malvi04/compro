import { getImagePath } from "@/lib/utils";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-black md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* LEFT IMAGE */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[3/2] max-h-[500px] max-w-[500px] overflow-hidden rounded-2xl text-center shadow-lg lg:m-0">
              <Image
                src={getImagePath("/images/about/about-light.png")}
                alt="AmbisTech"
                fill
                className="object-cover drop-shadow-three dark:hidden"
              />
              <Image
                src={getImagePath("/images/about/dark-v2.png")}
                alt="AmbisTech"
                fill
                className="hidden object-cover drop-shadow-three dark:block"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              {/* SECTION TITLE */}
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Solusi Cerdas untuk Bisnis Modern
              </h2>

              <p className="mb-10 text-base leading-relaxed text-body-color sm:text-lg">
                AmbisTech membantu Anda mengelola bisnis dengan lebih efisien,
                cepat, dan terkontrol dalam satu sistem terintegrasi.
              </p>

              {/* ITEM 1 */}
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Efisiensi Operasional
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  Otomatisasi proses bisnis untuk menghemat waktu dan mengurangi
                  kesalahan manual.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Monitoring Real-Time
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  Pantau kondisi bisnis Anda kapan saja melalui dashboard yang
                  mudah digunakan.
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Sistem Terintegrasi
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  Semua data keuangan, stok, dan operasional terhubung dalam
                  satu platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH PRICING HIGHLIGHT */}
      <div className="mt-16 w-full bg-blue-600 px-4 py-16 dark:bg-blue-900 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Mulai dari harga{" "}
            <span className="relative z-10 inline-block text-yellow-300">
              150 Ribu / bulan
              <svg
                className="animate-draw-circle absolute -left-2 -top-2 -z-10 h-[calc(100%+16px)] w-[calc(100%+16px)] text-yellow-300 opacity-90"
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 99,20 A 49,19 0 0,1 1,20 A 49,19 0 0,1 99,20 L 96,20 A 46,16 0 0,1 4,20 A 46,16 0 0,1 96,20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  pathLength="1000"
                />
              </svg>
            </span>{" "}
            & bisa Custom!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
