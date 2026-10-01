"use client";

import { getWhatsAppLink } from "../data/siteConfig";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="badge badge-sales animate-fade-up">
            <span className="badge-dot"></span>
            SUZUKI INDONESIA
          </div>
          <h1 className="animate-fade-up hero-headline" style={{ "--delay": "0.12s" }}>
            Temukan <span className="text-accent">Suzuki</span> untuk setiap perjalanan.
          </h1>
          <p className="animate-fade-up hero-subheadline" style={{ "--delay": "0.24s" }}>
            Dari keluarga hingga bisnis, jelajahi lineup Suzuki dengan harga transparan,
            simulasi kredit, dan konsultasi langsung bersama Nara.
          </p>
          <div className="hero-actions animate-fade-up" style={{ "--delay": "0.36s" }}>
            <a href="#produk" className="btn btn-primary">
              Jelajahi Mobil <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#promo" className="btn btn-outline">Lihat Harga &amp; Promo</a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-wa-link"
              aria-label="Konsultasi WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              WhatsApp Nara
            </a>
          </div>
        </div>

        <div className="hero-right animate-fade-up" style={{ "--delay": "0.24s" }}>
          <div className="hero-visual">
            <span className="hero-shape" aria-hidden="true"></span>
            <img
              src="/images/newxl7.png"
              alt="Suzuki XL7 — unit unggulan"
              className="hero-product-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
