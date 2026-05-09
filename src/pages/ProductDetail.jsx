import { useState } from "react";
import { useCart } from "../context/CartContext";

const ORANGE = "#FF6B00";
const LINK_BLUE = "#007185";
const BUY_YELLOW = "#FFD814";
const BUY_ORANGE = "#FFA41C";
const STAR_ORANGE = "#FFA41C";
const BORDER = "#DDD";
const BG_LIGHT = "#F0F2F2";
const TEXT_SECONDARY = "#565959";
const DARK = "#0F1111";

const watchImages = [
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
  "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56",
];

const relatedProducts = [
  {
    name: "Noise ColorFit Pro 5 Max",
    price: "₹3,999",
    original: "₹9,999",
    rating: 4.2,
    reviews: 6820,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
  {
    name: "Noise Twist GO 2",
    price: "₹1,499",
    original: "₹4,999",
    rating: 3.9,
    reviews: 1203,
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
  },
  {
    name: "Noise Pulse 4 Max",
    price: "₹2,299",
    original: "₹6,999",
    rating: 4.1,
    reviews: 3410,
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
  },
  {
    name: "Noise Evolve 5 SE",
    price: "₹2,799",
    original: "₹7,999",
    rating: 4.0,
    reviews: 2100,
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400",
  },
];

const specs = [
  ["Compatible Devices", "Smartphones"],
  ["Special Feature", "Waterproof"],
  ["Shape", "Round"],
  ["Display Type", "AMOLED"],
  ["Target Audience", "Men, Women"],
  ["Connectivity Technology", "Bluetooth"],
  ["Water Resistance Level", "IP68"],
];

const ratingBars = [
  { label: "5 star", pct: 55 },
  { label: "4 star", pct: 20 },
  { label: "3 star", pct: 12 },
  { label: "2 star", pct: 5 },
  { label: "1 star", pct: 8 },
];

const reviews = [
  { name: "Arjun Sharma", rating: 4, title: "Great watch for the price", date: "12 March 2024", verified: true, body: "The display is stunning and the calling feature works flawlessly. Battery lasts 5–6 days with moderate use. Build quality feels premium for this price range.", helpful: 34 },
  { name: "Priya Menon", rating: 5, title: "Best smartwatch under 3K!", date: "28 February 2024", verified: true, body: "Absolutely love this watch. AMOLED display is crisp and bright even outdoors. Calling is clear and sports modes are very accurate. Highly recommend!", helpful: 67 },
  { name: "Rahul Desai", rating: 3, title: "Good but app needs improvement", date: "5 January 2024", verified: true, body: "Hardware is great but the NoiseFit app is buggy sometimes. Watch face syncing fails occasionally. Otherwise excellent value.", helpful: 12 },
];

function Stars({ rating }) {
  return (
    <span style={{ color: STAR_ORANGE, fontSize: 14 }}>
      {[1, 2, 3, 4, 5].map(i => <span key={i}>{i <= Math.round(rating) ? "★" : "☆"}</span>)}
    </span>
  );
}

function Img({ src, alt, style }) {
  const [err, setErr] = useState(false);
  return err
    ? <div style={{ ...style, background: BG_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: TEXT_SECONDARY, borderRadius: 4 }}>{alt}</div>
    : <img src={src} alt={alt} style={style} onError={() => setErr(true)} />;
}



function ProductImages({ images }) {
  const [main, setMain] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [bgPosition, setBgPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onMouseEnter={() => setMain(i)}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              border:
                i === main
                  ? "2px solid orange"
                  : "1px solid #ddd",
              cursor: "pointer",
              borderRadius: "4px",
              padding: "2px",
              background: "#fff",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "20px",
        }}
      >

        <div
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
          style={{
            width: "430px",
            height: "450px",
            border: "1px solid #ddd",
            overflow: "hidden",
            background: "#fff",
            cursor: "zoom-in",
          }}
        >
          <img
            src={images[main]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {showZoom && (
          <div
            style={{
              width: "500px",
              height: "450px",
              border: "1px solid #ddd",
              backgroundImage: `url(${images[main]})`,
              backgroundPosition: bgPosition,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
              backgroundColor: "#fff",
            }}
          />
        )}
      </div>
    </div>
  );
}



function BuyBox({ qty, setQty, product }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    if (added) return;
    addToCart({
      ...product,
      qty,
    });

    setAdded(true);
  };
  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16 }}>
      <div className="text-start" style={{ fontSize: 12, color: TEXT_SECONDARY }}>M.R.P.: <span style={{ textDecoration: "line-through" }}>₹7,499</span></div>
      <div className="text-start" style={{ fontSize: 26, fontWeight: 400, margin: "2px 0" }}>
        ₹<strong>2,499</strong>
        <span style={{ fontSize: 13, color: ORANGE, marginLeft: 6 }}>(-67%)</span>
      </div>
      <div className="text-start" style={{ fontSize: 12, color: TEXT_SECONDARY, marginBottom: 8 }}>Inclusive of all taxes</div>
      <div className="text-start" style={{ fontSize: 13, color: "#007600", fontWeight: 700, marginBottom: 6 }}>In Stock</div>
      <div className="text-start" style={{ fontSize: 12, marginBottom: 8, lineHeight: 1.7 }}>
        <div><strong>FREE Delivery</strong> <span style={{ color: LINK_BLUE }}>Monday, 6 May</span></div>
        <div style={{ color: TEXT_SECONDARY }}>Fastest: <strong>Today 10AM – 2PM</strong></div>
      </div>
      <div className="text-start" style={{ fontSize: 12, marginBottom: 10 }}>🚚 <span style={{ color: LINK_BLUE, cursor: "pointer" }}>Deliver to Chennai 600001</span></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
          fontSize: 13
        }}
      >
        <span>Qty:</span>

        <select
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={{
            padding: "3px 8px",
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
          }}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAddToCart} style={{ width: "100%", background: BUY_YELLOW, border: "1px solid #FCD200", borderRadius: 20, padding: 9, fontWeight: 600, fontSize: 13, cursor: "pointer", color: DARK, marginBottom: 6 }}>
        {added ? "✓ Added to Cart" : "Add to Cart"}
      </button>
      <button style={{ width: "100%", background: BUY_ORANGE, border: "1px solid #FF8F00", borderRadius: 20, padding: 9, fontWeight: 600, fontSize: 13, cursor: "pointer", color: DARK }}>Buy Now</button>
      <div className="text-start" style={{ fontSize: 12, marginTop: 12, color: TEXT_SECONDARY, lineHeight: 1.9 }}>
        <div>Ships from <strong>Amazon</strong></div>
        <div>Sold by <span style={{ color: LINK_BLUE }}>Noise Official Store</span></div>
        <div><span style={{ color: LINK_BLUE }}>30-day</span> return policy</div>
      </div>
      <div className="text-start" style={{ display: "flex", gap: 12, marginTop: 10, justifyContent: "center", fontSize: 12 }}>
        <span style={{ color: LINK_BLUE, cursor: "pointer" }}>🤍 Add to Wish List</span>
        <span style={{ color: TEXT_SECONDARY }}>|</span>
        <span style={{ color: LINK_BLUE, cursor: "pointer" }}>Share</span>
      </div>
    </div>
  );
}

function RatingBar({ label, pct }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, marginBottom: 4 }}>
      <span style={{ color: LINK_BLUE, width: 44, textAlign: "right", cursor: "pointer", whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, background: "#E7E7E7", borderRadius: 2, height: 14, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: ORANGE }} />
      </div>
      <span style={{ color: LINK_BLUE, width: 28, cursor: "pointer" }}>{pct}%</span>
    </div>
  );
}

function ReviewCard({ name, rating, title, date, verified, body, helpful }) {
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#888", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{name[0]}</div>
        <span style={{ fontWeight: 600, fontSize: 13 }}>{name}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
        <Stars rating={rating} />
        <span style={{ fontWeight: 700, fontSize: 13 }}>{title}</span>
      </div>
      <div className="text-start" style={{ fontSize: 12, color: TEXT_SECONDARY, marginBottom: 6 }}>
        Reviewed in India on {date}
        {verified && <span style={{ marginLeft: 8, color: "#C45500" }}>✓ Verified Purchase</span>}
      </div>
      <p className="text-start" style={{ fontSize: 13, margin: "0 0 8px", lineHeight: 1.55 }}>{body}</p>
      <div style={{ fontSize: 12, color: TEXT_SECONDARY }}>
        {helpful} people found this helpful &nbsp;
        <button className="text-dark" style={{ fontSize: 12, border: `1px solid ${BORDER}`, background: "#fff", borderRadius: 4, padding: "2px 10px", cursor: "pointer" }}>Helpful</button>
      </div>
    </div>
  );
}

function SmallCard({ name, price, original, rating, reviews: rv, img }) {
  return (
    <div
      style={{ border: `1px solid ${BORDER}`, borderRadius: 4, background: "#fff", padding: 10, fontSize: 12, cursor: "pointer" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
        <Img src={img} alt={name} style={{ maxWidth: "100%", maxHeight: 120, objectFit: "contain" }} />
      </div>
      <div style={{ color: LINK_BLUE, marginBottom: 3, lineHeight: 1.3, minHeight: 30 }}>{name}</div>
      <div style={{ marginBottom: 2 }}><Stars rating={rating} /> <span style={{ color: LINK_BLUE }}>({rv.toLocaleString()})</span></div>
      <div><strong style={{ fontSize: 14 }}>{price}</strong> <span style={{ textDecoration: "line-through", color: TEXT_SECONDARY }}>{original}</span></div>
    </div>
  );
}

export default function NoiseEndeavourDetail() {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    { label: "Black", hex: "#1A1A1A" },
    { label: "Blue", hex: "#1E5FA3" },
    { label: "Orange", hex: "#CC5500" },
  ];

  const techSpecs = [
    ["Brand", "Noise"], ["Model Name", "Noise Endeavour"], ["Dial Shape", "Round"],
    ["Display Size", "1.46 Inches"], ["Display Type", "AMOLED"], ["Resolution", "466 × 466 pixels"],
    ["Brightness", "500 Nits"], ["Battery Life", "10 Days"], ["Charging Time", "Approx. 2 Hours"],
    ["Water Resistance", "IP68"], ["Connectivity", "Bluetooth 5.3"],
    ["Compatibility", "Android 5.0+, iOS 10.0+"], ["Strap Width", "22 mm"],
    ["Strap Material", "Silicone"], ["Weight", "Approx. 49g"],
  ];

  return (
    <div style={{ fontFamily: '"Amazon Ember", "Segoe UI", Arial, sans-serif', background: "#fff", color: DARK, minHeight: "100vh", fontSize: 14 }}>

      {/* Breadcrumb */}
      <div style={{ padding: "8px 16px", fontSize: 12, color: LINK_BLUE, borderBottom: `1px solid ${BORDER}` }}>
        <span style={{ cursor: "pointer" }}>Electronics</span> ›{" "}
        <span style={{ cursor: "pointer" }}>Wearable Technology</span> ›{" "}
        <span style={{ cursor: "pointer" }}>Smart Watches</span> ›{" "}
        <span style={{ cursor: "pointer" }}>Noise</span>
      </div>

      {/* ── 3-COLUMN MAIN ── */}
      <div style={{ display: "grid", gridTemplateColumns: "38% 36% 22%", gap: 20, padding: "16px 16px 0", maxWidth: 1350, margin: "0 auto", alignItems: "start" }}>

        {/* COL 1 – Images */}
        <div>
          <ProductImages images={watchImages} />
          <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: "center", fontSize: 12 }}>
            <span style={{ color: LINK_BLUE, cursor: "pointer" }}>🤍 Add to Wish List</span>
            <span style={{ color: TEXT_SECONDARY }}>|</span>
            <span style={{ color: LINK_BLUE, cursor: "pointer" }}>Share</span>
          </div>
        </div>

        {/* COL 2 – Info */}
        <div>
          <h1 className="text-start" style={{ fontSize: 24, fontWeight: 400, lineHeight: '32px', marginBottom: 8, fontFamily: '""Amazon Ember",Arial,sans-serif' }}>
            Noise Launched Endeavour Smartwatch with 1.46" AMOLED Display, Bluetooth Calling, 500 Nits Brightness, 100+ Sports Mode, IP68 Waterproof, 10 Days Battery, 24/7 Health Suite for Men &amp; Women
          </h1>
          <div className="text-start" style={{ fontSize: 13, marginBottom: 6 }}>Brand: <span style={{ color: LINK_BLUE, cursor: "pointer" }}>Noise</span></div>
          <div className="text-start" style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
            <Stars rating={4.1} />
            <span style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}>4.1</span>
            <span style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}>5,428 ratings</span>
            <span style={{ color: TEXT_SECONDARY }}>|</span>
            <span style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}>Search this page</span>
          </div>
          <div className="text-start" style={{ fontSize: 13, color: "#C45500", fontWeight: 600, marginBottom: 8 }}>1K+ bought in past month</div>

          {/* Price */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 11, background: "#CC0C39", color: "#fff", padding: "1px 5px", borderRadius: 2, fontWeight: 700 }}>-67%</span>
              <span style={{ fontSize: 26, fontWeight: 400 }}>₹<strong>2,499</strong></span>
            </div>
            <div className="text-start" style={{ fontSize: 12, color: TEXT_SECONDARY, marginTop: 2 }}>M.R.P.: <span style={{ textDecoration: "line-through" }}>₹7,499</span></div>
            <div className="text-start" style={{ fontSize: 12, color: TEXT_SECONDARY }}>Inclusive of all taxes</div>
            <div className="text-start" style={{ fontSize: 12, color: LINK_BLUE, marginTop: 4, cursor: "pointer" }}>EMI from ₹237/month. No Cost EMI available ›</div>
          </div>

          {/* Bank Offer */}
          <div style={{ background: "#FFF4E5", border: `1px solid #FFD580`, borderRadius: 4, padding: "8px 10px", marginBottom: 12, fontSize: 12 }}>
            <strong>Bank Offer:</strong> 10% instant discount on HDFC Bank Credit Cards &nbsp;
            <span style={{ color: LINK_BLUE, cursor: "pointer" }}>See all offers</span>
          </div>

          {/* Colour */}
          <div style={{ marginBottom: 12 }}>
            <div className="text-start" style={{ fontSize: 13, marginBottom: 6 }}><strong>Colour:</strong> {colors[selectedColor].label}</div>
            <div style={{ display: "flex", gap: 8 }}>
              {colors.map((c, i) => (
                <div key={i} onClick={() => setSelectedColor(i)} title={c.label} style={{
                  width: 32, height: 32, borderRadius: "50%", background: c.hex,
                  border: `3px solid ${i === selectedColor ? "#C45500" : BORDER}`,
                  cursor: "pointer", boxSizing: "border-box",
                  boxShadow: i === selectedColor ? "0 0 0 1px #C45500" : "none",
                }} />
              ))}
            </div>
          </div>

          {/* Variant thumbnails */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {watchImages.slice(0, 4).map((img, i) => (
              <div key={i} style={{ width: 50, height: 50, border: `1px solid ${BORDER}`, borderRadius: 3, overflow: "hidden", cursor: "pointer", padding: 2, background: "#fff" }}>
                <Img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>

          {/* About */}
          <div style={{ marginBottom: 14 }}>
            <div className="text-start" style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>About this item</div>
            <ul className="text-start" style={{ paddingLeft: 20, margin: 0, lineHeight: 1.9, fontSize: 13 }}>
              <li><strong>ROBUST DESIGN:</strong> Tough rugged build with IP68 waterproof rating</li>
              <li><strong>1.46" AMOLED Display</strong> with 500 nits peak brightness</li>
              <li><strong>606 Watch Faces</strong> — personalize every day</li>
              <li><strong>BT Calling</strong> — Built-in mic &amp; speaker for wireless calls</li>
              <li><strong>100+ Sports Modes</strong> for all activities</li>
              <li><strong>10 Days Battery</strong> life; 30 days standby</li>
              <li><strong>24/7 Health Suite:</strong> SpO2, Heart Rate, Stress, Sleep tracking</li>
            </ul>
          </div>

          {/* Quick specs */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 12 }}>
            <tbody>
              {specs.map(([k, v], i) => (
                <tr key={k} style={{ background: i % 2 === 0 ? BG_LIGHT : "#fff" }}>
                  <td style={{ padding: "5px 10px", fontWeight: 600, width: "44%", border: `1px solid ${BORDER}` }}>{k}</td>
                  <td style={{ padding: "5px 10px", border: `1px solid ${BORDER}` }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ fontSize: 12, color: LINK_BLUE, cursor: "pointer" }}>› See more product details</div>
        </div>

        {/* COL 3 – Buy Box */}
        <div>
          <BuyBox qty={qty} setQty={setQty} />
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: 10, marginTop: 10, fontSize: 12 }}>
            <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <input type="checkbox" /> Add a gift receipt for easy returns
            </label>
          </div>
        </div>
      </div>

      {/* ── RELATED PRODUCTS ── */}
      <div style={{ maxWidth: 1350, margin: "24px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, borderBottom: `2px solid ${BORDER}`, paddingBottom: 8 }}>Products related to this item</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {relatedProducts.map((p, i) => <SmallCard key={i} {...p} />)}
        </div>
      </div>

      {/* ── FROM THE MANUFACTURER ── */}
      <div style={{ maxWidth: 1350, margin: "28px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, borderBottom: `2px solid ${BORDER}`, paddingBottom: 8 }}>From the manufacturer</h2>

        {/* Banner 1 – Robust Design */}
        <div style={{ background: "linear-gradient(135deg,#141414 0%,#1e1e1e 55%,#2a1200 100%)", display: "flex", alignItems: "center", minHeight: 280, marginBottom: 4, overflow: "hidden", position: "relative" }}>
          <div style={{ padding: "40px 48px", color: "#fff", flex: 1, zIndex: 2 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: ORANGE, marginBottom: 8, textTransform: "uppercase" }}>Noise Endeavour</div>
            <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: -2 }}>ROBUST</div>
            <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: -2, color: ORANGE }}>DESIGN</div>
            <div style={{ fontSize: 13, color: "#aaa", marginTop: 12 }}>Engineered for the rugged lifestyle</div>
          </div>
          <div style={{ padding: "20px 48px 20px 0", zIndex: 2 }}>
            <Img src={watchImages[0]} alt="Robust Design" style={{ height: 230, objectFit: "contain", filter: "drop-shadow(0 8px 32px rgba(255,107,0,0.3))" }} />
          </div>
        </div>

        {/* Banner 2 – AMOLED */}
        <div style={{ background: "linear-gradient(135deg,#050505 0%,#111 100%)", minHeight: 260, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
          <div style={{ textAlign: "center", color: "#fff", padding: "48px 20px" }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: ORANGE, textTransform: "uppercase", marginBottom: 10 }}>Stunning Visuals</div>
            <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1 }}>1.46" <span style={{ color: ORANGE }}>AMOLED</span></div>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#ccc", marginTop: 8 }}>HIGH-PIXEL LUMINOUS DISPLAY</div>
            <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 18 }}>
              {["500 Nits Brightness", "Always-On Display", "606 Watch Faces"].map(f => (
                <div key={f} style={{ fontSize: 12, color: "#777", textTransform: "uppercase", letterSpacing: 1 }}>{f}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner 3 – 606 Alerts */}
        <div style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, #BB3300 100%)`, display: "flex", alignItems: "center", minHeight: 220, marginBottom: 4, overflow: "hidden" }}>
          <div style={{ padding: "32px 48px", color: "#fff", flex: 1 }}>
            <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1 }}>606</div>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>ALERTS</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 6 }}>Stay connected — never miss a notification</div>
          </div>
          <div style={{ padding: "20px 48px 20px 0" }}>
            <Img src={watchImages[2]} alt="606 Alerts" style={{ height: 190, objectFit: "contain" }} />
          </div>
        </div>

        {/* Banner 4 – BT Calling */}
        <div style={{ background: "linear-gradient(135deg,#090f18 0%,#0d1f30 100%)", display: "flex", alignItems: "center", minHeight: 260, marginBottom: 4, overflow: "hidden" }}>
          <div style={{ padding: "32px 48px", color: "#fff", flex: 1 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: "#5AABFF", textTransform: "uppercase", marginBottom: 10 }}>Stay Connected</div>
            <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1 }}><span style={{ color: "#5AABFF" }}>BT</span> CALLING</div>
            <div style={{ fontSize: 14, color: "#7aaac0", marginTop: 12, lineHeight: 1.8 }}>
              Built-in mic &amp; speaker<br />Crystal clear calls right from your wrist
            </div>
          </div>
          <div style={{ padding: "20px 48px 20px 0" }}>
            <Img src={watchImages[3]} alt="BT Calling" style={{ height: 210, objectFit: "contain", filter: "drop-shadow(0 4px 20px rgba(90,171,255,0.3))" }} />
          </div>
        </div>

        {/* Noise Health Suite */}
        <div style={{ background: "#F5F5F5", padding: "28px 24px", marginBottom: 4 }}>
          <h3 style={{ textAlign: "center", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Noise Health Suite</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {[
              { icon: "❤️", title: "Heart Rate", desc: "24/7 continuous monitoring" },
              { icon: "🫁", title: "SpO2", desc: "Blood oxygen tracking" },
              { icon: "🧠", title: "Stress Monitor", desc: "Breathing & stress levels" },
              { icon: "😴", title: "Sleep Tracking", desc: "Deep, light & REM stages" },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "18px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 34, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12, color: TEXT_SECONDARY }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 5 – 100+ Sports */}
        <div style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#181818 100%)", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 250, padding: "32px 48px", marginBottom: 4, overflow: "hidden" }}>
          <div style={{ color: "#fff" }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: ORANGE, textTransform: "uppercase", marginBottom: 8 }}>Stay Active</div>
            <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, color: ORANGE }}>100+</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>SPORTS MODE</div>
            <div style={{ fontSize: 13, color: "#777", marginTop: 8 }}>Running • Swimming • Cycling • Yoga • Football • and more</div>
          </div>
          <Img src={watchImages[4]} alt="Sports modes" style={{ height: 210, objectFit: "contain", filter: "drop-shadow(0 4px 28px rgba(255,107,0,0.4))" }} />
        </div>
      </div>

      {/* ── FULL TECH SPECS ── */}
      {/* <div style={{ maxWidth: 1350, margin: "28px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, borderBottom: `2px solid ${BORDER}`, paddingBottom: 8 }}>Technical Specification</h2>
        <table style={{ width: "58%", borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            {techSpecs.map(([k, v], i) => (
              <tr key={k} style={{ background: i % 2 === 0 ? BG_LIGHT : "#fff" }}>
                <td style={{ padding: "7px 12px", fontWeight: 600, borderBottom: `1px solid ${BORDER}`, width: "40%" }}>{k}</td>
                <td style={{ padding: "7px 12px", borderBottom: `1px solid ${BORDER}` }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* ── RATINGS & REVIEWS ── */}
      <div style={{ maxWidth: 1350, margin: "28px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, borderBottom: `2px solid ${BORDER}`, paddingBottom: 8 }}>Customer reviews</h2>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36 }}>
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 56, fontWeight: 300, lineHeight: 1 }}>4.1</span>
              <div style={{ paddingBottom: 6 }}>
                <Stars rating={4.1} />
                <div style={{ fontSize: 12, color: TEXT_SECONDARY }}>out of 5</div>
              </div>
            </div>
            <div style={{ fontSize: 13, marginBottom: 12 }}>5,428 global ratings</div>
            {ratingBars.map(r => <RatingBar key={r.label} {...r} />)}
            <div style={{ marginTop: 16, padding: 12, background: BG_LIGHT, borderRadius: 6, fontSize: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Review this product</div>
              <div style={{ color: TEXT_SECONDARY, marginBottom: 8 }}>Share your thoughts with other customers</div>
              <button className="text-dark" style={{ width: "100%", background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 6, padding: 7, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>Write a customer review</button>
            </div>
          </div>
          <div>
            <div className="text-start" style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Top reviews from India</div>
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
            <button className="text-dark" style={{ background: BG_LIGHT, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "8px 20px", fontSize: 13, cursor: "pointer" }}>See all reviews</button>
          </div>
        </div>
      </div>

      {/* ── RECENTLY VIEWED ── */}
      <div style={{ maxWidth: 1350, margin: "28px auto 40px", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, borderBottom: `2px solid ${BORDER}`, paddingBottom: 8 }}>Your recently viewed items and featured recommendations</h2>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
          {[...relatedProducts, ...relatedProducts].map((p, i) => (
            <div key={i} style={{ minWidth: 128, textAlign: "center", cursor: "pointer", fontSize: 11, border: `1px solid ${BORDER}`, borderRadius: 4, padding: 8, background: "#fff", flexShrink: 0 }}>
              <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                <Img src={p.img} alt={p.name} style={{ maxWidth: "100%", maxHeight: 80, objectFit: "contain" }} />
              </div>
              <div style={{ color: LINK_BLUE, lineHeight: 1.3, marginBottom: 3 }}>{p.name}</div>
              <div style={{ color: STAR_ORANGE }}>{"★".repeat(Math.round(p.rating))}</div>
              <div style={{ fontWeight: 700, fontSize: 12 }}>{p.price}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}