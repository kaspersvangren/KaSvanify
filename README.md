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

Læg mp3 og cover (samme navn, `.jpg` eller `.png`) i en mappe under `sange` – så dukker sangen op af sig selv.
En ny mappe under `sange` bliver en ny samling.

Mp3-filer med variabel bitrate bliver automatisk lavet om til fast bitrate (256 kbps) af GitHub et par minutter efter upload
(se fanen **Actions**). Det er nødvendigt, for ellers rammer browseren ved siden af, når man spoler, og teksten kommer forkert.

I `sange.js` kan du bestemme rækkefølgen og give samlingerne pænere navne. Sange, der ikke står der, kommer sidst i alfabetisk orden.

## Lav teksten med tap

1. Åbn sangen på siden, hold fingeren eller musen på KaSvanify-logoet i et sekund, og skriv koden (står i `sange.js` som `TAP_KODE`).
2. Indsæt teksten – én sunget linje per linje. Skriv `-` på en linje, hvor teksten skal forsvinde (fx en solo).
3. Tryk **Start**, og tryk mellemrum (eller den store knap) hver gang en linje begynder.
   Backspace fortryder. Klik på en linje i listen for at tappe igen fra den.
4. Teksten vises i afspilleren med det samme. Er den lidt for tidlig eller sen, så justér med − og + eller skyderen.
5. Tryk **Gem på GitHub**. Første gang på en ny enhed beder siden om en GitHub-nøgle (vejledningen står på siden):
   en fine-grained token med adgang til kun KaSvanify og *Contents: Read and write*. Nøglen gemmes kun i den browser.
   Alternativt: **Download .lrc** og læg filen i samme mappe som mp3-filen.

### Ret timingen på en tekst, der allerede er lagt op

Åbn tap-tilstanden på sangen og tryk **Ret timing**. Klik på en linje for at høre den (sangen starter 3 sek. før),
og tryk TAP/mellemrum, når linjen begynder – kun den linje får en ny tid. Finjustér med − og +, og flyt hele teksten med skyderen. Rettelserne vises med det samme i afspilleren.
Tryk **Gem på GitHub** (eller download den nye `.lrc` og erstat den gamle).

Siden kan også læse `.srt`-filer med samme navn, hvis der ikke er en `.lrc`.

## Tekstvisning

Knappen med T'et nederst til højre skifter mellem rullende tekst og scenevisning, hvor kun den aktuelle linje vises,
og ordene flyver ind og ud. Siden husker valget i browseren.

## Delelinks

Knappen med kæden kopierer et link som `…/kasvanify/#homies-er-her`, der åbner siden med den sang valgt.
Modtageren skal selv trykke afspil – browsere tillader ikke, at lyd starter af sig selv.

## Test på egen PC

Dobbeltklik på `index.html` afspiller musikken, men visualisering og tekst virker først, når siden kører fra en webserver.
Enten på GitHub, eller lokalt: åbn en terminal i mappen, kør `python -m http.server`, og gå til `http://localhost:8000`.

Siden er sat til ikke at blive vist i søgemaskiner.
