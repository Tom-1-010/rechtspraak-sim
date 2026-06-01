# Strafzaken dataset — Rechtbank Rotterdam

Deze map bevat een speelbare dataset met 200 fictieve, realistisch opgebouwde strafzaken voor de simulator.

## Doel

De zaken zijn bedoeld voor een Nederlandse rechtspraak-simulator waarin de speler als rechter dossiers beoordeelt, zittingsvragen stelt, bewijs weegt en een straf of vrijspraak motiveert.

## Regio

Alle zaken zijn afgestemd op het arrondissement Rotterdam en plaatsen in de regio, zoals Rotterdam, Schiedam, Vlaardingen, Maassluis, Capelle aan den IJssel, Barendrecht, Ridderkerk, Spijkenisse, Hellevoetsluis, Brielle en Goeree-Overflakkee.

## Bewijsvariatie

Niet iedere zaak is bedoeld om tot een veroordeling te leiden. De dataset bevat zaken met:

- `sterk` bewijs
- `voldoende` bewijs
- `twijfelachtig` bewijs
- `onvoldoende` bewijs

Zaken met onvoldoende of twijfelachtig bewijs zijn bewust opgenomen, zodat vrijspraak, twijfel, alternatieve scenario's en motiveringsproblemen speelbaar zijn.

## Bestand

- `rotterdam-200-strafzaken.js`

Dit bestand zet `window.SIM_DATA` met 200 speelbare zaken, maatregelen en categorieën.
