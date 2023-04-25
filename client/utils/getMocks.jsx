let productos = [
  {
    id: "1",
    code: "IMPORT02",
    categoria: "IMPORT",
    name: "02 | BRASIL NATUR",
    description:
      "Los granos de este café 100% arábica producidos a 1200 mts de altura, provienen de las mejores granjas cafeteras de Brasil, específicamente localizadas en lo alto de las montañas de Cerrado Mineiro en el estado de Minas Gerais, sinónimo de excelencia por su clima templado y suelos fértiles para la producción de café de especialidad.",
    notes: "Combinación de chocolate amargo y leche, almendras y caramelo.",
    price: 100
  },
  {
    id: "2",
    code: "IMPORT03",
    categoria: "IMPORT",
    name: "03 | ITALIA BLEND03 | ITALIA BLEND",
    description:
      "Se compone de distintas variedades de Arábica, seleccionadas en las mejores cosechas del mundo. De Brasil a Etiopía, de Colombia a Guatemala e India. Tostado por los Maestros cafeteros Italianos.Se compone de distintas variedades de Arábica, seleccionadas en las mejores cosechas del mundo. De Brasil a Etiopía, de Colombia a Guatemala e India. Tostado por los Maestros cafeteros Italianos.",
    notes: "",
    price: 100
  },
  {
    id: "3",
    code: "IMPORT06",
    categoria: "IMPORT",
    name: "06 | COLOMBIA GUANES DARK",
    description:
      "Puro origen, cultivado en suelo arenoso. Luego de que el café es recogido por las manos laboriosas de hombres y mujeres en una apartada región de Colombia en el departamento de Santander, los granos seleccionados son llevados a lomo de mula.",
    notes: "",
  },
  {
    id: "4",
    code: "IMPORT07",
    categoria: "IMPORT",
    name: "07 | FAMILIA SELECTION",
    description:
      "La riqueza de los suelos de la región, sumada a las condiciones climáticas y al trabajo de los caficultores, da sabores cítricos y frutales apetecidos en los 5 continentes. Detrás de cada bolsa de café que sale de Valle de Cauca hay un proceso de una o varias familias que han construido la vida entre las montañas.",
    notes: "",
    price: 100
  },
  {
    id: "5",
    code: "IMPORT08",
    categoria: "IMPORT",
    name: "08 | GUATEMALA SELECTION",
    description:
      "El origen de este café proviene de la alta región no volcánica de Huehuetenango, que permite el cultivo de café en altitudes extremas cuyo resultado son granos con una rica e intensa acidez y cuerpo medio",
    notes: "",
    price: 100
  },
  {
    id: "6",
    code: "IMPORT09",
    categoria: "IMPORT",
    name: "09 | EL PORTEÑO",
    description:
      "Este Café es perfecto para tomar en espresso. Con su cremosidad y simplicidad se puede convertir en tu café favorito de todos los días.",
    notes: "",
    price: 100
  },
  {
    id: "7",
    code: "IMPORT10",
    categoria: "IMPORT",
    name: "10 | ETIOPIA SELECTION",
    description:
      "Los suelos volcánicos de la región, forman un ecosistema ideal para elaborar un café de gran calidad con ligera acidez",
    notes: "",
    price: 100
  },
  {
    id: "8",
    code: "LAVIRG01",
    categoria: "LA VIRGINIA",
    name: "SUTIL N°5",
    description:
      "Suave y aterciopelado, este café se deja descubrir por su aroma, su blend balanceado y su sabor perfecto.",
    notes: "",
    price: 100
  },
  {
    id: "9",
    code: "LAVIRG02",
    categoria: "LA VIRGINIA",
    name: "EQUILIBRADO N°7",
    description:
      "Combina la potencia de su aroma con un sabor equilibrado y una redondez exquisita.",
    notes: "",
    price: 100
  },
  {
    id: "10",
    code: "LAVIRG03",
    categoria: "LA VIRGINIA",
    name: "INTENSO N°9V",
    description:
      "Un particular perfil a tostación le confiere a este blend un sabor intenso que perdura en boca, ideal para los conocedores y amantes del café con personalidad. ",
    notes: "",
    price: 100
  },
];

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};
