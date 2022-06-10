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
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1654842155/eerie-dark-castle-illustration_lyitjc.jpg",
    alt: '',
    title: "Trailer of Morin is on!",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 1,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/v1654629576/PngItem_263872_ys4eji.png",
    alt: '',
    title: "Elia - mage of Lunteria.",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 2,
    category: "Community",
    img: "https://res.cloudinary.com/yaif/image/upload/v1654841766/london-2184805_1280_oqqgfr.jpg",
    alt: '',
    title: "New event in London.",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 3,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1024/v1654631396/Pngtree_game_volcano_advertising_background_979719_iedhcm.jpg",
    alt: '',
    title: "Patch 20.14 teaser.",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 4,
    category: "Community",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1654783190/pov-of-young-man-excited-about-his-wining-while-playing-shooter-games-on-stream_jjb6pb.jpg",
    alt: '',
    title: "LukFnt win this season.",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 5,
    category: "Media",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1654843551/pawel-kadysz-CuFYW1c97w8-unsplash_erzayz.jpg",
    alt: '',
    title: "Are you ready?",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 6,
    category: "Community",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1654782834/low-angle-man-playing-videogame_1_ywwzud.jpg",
    alt: '',
    title: "New serwer incomming.",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  },
  {
    id: 7,
    category: "Update",
    img: "https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1654782198/wizard-dark-dungeon-illustration_yvbdai.jpg",
    alt: '',
    title: "Lunteria map now available!",
    short_desc: lorem.generateSentences(1),
    long_desc: lorem.generateSentences(6)
  }
];