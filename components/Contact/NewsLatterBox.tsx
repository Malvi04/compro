"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // penting: hindari hydration mismatch
  if (!mounted) return null;

  const color = theme === "light" ? "#4A6CF7" : "#fff";

  return (
    <div className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-xl bg-white p-8 sm:p-11 lg:p-8 xl:p-11 border border-gray-100 dark:border-gray-800">
      <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
        Dapatkan Update Terbaru
      </h3>

      <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-sm leading-relaxed text-body-color dark:border-white dark:border-opacity-10 sm:text-base">
        Bergabunglah dengan 5.000+ pemilik bisnis yang mendapatkan tips teknologi eksklusif setiap minggunya.
      </p>

      <div>
        <input
          type="email"
          placeholder="Email Anda"
          className="mb-4 w-full rounded-md border border-stroke bg-white px-6 py-3 text-base text-body-color outline-none transition-all focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary"
        />
        <input
          type="submit"
          value="Berlangganan Sekarang"
          className="mb-5 w-full cursor-pointer rounded-md bg-blue-600 px-9 py-3 font-medium text-white transition-all hover:bg-blue-700"
        />
      </div>

      {/* SVG */}
      <span className="absolute left-2 top-7">
        <svg width="57" height="65" viewBox="0 0 57 65" fill="none">
          <path
            opacity="0.5"
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill="url(#g1)"
          />
          <defs>
            <linearGradient id="g1">
              <stop stopColor={color} stopOpacity="0.62" />
              <stop offset="1" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute bottom-24 left-1.5">
        <svg width="39" height="32" viewBox="0 0 39 32" fill="none">
          <path
            opacity="0.5"
            d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
            fill="url(#g2)"
          />
          <defs>
            <linearGradient id="g2">
              <stop stopColor={color} stopOpacity="0.62" />
              <stop offset="1" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute right-2 top-[140px]">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path
            opacity="0.5"
            d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
            fill="url(#g3)"
          />
          <defs>
            <linearGradient id="g3">
              <stop stopColor={color} stopOpacity="0.62" />
              <stop offset="1" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute right-0 top-0">
        <svg width="162" height="91" viewBox="0 0 162 91" fill="none">
          <path
            opacity="0.3"
            d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999..."
            stroke={color}
          />
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;