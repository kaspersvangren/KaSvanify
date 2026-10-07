// KaSvanify – sangliste
//
// Siden finder selv sangene: Hver mappe under "sange" er en samling, og hver mp3-fil i den er en sang.
// Upload bare "Kunstner - Titel.mp3" og et cover med samme navn (.jpg eller .png), så dukker sangen op.
// Teksten ("Kunstner - Titel.lrc") laves i tap-tilstanden på siden.
//
// Listen nedenfor er valgfri og bestemmer kun:
//   - samlingernes navn og rækkefølge (mapper, der ikke står her, kommer bagefter med mappenavnet)
//   - sangenes rækkefølge (sange, der ikke står her, kommer sidst i alfabetisk orden)
//   - "grundtekst": tekstfil i samlingens mappe, som tap-tilstanden bruger som udgangspunkt
//     (en fil, der hedder grundtekst.txt, bliver også fundet af sig selv)

// Kode til tap-tilstanden (hold på KaSvanify-logoet i et sekund for at åbne den).
// Skift den til din egen. Sæt den til "" for at slå koden fra.
// Bemærk: Filen er offentlig, så koden holder kun nysgerrige ude – ikke nogen, der leder.
const TAP_KODE = "5600";

const SAMLINGER = [
  {
    id: "bfd",
    navn: "BFD",
    mappe: "sange/bfd",
    grundtekst: "grundtekst.txt",
    sange: [
      "B-Fucking-D - Homies er Her",
      "Babushka - Driftige Drenge",
      "BiBleX - RoBoBoys",
      "Duusin - Bare ForDi",
      "Elevator - Blikstille",
      "Fræser - Bibliotek og Lynild",
      "Get With It - BFD is in the Air",
      "Hoedown Hobos - Bring the Hooch",
      "Kush Kush - Bare Følg Drømmen",
      "Melankoly - Dreams of Electric Sheep",
      "Rosmarin Klippe - Bare Fødder Dans",
      "Rub-a-duck-duck - Echoton",
      "Sons of Depression - Walls on Fire",
      "The Peasants - Lo-Fi Barok",
      "The Voiceovers - Beats, Feats, Deeds"
    ]
  },
  {
    id: "andet",
    navn: "Andre sange",
    mappe: "sange/andet",
    sange: [
      "ViLmLs - Superbruger"
    ]
  }
];
