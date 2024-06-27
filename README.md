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
*   /vite-env.d.ts - refererer til type definisjoner for vite
*   /dist - TypeScript oversetter filene til javascript og legger de i denne mappen

## Hvordan starte prosjektet

-   installer node.js - `https://nodejs.org/en`
-   installer pakker - `npm install`
-   start prosjektet - `npm start`

som standard vil prosjektet starte på `localhost:3000`.<br>
hvis porten er i bruk vil prosjektet spørre om den skal åpne på en annen port.

## Videre utvikling

```
rutiner for videre utvikling av prosjektet
```

1.  Lag en ny mappe i `/routes/` med navnet på siden du vil lage. - undersider skal ligge i mappen til siden den ligger under.

2.  lag en ny fil i mappen med navnet også på siden du vil lage.

3.  lag siden i den nye filen - den skal være en `React.FC` komponent. - denne skal inneholde _minst_ en `<DocumentationComp/>` komponent, og alltid, kun en `<CustomProps/>` komponent helt på bunn.

4.  lag en fil i samme mappen med navnet `nav.tsx`

5.  i `nav.tsx` lag en ny navigasjons komponent som linker til siden. - denne skal være en `React.FC` komponent som tar in en `NavProps` fra `/components/nav`, husk å bruke til `children` elementet. Navngi funksjonen `{komponentnavn}Nav`

6.  i `/components/nav.tsx` legg til den nye navigasjons komponenten i `navItems` listen. - hvis den skal være en undermeny, legg den til inni en den menyen den skal være under.

### oppdatere til ny versjon av FRNo-react

    ```
    hvordan oppdatere til ny versjon av FRNo-react, gjøres kun hvis det er store / ødeleggende endringer i FRNo-react. eles kan en bare oppdatere dokumentasjonen.
    ```

1. lag en ny mappe under `routes/prevVersions` med navnet på versjonen du vil oppdatere fra (kun de to første numerene).

2. kopier alle filer og mapper fra `routes`, utenat `routes/prevVersions`, og flytt de til den nye mappen.

3. oppdater alle importer i de kopierte filene til å peke til riktig sted.

4. oppdater `routes.tsx` i de kopierte filene fra å bruke `createBrowserRouter()` til å kun eksportere en `RouteObject[]`

5. oppdater alle `nav.tsx` filene til å peke til riktig sted.

6. installer den gamle versjonen av FRNo-react, `npm install frno-react_{versjonNummer}:{@npm/@git}{linkTilGammelVersjon}`

7. oppdater de kopierte filene til å bruke den gamle versjonen av FRNo-react.

8. oppdater FRNo-react til nyeste versjon.
    - hvis FRNo-react er på NPM - `npm install frno-react@latest --save-exact` - dette vil installere den nyeste versjonen av FRNo-react, og låse versjonen.
    - hvis FRNo-react er på GitHub - `npm install {linkTilNyesteVersjon}`
