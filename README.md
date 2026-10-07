# KaSvanify

Musikafspiller til Kaspers egne sange – med ring-visualisering, løbende tekst og delelinks.

## Mappestruktur

```
index.html          selve siden
sange.js            listen over samlinger og sange
sange/
  bfd/              BFD-sangene
    Kunstner - Titel.mp3
    Kunstner - Titel.jpg
    Kunstner - Titel.lrc   (teksten – laves på siden)
    grundtekst.txt         (valgfri fælles tekst til tap-tilstanden)
  andet/            andre sange, samme opbygning
```

Filnavnene skal passe præcist med det, der står i `sange.js` – også store og små bogstaver.

## Læg siden på GitHub

1. Opret et nyt **offentligt** repo med navnet `kasvanify`.
2. Upload `index.html`, `sange.js`, `README.md` og mappen `sange` med dine filer (højst 25 MB per fil, når du uploader i browseren).
3. Gå til **Settings → Pages**, vælg **Deploy from a branch**, branch `main` og mappen `/ (root)`, og gem.
4. Efter et minut eller to ligger siden på `https://<dit-brugernavn>.github.io/kasvanify/`.

## Tilføj en sang

1. Læg mp3 og cover i den rigtige mappe under `sange`.
2. Skriv navnet ind i `sange.js` som `"Kunstner - Titel"` (uden .mp3).

## Lav teksten med tap

1. Åbn sangen på siden og tryk på tekst-knappen nederst til venstre.
2. Indsæt teksten – én sunget linje per linje. Skriv `-` på en linje, hvor teksten skal forsvinde (fx en solo).
3. Tryk **Start**, og tryk mellemrum (eller den store knap) hver gang en linje begynder.
   Backspace fortryder. Klik på en linje i listen for at tappe igen fra den.
4. Tryk **Afprøv i afspilleren**. Er teksten lidt for tidlig eller sen, så justér forskydningen.
5. Tryk **Download .lrc**, og læg filen i samme mappe som mp3-filen.

Siden kan også læse `.srt`-filer med samme navn, hvis der ikke er en `.lrc`.

## Delelinks

Knappen med kæden kopierer et link som `…/kasvanify/#homies-er-her`, der åbner siden med den sang valgt.
Modtageren skal selv trykke afspil – browsere tillader ikke, at lyd starter af sig selv.

## Test på egen PC

Dobbeltklik på `index.html` afspiller musikken, men visualisering og tekst virker først, når siden kører fra en webserver.
Enten på GitHub, eller lokalt: åbn en terminal i mappen, kør `python -m http.server`, og gå til `http://localhost:8000`.

Siden er sat til ikke at blive vist i søgemaskiner.
