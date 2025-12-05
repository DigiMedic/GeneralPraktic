<h1 align="center">General Praktic</h1>
<p align="center">Webová prezentace pro lékařskou praxi MUDr. Ruth Gratclové</p>
<p align="center">
  <a href="https://github.com/DigiMedic/GeneralPraktic/blob/main/LICENSE.txt">
    <img src="https://img.shields.io/badge/license-Apache-blue.svg" />
  </a>
</p>

### O projektu

Moderní webová aplikace pro lékařskou praxi **General Praktic s.r.o.** v Brně a Těšanech. Web poskytuje pacientům snadný přístup k informacím o ordinacích, ordinačních hodinách, poskytovaných službách a možnost online objednání.

### Funkce

- **Informační stránky**
  - Hlavní stránka s aktuálními oznámeními
  - Detailní ordinační hodiny pro obě ordinace (Brno Jugoslávská, Těšany)
  - Přehled zaměření a poskytovaných služeb
  - Ceník lékařských výkonů nehrazených pojišťovnou

- **Kontakt a navigace**
  - Kontaktní formulář
  - Interaktivní mapa s lokací ordinace
  - Kompletní kontaktní informace

- **Online objednání**
  - Integrace s rezervačním systémem
  - Rychlý přístup k objednání z jakékoliv stránky

- **Responzivní design**
  - Optimalizováno pro desktop, tablet i mobilní zařízení
  - Moderní a čistý design odpovídající lékařské praxi

### Technologie

- **React 19** s TypeScript
- **Vite** pro rychlý vývoj a build
- **Mantine UI** - moderní React komponentová knihovna
- **React Router 7** pro navigaci
- **CSS Modules** pro stylování

### Instalace a spuštění

1. **Naklonujte repozitář**
```bash
git clone https://github.com/DigiMedic/GeneralPraktic.git
cd GeneralPraktic
```

2. **Nainstalujte závislosti**
```bash
npm install
```

3. **Spusťte vývojový server**
```bash
npm run dev
```

Aplikace běží na `http://localhost:5173/`

### Build pro produkci

```bash
npm run build
```

Build vytvoří optimalizované soubory v adresáři `dist/`.

### Testování

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Struktura projektu

```
GeneralPraktic/
├── src/
│   ├── components/      # Sdílené komponenty (Header, Footer)
│   ├── pages/
│   │   └── gp/         # Stránky General Praktic
│   │       ├── HomePage.tsx
│   │       ├── OrdinacniHodiny.tsx
│   │       ├── ZamereniCenik.tsx
│   │       ├── Kontakt.tsx
│   │       └── Objednani.tsx
│   ├── App.tsx         # Hlavní komponenta aplikace
│   ├── Router.tsx      # Konfigurace routování
│   └── main.tsx        # Vstupní bod aplikace
├── docs/               # Dokumentace a specifikace
├── index.html          # HTML šablona
└── package.json
```

### Deployment

Aplikace je připravena pro deployment na platformách jako:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### Kontakt

**General Praktic s.r.o.**
MUDr. Ruth Gratclová

**Ordinace Brno:**
Jugoslávská 13, Brno
Tel: +420 545 241 051

**Ordinace Těšany:**
Tel: +420 733 584 749

Email: generalpraktic@seznam.cz
Web: https://www.generalpraktic.cz

### License

Apache 2.0 - see [LICENSE.txt](LICENSE.txt)

---

### Původní projekt

Tento projekt je založen na [Foo Medical](https://github.com/medplum/foomedical) boilerplate od Medplum týmu, který byl přizpůsoben pro potřeby lékařské praxe General Praktic.
