import { getGuidePageSchema } from "../structuredData";
import reolinkRtspContent, {
  reolinkRtspFaqEn,
  reolinkRtspFaqFr,
} from "../reolinkRtspData";

export function getReolinkRtspPageSchema(lang) {
  return getGuidePageSchema(lang, {
    path: "/reolink-rtsp-url/",
    content: reolinkRtspContent,
    faqEn: reolinkRtspFaqEn,
    faqFr: reolinkRtspFaqFr,
    about: [
      { "@type": "Thing", name: "RTSP" },
      { "@type": "Organization", name: "Reolink" },
      { "@type": "SoftwareApplication", name: "Gladys Assistant" },
    ],
  });
}
