# LATAM-AIgile-project-delivery — Reference Points para Construção

> Baseado na análise do portfolio anterior (portfolioNearshoreWesIA/Angular) + dados reais de Microsoft Clarity + Google Analytics.

---

## 1. DIAGNÓSTICO DO PORTFOLIO ANTERIOR

### Problemas críticos identificados

| Métrica | Valor | Diagnóstico |
|---|---|---|
| Scroll depth | 24,36% | Usuários **não chegam ao conteúdo** abaixo do fold |
| Pages/session | 1,14 | Experiência de **página única** — multi-page não converte |
| LCP | 3,2s | **Lento** — perde posição no Google, aumenta bounce |
| CLS | 0,2 | Layout shift visível — prejudica UX móvel |
| Retenção | 13,22% | 86,78% nunca voltam — **nenhum hook de retorno** |
| Sessões bot | 27 | Monitorar para não distorcer métricas |
| Dead clicks | 3,05% | Elementos que parecem clicáveis mas não são |
| Quick backs | 3 sessões | Algumas pessoas saem imediatamente — headline fraco? |

### O que funcionou
- **"Baixar"** foi o evento mais clicado (8 cliques) — CTA de download/lead funciona
- **"Entre em contato"** (7 cliques) — contato converte
- LinkedIn é a principal fonte de tráfego (≈70 sessões = ~24% do total)
- Mobile representa **~21%** (ChromeMobile + MobileSafari) — não ignorar

---

## 2. PERFIL REAL DO USUÁRIO

### Localização
- **EUA domina**: 18 usuários ativos (Flint Hill, Des Moines) → foco real é mercado norte-americano/LATAM remoto
- Brasil: 3 usuários
- India: 2 usuários

### Canal de entrada
- **Direct**: 28 sessões (74,5%) — pessoas que já conhecem, voltam direto
- **Organic Social (LinkedIn)**: 4 sessões — campanha ativa converte pouco
- **Referral**: 1 sessão

### Implicação para o novo projeto
> O usuário chega pelo LinkedIn, tem menos de 60 segundos de atenção, acessa mais via Chrome desktop, e vai direto ao ponto. A primeira tela precisa responder em **< 1s**: quem é, o que faz, como contratar.

---

## 3. STACK DO NOVO PROJETO (já definida)

```
Next.js 15 (App Router)
React 19
TypeScript
Tailwind CSS v4
Framer Motion
```

### Vantagens sobre Angular (portfolio anterior)
- **SSR/SSG nativo** → resolve LCP 3.2s → meta: LCP < 1.8s
- Sem hydration pesado → CLS tende a zero
- Deploy em Vercel → CI/CD automático, preview por PR
- Bundle menor → mobile carrega mais rápido

---

## 4. ESTRUTURA DE SEÇÕES RECOMENDADA

Baseado em: o que usuário clica + scroll depth baixo → tudo que importa deve estar **acima ou próximo do fold**.

```
/ (single page, scroll suave)
├── #home       → Hero — nome, cargo, CTA "Let's Connect" + CTA "Ver Portfolio"
├── #about      → 3-4 linhas + métricas de prova social (14+ anos, 80M+ tx/dia...)
├── #services   → Cards: Agile Delivery / DevSecOps / Data Engineering / AI Workflows
├── #portfolio  → Cases: Serasa Experian, Amdocs, fintech — com números
├── #blog       → 3 artigos recentes (Agile, AI, Nearshore) — link para LinkedIn
└── #contact    → Email + LinkedIn + Localização + Formulário simples
```

### Rotas extras para considerar (baseado no portfolio Angular)
```
/nearshore-proposal  → Proposta white-label para leads B2B
/business-profile    → Versão PDF-friendly para enviar por email
```

---

## 5. PONTOS DE MELHORIA PRIORITÁRIOS

### Performance (resolver antes de qualquer feature)
- [ ] Usar `next/image` para todas as imagens — resolve LCP e CLS
- [ ] Fontes com `display: swap` e preload
- [ ] Evitar layout shift no Sidebar (posição `fixed`, não `absolute`)
- [ ] Medir com Lighthouse antes de fazer PR → meta: score > 90

### Conversão (baseado nos eventos mais clicados)
- [ ] CTA "Baixar" deve ser visível no hero — o mais clicado no portfolio
- [ ] CTA "Entre em contato" deve aparecer em pelo menos 2 pontos da página
- [ ] Adicionar ancora de scroll suave para não perder usuário no meio da página
- [ ] Newsletter ou lead magnet para aumentar retenção (atual: 13%)

### Mobile (21% do tráfego)
- [ ] Testar breakpoints: `sm:` (640px) e `md:` (768px) são os críticos
- [ ] Sidebar já está implementada — garantir que fecha ao clicar em link
- [ ] Touch targets mínimo 44x44px (WCAG 2.1)

### Rastreamento (sem dados = sem decisão)
- [ ] Configurar Google Analytics 4 com eventos:
  - `click_cta_connect`
  - `click_download`
  - `scroll_50` / `scroll_75`
  - `section_view` (com IntersectionObserver)
- [ ] Manter Microsoft Clarity para heatmap
- [ ] Adicionar `gtag` no `layout.tsx` (modelo já existe no Sidebar.tsx)

---

## 6. IDENTIDADE VISUAL (manter consistência)

```
Cor primária:   #0A2540  (navy escuro — já usado)
Cor de ação:    #3B82F6  (blue-500 Tailwind)
Fundo claro:    #F8FAFC  (slate-50)
Fundo branco:   #FFFFFF
Texto escuro:   #111827  (gray-900)
Destaque:       #93C5FD  (blue-300 — subtítulos)
```

### Tipografia sugerida
- Headings: `font-extrabold tracking-tight` (padrão Tailwind atual)
- Body: `text-base leading-relaxed`
- Provas sociais: `font-mono` ou `tabular-nums` para números

---

## 7. DIFERENÇA DE ABORDAGEM: PORTFOLIO vs LATAM-AIgile

| Aspecto | portfolioNearshoreWesIA (Angular) | LATAM-AIgile (Next.js) |
|---|---|---|
| Foco | Perfil pessoal amplo | Delivery + Agile + AI |
| Idioma | EN + PT-BR | EN (primary), PT opcional |
| Público-alvo | Recrutadores BR e global | Empresas LATAM/EUA buscando Delivery Manager |
| CTA principal | "Contact" | "Let's Connect" + "Download CV" |
| Páginas | Multi-route (SPA) | Single page + sub-rotas opcionais |
| Prova social | Métricas técnicas (SLA, tx/dia) | Casos de negócio (ROI, time-to-market) |
| SEO | Fraco (GitHub Pages Angular) | Forte (Next.js SSG + Vercel) |

---

## 8. PRÓXIMOS PASSOS SUGERIDOS (ordem de prioridade)

1. **Completar seção #about** com prova social (aproveitar `ALL_PROOF_ITEMS` do Angular)
2. **Seção #services** — 4 cards com ícone + título + 1 linha
3. **Seção #portfolio** — 3 cases reais com números
4. **Configurar GA4** no `layout.tsx`
5. **Medir performance** com `npm run build` + Lighthouse
6. **Deploy no Vercel** (substituir GitHub Pages — resolve LCP)
7. **Rota `/nearshore-proposal`** para leads B2B diretos do LinkedIn
8. **A/B test no CTA**: "Let's Connect" vs "Hire Me" vs "Schedule a Call"

---

---

## 10. JANELA DE ATENÇÃO DO TECH RECRUITER — TIMING + TRACKING MAP

> Baseado nos dados reais: 54s de tempo ativo, 1,5min total, 24% scroll depth, LinkedIn como porta de entrada.

---

### 10.1 LINHA DO TEMPO DO RECRUITER (o que acontece nos 54 segundos)

```
TEMPO     COMPORTAMENTO                    O QUE A TELA PRECISA ENTREGAR
────────  ───────────────────────────────  ──────────────────────────────────────────────
0 – 3s    Primeiro olhar (above the fold)  Nome · Cargo · Badge "Available" · Foto
3 – 8s    Lê o headline                    Tagline direta: o que resolve, para quem
8 – 15s   Varre as métricas (proof strip)  3 números de impacto: anos · escala · resultado
15 – 25s  Procura o CV                     Botão "Download CV" visível SEM scroll
25 – 35s  Procura contato                  Email / LinkedIn / WhatsApp visíveis SEM scroll
35 – 45s  Rola levemente (se engajado)     About: 2-3 linhas, sem parágrafos longos
45 – 54s  Decisão: baixa, contata ou sai   CTA de reforço (floating ou sticky)
> 54s     Saiu ou está muito engajado      Tracking de scroll 50%/75% para identificar
```

**Regra de ouro:** tudo que converte (CV + contato) deve estar no **primeiro viewport** (≤ 100vh).
O recruiter **não vai rolar** para encontrar o botão de download.

---

### 10.2 CONTEÚDO PRIORITÁRIO — O QUE DIZER E EM QUANTO TEMPO

| Posição na tela | Conteúdo | Limite |
|---|---|---|
| **Linha 1** (hero) | Nome completo + cargo atual | 1 linha |
| **Linha 2** | Badge: `🟢 Available · Remote · UTC-3` | 1 linha |
| **Linha 3** | Tagline: resultado, não descrição | 1-2 linhas |
| **Proof strip** | 3 números rotacionando: `14+ yrs` · `80M+ tx/day` · `99.9% SLA` | sempre visível |
| **CTA primário** | `⬇ Download CV (ATS)` | botão grande, acima do fold |
| **CTA secundário** | `📅 Schedule a Call` | botão outline, ao lado |
| **Contatos rápidos** | LinkedIn · Email · WhatsApp | ícones com link, no hero ou sticky |

**Tagline modelo** (direto, sem adjetivos):
```
"I ship products on time. 14 years · 80M+ transactions/day · 3 continents."
```

---

### 10.3 MAPA DE EVENTOS — MICROSOFT CLARITY

Configurar **Smart Events** e **Funis** no Clarity:

```
FUNIL: "Recruiter Journey"
  Passo 1: page_view          → chegou na página
  Passo 2: proof_strip_seen   → IntersectionObserver no proof strip (5s+ visível)
  Passo 3: cv_download        → clicou em Download CV
  OU
  Passo 3: contact_click      → clicou em Email / LinkedIn / WhatsApp

SMART EVENTS para heatmap:
  - Botão "Download CV"       → tag: data-clarity-event="cv_download"
  - Botão "Schedule a Call"   → tag: data-clarity-event="schedule_call"
  - Links de contato (todos)  → tag: data-clarity-event="contact_[canal]"
  - Proof strip items         → tag: data-clarity-unmask="True" (já usado no Angular)
  - Seção #about              → tag: data-clarity-event="section_about"
  - Seção #portfolio          → tag: data-clarity-event="section_portfolio"

CONFIGURAR NO CLARITY:
  Dashboard → Filtros → URL: wesleyzilva.vercel.app (ou domínio final)
  Heatmap por dispositivo: Desktop separado de Mobile
  Gravar sessões com: scroll < 25% E tempo < 30s  → identificar bounces
```

---

### 10.4 MAPA DE EVENTOS — GOOGLE ANALYTICS 4

```typescript
// Implementar no layout.tsx (script gtag já existente no Sidebar.tsx)

// ─── EVENTOS DE CONVERSÃO (marcar como Key Events no GA4) ───
cv_download          → categoria: "lead" | label: "ats_word"
schedule_call        → categoria: "lead" | label: "calendly_or_mailto"
contact_whatsapp     → categoria: "lead" | label: "whatsapp"
contact_linkedin     → categoria: "lead" | label: "linkedin"
contact_email        → categoria: "lead" | label: "email"

// ─── EVENTOS DE ENGAJAMENTO ───
scroll_25            → IntersectionObserver ou scroll event listener
scroll_50            → idem — linha crítica: quem passa daqui é recruiter engajado
scroll_75            → idem — muito engajado
section_view_about   → IntersectionObserver na section #about
section_view_services→ idem #services
section_view_portfolio→ idem #portfolio
proof_strip_rotate   → cada vez que os números rodam (medir interesse)
time_on_page_30s     → setTimeout(30000) → dispara se ainda na página
time_on_page_60s     → setTimeout(60000) → recruiter super engajado

// ─── PARÂMETROS UTM PARA LINKEDIN ───
// Usar em todos os links do LinkedIn:
?utm_source=linkedin&utm_medium=social&utm_campaign=recruiter&utm_content=profile

// Exemplo de link para colocar no LinkedIn:
https://[dominio]/?utm_source=linkedin&utm_medium=social&utm_campaign=recruiter
```

**Marcar como Key Events no GA4:**
- `cv_download` → principal conversão
- `contact_whatsapp` → contato direto
- `schedule_call` → maior intenção

---

### 10.5 IMPLEMENTAÇÃO — HOOK DE TRACKING (reutilizável)

```typescript
// src/hooks/useTracking.ts
'use client';

export function trackEvent(
  eventName: string,
  params?: Record<string, string>
) {
  // Google Analytics
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
  // Microsoft Clarity (automático pelo SDK, mas pode reforçar)
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName);
  }
}

// USO:
// trackEvent('cv_download', { event_category: 'lead', event_label: 'ats_word' })
// trackEvent('contact_whatsapp', { event_category: 'lead' })
```

---

### 10.6 COMPONENTE STICKY CTA — PARA NÃO PERDER O RECRUITER

```
Aparecer após 8s OU scroll > 30% (o que vier primeiro):

  ┌──────────────────────────────────────────────────┐  ← fixed bottom
  │  ⬇ Download CV    📅 Schedule a Call    ✕        │  z-index: 100
  └──────────────────────────────────────────────────┘

Lógica:
  - Mostrar: (tempo ≥ 8s || scroll ≥ 30%) && !cv_downloaded && !contact_clicked
  - Ocultar: se usuário já clicou em qualquer CTA (localStorage flag)
  - Tracking: trackEvent('sticky_cta_shown') e trackEvent('sticky_cta_click', {label})
```

---

### 10.7 CHECKLIST DE VALIDAÇÃO ANTES DO DEPLOY

```
[ ] Abrir em janela anônima (simula recruiter novo)
[ ] Cronometrar: em 8s é possível ler nome + cargo + 1 prova social?
[ ] Botão Download CV visível SEM rolar — em desktop E mobile
[ ] Clicar em Download CV → verificar evento no GA4 DebugView
[ ] Clicar em LinkedIn → verificar evento no GA4 DebugView
[ ] Scroll até 50% → verificar evento scroll_50 no GA4
[ ] Clarity: confirmar sessão gravada e heatmap ativo
[ ] Lighthouse: Performance ≥ 90, LCP < 1.8s, CLS < 0.1
[ ] Testar no iPhone (Safari) e Android Chrome — CTAs acessíveis por polegar
[ ] Meta title: "Wesley Zilva · Agile Delivery Manager · LATAM Remote"
[ ] Meta description: max 155 chars com cargo + disponibilidade + CTA
```

---

*Seção adicionada em: 2026-06-02 | Fonte: Clarity (295 sessões · 54s ativo · 24% scroll) + GA4*

---

## 9. MAPA DE ARTEFATOS — POSIÇÕES E TAMANHOS (baseado no portfolio Angular)

> Use como guia direto para implementar as seções no Next.js. Valores extraídos do SCSS/HTML real.

---

### 9.1 HEADER (navbar fixa)

```
position: fixed | top: 0 | left: 0 | width: 100%
height: ~68px (padding 0.85rem 2rem)
z-index: 1000
background: rgba(13,27,42,0.95) + backdrop-filter: blur(10px)
border-bottom: 1px solid #415A77

  ┌─────────────────────────────────────────────────────┐  ← 68px h
  │  [Brand: WesleyWes]    [Home] [About] [Projects]   │
  │  [tag: Nearshore·Agile]         [Services] [Loc]   │
  └─────────────────────────────────────────────────────┘

Brand name:  font-size 1.3rem | font-weight 700
Brand tag:   font-size 0.7rem | uppercase | letter-spacing 0.08em
Nav links:   font-size 0.9rem | font-weight 500 | gap: 2rem
             → @media max-width:900px → gap: 1.25rem | font 0.82rem

⚠️ body precisa de padding-top: 68px (110px no mobile)
```

---

### 9.2 HERO SECTION

```
min-height: 85vh
padding: 6rem 2rem 0
background: linear-gradient(135deg, #0D1B2A 0%, #1B263B 40%, #0a1628 100%)
+ overlay radial-gradient cyan 8% + magenta 6%
+ grid-lines 60x60px (opacity 0.04)

Layout interno (flex, gap: 4rem, max-width: 1200px, flex-wrap: wrap):

  ┌──────────────────────────────────────────────────────────┐
  │  [FOTO 260x320px]    [TEXTO HERO]                        │
  │                       Badge: "Available for nearshore"   │
  │                       H1: nome (hero-name)               │
  │                       P: cargo/título                    │
  │                       P: tagline (A/B test)              │
  │                       Tags: Remote | UTC-3 | Travel      │
  │                       [Btn Download CV] [Btn Schedule]   │
  │                       [Btn Share]                        │
  └──────────────────────────────────────────────────────────┘
  ┌──────────────────────────────────────────────────────────┐
  │  PROOF STRIP (bottom, full-width)                        │
  │  padding: 1rem 2rem 1.5rem | border-top: 1px cyan 12%   │
  │  Itens: font 0.85rem | strong: 1rem bold cyan            │
  │  Separador: · (cyan 0.3 opacity)                         │
  └──────────────────────────────────────────────────────────┘

BOTÕES (hero-actions):
  btn-secondary (Download CV): outline style — Word icon
  btn-primary (Schedule):      fill style — calendar icon | min-h 44px
  btn-share:                   ghost pill — share icon

FOTO:
  width: 260px | height: 320px
  border-radius: deve ser aplicado (não definido aqui, mas visual sugere ~12px)
```

---

### 9.3 SEÇÕES INTERNAS (About, Projects, Services...)

```
Padrão de todas as seções (.section-wrapper):
  padding: 6rem 2rem            ← desktop
  padding: 3.5rem 1rem          ← @media max-width:768px
  padding: 2.5rem 0.75rem       ← @media max-width:480px
  max-width inner: 1200px (centralizado com margin: 0 auto)

Cabeçalho de seção (.section-label):
  ── LINHA ──  LABEL UPPERCASE  ── LINHA ──
  font-size: 0.8rem | letter-spacing: 0.15em | cor: cyan (#4CC9F0)
  linhas: max-width 80px | height 1px | opacity 0.4

Heading principal (.section-heading):
  font-size: clamp(1.8rem, 4vw, 2.8rem)
  text-align: center | margin-bottom: 3.5rem
  linha de acento (.accent-sub): clamp(0.9rem, 1.8vw, 1.25rem) | cyan 60%

About lead text (.about-lead):
  max-width: 920px | margin: 0 auto 2rem
  font-size: 1rem | line-height: 1.7 | cor: rgba(224,225,221,0.78)

Botões de ação dentro de seção (.personal-about-link):
  min-height: 44px | padding: 0.55rem 0.9rem
  border-radius: 999px (pill)
  background: rgba(cyan,0.1) | border: 1px solid rgba(cyan,0.3)
```

---

### 9.4 CONTACT SECTION

```
Layout: cards em grid/flex, centralizados
Heading: "Let's build your team and your product together"
Sub: responde em até 24h

Cards de contato (.contact-card) — 5 cards:
  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ 📞 Phone │ │ 💬 WA    │ │ ✉ Email  │ │ in Link  │ │ GitHub   │
  │ label    │ │ label    │ │ label    │ │ label    │ │ label    │
  │ value    │ │ value    │ │ value    │ │ value    │ │ value    │
  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘

Cada card tem:
  cc-label: nome do canal
  cc-value: dado de contato
  Todos com data-gtm-event para tracking
  target="_blank" rel="noopener" nos externos

Dados reais:
  Phone/WA: +55 (16) 99721-2966
  Email:    wesley.zilva@gmail.com
  LinkedIn: /in/wesleyzilva
  GitHub:   /wesleyzilva
```

---

### 9.5 FOOTER BAR

```
padding: 1.25rem 2rem
border-top: 1px solid #415A77
background: #1B263B (cor-fundo-card)
max-width inner: 1200px

Layout (flex, space-between, flex-wrap, gap: 0.75rem):

  ┌─────────────────────────────────────────────────────────┐  ← ~60px
  │  © 2026 Wesley...    [Call][Email][WA][LinkedIn][GitHub] │  font 0.85rem
  │                              [👁 visits][branch][clock] │  font 0.82rem
  └─────────────────────────────────────────────────────────┘

Links: inline-flex | gap: 0.4rem | font 0.85rem | cor texto/55%
WhatsApp hover: #25D366
Meta (visits/build): cor texto/35% | cyan nos ícones
```

---

### 9.6 SIDEBAR (novo projeto — já implementado)

```
Hambúrguer: fixed | top: 4 | left: 4 | z-index: 50
            w-11 h-11 (44x44px) | bg #0A2540 | rounded-md
            3 barras: w-6 h-0.5 bg-white gap-1.5

Overlay: z-index: 40 | bg-black opacity 0.5 (ao abrir)
         AnimatePresence: opacity 0→0.5 em 0.25s

Sidebar: motion.nav | slide da esquerda
         Itens: Home | About | Services | Portfolio | Blog | Contact
         Links disparam gtag event (menu click)
         Fecha com: Escape key / click overlay / click no item
         Body overflow: hidden quando aberto
```

---

### 9.7 TOKENS DE DESIGN — EQUIVALÊNCIA Angular → Tailwind

| CSS Var Angular | Valor | Equivalente Tailwind |
|---|---|---|
| `--cor-fundo` | `#0D1B2A` | `bg-[#0D1B2A]` / atual `#0A2540` |
| `--cor-texto` | `#E0E1DD` | `text-gray-100` / `text-white` |
| `--cor-destaque-primaria` | `#4CC9F0` | `text-cyan-400` / `border-cyan-400` |
| `--cor-destaque-secundaria` | `#F72585` | `text-pink-500` |
| `--cor-borda` | `#415A77` | `border-slate-600` |
| `--cor-fundo-card` | `#1B263B` | `bg-[#1B263B]` / `bg-slate-800` |
| `--cor-sucesso` | `#25D366` | `text-[#25D366]` |
| Font primária | Poppins | `font-['Poppins']` no globals.css |
| Font secundária | Inter | `font-['Inter']` (padrão Next.js) |
| `html font-size` | `17px` | definir no `globals.css` |

---

### 9.8 BREAKPOINTS DE REFERÊNCIA

| Breakpoint | Valor | O que muda |
|---|---|---|
| Mobile S | 480px | padding seção: 2.5rem 0.75rem |
| Mobile M | 768px | padding seção: 3.5rem 1rem / body padding-top: 110px |
| Tablet | 900px | nav: gap menor, brand-tag some |
| Desktop | 1200px | max-width content |
| Wide | 1400px | max-width header |

---

*Atualizado em: 2026-06-02 | Fonte: SCSS/HTML real do portfolioNearshoreWesIA*
