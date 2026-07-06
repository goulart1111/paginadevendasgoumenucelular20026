import { ExternalLink, ImageIcon, PlayCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const feedbackImages = [
  {
    id: "print-1",
    label: "Print de cliente",
    src: "https://i.imgur.com/8AAQJHb.jpeg",
  },
  {
    id: "print-2",
    label: "Resultado no suporte",
    src: "https://i.imgur.com/k4sEKrS.jpeg",
  },
];

const feedbackVideos = [
  {
    id: "video-1",
    label: "Feedback em vídeo",
    embedUrl: "https://drive.google.com/file/d/1clxxhyw4-0h-eNGz8ykaDrhpPQXBDH4j/preview",
    viewUrl: "https://drive.google.com/file/d/1clxxhyw4-0h-eNGz8ykaDrhpPQXBDH4j/view?usp=drive_link",
  },
  {
    id: "video-2",
    label: "Prova real",
    embedUrl: "https://drive.google.com/file/d/1IYRsYBMsqvYicWa8MOgCnDh_iIPVeT6l/preview",
    viewUrl: "https://drive.google.com/file/d/1IYRsYBMsqvYicWa8MOgCnDh_iIPVeT6l/view?usp=drive_link",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="prova" className="relative border-y border-white/10">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="FEEDBACKS"
            title="Olha quem já viu funcionando"
            description="Prints e vídeos reais para você ver antes de chamar no suporte."
          />
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 lg:grid-cols-2">
          {feedbackImages.map((item, idx) => (
            <article
              key={item.id}
              data-reveal
              className="glass group overflow-hidden rounded-3xl p-3 transition hover:bg-white/6"
              style={{ transitionDelay: `${Math.min(idx * 70, 220)}ms` }}
            >
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ImageIcon className="h-4 w-4 text-cyan-200/90" />
                  {item.label}
                </div>
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  print
                </span>
              </div>
              <a href={item.src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl bg-black/35">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full max-h-[520px] w-full object-contain transition duration-300 group-hover:scale-[1.015]"
                />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {feedbackVideos.map((item, idx) => (
            <article
              key={item.id}
              data-reveal
              className="glass overflow-hidden rounded-3xl p-3 transition hover:bg-white/6"
              style={{ transitionDelay: `${Math.min((idx + feedbackImages.length) * 70, 260)}ms` }}
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <PlayCircle className="h-4 w-4 text-cyan-200/90" />
                  {item.label}
                </div>
                <a
                  href={item.viewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  abrir <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl bg-black/35">
                <iframe
                  title={item.label}
                  src={item.embedUrl}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full border-0"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
