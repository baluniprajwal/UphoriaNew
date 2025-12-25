// Raw data provided
const RAW_CATEGORIES = [
  { id: "1", name: "Music", slug: "music", description: "Romantic gigs and acoustic nights." },
  { id: "2", name: "Art", slug: "art", description: "Couples workshops and gallery walks." },
  { id: "3", name: "Dance", slug: "dance", description: "Salsa nights and ballroom dancing." },
  { id: "4", name: "Fashion", slug: "fashion", description: "Style events for the power couple." },
  { id: "5", name: "Drama", slug: "drama", description: "Theater dates and opera nights." },
  { id: "6", name: "Gaming", slug: "gaming", description: "Co-op challenges and arcade dates." },
  { id: "7", name: "Literary", slug: "literary", description: "Poetry readings and book launches." },
  { id: "8", name: "Photography", slug: "photography", description: "Capture memories together." },
  { id: "9", name: "Astronomy", slug: "astronomy", description: "Stargazing under the night sky." },
];

const EVENTS_BY_CATEGORY: any = {
  music: [
    {
      id: "music-aaroh",
      title: "Aaroh",
      date: "Feb 02, 2026",
      image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/aaroh-indian-solo-singing-uphoria-2026-bennett-university-bu-greater-noida-1607108",
    },
    {
      id: "music-bars-mayhem",
      title: "Bars Mayhem",
      date: "Feb 03, 2026",
      image: "https://images.unsplash.com/photo-1525362081669-2b476495da99?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/bars-mayhem-solo-rap-battle-uphoria-2026-bennett-university-bu-greater-noida-1607126",
    },
    {
      id: "music-rockmania",
      title: "Rockmania",
      date: "Feb 03, 2026",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/rockmania-battle-of-bands-uphoria-2026-bennett-university-bu-greater-noida-1607215",
    },
    {
      id: "music-raaga-refusion",
      title: "Raaga Refusion",
      date: "Feb 04, 2026",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/raaga-refusion-duo-instrumental-uphoria-2026-bennett-university-bu-greater-noida-1607217",
    },
    {
      id: "music-reverb",
      title: "Reverb",
      date: "Feb 04, 2026",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/reverb-western-solo-singing-uphoria-2026-bennett-university-bu-greater-noida-1607211",
    },
  ],
  art: [
    {
      id: "art-graffiti-groove",
      title: "Graffiti Groove",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/graffiti-uphoria-2026-bennett-university-bu-greater-noida-1607284",
    },
    {
      id: "art-doodle-dash",
      title: "Doodle Dash",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/doodling-uphoria-2026-bennett-university-bu-greater-noida-1607295",
    },
    {
      id: "art-sketch-sprint",
      title: "Sketch Sprint",
      date: "Feb 07, 2026",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/sketching-uphoria-2026-bennett-university-bu-greater-noida-1607289",
    },
    {
      id: "art-mandala-magic",
      title: "Mandala Magic",
      date: "Feb 07, 2026",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/mandala-art-uphoria-2026-bennett-university-bu-greater-noida-1607294",
    },
    {
      id: "art-pixel-play",
      title: "Pixel Play",
      date: "Feb 08, 2026",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/pixel-play-graphic-design-competition-uphoria-2026-bennett-university-bu-greater-noida-1607280",
    },
  ],
  dance: [
    {
      id: "dance-nrityakala",
      title: "Nrityakala",
      date: "Feb 04, 2026",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/nrityakala-group-dance-uphoria-2026-bennett-university-bu-greater-noida-1607298",
    },
    {
      id: "dance-groove-wars",
      title: "Groove Wars",
      date: "Feb 08, 2026",
      image: "https://images.unsplash.com/photo-1545959588-316158b53272?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/groove-wars-dance-competition-uphoria-2026-bennett-university-bu-greater-noida-1607276",
    },
    {
      id: "dance-chandrakala",
      title: "Chandrakala",
      date: "Feb 05, 2026",
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/chandrakala-uphoria-2026-bennett-university-bu-greater-noida-1607144",
    },
    {
      id: "dance-kala-sangam",
      title: "Kala Sangam",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1516475429286-465d815a0df4?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/kala-sangam-duet-dance-uphoria-2026-bennett-university-bu-greater-noida-1607300",
    },
    {
      id: "dance-beat-blitz",
      title: "Beat Blitz",
      date: "Feb 07, 2026",
      image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/beat-blitzsolo-dance-uphoria-2026-bennett-university-bu-greater-noida-1607482",
    },
    {
      id: "dance-freestyle-frenzy",
      title: "Freestyle Frenzy",
      date: "Feb 08, 2026",
      image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/freestyle-frenzy-freestyle-dance-battle-uphoria-2026-bennett-university-bu-greater-noida-1607264",
    },
  ],
  fashion: [
    {
      id: "fashion-supernova",
      title: "Supernova",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/supernova-uphoria-2026-bennett-university-bu-greater-noida-1607304",
    },
    {
      id: "fashion-mr-ms-uphoria",
      title: "Mr. & Ms. Uphoria",
      date: "Feb 07, 2026",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/mr-and-miss-uphoria-26-talent-hunt-uphoria-2026-bennett-university-bu-greater-noida-1607302",
    },
  ],
  drama: [
    {
      id: "drama-aagaaz",
      title: "Aagaaz",
      date: "Feb 04, 2026",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/aagaz-street-play-uphoria-2026-bennett-university-bu-greater-noida-1607153",
    },
    {
      id: "drama-abhinay",
      title: "Abhinay",
      date: "Feb 05, 2026",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/abhinay-monoact-uphoria-2026-bennett-university-bu-greater-noida-1607157",
    },
    {
      id: "drama-rangmanch",
      title: "Rangmanch",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1503095392269-2d609236f675?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/rangmanch-stage-play-uphoria-2026-bennett-university-bu-greater-noida-1607169",
    },
    {
      id: "drama-improvleela",
      title: "Improvleela",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/ipmrovleela-improv-uphoria-2026-bennett-university-bu-greater-noida-1607172",
    },
  ],
  gaming: [
    {
      id: "gaming-bgmi",
      title: "Battleground Blitz",
      date: "Feb 08, 2026",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/bgmi-uphoria-2026-bennett-university-bu-greater-noida-1607449",
    },
    {
      id: "gaming-fifa",
      title: "FIFA Showdown",
      date: "Feb 09, 2026",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/fifa-showdownfifa-uphoria-2026-bennett-university-bu-greater-noida-1607460",
    },
    {
      id: "gaming-tekken",
      title: "Tekken Showdown",
      date: "Feb 10, 2026",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/tekken-showdowntekken-uphoria-2026-bennett-university-bu-greater-noida-1607465",
    },
  ],
  literary: [
    {
      id: "lit-mehfil-e-alfaz",
      title: "Mehfil-e-Alfaz",
      date: "Feb 03, 2026",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/events/mehfil-e-alfaaz-poetry-hindi-uphoria-2026-bennett-university-bu-greater-noida-1607228",
    },
    {
      id: "lit-comedy-clash",
      title: "Comedy Clash",
      date: "Feb 06, 2026",
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/comedy-clash-uphoria-2026-bennett-university-bu-greater-noida-1607252",
    },
    {
      id: "lit-bardic-battles",
      title: "Bardic Battles",
      date: "Feb 04, 2026",
      image: "https://images.unsplash.com/photo-1474377207190-a7d8b3334068?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/bardic-battles-poetry-english-uphoria-2026-bennett-university-bu-greater-noida-1607223",
    },
    {
      id: "lit-just-a-minute",
      title: "Just A Minute",
      date: "Feb 05, 2026",
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/just-a-minute-speak-for-a-minute-uphoria-2026-bennett-university-bu-greater-noida-1607240",
    },
  ],
  photography: [
    {
      id: "photo-picture-perfect",
      title: "Picture Perfect",
      date: "Feb 07, 2026",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/picture-perfect-photography-competition-uphoria-2026-bennett-university-bu-greater-noida-1607180",
    },
    {
      id: "photo-reel-rush",
      title: "Reel Rush",
      date: "Feb 09, 2026",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/reel-rush-reel-making-uphoria-2026-bennett-university-bu-greater-noida-1607184",
    },
    {
      id: "photo-uphoria-uncut",
      title: "Uphoria Uncut",
      date: "Feb 10, 2026",
      image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=600",
      registerUrl: "https://unstop.com/p/uphoria-uncut-vlogging-uphoria-2026-bennett-university-bu-greater-noida-1607306",
    },
  ],
  astronomy: [],
};

// Styling Constants
const ROTATIONS = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
const COLORS = [
  "bg-uphoria-cyan", 
  "bg-uphoria-pink", 
  "bg-uphoria-yellow", 
  "bg-uphoria-purple", 
  "bg-uphoria-pink", 
  "bg-uphoria-cyan",
  "bg-uphoria-yellow",
  "bg-uphoria-purple",
  "bg-uphoria-cyan"
];
// Random placeholder images for the Category Cards themselves
const CATEGORY_IMAGES = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600", // Music
    "https://images.unsplash.com/photo-1704806940833-9777a8f52c28?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Art
    "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=600", // Dance
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600", // Fashion
    "https://plus.unsplash.com/premium_photo-1684923604408-940b962a701a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Drama
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600", // Gaming
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600", // Literary
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600", // Photography
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", // Astronomy
];

export const categories = RAW_CATEGORIES.map((c, i) => ({
  id: parseInt(c.id),
  title: c.name,
  category: c.description.split(" ")[0] + " Events", 
  image: CATEGORY_IMAGES[i % CATEGORY_IMAGES.length],
  rotate: ROTATIONS[i % ROTATIONS.length],
  color: COLORS[i % COLORS.length],
  slug: c.slug
}));

export const getEventsForCategory = (categoryId: number) => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];

  const rawEvents = EVENTS_BY_CATEGORY[category.slug] || [];

  return rawEvents.map((event: any) => ({
    id: event.id,
    title: event.title,
    description: `Join us for ${event.title}! Experience the vibes at Uphoria 2026.`,
    time: "TBA",
    venue: "Bennett Univ.",
    price: "Register",
    date: event.date,
    image: event.image,
    registerUrl: event.registerUrl
  }));
};
