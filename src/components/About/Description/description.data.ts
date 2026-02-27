import { calculateAge } from "../../../Utils/date";

export const getDescriptionData = () => {
  const age = calculateAge("2000-05-29");

  return [
    `Nazywam się Michał Pawłowski, mam ${age} lat i jestem absolwentem kierunku
    Informatyka na Uniwersytecie Kazimierza Wielkiego w Bydgoszczy, gdzie uzyskałem
    tytuł Inżyniera. Wcześniej ukończyłem Zespół Szkół Mechanicznych nr 1 w Bydgoszczy,
    zdobywając tytuł Technika Informatyka.`,

    `Obecnie koncentruję się na rozwoju w obszarze frontend developmentu.
    Systematycznie poszerzam swoją wiedzę z zakresu React, TypeScript, nowoczesnego
    CSS oraz dobrych praktyk tworzenia skalowalnych i czytelnych aplikacji webowych.
    Regularnie realizuję projekty indywidualne, w których skupiam się na
    przejrzystej architekturze kodu, reużywalności komponentów oraz optymalizacji wydajności.`,

    `Istotne jest dla mnie nie tylko pisanie działającego kodu, ale również jego
    jakość, czytelność i zgodność ze standardami branżowymi. Dbam o stosowanie zasad
    takich jak DRY, podział odpowiedzialności komponentów oraz logiczną strukturę
    projektu.`,

    `Poza programowaniem interesuję się sprzętem komputerowym oraz branżą gamingową.
    Regularna aktywność fizyczna, w tym trening siłowy, stanowi ważny element mojego
    stylu życia. Sport uczy mnie systematyczności, wytrwałości oraz konsekwencji w
    dążeniu do długoterminowych celów. Moją pasją jest również piłka nożna, którą
    śledzę z dużym zaangażowaniem.`,
  ];
};
