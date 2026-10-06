import { getGuidePageSchema } from "../structuredData";
import reolinkRtspContent, {
  reolinkRtspFaqEn,
  reolinkRtspFaqFr,
  reolinkRtspFaqDe,
} from "../reolinkRtspData";

export function getReolinkRtspPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/reolink-rtsp-url/",
    content: reolinkRtspContent,
    faqEn: reolinkRtspFaqEn,
    faqFr: reolinkRtspFaqFr,
    faqDe: reolinkRtspFaqDe,
    about: [
      { "@type": "Thing", name: "RTSP" },
      { "@type": "Organization", name: "Reolink" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
