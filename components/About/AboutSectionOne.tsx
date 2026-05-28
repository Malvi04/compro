import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  // ✅ LIST ITEM (SUDAH FIX RAPI)
  const List = ({ text }) => (
    <div className="group flex items-start gap-4">
      {/* ICON */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition group-hover:bg-primary/20">
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 16 13"
          fill="currentColor"
        >
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </div>

      {/* TEXT */}
      <p className="text-sm leading-relaxed text-body-color md:text-base">
        {text}
      </p>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* LEFT CONTENT */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={
                  <>
                    Kenapa Memilih{" "}
                    <span className="relative z-10 inline-block text-primary">
                      AmbisTech
                      <svg
                        className="animate-draw-circle absolute -left-2 -top-2 -z-10 h-[calc(100%+16px)] w-[calc(100%+16px)] text-primary opacity-80"
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
                    </span>
                    ?
                  </>
                }
                paragraph="Kami membantu bisnis Anda berkembang dengan sistem yang efisien, mudah digunakan, dan terintegrasi dalam satu platform."
                mb="44px"
              />

              {/* ✅ GRID SUDAH RAPI */}
              <div className="mb-8 grid max-w-[570px] grid-cols-1 items-start gap-x-10 gap-y-8 sm:grid-cols-2 md:mb-0">
                <List text="Sistem mudah digunakan" />
                <List text="Support cepat & responsif" />

                <List text="Hemat waktu & biaya operasional" />
                <List text="Fitur bisa dikustom sesuai kebutuhan" />

                <List text="Data tersimpan aman" />
                <List text="Terintegrasi dalam satu dashboard" />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] overflow-hidden rounded-2xl shadow-lg lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={getImagePath("/images/about/teamwork.png")}
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full object-cover drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src={getImagePath("/images/about/teamwork.png")}
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
