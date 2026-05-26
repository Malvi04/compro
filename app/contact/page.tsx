import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - AmbisTech",
  description: "Siap upgrade sistem operasional Anda? Hubungi tim AmbisTech sekarang.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hubungi Kami - AmbisTech"
        description="Siap upgrade sistem operasional Anda? Hubungi tim AmbisTech sekarang."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
