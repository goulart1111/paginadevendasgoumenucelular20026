## 1. Desenho de Arquitetura
```mermaid
flowchart LR
  U["Usuário (Desktop/Mobile)"] --> FE["Frontend (React + Vite)"]
  FE --> R["Roteamento (React Router)"]
  FE --> UI["UI (Tailwind + CSS)"]
  FE --> M["Animações (CSS / Motion opcional)"]
  FE --> C["Conteúdo (JSON/TS local)"]
  FE --> EXT["Links Externos (Checkout / Discord / WhatsApp)"]
```

## 2. Descrição de Tecnologias
- Frontend: React@18 + TypeScript + vite
- Estilos: tailwindcss@3 + CSS custom (variáveis, efeitos, keyframes)
- Roteamento: react-router-dom
- Animações:
  - Base: CSS (keyframes, transitions, scroll-reveal via IntersectionObserver)
  - Opcional: framer-motion (se necessário para orquestrações mais complexas)
- Qualidade: eslint + prettier (se presentes no template), assets otimizados
- Backend: Nenhum (landing page estática)
- Dados: conteúdo em arquivo local (ex.: arrays TS/JSON para features/FAQ/pricing)
- Deploy: Vercel (build estático do Vite)

## 3. Definição de Rotas
| Rota | Finalidade |
|------|------------|
| / | Landing page (seções + CTA + navegação por âncora) |
| /termos | Termos de uso |
| /privacidade | Política de privacidade |

## 4. Definições de API (se houver backend)
Não aplicável (sem backend).

## 5. Diagrama de Arquitetura de Servidor (se houver backend)
Não aplicável (sem backend).

## 6. Modelo de Dados (se aplicável)
### 6.1 Definição do Modelo de Conteúdo (Local)
O site usa “modelos” locais apenas para renderizar seções.

```mermaid
erDiagram
  FEATURE {
    string id
    string titulo
    string descricao
    string icone
  }
  FAQ_ITEM {
    string id
    string pergunta
    string resposta
  }
  PRICING_PLAN {
    string id
    string nome
    string preco
    string destaque
    string[] inclui
    string ctaLabel
    string ctaHref
  }
```

### 6.2 Data Definition Language (DDL)
Não aplicável (sem banco de dados).
