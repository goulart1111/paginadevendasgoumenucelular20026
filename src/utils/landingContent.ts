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
    title: "Menos exposição",
    description:
      "Pensado para um uso discreto em verificações visuais, telagens manuais e conferências de tela.",
    Icon: Shield,
  },
  {
    id: "risk",
    title: "Risco reduzido",
    description:
      "Fluxo feito para reduzir exposição e evitar instalações suspeitas no PC, diminuindo chances de punição.",
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
    title: "Todas as cidades",
    description:
      "Projetado para funcionar em servidores e cidades do FiveM, mantendo o uso simples em diferentes ambientes.",
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

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  note: string;
  highlighted?: boolean;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Start",
    price: "R$ 0,00",
    note: "Apresentação / demo",
    includes: ["Visão geral do método", "FAQ e compatibilidade", "Contato direto no suporte"],
    ctaLabel: "Falar no suporte",
    ctaHref: "#contato",
  },
  {
    id: "pro",
    name: "Pro",
    price: "A combinar",
    note: "Plano mais vendido",
    highlighted: true,
    includes: ["Acesso ao método", "Guia de setup", "Updates e otimizações", "Suporte para instalação"],
    ctaLabel: "Comprar agora",
    ctaHref: "#contato",
  },
  {
    id: "reseller",
    name: "Revenda",
    price: "A combinar",
    note: "Para comunidades",
    includes: ["Condições para revenda", "Onboarding dedicado", "Acompanhamento contínuo"],
    ctaLabel: "Negociar",
    ctaHref: "#contato",
  },
];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "what",
    question: "O que exatamente é esse remote control?",
    answer:
      "É um método que permite você controlar o menu do FiveM pelo celular. A ideia é tirar o peso de ficar alternando janela/tecla e deixar o fluxo mais rápido.",
  },
  {
    id: "setup",
    question: "É difícil de configurar?",
    answer:
      "Não. O setup é guiado e pensado para ser direto. Se surgir qualquer travamento, você chama no suporte e a gente ajusta junto.",
  },
  {
    id: "risk",
    question: "Tem risco de ban?",
    answer:
      "Qualquer uso de menu pode envolver riscos, dependendo do servidor, regras e comportamento do anticheat. A landing page existe para te orientar e reduzir o uso incorreto, mas não existe risco zero.",
  },
  {
    id: "mobile",
    question: "Funciona em Android e iOS?",
    answer: "A compatibilidade pode variar por versão. Fala no suporte e a gente confirma com seu modelo/versão antes da compra.",
  },
  {
    id: "support",
    question: "Como funciona o suporte e updates?",
    answer:
      "Você recebe um canal de suporte para setup e dúvidas. Updates dependem de mudanças do FiveM e do próprio método, mas a ideia é manter sempre operacional.",
  },
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
