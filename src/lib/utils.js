export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(value, locale = "es-CO", options) {
  const date = new Date(value);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...options,
  });
}

export function slugify(text = "") {
  return text
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
