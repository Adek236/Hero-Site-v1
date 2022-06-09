import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// lorem.generateWords(1);
// lorem.generateSentences(5);
// lorem.generateParagraphs(7);

export const heroes = [
  {
    id: 1,
    name: 'Skull',
    desc: [
      lorem.generateSentences(5),
      lorem.generateSentences(10),
      lorem.generateSentences(12),
      lorem.generateSentences(7)
    ],
    img: 'https://res.cloudinary.com/yaif/image/upload/v1628780124/asddfss_axyukr.png',
    alt: '',
    avatar: 'https://res.cloudinary.com/yaif/image/upload/v1654722531/zzz_gfoinl.png'
  },
  {
    id: 2,
    name: 'Mooti',
    desc: [
      lorem.generateSentences(5),
      lorem.generateSentences(10),
      lorem.generateSentences(12),
      lorem.generateSentences(7)
    ],
    img: 'https://res.cloudinary.com/yaif/image/upload/v1628775909/mag_jpizbv.png',
    alt: '',
    avatar: 'https://res.cloudinary.com/yaif/image/upload/v1654722531/fgf_gh3imn.png'
  },
  {
    id: 3,
    name: 'Vulo',
    desc: [
      lorem.generateSentences(5),
      lorem.generateSentences(10),
      lorem.generateSentences(12),
      lorem.generateSentences(7)
    ],
    img: 'https://res.cloudinary.com/yaif/image/upload/c_lpad,h_1024,w_900/v1628777914/gaa_zlmopr.png',
    alt: '',
    avatar: 'https://res.cloudinary.com/yaif/image/upload/v1654722531/sdsa_xxd2eu.png'
  },
  {
    id: 4,
    name: 'Lai',
    desc: [
      lorem.generateSentences(5),
      lorem.generateSentences(10),
      lorem.generateSentences(12),
      lorem.generateSentences(7)
    ],
    img: 'https://res.cloudinary.com/yaif/image/upload/c_lpad,h_1027,w_550/v1628770841/asdd_bdppme.png',
    alt: '',
    avatar: 'https://res.cloudinary.com/yaif/image/upload/v1654722531/sz_x0ip82.png'
  },
  {
    id: 5,
    name: 'Thaan',
    desc: [
      lorem.generateSentences(5),
      lorem.generateSentences(10),
      lorem.generateSentences(12),
      lorem.generateSentences(7)
    ],
    img: 'https://res.cloudinary.com/yaif/image/upload/c_lpad,h_1027/v1654630658/ge_hyq0sc.png',
    alt: '',
    avatar: 'https://res.cloudinary.com/yaif/image/upload/v1654722531/zs_yispkt.png'
  }
];

export const news = [
  {
    id: 0,
    category: "Media",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1024/v1654631396/Pngtree_game_volcano_advertising_background_979719_iedhcm.jpg",
    alt: '',
    title: "New epic trailer",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 1,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/v1654629576/PngItem_263872_ys4eji.png",
    alt: '',
    title: "New character Elia",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 2,
    category: "Community",
    img: "https://res.cloudinary.com/yaif/image/upload/v1652096363/game-console-6603120_640_uvktla.jpg",
    alt: '',
    title: "New event in London",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 3,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/v1652096363/game-console-6603120_640_uvktla.jpg",
    alt: '',
    title: "New character Elia",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 4,
    category: "Media",
    img: "https://res.cloudinary.com/yaif/image/upload/v1652096363/game-console-6603120_640_uvktla.jpg",
    alt: '',
    title: "New epic trailer",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 5,
    category: "Community",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1024/v1654631396/Pngtree_game_volcano_advertising_background_979719_iedhcm.jpg",
    alt: '',
    title: "New event in London",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 6,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/v1654629576/PngItem_263872_ys4eji.png",
    alt: '',
    title: "New character Elia",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 7,
    category: "Media",
    img: "https://res.cloudinary.com/yaif/image/upload/v1652096363/game-console-6603120_640_uvktla.jpg",
    alt: '',
    title: "New epic trailer",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  }
];