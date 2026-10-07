// KaSvanify – sangliste
//
// Hver sang skrives som "Kunstner - Titel" – præcis som filnavnet, bare uden .mp3.
// I sangens mappe skal der ligge:
//   "Kunstner - Titel.mp3"   lyden
//   "Kunstner - Titel.jpg"   coveret (.png virker også)
//   "Kunstner - Titel.lrc"   teksten med tider (laves i tap-tilstanden på siden)
// Store og små bogstaver skal passe præcist – GitHub skelner mellem dem.
//
// "grundtekst" er valgfri: en almindelig tekstfil i samlingens mappe,
// som tap-tilstanden kan hente som udgangspunkt for alle sange i samlingen.

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
      "Fræser - Bibliotek og Lynild",
      "Get With It - BFD is in the Air",
      "Hoedown Hobos - Bring the Hooch",
      "Kush Kush - Bare Følg Drømmen",
      "Melankoly - Dreams of Electric Sheep",
      "Rosmarin Klippe - Bare Fødder Dans",
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
      // "Kunstner - Titel",
    ]
  }
];
