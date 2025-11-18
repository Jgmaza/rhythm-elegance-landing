export interface Testimonio {
  id: string;
  nombre: string;
  cargo: string;
  empresa: string;
  tipoEvento: string;
  cita: string;
}

export const testimonios: Testimonio[] = [
  {
    id: "1",
    nombre: "María Fernanda Gutiérrez",
    cargo: "Gerente General",
    empresa: "Restaurante El Patio Colonial",
    tipoEvento: "Música en vivo para restaurante",
    cita: "Contratamos el formato íntimo para nuestras noches de fin de semana y la respuesta de nuestros clientes ha sido extraordinaria. La elegancia y profesionalismo de la banda elevó completamente la experiencia de nuestros comensales. Sin duda, seguiremos trabajando con ellos."
  },
  {
    id: "2",
    nombre: "Carlos Andrés Mendoza",
    cargo: "Director de Eventos",
    empresa: "Corporación Empresarial del Valle",
    tipoEvento: "Evento corporativo anual",
    cita: "Para nuestro evento anual de fin de año contratamos el formato crossover y fue todo un éxito. La versatilidad del repertorio mantuvo a todos bailando toda la noche. Música de calidad, excelente presentación y una coordinación impecable. Totalmente recomendados."
  },
  {
    id: "3",
    nombre: "Isabella Ramírez",
    cargo: "Organizadora de Bodas",
    empresa: "Eventos Elegantes",
    tipoEvento: "Recepción de boda",
    cita: "He trabajado con muchas bandas a lo largo de mi carrera, pero esta orquesta realmente marca la diferencia. Para la boda de una de mis clientas más exigentes, ofrecieron un show completo que combinó romanticismo y energía de manera perfecta. Todos los invitados quedaron encantados."
  }
];
