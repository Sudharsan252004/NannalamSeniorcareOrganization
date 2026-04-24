import React, { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingContactWidgetProps {
  phoneNumber: string;       // e.g. "919876543210"  (no + or spaces)
  whatsappMessage?: string;  // optional pre-filled message
}

// ─── Inline styles (zero external deps) ──────────────────────────────────────

const injectStyles = () => {
  if (document.getElementById("fcw-styles")) return;

  const style = document.createElement("style");
  style.id = "fcw-styles";
  style.textContent = `
    /* Keyframes */
    @keyframes fcw-rise {
      0%   { opacity: 0; transform: translateY(40px) scale(0.7); }
      60%  { transform: translateY(-6px) scale(1.05); }
      100% { opacity: 1; transform: translateY(0)   scale(1); }
    }
    @keyframes fcw-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
      50%       { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
    }
    @keyframes fcw-pulse-call {
      0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.55); }
      50%       { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
    }

    /* Container */
    .fcw-container {
      position: fixed;
      bottom: 28px;
      right: 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      z-index: 9999;
    }

    /* Tooltip wrapper */
    .fcw-item {
      position: relative;
      display: flex;
      align-items: center;
    }

    /* Tooltip bubble */
    .fcw-tooltip {
      position: absolute;
      right: calc(100% + 12px);
      background: rgba(15,15,20,0.88);
      color: #fff;
      font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.01em;
      padding: 6px 12px;
      border-radius: 8px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateX(6px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      backdrop-filter: blur(8px);
    }
    .fcw-tooltip::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 6px solid transparent;
      border-left-color: rgba(15,15,20,0.88);
    }
    .fcw-item:hover .fcw-tooltip,
    .fcw-item:focus-within .fcw-tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    /* Base button */
    .fcw-btn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.22s cubic-bezier(.34,1.56,.64,1),
                  filter 0.18s ease,
                  box-shadow 0.18s ease;
      outline: none;
      text-decoration: none;
      flex-shrink: 0;
    }
    .fcw-btn:hover  { transform: scale(1.18); filter: brightness(1.12); }
    .fcw-btn:active { transform: scale(0.94); }
    .fcw-btn:focus-visible {
      outline: 3px solid #fff;
      outline-offset: 3px;
    }

    /* WhatsApp */
    .fcw-btn-wa {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      box-shadow: 0 6px 20px rgba(37,211,102,0.45);
      animation:
        fcw-rise  0.55s cubic-bezier(.34,1.56,.64,1) both,
        fcw-pulse 2.4s 1.2s ease-in-out infinite;
    }

    /* Call */
    .fcw-btn-call {
      background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
      box-shadow: 0 6px 20px rgba(59,130,246,0.45);
      animation:
        fcw-rise      0.55s 0.1s cubic-bezier(.34,1.56,.64,1) both,
        fcw-pulse-call 2.4s 1.4s ease-in-out infinite;
    }

    /* Responsive — slightly smaller on very small screens */
    @media (max-width: 420px) {
      .fcw-container { bottom: 18px; right: 18px; gap: 12px; }
      .fcw-btn       { width: 50px; height: 50px; }
    }
  `;
  document.head.appendChild(style);
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const WhatsAppIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.428a.75.75 0 0 0 .916.948l5.733-1.502A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.822 9.822 0 0 1-5.007-1.367l-.358-.213-3.404.893.908-3.32-.234-.371A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  phoneNumber,
  whatsappMessage = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    injectStyles();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const waHref = whatsappMessage
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://wa.me/${phoneNumber}`;

  const telHref = `tel:+${phoneNumber}`;

  return (
    <div className="fcw-container" role="complementary" aria-label="Contact options">

      {/* WhatsApp */}
      <div className="fcw-item">
        <span className="fcw-tooltip">Chat on WhatsApp</span>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="fcw-btn fcw-btn-wa"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>

      {/* Call */}
      <div className="fcw-item">
        <span className="fcw-tooltip">Call Now</span>
        <a
          href={telHref}
          className="fcw-btn fcw-btn-call"
          aria-label="Call us now"
        >
          <PhoneIcon />
        </a>
      </div>

    </div>
  );
};

export default FloatingContactWidget;