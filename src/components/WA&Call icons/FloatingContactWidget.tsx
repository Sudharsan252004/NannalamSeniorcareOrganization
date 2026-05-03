import React, { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingContactWidgetProps {
  phoneNumber?: string; 
  whatsappMessage?: string;
  defaultCountryCode?: string; 
}

// ─── Helper: Format phone number ─────────────────────────────────────────────

const formatPhoneNumber = (phone: string, countryCode: string) => {
  // Remove all non-numeric characters
  let cleaned = phone.replace(/\D/g, "");

  // If it's a standard 10-digit number, prepend the country code
  if (cleaned.length === 10) return countryCode + cleaned;
  
  return cleaned;
};

// ─── Inject Styles ───────────────────────────────────────────────────────────

const injectStyles = () => {
  if (document.getElementById("fcw-styles")) return;

  const style = document.createElement("style");
  style.id = "fcw-styles";
  style.textContent = `
    @keyframes fcw-rise {
      0%   { opacity: 0; transform: translateY(40px) scale(0.7); }
      60%  { transform: translateY(-6px) scale(1.05); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fcw-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
      50%       { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
    }
    @keyframes fcw-pulse-call {
      0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.55); }
      50%       { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
    }

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

    .fcw-item {
      position: relative;
      display: flex;
      align-items: center;
    }

    .fcw-tooltip {
      position: absolute;
      right: calc(100% + 12px);
      background: rgba(15,15,20,0.88);
      color: #fff;
      font-size: 13px;
      padding: 6px 12px;
      border-radius: 8px;
      white-space: nowrap;
      opacity: 0;
      transform: translateX(6px);
      transition: 0.2s;
      pointer-events: none;
      font-family: sans-serif;
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

    .fcw-item:hover .fcw-tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    .fcw-btn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .fcw-btn:hover {
      transform: scale(1.15);
      filter: brightness(1.1);
    }

    .fcw-btn-wa {
      background: #25D366;
      animation: fcw-rise 0.5s, fcw-pulse 2.5s infinite;
    }

    .fcw-btn-call {
      background: linear-gradient(135deg, #3B82F6, #1D4ED8);
      animation: fcw-rise 0.5s 0.1s, fcw-pulse-call 2.5s infinite;
    }

    @media (max-width: 420px) {
      .fcw-container { bottom: 18px; right: 18px; }
      .fcw-btn { width: 50px; height: 50px; }
    }
  `;
  document.head.appendChild(style);
};

// ─── Icons ───────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="#fff">
    <path d="M19.11 17.41c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.18.29-.71.93-.87 1.12-.16.18-.32.2-.6.07-.29-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.57-1.95-.16-.29-.02-.44.12-.58.13-.13.29-.34.43-.5.14-.17.18-.29.27-.48.09-.18.04-.34-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.29-.96.94-.96 2.3s.99 2.68 1.13 2.87c.14.18 1.95 2.98 4.72 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.11-.25-.18-.53-.32z"/>
    <path d="M16.01 2.67C8.68 2.67 2.67 8.68 2.67 16c0 2.35.62 4.64 1.8 6.66L2.4 29.6l7.11-1.86c1.94 1.06 4.14 1.62 6.5 1.62 7.33 0 13.34-6.01 13.34-13.34S23.34 2.67 16.01 2.67zm0 24.23c-2.14 0-4.24-.57-6.07-1.65l-.43-.25-4.22 1.1 1.12-4.1-.27-.44c-1.13-1.85-1.73-3.98-1.73-6.16 0-6.5 5.29-11.79 11.79-11.79S27.8 9.9 27.8 16.4s-5.29 11.5-11.79 11.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
  </svg>
);

// ─── Component ───────────────────────────────────────────────────────────────

const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({
  phoneNumber = "9942037837", // Updated number
  whatsappMessage = "Hello! I'd like to inquire about your services.",
  defaultCountryCode = "91",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    injectStyles();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const formattedNumber = formatPhoneNumber(phoneNumber, defaultCountryCode);

  const waHref = `https://wa.me/${formattedNumber}${whatsappMessage ? `?text=${encodeURIComponent(whatsappMessage)}` : ""}`;
  const telHref = `tel:+${formattedNumber}`;

  return (
    <div className="fcw-container">
      <div className="fcw-item">
        <span className="fcw-tooltip">Chat on WhatsApp</span>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="fcw-btn fcw-btn-wa">
          <WhatsAppIcon />
        </a>
      </div>

      <div className="fcw-item">
        <span className="fcw-tooltip">Call Now</span>
        <a href={telHref} className="fcw-btn fcw-btn-call">
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactWidget;