# Fagprøve

```
Kevin Andre Engell
```

## Auto-genererte filer og mapper

```
liste over auto-genererte filer og mapper, mede en kort forklaring av hva de inneholder.
```

-   /node_modules - inneholder alle pakkene som er installert via npm

*   package-lock.json - inneholder informasjon om alle pakkene som er installert via npm
*   package.json - inneholder informasjon om prosjektet og alle pakkene som er installert via npm
*   index.html - React putter selve applikasjonen i div med id="root" i denne filen
*   /src/vite-env.d.ts - refererer til type definisjoner for vite
*   /dist - TypeScript oversetter filene til javascript og legger de i denne mappen
*   /src/routeTree.gen.ts - auto-generert fil som inneholder en liste over alle sidene i applikasjonen

## Hvordan starte prosjektet

-   installer node.js - `https://nodejs.org/en`
-   installer pakker - `npm install`
-   start prosjektet - `npm start`

## Videre utvikling

```
rutiner for videre utvikling av prosjektet
```

1.  Lag en ny fil i `/src/routes/` med navnet på siden - rutene blir automatisk generert basert på filnavnet og hvilken mappe den ligger i, så en fil som heter `src/routes/om-oss.tsx` vil bli tilgjengelig på `localhost:3000/om-oss`. index.tsx blir tiljengeling på `./` av den mappen den ligger i.
2.  lag siden i den nye filen - filen vil automatisk bli generert med en `Route` komponent som tar in innstillinger for siden. selve siden legges i `component`.
3.  lag en navigasjon komponent - Denne skal exporters fra samme filen som siden. navngi den `{Path}Nav` og importer den i `src/components/Nav.tsx`. legg til komponenten i `navItems` listen.
