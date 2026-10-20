
import "./globals.css";
import { siteConfig } from "../data/siteConfig";

const BASE_URL = "https://suzuki-ay-nara.vercel.app";

export const viewport = {
  themeColor: "#00439C",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(BASE_URL),

  // Google Search Console Verification
  verification: {
    google: "6N-Mfe4cyHyY-Fl9Fo4-iOUfmIVjc_IebHSCy8PsuRA",
  },

  // SEO TITLE
  title: "NARA | Sales Mobil Suzuki – Harga, Promo & Kredit",

  // SEO DESCRIPTION
  description:
    "Dapatkan informasi mobil Suzuki, harga, promo, simulasi kredit dan test drive. Konsultasi pembelian mobil Suzuki bersama Nara — Suzuki Sales Consultant untuk wilayah Bandung, Cimahi, dan Jawa Barat.",

  // SEO KEYWORDS
  keywords:
    "NARA, Sales Suzuki, Mobil Suzuki Bandung, Harga Suzuki, Promo Suzuki, Simulasi Kredit Suzuki, Test Drive Suzuki, Suzuki XL7, Suzuki Ertiga, Suzuki Grand Vitara, Suzuki Jimny, Suzuki Fronx, Suzuki Carry, Konsultan Suzuki Bandung",

  authors: [{ name: siteConfig.businessName }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: `${BASE_URL}/`,
  },

  openGraph: {
    title: "NARA | Sales Mobil Suzuki – Harga, Promo & Kredit",
    description:
      "Dapatkan informasi mobil Suzuki, harga, promo, simulasi kredit dan test drive. Konsultasi pembelian mobil Suzuki bersama Nara.",
    type: "website",
    url: `${BASE_URL}/`,
    siteName: siteConfig.businessName,
    locale: "id_ID",
    images: [
      {
        url: "/images/newxl7.png",
        width: 1200,
        height: 800,
        alt: "Suzuki XL7 — Nara Sales Suzuki",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/newxl7.png"],
    title: "NARA | Sales Mobil Suzuki – Harga, Promo & Kredit",
    description:
      "Konsultasi pembelian mobil Suzuki bersama Nara — Harga, Promo, Simulasi Kredit & Test Drive.",
  },
};

export default function RootLayout({ children }) {
  // Structured Data: Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.salesName,
    jobTitle: siteConfig.salesRole,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: BASE_URL,
    image: siteConfig.salesPhoto,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.dealerName,
    },
    areaServed: siteConfig.serviceArea,
  };

  // Structured Data: AutomotiveBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.businessName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. A. Yani No.259, Cihapit, Kec. Bandung Wetan",
      addressLocality: "Kota Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40114",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.dealerCoords.lat,
      longitude: siteConfig.dealerCoords.lng,
    },
    areaServed: ["Bandung", "Cimahi", "Jawa Barat"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  // Structured Data: WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: BASE_URL,
    description:
      "Website pemasaran dan konsultasi pembelian mobil Suzuki bersama Nara — Suzuki Sales Consultant.",
    inLanguage: "id-ID",
  };

  // Structured Data: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Bagaimana cara konsultasi pembelian mobil Suzuki dengan Nara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Anda bisa langsung chat WhatsApp ${siteConfig.salesName} di ${siteConfig.phoneNumberFormatted}, atau mengisi formulir kontak di halaman ini. ${siteConfig.salesName} akan membantu dari pemilihan unit, simulasi kredit, hingga serah terima unit.`,
        },
      },
      {
        "@type": "Question",
        name: "Berapa DP minimal mobil Suzuki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `DP minimal mengikuti ketentuan leasing. Paket promo dan DP bergantung pada tipe kendaraan serta ketentuan leasing yang berlaku. Hubungi ${siteConfig.salesName} melalui WhatsApp untuk mendapatkan informasi promo terbaru.`,
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Silakan konsultasikan tukar tambah mobil lama dengan ${siteConfig.salesName}. Penilaian kendaraan dan proses administrasi akan mengikuti kondisi unit serta ketentuan dealer.`,
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa jadwalkan test drive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Anda dapat menjadwalkan test drive melalui formulir pada bagian Test Drive atau menghubungi ${siteConfig.salesName} melalui WhatsApp. Tentukan tipe kendaraan dan tanggal yang diinginkan untuk konfirmasi jadwal.`,
        },
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icon.png" />

        {/* Google Fonts: Inter and Plus Jakarta Sans */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Structured Data: AutomotiveBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Structured Data: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
