import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const LINK_BLUE = "#007185";
const BORDER = "#DDD";
const BG_LIGHT = "#F0F2F2";
const TEXT_SECONDARY = "#565959";
const STAR_ORANGE = "#FFA41C";

function Stars({ rating }) {
    return (
        <span style={{ color: STAR_ORANGE, fontSize: 13 }}>
            {[1, 2, 3, 4, 5].map(i => (
                <span key={i}>{i <= Math.round(rating) ? "★" : "☆"}</span>
            ))}
        </span>
    );
}

const suggestedProducts = [
    {
        id: "s1",
        name: "Fastrack Astor FS1 Pro Smart Watch",
        price: 2099,
        original: 4999,
        discount: 58,
        rating: 4.3,
        reviews: 1623,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
        id: "s2",
        name: "boAt Wave Sigma 2 Smartwatch",
        price: 1799,
        original: 4999,
        discount: 64,
        rating: 4.1,
        reviews: 3210,
        img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
        id: "s3",
        name: "Fire-Boltt Phoenix Ultra",
        price: 2499,
        original: 6999,
        discount: 64,
        rating: 4.2,
        reviews: 4512,
        img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    },
    {
        id: "s4",
        name: "Noise ColorFit Pro 5 Max",
        price: 3499,
        original: 9999,
        discount: 65,
        rating: 4.0,
        reviews: 892,
        img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
    },
];

function CartItemRow({ item }) {
    const { removeFromCart, updateQty, saveForLater } = useCart();

    return (
        <div style={{
            display: "flex", gap: 16, padding: "16px 0",
            borderBottom: `1px solid ${BORDER}`,
        }}>
            {/* Product Image */}
            <div style={{
                width: 140, height: 140, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#fff",
            }}>
                <img
                    src={item.img}
                    alt={item.name}
                    style={{ maxWidth: "100%", maxHeight: 140, objectFit: "contain" }}
                    onError={e => { e.target.style.display = "none"; }}
                />
            </div>

            {/* Product Details */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1, paddingRight: 16 }}>
                        <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 4, lineHeight: 1.4 }}>
                            <span style={{ color: LINK_BLUE, cursor: "pointer" }}>{item.name}</span>
                        </div>

                        {item.discount && (
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                <span style={{
                                    background: "#CC0C39", color: "#fff", fontSize: 12,
                                    padding: "1px 6px", borderRadius: 2, fontWeight: 700,
                                }}>{item.discount}% off</span>
                                <span style={{ fontSize: 12, color: "#C45500", fontWeight: 600 }}>Great Summer Deal</span>
                            </div>
                        )}

                        <div style={{ fontSize: 13, color: "#007600", marginBottom: 2, fontWeight: 400 }}>In stock</div>

                        <div style={{ fontSize: 13, marginBottom: 4 }}>
                            <span
                                style={{
                                    background: "#067D62", color: "#fff",
                                    fontSize: 12, padding: "2px 6px", borderRadius: 2,
                                    marginRight: 6, fontWeight: 600,
                                }}
                            >a Fulfilled</span>
                        </div>

                        <div style={{ fontSize: 12, marginBottom: 4 }}>
                            <input type="checkbox" id={`gift-${item.id}`} style={{ marginRight: 5 }} />
                            <label htmlFor={`gift-${item.id}`} style={{ cursor: "pointer" }}>
                                This will be a gift <span style={{ color: LINK_BLUE }}>Learn more</span>
                            </label>
                        </div>

                        {item.color && (
                            <div style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 6 }}>
                                Colour: <strong>{item.color}</strong>
                            </div>
                        )}

                        {/* Qty controls + actions */}
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                            {/* Qty stepper */}
                            <div style={{
                                display: "flex", alignItems: "center",
                                border: `2px solid ${STAR_ORANGE}`, borderRadius: 20,
                                overflow: "hidden",
                            }}>
                                <button
                                    onClick={() => updateQty(item.id, item.qty - 1)}
                                    style={{
                                        width: 32, height: 30, border: "none", background: BG_LIGHT,
                                        cursor: "pointer", fontSize: 18, lineHeight: 1,
                                        fontWeight: 400, color: "#333",
                                    }}
                                >🗑</button>
                                <span style={{
                                    minWidth: 32, textAlign: "center", fontWeight: 600,
                                    fontSize: 14, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`,
                                    padding: "4px 8px",
                                }}>{item.qty}</span>
                                <button
                                    onClick={() => updateQty(item.id, item.qty + 1)}
                                    style={{
                                        width: 32, height: 30, border: "none", background: BG_LIGHT,
                                        cursor: "pointer", fontSize: 20, lineHeight: 1, fontWeight: 400, color: "#333",
                                    }}
                                >+</button>
                            </div>

                            <span style={{ color: BORDER }}>|</span>
                            <span
                                onClick={() => removeFromCart(item.id)}
                                style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}
                            >Delete</span>
                            <span style={{ color: BORDER }}>|</span>
                            <span
                                onClick={() => saveForLater(item.id)}
                                style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}
                            >Save for later</span>
                            <span style={{ color: BORDER }}>|</span>
                            <span style={{ color: LINK_BLUE, fontSize: 13, cursor: "pointer" }}>Share</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontSize: 18, fontWeight: 700 }}>
                            ₹{(item.price * item.qty).toLocaleString("en-IN")}.00
                        </div>
                        {item.original && (
                            <div style={{ fontSize: 12, color: TEXT_SECONDARY }}>
                                M.R.P.: <span style={{ textDecoration: "line-through" }}>₹{item.original.toLocaleString("en-IN")}.00</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SavedItemRow({ item }) {
    const { removeFromCart, moveToCart } = useCart();
    return (
        <div style={{
            display: "flex", gap: 16, padding: "16px 0",
            borderBottom: `1px solid ${BORDER}`,
        }}>
            <div style={{
                width: 100, height: 100, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <img src={item.img} alt={item.name}
                    style={{ maxWidth: "100%", maxHeight: 100, objectFit: "contain" }}
                    onError={e => { e.target.style.display = "none"; }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, color: LINK_BLUE, marginBottom: 4 }}>{item.name}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>₹{item.price.toLocaleString("en-IN")}.00</div>
                <div style={{ display: "flex", gap: 10 }}>
                    <button
                        onClick={() => moveToCart(item.id)}
                        style={{
                            background: "#FFD814", border: "1px solid #FCD200",
                            borderRadius: 20, padding: "6px 14px", fontSize: 12,
                            cursor: "pointer", fontWeight: 600,
                        }}
                    >Move to cart</button>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                            background: "#fff", border: `1px solid ${BORDER}`,
                            borderRadius: 20, padding: "6px 14px", fontSize: 12, cursor: "pointer",
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    );
}

export default function CartPage() {
    const { cartItems, addToCart, subtotal, totalCount } = useCart();

    const activeItems = cartItems.filter(i => !i.savedForLater);
    const savedItems = cartItems.filter(i => i.savedForLater);

    return (
        <div style={{
            background: "#EAEDED", minHeight: "100vh",
            fontFamily: '"Amazon Ember","Segoe UI",Arial,sans-serif',
        }}>
            <div style={{
                maxWidth: 1350, margin: "0 auto",
                padding: "16px 16px",
                display: "grid",
                gridTemplateColumns: "1fr 300px",
                gap: 20,
                alignItems: "start",
            }}>

                {/* ── LEFT: Cart Items ── */}
                <div>
                    <div style={{ background: "#fff", borderRadius: 4, padding: "16px 20px", marginBottom: 12 }}>

                        {/* Header row */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `1px solid ${BORDER}`, paddingBottom: 12, marginBottom: 4 }}>
                            <h1 style={{ fontSize: 26, fontWeight: 400, margin: 0 }}>Shopping Cart</h1>
                            <span style={{ fontSize: 13, color: TEXT_SECONDARY }}>Price</span>
                        </div>

                        {/* Free delivery bar */}
                        {activeItems.length > 0 && (
                            <div style={{
                                background: "#F0FFF4", border: `1px solid #C3E6CB`,
                                borderRadius: 4, padding: "10px 14px", marginBottom: 12, fontSize: 13,
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <span style={{ color: "#28A745", fontSize: 18 }}>✔</span>
                                    <div>
                                        <strong>Your order is eligible for FREE Delivery.</strong>
                                        <span style={{ color: TEXT_SECONDARY }}> Choose </span>
                                        <span style={{ color: LINK_BLUE, cursor: "pointer" }}>FREE Delivery</span>
                                        <span style={{ color: TEXT_SECONDARY }}> option at checkout.</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Cart items */}
                        {activeItems.length === 0 ? (
                            <div style={{ padding: "40px 0", textAlign: "center" }}>
                                <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
                                <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 8 }}>Your Amazon Cart is empty</div>
                                <div style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 16 }}>
                                    Shop today's deals
                                </div>
                                <Link to="/">
                                    <button style={{
                                        background: "#FFD814", border: "1px solid #FCD200",
                                        borderRadius: 20, padding: "9px 24px", fontSize: 13,
                                        cursor: "pointer", fontWeight: 600,
                                    }}>Continue Shopping</button>
                                </Link>
                            </div>
                        ) : (
                            activeItems.map(item => <CartItemRow key={item.id} item={item} />)
                        )}

                        {/* Subtotal bottom */}
                        {activeItems.length > 0 && (
                            <div style={{ textAlign: "right", paddingTop: 12, fontSize: 16 }}>
                                Subtotal ({totalCount} item{totalCount !== 1 ? "s" : ""}):&nbsp;
                                <strong>₹{subtotal.toLocaleString("en-IN")}.00</strong>
                            </div>
                        )}
                    </div>

                    {/* ── Saved for later ── */}
                    {savedItems.length > 0 && (
                        <div style={{ background: "#fff", borderRadius: 4, padding: "16px 20px", marginBottom: 12 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 400, marginBottom: 0, borderBottom: `1px solid ${BORDER}`, paddingBottom: 10 }}>
                                Saved for later ({savedItems.length} item{savedItems.length !== 1 ? "s" : ""})
                            </h2>
                            {savedItems.map(item => <SavedItemRow key={item.id} item={item} />)}
                        </div>
                    )}

                    {/* ── Customers who bought also bought ── */}
                    <div style={{ background: "#fff", borderRadius: 4, padding: "16px 20px" }}>
                        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, borderBottom: `1px solid ${BORDER}`, paddingBottom: 10 }}>
                            Customers who bought items in your cart also bought
                        </h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                            {suggestedProducts.map(p => (
                                <div key={p.id} style={{
                                    textAlign: "center", fontSize: 12, cursor: "pointer",
                                    border: `1px solid ${BORDER}`, borderRadius: 4, padding: 10,
                                }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)"}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                                >
                                    <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                                        <img src={p.img} alt={p.name}
                                            style={{ maxWidth: "100%", maxHeight: 110, objectFit: "contain" }}
                                            onError={e => { e.target.style.display = "none"; }}
                                        />
                                    </div>
                                    <div style={{ color: LINK_BLUE, lineHeight: 1.3, marginBottom: 4, minHeight: 32 }}>{p.name}</div>
                                    <div style={{ marginBottom: 3 }}>
                                        <Stars rating={p.rating} />
                                        <span style={{ color: LINK_BLUE }}> {p.reviews.toLocaleString()}</span>
                                    </div>
                                    <div style={{ marginBottom: 6 }}>
                                        <span style={{
                                            background: "#CC0C39", color: "#fff", fontSize: 11,
                                            padding: "1px 5px", borderRadius: 2, marginRight: 4, fontWeight: 700,
                                        }}>-{p.discount}%</span>
                                        <strong>₹{p.price.toLocaleString("en-IN")}</strong>
                                        <span style={{ textDecoration: "line-through", color: TEXT_SECONDARY, marginLeft: 4 }}>
                                            ₹{p.original.toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ ...p, color: "Black" })}
                                        style={{
                                            width: "100%", background: "#FFD814", border: "1px solid #FCD200",
                                            borderRadius: 20, padding: "6px", fontSize: 12,
                                            cursor: "pointer", fontWeight: 600,
                                        }}
                                    >Add to cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Summary ── */}
                <div style={{ position: "sticky", top: 16 }}>
                    {/* Order summary card */}
                    <div style={{
                        background: "#fff", border: `1px solid ${BORDER}`,
                        borderRadius: 4, padding: 16, marginBottom: 12,
                    }}>
                        {/* Free delivery badge */}
                        <div style={{
                            background: "#007600", color: "#fff",
                            borderRadius: 4, padding: "8px 10px", marginBottom: 10, fontSize: 13,
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                                <span style={{ fontSize: 16 }}>✔</span>
                                <strong>Your order is eligible for FREE Delivery.</strong>
                            </div>
                            <div style={{ paddingLeft: 22, fontSize: 12 }}>
                                Choose <span style={{ textDecoration: "underline", cursor: "pointer" }}>FREE Delivery</span> option at checkout.
                            </div>
                        </div>

                        {/* Subtotal */}
                        <div style={{ fontSize: 16, marginBottom: 4 }}>
                            Subtotal ({totalCount} item{totalCount !== 1 ? "s" : ""}):&nbsp;
                            <strong>₹{subtotal.toLocaleString("en-IN")}.00</strong>
                        </div>

                        {/* Gift */}
                        <div style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 14 }}>
                            <input type="checkbox" id="order-gift" style={{ marginRight: 6 }} />
                            <label htmlFor="order-gift" style={{ cursor: "pointer" }}>This order contains a gift</label>
                        </div>

                        {/* Proceed to Buy */}
                        <button
                            disabled={activeItems.length === 0}
                            style={{
                                width: "100%",
                                background: activeItems.length === 0 ? "#E7E7E7" : "#FFD814",
                                border: "1px solid #FCD200",
                                borderRadius: 20, padding: "10px",
                                fontWeight: 600, fontSize: 14, cursor: activeItems.length === 0 ? "not-allowed" : "pointer",
                                color: activeItems.length === 0 ? "#999" : "#0F1111",
                                marginBottom: 10,
                            }}
                        >
                            Proceed to Buy
                        </button>

                        {/* EMI */}
                        <div style={{
                            border: `1px solid ${BORDER}`, borderRadius: 4, padding: "10px 12px",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            cursor: "pointer", fontSize: 14,
                        }}>
                            <span>EMI Available</span>
                            <span style={{ fontSize: 18, color: TEXT_SECONDARY }}>⌄</span>
                        </div>
                    </div>

                    {/* Customers also bought sidebar */}
                    <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 4, padding: 14 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>
                            Customers who bought items in your cart also bought
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {suggestedProducts.slice(0, 3).map(p => (
                                <div key={p.id} style={{ display: "flex", gap: 10, cursor: "pointer" }}>
                                    <div style={{
                                        width: 60, height: 60, flexShrink: 0,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        <img src={p.img} alt={p.name}
                                            style={{ maxWidth: "100%", maxHeight: 60, objectFit: "contain" }}
                                            onError={e => { e.target.style.display = "none"; }}
                                        />
                                    </div>
                                    <div style={{ flex: 1, fontSize: 12 }}>
                                        <div style={{ color: LINK_BLUE, lineHeight: 1.3, marginBottom: 3 }}>{p.name}</div>
                                        <Stars rating={p.rating} />
                                        <span style={{ color: LINK_BLUE, fontSize: 11 }}> {p.reviews.toLocaleString()}</span>
                                        <div>
                                            <span style={{ color: "#CC0C39", fontWeight: 700 }}>-{p.discount}% </span>
                                            <strong>₹{p.price.toLocaleString("en-IN")}</strong>
                                            <span style={{ textDecoration: "line-through", color: TEXT_SECONDARY, fontSize: 11, marginLeft: 4 }}>
                                                ₹{p.original.toLocaleString("en-IN")}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => addToCart({ ...p, color: "Black" })}
                                            style={{
                                                marginTop: 4, background: "#FFD814", border: "1px solid #FCD200",
                                                borderRadius: 10, padding: "3px 10px", fontSize: 11,
                                                cursor: "pointer", fontWeight: 600,
                                            }}
                                        >Add to cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}