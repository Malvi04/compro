import { getImagePath } from "@/lib/utils";
import { Brand } from "@/types/brand";

const getBrandsData = (): Brand[] => [
  {
    id: 1,
    name: "Best Services",
    href: "https://uideck.com",
    image: getImagePath("/images/brands/best.png"),
    imageLight: getImagePath("/images/brands/best.png"),
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: getImagePath("/images/brands/tailgrids.png"),
    imageLight: getImagePath("/images/brands/tailgrids.png"),
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: getImagePath("/images/brands/lineicons.svg"),
    imageLight: getImagePath("/images/brands/lineicons-light.svg"),
  },
  {
    id: 4,
    name: "Ayro UI",
    href: "https://ayroui.com",
    image: getImagePath("/images/brands/ayroui.svg"),
    imageLight: getImagePath("/images/brands/ayroui-light.svg"),
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: getImagePath("/images/brands/plainadmin.svg"),
    imageLight: getImagePath("/images/brands/plainadmin-light.svg"),
  },
  {
    id: 6,
    name: "DOKU",
    href: "https://doku.com",
    image: getImagePath("/images/brands/doku.png"),
    imageLight: getImagePath("/images/brands/doku.png"),
  },
  {
    id: 7,
    name: "Midtrans",
    href: "https://midtrans.com",
    image: getImagePath("/images/brands/midtrans.png"),
    imageLight: getImagePath("/images/brands/midtrans.png"),
  },
];

export default getBrandsData;
