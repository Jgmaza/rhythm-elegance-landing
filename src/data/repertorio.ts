export interface RepertorioCategoria {
  categoria: string;
  canciones: string[];
}

export const repertorio: RepertorioCategoria[] = [
  {
    categoria: "Salsa",
    canciones: [
      "El Cantante - Héctor Lavoe",
      "Aguanile - Willie Colón",
      "Idilio - Willie Colón",
      "Pedro Navaja - Rubén Blades",
      "Vivir Mi Vida - Marc Anthony",
      "La Murga - Willie Colón",
      "Llorarás - Oscar D'León",
      "El Gran Varón - Willie Colón",
      "Sin Poderte Hablar - Willie Colón",
      "Anacaona - Cheo Feliciano"
    ]
  },
  {
    categoria: "Merengue",
    canciones: [
      "Suavemente - Elvis Crespo",
      "A Pedir Su Mano - Juan Luis Guerra",
      "La Bilirrubina - Juan Luis Guerra",
      "El Costo de la Vida - Juan Luis Guerra",
      "Ojalá Que Llueva Café - Juan Luis Guerra",
      "Propuesta Indecente - Romeo Santos",
      "Obsesión - Aventura",
      "El Tiburón - Proyecto Uno",
      "Abusadora - Wilfrido Vargas"
    ]
  },
  {
    categoria: "Crossover / Otros Ritmos",
    canciones: [
      "La Pollera Colorá - Wilson Choperena (Porro)",
      "El Africano - Wilfrido Vargas (Cumbia)",
      "Caballo Viejo - Simón Díaz (Joropo)",
      "Moliendo Café - Hugo Blanco (Son)",
      "Cali Pachanguero - Grupo Niche (Salsa)",
      "La Gota Fría - Carlos Vives (Vallenato)",
      "Baila Me - Gipsy Kings (Rumba Flamenca)",
      "Bailando - Enrique Iglesias (Pop Latino)",
      "Danza Kuduro - Don Omar (Kuduro/Reggaeton)",
      "Waka Waka - Shakira (Pop/Cumbia)"
    ]
  }
];
