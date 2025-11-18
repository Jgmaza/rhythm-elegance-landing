export interface Formato {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  musicos: string;
  instrumentos: string[];
  idealPara: string[];
}

export const formatos: Formato[] = [
  {
    id: "intimo",
    nombre: "Formato Íntimo",
    subtitulo: "Boleros & Son Cubano",
    descripcion: "Ambiente elegante y sofisticado para espacios íntimos. Nuestro formato más selecto, perfecto para crear atmósferas románticas y exclusivas.",
    musicos: "1 a 4 músicos",
    instrumentos: [
      "Voz principal",
      "Guitarra o Piano",
      "Bajo acústico o eléctrico",
      "Percusión menor (opcional)"
    ],
    idealPara: [
      "Restaurantes exclusivos",
      "Cenas privadas",
      "Eventos corporativos íntimos",
      "Celebraciones especiales"
    ]
  },
  {
    id: "salsa",
    nombre: "Formato Salsa",
    subtitulo: "Para Bailar",
    descripcion: "La energía de la salsa en formato compacto. Ideal para hacer bailar a tus invitados con el sabor auténtico de la música tropical.",
    musicos: "Alrededor de 6 músicos",
    instrumentos: [
      "Voz principal y coros",
      "Piano o Teclado",
      "Bajo eléctrico",
      "Timbal y Congas",
      "Bongó y percusión menor",
      "Trompeta o Saxofón (opcional)"
    ],
    idealPara: [
      "Rumbas y fiestas privadas",
      "Bares y discotecas",
      "Eventos sociales",
      "Celebraciones bailables"
    ]
  },
  {
    id: "crossover",
    nombre: "Formato Crossover",
    subtitulo: "Full Show",
    descripcion: "Nuestra orquesta completa con repertorio versátil. Desde salsa clásica hasta merengue, porro, cumbia y música latina contemporánea. Un espectáculo musical completo.",
    musicos: "7 a 8 músicos",
    instrumentos: [
      "Voz principal y coros (2-3 voces)",
      "Piano/Teclado",
      "Bajo eléctrico",
      "Timbal, Congas y Bongó",
      "Sección de vientos (Trompeta, Trombón, Saxofón)",
      "Percusión menor completa"
    ],
    idealPara: [
      "Eventos corporativos grandes",
      "Bodas y celebraciones especiales",
      "Festivales y conciertos",
      "Fiestas privadas de alto nivel"
    ]
  }
];
