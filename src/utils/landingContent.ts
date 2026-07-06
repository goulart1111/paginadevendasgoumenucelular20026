import type { LucideIcon } from "lucide-react";
import { Bolt, Cpu, Headphones, Shield, Smartphone, Sparkles, Zap } from "lucide-react";

export type Feature = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const features: Feature[] = [
  {
    id: "mobile",
    title: "Android e iOS",
    description:
      "Funciona pelo celular em Android e iPhone, independente da marca ou modelo, usando um fluxo simples e direto.",
    Icon: Smartphone,
  },
  {
    id: "screening",
    title: "Passando em telagem",
    description:
      "Passando tanto em telagem manual quanto em telagem com scanner, sem deixar aquele rastro suspeito no PC.",
    Icon: Shield,
  },
  {
    id: "risk",
    title: "Não dá ban",
    description:
      "Não dá ban global, ban em cidade ou qualquer outro tipo de ban por arquivo baixado no computador.",
    Icon: Zap,
  },
  {
    id: "pvp",
    title: "Feito para PvP",
    description:
      "Ideal para quem gosta de trocar tiro no FiveM, jogar ação, PvP e situações que exigem resposta rápida.",
    Icon: Sparkles,
  },
  {
    id: "pc",
    title: "Nada pesado no PC",
    description:
      "Você não baixa arquivos de xit no computador: o controle fica concentrado no celular, com operação prática.",
    Icon: Cpu,
  },
  {
    id: "cities",
    title: "Funciona em todas as cidades",
    description:
      "Funciona em todas as cidades do FiveM, então você usa o mesmo método sem ficar preso em servidor específico.",
    Icon: Headphones,
  },
];

export type HowStep = {
  id: string;
  title: string;
  description: string;
};

export const howSteps: HowStep[] = [
  { id: "get", title: "Recebe acesso", description: "Após a compra, você recebe o acesso e o guia de instalação." },
  { id: "pair", title: "Pareia celular e PC", description: "Conecta o seu celular ao seu PC e valida o handshake." },
  { id: "play", title: "Abre o FiveM", description: "Inicia o FiveM e usa o menu no celular com feedback em tempo real." },
  { id: "refine", title: "Ajusta e salva", description: "Configura presets e atalhos para acelerar ações do dia a dia." },
];

export type Testimonial = {
  id: string;
  name: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  { id: "1", name: "Cliente", text: "Configuração rápida e o controle pelo celular ficou muito mais prático no dia a dia." },
  { id: "2", name: "Comunidade", text: "A apresentação está clara e o suporte ajudou a ajustar tudo sem enrolação." },
  { id: "3", name: "Jogador", text: "A UI é limpa, responsiva e dá sensação de produto premium, não improviso." },
];

export const compatibilityBadges = [
  { id: "fivem", label: "FiveM", Icon: Bolt },
  { id: "windows", label: "Windows", Icon: Cpu },
  { id: "mobile", label: "Celular", Icon: Smartphone },
  { id: "low", label: "Leve", Icon: Zap },
] as const;
