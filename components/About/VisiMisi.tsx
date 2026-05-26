import SectionTitle from "../Common/SectionTitle";

const VisiMisi = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 relative z-10 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="Visi & Misi Kami"
          paragraph="Komitmen kami untuk terus memberikan yang terbaik bagi perkembangan bisnis dan operasional UMKM di Indonesia."
          center
          mb="50px"
        />

        <div className="-mx-4 flex flex-wrap gap-y-8 justify-center">
          {/* Visi */}
          <div className="w-full px-4 md:w-1/2 lg:w-5/12">
            <div className="group relative h-full rounded-2xl bg-white p-10 shadow-two transition-all hover:-translate-y-2 hover:shadow-three dark:bg-dark dark:hover:shadow-gray-dark border border-body-color/10 dark:border-white/10 overflow-hidden z-10">
              
              {/* Background gradient decorative */}
              <div className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
              
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {/* Icon Vision */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">Visi</h3>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Menjadi partner teknologi nomor satu bagi UMKM di Indonesia yang menghadirkan solusi sistem manajemen operasional secara instan, praktis, dan dapat diandalkan oleh siapa saja.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="w-full px-4 md:w-1/2 lg:w-7/12">
            <div className="group relative h-full rounded-2xl bg-white p-10 shadow-two transition-all hover:-translate-y-2 hover:shadow-three dark:bg-dark dark:hover:shadow-gray-dark border border-body-color/10 dark:border-white/10 overflow-hidden z-10">
              
               {/* Background gradient decorative */}
               <div className="absolute -left-10 -bottom-10 -z-10 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
              
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {/* Icon Mission */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">Misi</h3>
              <ul className="flex flex-col gap-5">
                {[
                  "Mengembangkan sistem POS & ERP yang intuitif dan tidak memerlukan keahlian teknis khusus.",
                  "Menyediakan layanan dengan harga terjangkau agar UMKM bisa menekan biaya operasional.",
                  "Memberikan dukungan teknis yang responsif dan siap membantu pelanggan kapan saja.",
                  "Terus berinovasi memberikan fitur-fitur baru sesuai dengan kebutuhan pasar yang dinamis."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-base text-body-color leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
