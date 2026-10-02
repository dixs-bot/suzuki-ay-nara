"use client";

const features = [
  { num: "01", title: "7 Seater", desc: "Ruang kabin luas untuk tujuh penumpang, nyaman untuk seluruh keluarga." },
  { num: "02", title: "Smart Hybrid", desc: "Teknologi hybrid hemat BBM tanpa mengorbankan performa." },
  { num: "03", title: "SUV", desc: "Desain maskulin dengan ground clearance tinggi untuk segala medan." },
  { num: "04", title: "Ground Clearance", desc: "200mm ground clearance — melewati jalanan perkotaan dengan percaya diri." }
];

export default function XL7FeatureSection() {
  return (
    <section className="section xl7-section" aria-label="Fitur The New XL7">
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Flagship SUV</span>
          <h2 className="section-title">The New XL7</h2>
          <p className="section-subtitle" style={{ margin: 0 }}>
            SUV 7-penumpang dengan Smart Hybrid Technology, dirancang untuk perjalanan keluarga yang tak terlupakan.
          </p>
        </div>
        <div className="xl7-grid reveal">
          {features.map((f) => (
            <div className="xl7-item" key={f.num}>
              <div className="xl7-num">{f.num}</div>
              <h3 className="xl7-title">{f.title}</h3>
              <p className="xl7-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
