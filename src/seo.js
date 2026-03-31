const SITE_NAME = "Crimson Cloud Games";
const BASE_URL = "https://crimsoncloudgames.com";
const DEFAULT_IMAGE_PATH = "/social-preview.webp";

function setOrCreateMeta(attrName, key, content) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attrName}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export function setSeoMeta({
  title,
  description,
  path = "/",
  imagePath = DEFAULT_IMAGE_PATH,
  type = "website",
}) {
  const absoluteUrl = new URL(path, BASE_URL).toString();
  const absoluteImageUrl = new URL(imagePath, BASE_URL).toString();

  document.title = title;

  setOrCreateMeta("name", "description", description);
  setOrCreateMeta("property", "og:title", title);
  setOrCreateMeta("property", "og:description", description);
  setOrCreateMeta("property", "og:type", type);
  setOrCreateMeta("property", "og:url", absoluteUrl);
  setOrCreateMeta("property", "og:site_name", SITE_NAME);
  setOrCreateMeta("property", "og:image", absoluteImageUrl);
  setOrCreateMeta("property", "og:image:width", "1200");
  setOrCreateMeta("property", "og:image:height", "630");
  setOrCreateMeta("property", "og:image:alt", "Crimson Cloud Games social preview");

  setOrCreateMeta("name", "twitter:card", "summary_large_image");
  setOrCreateMeta("name", "twitter:title", title);
  setOrCreateMeta("name", "twitter:description", description);
  setOrCreateMeta("name", "twitter:image", absoluteImageUrl);
  setOrCreateMeta("name", "twitter:image:alt", "Crimson Cloud Games social preview");

  setCanonical(absoluteUrl);
}
