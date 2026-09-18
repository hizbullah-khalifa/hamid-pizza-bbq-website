export const SITE = {
  name: "Hamid Pizza",
  tagline: "& Bar BQ Platter House",
  phoneDisplay: "0306-1157111",
  phoneTel: "+923061157111",
  whatsapp: "923061157111",
  address: "Near Police Chowki, Raheem Abad, Rawalpindi",
  addressShort: "Police Chowki Rd, Raheem Abad",
  hours: "Open daily · 12 PM – 12 AM",
  mapsUrl: "https://maps.google.com/?q=Raheem+Abad+Police+Chowki+Rawalpindi",
  whatsappOrderMessage: (dish) =>
    `Salam! I'd like to place an order at Hamid Pizza & Bar BQ Platter House${dish ? ` for *${dish}*` : ""}. Please confirm my order.`,
};

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const waChatLink = `https://wa.me/${SITE.whatsapp}`;