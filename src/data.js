// Central content + media for Vedanta by Vaishno Group
// Authentic renders/photos extracted from the official brochure live in /public/brochure
const B = (name) => `/brochure/${name}.jpg`;
const A = (name) => `/brochure/amenities/${name}.png`;

export const BROCHURE = {
  estateAerial: B("estate-aerial"),
  villaTwilight: B("villa-twilight"),
  villaDay: B("villa-day"),
  greatRoom: B("great-room"),
  livingFireplace: B("living-fireplace"),
  bedroomStone: B("bedroom-stone"),
  bedroomSuite: B("bedroom-suite"),
  conservatory: B("conservatory-lounge"),
  kitchen: B("kitchen"),
  barLounge: B("bar-lounge"),
  forestMist: B("forest-mist"),
  floorGround: B("floor-ground"),
  floorFirst: B("floor-first"),
  floorSecond: B("floor-second"),
  amenitiesFern: "/brochure/amenities/fern-background.jpg",
  amenitiesSpread: "/brochure/amenities/amenities-grid-1.jpg",
};

export const MEDIA = {
  heroVideo: "/video/vedanta-hero.mp4",
  heroMountains: BROCHURE.estateAerial,
  pineForest: BROCHURE.forestMist,
  mistyForest: BROCHURE.forestMist,
  villaExterior1: BROCHURE.villaTwilight,
  villaExterior2: BROCHURE.villaDay,
  livingRoom1: BROCHURE.greatRoom,
  livingRoom2: BROCHURE.livingFireplace,
  jacuzzi1: BROCHURE.conservatory,
  jacuzzi2: BROCHURE.bedroomSuite,
  yoga: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=1600&q=80",
  spa: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
  sunrise: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=80",
  nightSky: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80",
  fog: BROCHURE.forestMist,
  snowValley: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=2000&q=80",
  bonfire: "https://images.unsplash.com/photo-1475619690928-c99d5b968d3c?auto=format&fit=crop&w=1600&q=80",
  library: BROCHURE.conservatory,
  interiorDetail: BROCHURE.bedroomSuite,
  breakfast: BROCHURE.kitchen,
  springMeadow: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=2000&q=80",
  monsoon: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2000&q=80",
  testimonialsBg:
    "https://framerusercontent.com/images/30qBObg3Exl6kMntd6rzuTX2d8.png?width=1024&height=1024",
};

export const PHILOSOPHY = [
  { title: "Clean Air", text: "Cool, pine-scented mountain air, a long way from the city." },
  { title: "Silence", text: "Not empty silence — the kind filled with birdsong and wind." },
  { title: "Time", text: "Unhurried hours that belong to you and the people you brought." },
  { title: "Space", text: "Room to spread out, wander off, and lose the whole afternoon." },
];

export const SEASONS = [
  { key: "summer-adventure", id: "summer", label: "Summer", img: "/Homepage/Hip Hip Hurray Adventure Park.jpg", text: "Cool 20°C days, apple orchards in bloom, and endless golden evenings on the deck.", cta: "Explore Summer >" },
  { key: "summer-helipad", id: "summer", label: "Summer", img: "/Homepage/Helipad kufri.webp", text: "Clear mountain days invite long afternoons of adventure beneath the Himalayan sky.", cta: "Explore Summer >" },
  { key: "winter-shimla", id: "winter", label: "Winter", img: "/Homepage/Shimla City.webp", text: "Snowfall blankets the pines. Fireside afternoons and crystalline mountain silence.", cta: "Explore Winter >" },
  { key: "spring-mahindra", id: "spring", label: "Spring", img: "/Homepage/MAHINDRA-kufri.jpeg", text: "Rhododendrons ignite the hills. Meadows awaken in soft, deliberate colour.", cta: "Explore Spring >" },
  { key: "monsoon-ridge", id: "monsoon", label: "Monsoon", img: "/Homepage/The Ridge Mall Road.webp", text: "Mist drifts through the valley. The forest breathes deep, green and alive.", cta: "Explore Monsoon >" },
];

export const NATURE = [
  { title: "Slow Mornings", img: MEDIA.sunrise, text: "Coffee, cold air, and a sky that takes its time." },
  { title: "Forest Walks", img: BROCHURE.forestMist, text: "Trails through cedar and oak that end at a view." },
  { title: "Apple Orchards", img: BROCHURE.estateAerial, text: "Rows of fruit trees, heavy by late summer." },
  { title: "The Night Sky", img: MEDIA.nightSky, text: "Dark enough, at last, to find the Milky Way." },
];

export const VILLA_SPECS = [
  { label: "Villa Area", value: "5,500", unit: "sq.ft" },
  { label: "Personal Lawn", value: "1,800", unit: "sq.ft" },
  { label: "Storeys", value: "3", unit: "levels" },
  { label: "Private Residences", value: "08", unit: "only" },
];

export const TRUST_STATS = [
  {
    title: "Private Residences",
    text: "An exclusive collection of just eight Himalayan mansions, reserved for a handful of guests at a time.",
    value: 8,
    suffix: "",
    unit: "",
    thumb: BROCHURE.villaTwilight,
    thumbSecondary: BROCHURE.villaDay,
  },
  {
    title: "Elevation",
    text: "Set at 8,500 feet in Kufri with unobstructed valley views and the first light of the sun.",
    value: 8500,
    suffix: "+",
    unit: "ft",
    thumb: BROCHURE.estateAerial,
    thumbSecondary: BROCHURE.forestMist,
  },
  {
    title: "Built-up Area",
    text: "Spacious villas with personal lawns, terraces, and double-height living spaces.",
    value: 5590,
    suffix: "+",
    unit: "sq.ft",
    thumb: BROCHURE.greatRoom,
    thumbSecondary: BROCHURE.livingFireplace,
  },
  {
    title: "Years of Legacy",
    text: "Crafted by Vaishno Group with decades of trusted development and architectural excellence.",
    value: 25,
    suffix: "+",
    unit: "",
    thumb: BROCHURE.bedroomStone,
    thumbSecondary: BROCHURE.conservatory,
  },
];

export const VILLA_FEATURES = [
  "Double-height living room with private bar lounge",
  "Outdoor Jacuzzi & glass conservatory",
  "Individual Otis passenger elevator per villa",
  "Italian Stonex & engineered wood flooring",
  "Mitsubishi VRF climate control throughout",
  "Fenesta UPVC double-glazed windows",
  "Full-height teak wood wardrobes",
  "Basic smart-home package & keyless entry",
];

// Swipeable residence showcase (authentic brochure renders)
export const RESIDENCES = [
  {
    slug: "facade-dusk",
    img: BROCHURE.villaTwilight,
    title: "The Facade at Dusk",
    caption: "Stone, timber and glass, lit against the pines.",
    badge: "Available",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "5,590 sq.ft",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "garden-elevation",
    img: BROCHURE.villaDay,
    title: "Garden Elevation",
    caption: "Private lawns framed by the Himalayan forest.",
    badge: "Available",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "1,800 sq.ft lawn",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "great-room",
    img: BROCHURE.greatRoom,
    title: "The Great Room",
    caption: "Double-height living beneath exposed timber beams.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Double-height living",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "fireside-living",
    img: BROCHURE.livingFireplace,
    title: "Fireside Living",
    caption: "Warmth and valley views in a single frame.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Valley-facing lounge",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "master-suite",
    img: BROCHURE.bedroomStone,
    title: "The Master Suite",
    caption: "Stone walls, soft light, mountain calm.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Master suite",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "bedroom-retreat",
    img: BROCHURE.bedroomSuite,
    title: "Bedroom Retreat",
    caption: "Teak wardrobes and ambient warmth.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Private balcony",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "conservatory",
    img: BROCHURE.conservatory,
    title: "Conservatory Lounge",
    caption: "A glass sanctuary for games and quiet hours.",
    badge: "Amenity",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Glass conservatory",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "chefs-kitchen",
    img: BROCHURE.kitchen,
    title: "The Chef's Kitchen",
    caption: "Chequered stone floors and chef-grade appliances.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Chef-grade kitchen",
    location: "Kufri, Himachal Pradesh",
  },
  {
    slug: "private-bar",
    img: BROCHURE.barLounge,
    title: "The Private Bar",
    caption: "Gather, pour, and watch the light change.",
    badge: "Interior",
    beds: "5 Bedrooms",
    baths: "5 Bathrooms",
    area: "Private bar lounge",
    location: "Kufri, Himachal Pradesh",
  },
];

export const FLOOR_PLANS = [
  { img: BROCHURE.floorGround, title: "Ground Floor", meta: "Living · Dining · Kitchen · Bar · Conservatory" },
  { img: BROCHURE.floorFirst, title: "First Floor", meta: "Master Suite · Bedrooms · Passage · Balcony" },
  { img: BROCHURE.floorSecond, title: "Second Floor", meta: "Gaming Lounge · Terrace · Outdoor Jacuzzi" },
];

export const WELLNESS = [
  { title: "Forest Therapy", img: BROCHURE.forestMist, text: "Guided shinrin-yoku immersions among ancient deodars." },
  { title: "Yoga & Meditation", img: MEDIA.yoga, text: "Dedicated yoga sites and meditation points facing the valley." },
  { title: "Spa & Healing", img: MEDIA.spa, text: "Restorative therapies drawn from Himalayan traditions." },
  { title: "Breathing Spaces", img: BROCHURE.conservatory, text: "Open decks and conservatories designed for stillness." },
];

export const DAY_TIMELINE = [
  { time: "06:30", title: "Morning Yoga", text: "Salute the sun as mist lifts off the valley.", img: MEDIA.yoga },
  { time: "08:00", title: "Breakfast in the Kitchen", text: "Coffee and quiet, framed by stone and light.", img: BROCHURE.kitchen },
  { time: "10:30", title: "Forest Walk", text: "A slow wander through pine-scented trails.", img: BROCHURE.forestMist },
  { time: "13:00", title: "The Conservatory", text: "An afternoon lost in games and filtered light.", img: BROCHURE.conservatory },
  { time: "17:00", title: "Fireside Hour", text: "Unwind as the light turns to gold.", img: BROCHURE.livingFireplace },
  { time: "19:30", title: "Bonfire & Stargazing", text: "Warmth, firelight, and a sky full of stars.", img: MEDIA.bonfire },
];

export const AMENITIES = [
  {
    title: "Gated Community",
    text: "Live in a safe place that is encompassed with security and surveillance.",
    icon: A("gated-community"),
    img: BROCHURE.estateAerial,
  },
  {
    title: "Premium Elevators",
    text: "Embrace the lifestyle of superior comfort with private lifts. Enjoy true luxury with the comfort as your companion.",
    icon: A("premium-elevators"),
  },
  {
    title: "Ample Parking Area",
    text: "Personal car parking for two vehicles — space, ease, and a king-size life.",
    icon: A("ample-parking"),
  },
  {
    title: "Front View Facing",
    text: "All villas face the valley with unobstructed mountain views and the first bliss of sun. Each villa has a fireplace.",
    icon: A("front-view-facing"),
    img: BROCHURE.villaTwilight,
  },
  {
    title: "Extensive Lawn Area",
    text: "Private lawn areas of approximately 200 sq.mts to explore, relax, and enjoy seamless surroundings.",
    icon: A("extensive-lawn"),
    img: BROCHURE.villaDay,
  },
  {
    title: "Lavish Terrace",
    text: "Each villa includes a generous terrace to gaze at the valley and unwind in complete privacy.",
    icon: A("lavish-terrace"),
  },
  {
    title: "Premium Amenities",
    text: "Outdoor Jacuzzi, valley views, a glass conservatory, gaming and library lounge — endless possibilities of relaxation.",
    icon: A("premium-amenities"),
    img: BROCHURE.conservatory,
  },
  {
    title: "Lavish Rooms",
    text: "Servant room, powder room, pooja and store room — thoughtfully designed for efficient, gracious living.",
    icon: A("lavish-rooms"),
    img: BROCHURE.bedroomStone,
  },
  {
    title: "Library Lounge Area",
    text: "Sit and relax with a cup of coffee and a book in a comprehensive, peaceful library lounge area.",
    icon: A("library-lounge"),
    img: BROCHURE.conservatory,
  },
  {
    title: "Private Balcony",
    text: "Every room faces the valley view and comes with a private balcony.",
    icon: A("private-balcony"),
    img: BROCHURE.bedroomSuite,
  },
  {
    title: "Sumptuous Living Room",
    text: "Spacious double-height living rooms that add an air of luxury, each with a private bar lounge.",
    icon: A("sumptuous-living-room"),
    img: BROCHURE.greatRoom,
  },
  {
    title: "Golf Cart",
    text: "A golf cart to move around the township — freedom and comfort woven into everyday life.",
    icon: A("golf-cart"),
  },
  {
    title: "Renowned Architect",
    text: "Conceived by established architects whose vision has shaped remarkable residences across India.",
    icon: A("renowned-architect"),
  },
  {
    title: "Gaming Area",
    text: "Leisure and recreation with a dedicated gaming area for cheerful, unhurried afternoons.",
    icon: A("gaming-area"),
    img: BROCHURE.barLounge,
  },
];

export const TIMELINE = [
  { year: "Legacy", title: "Rooted in Trust", text: "Vaishno Group builds on decades of craftsmanship and integrity." },
  { year: "Vision", title: "Mountain Living, Reimagined", text: "A commitment to low-density, nature-first development." },
  { year: "Vedanta", title: "A Sanctuary in Kufri", text: "Eight villas conceived as a private Himalayan retreat." },
  { year: "Future", title: "Timeless Stewardship", text: "Preserving the mountain for the generations who follow." },
];

export const SUSTAINABILITY = [
  { title: "Low-Density Development", text: "Only eight villas across the estate — space to breathe." },
  { title: "Native Vegetation", text: "Landscaping led by horticulture experts using local flora." },
  { title: "Natural Materials", text: "Stone, teak wood and glass sourced with intention." },
  { title: "Energy Efficiency", text: "Smart climate systems and thoughtful thermal design." },
  { title: "Water Conservation", text: "Responsible systems tuned to the mountain ecosystem." },
  { title: "Minimal Footprint", text: "Building with the landscape, never against it." },
];

export const TRUSTED_BRANDS = [
  { name: "Tata Steel", logo: "/logos/tata-steel-logo.png" },
  { name: "Kohler", logo: "/logos/KohlerLogoImage.jpeg" },
  { name: "Otis", logo: "/logos/Otis_logo.SVG.webp" },
  { name: "Havells", logo: "/logos/Havells_Logo.svg.webp" },
  { name: "Mitsubishi", logo: "/logos/Mitsubishi-logo.png" },
  { name: "Stonex India", logo: "/logos/stonex-india-vector-logo.png" },
  { name: "Vaishno Group", logo: "/logos/logo.png" },
  { name: "Partner", logo: "/logos/Group-18147242.webp" },
];

export const PROPERTY_MARQUEE = [
  {
    id: "villa-twilight",
    img: BROCHURE.villaTwilight,
    badge: "Residence",
    title: "Sunset Villa",
    subtitle: "Twilight facade at 8,500 ft",
    caption: "Where pine-scented evenings begin.",
  },
  {
    id: "great-room",
    img: BROCHURE.greatRoom,
    badge: "Interiors",
    title: "Great Room",
    subtitle: "Double-height living with valley views",
    caption: "Gather, linger, and unwind in quiet luxury.",
  },
  {
    id: "poolside",
    img: BROCHURE.conservatory,
    badge: "Wellness",
    title: "Conservatory Lounge",
    subtitle: "Light-filled retreat for slow mornings",
    caption: "Glass, greenery, and Himalayan calm.",
  },
  {
    id: "villa-day",
    img: BROCHURE.villaDay,
    badge: "Architecture",
    title: "Garden Elevation",
    subtitle: "Stone, timber & sky in dialogue",
    caption: "Crafted to sit gently in the mountains.",
  },
  {
    id: "master-suite",
    img: BROCHURE.bedroomSuite,
    badge: "Suites",
    title: "Master Suite",
    subtitle: "Private sanctuary with mountain light",
    caption: "Rest deeply above the valley.",
  },
  {
    id: "fireside",
    img: BROCHURE.livingFireplace,
    badge: "Living",
    title: "Fireside Living",
    subtitle: "Warm evenings by the hearth",
    caption: "Conversations that finally unhurry.",
  },
  {
    id: "kitchen",
    img: BROCHURE.kitchen,
    badge: "Culinary",
    title: "Chef's Kitchen",
    subtitle: "Gather around shared tables",
    caption: "Flavours woven with mountain hospitality.",
  },
];

/** Destinations “Find your perfect escape” — all nearby places from Vicinity */
export const DESTINATION_FILTERS = [
  { id: "all", label: "All" },
  { id: "nearby", label: "Nearby" },
  { id: "shimla", label: "Shimla" },
  { id: "further", label: "Further Afield" },
];

const PLACE_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1478131143081-80f7f84ca84a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  "/brochure/villa-day.jpg",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
];

/** Vicinity — “Uniting Urban Indulgences” distances table */
export const VICINITY = [
  { name: "Sterling Resorts", distance: "3 Km", time: "5 Mins", category: "nearby" },
  { name: "Royal Tulip", distance: "5 Km", time: "8 Mins", category: "nearby" },
  { name: "Hip Hip Hurray Adventure Park", distance: "5 Km", time: "8 Mins", category: "nearby" },
  { name: "Kufri Fun World", distance: "5 Km", time: "8 Mins", category: "nearby" },
  { name: "Raddison Hotel", distance: "6 Km", time: "10 Mins", category: "nearby" },
  { name: "Oberoi Wild Flower Hall", distance: "7 Km", time: "12 Mins", category: "nearby" },
  { name: "Taj Hotel", distance: "9 Km", time: "15 Mins", category: "nearby" },
  { name: "Sun Rise/Set Point", distance: "6 Km", time: "9 Mins", category: "nearby" },
  { name: "Kufri City", distance: "4 Km", time: "8 Mins", category: "nearby" },
  { name: "Mahindras", distance: "4 Km", time: "7 Mins", category: "nearby" },
  { name: "Helipad", distance: "15 Km", time: "20 Mins", category: "shimla" },
  { name: "The Ridge Mall Road", distance: "15 Km", time: "30 Mins", category: "shimla" },
  { name: "Shimla City", distance: "20 Km", time: "45 Mins", category: "shimla" },
  { name: "Railways Station, Shimla", distance: "22 Km", time: "50 Mins", category: "shimla" },
  { name: "Taradevi Temple, Shoghi", distance: "35 Km", time: "65 Mins", category: "further" },
  { name: "Shimla Airport", distance: "37 Km", time: "70 Mins", category: "further" },
  { name: "Chail City", distance: "40 Km", time: "70 Mins", category: "further" },
  { name: "Narkanda", distance: "45 Km", time: "80 Mins", category: "further" },
];

/** Local images for specific Vicinity places (uploaded assets). */
const VICINITY_IMAGES = {
  "Hip Hip Hurray Adventure Park": "/Homepage/Hip Hip Hurray Adventure Park.jpg",
  Mahindras: "/Homepage/MAHINDRA-kufri.jpeg",
  Helipad: "/Homepage/Helipad kufri.webp",
  "The Ridge Mall Road": "/Homepage/The Ridge Mall Road.webp",
  "Shimla City": "/Homepage/Shimla City.webp",
};

/** All Vicinity places as escape cards */
export const DESTINATIONS = VICINITY.map((place, i) => ({
  id: place.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name: place.name,
  distance: place.distance,
  time: place.time,
  category: place.category,
  img: VICINITY_IMAGES[place.name] || PLACE_IMAGES[i % PLACE_IMAGES.length],
}));

export const GALLERY = [
  { img: BROCHURE.villaTwilight, cat: "Exterior" },
  { img: BROCHURE.greatRoom, cat: "Interior" },
  { img: BROCHURE.forestMist, cat: "Nature" },
  { img: MEDIA.spa, cat: "Wellness" },
  { img: BROCHURE.villaDay, cat: "Exterior" },
  { img: BROCHURE.livingFireplace, cat: "Interior" },
  { img: BROCHURE.estateAerial, cat: "Nature" },
  { img: MEDIA.yoga, cat: "Wellness" },
  { img: BROCHURE.bedroomStone, cat: "Interior" },
  { img: MEDIA.snowValley, cat: "Nature" },
  { img: BROCHURE.conservatory, cat: "Interior" },
  { img: BROCHURE.kitchen, cat: "Interior" },
  { img: BROCHURE.bedroomSuite, cat: "Interior" },
  { img: BROCHURE.barLounge, cat: "Interior" },
];

export const INVESTMENT = [
  { value: "08", label: "Private Residences" },
  { value: "5,500", label: "Sq.Ft Per Home" },
  { value: "24/7", label: "Concierge & Security" },
  { value: "365", label: "Days of Mountain Air" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Vedanta doesn't feel like a place you visit. It feels like a life you finally return to — quiet mornings, pine-scented air, and time that finally belongs to you.",
    name: "Priya Sharma",
    role: "Returning Guest",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Two nights here undid months of city noise. The stillness stays with you long after — the mountains, the fireside evenings, and the unhurried pace of every day.",
    name: "Arjun Mehta",
    role: "Wellness Traveller",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "The architecture disappears into the mountain. That restraint is the true luxury — stone, timber, and views that feel entirely your own.",
    name: "Elena Vasquez",
    role: "Design Writer",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "We reserved a weekend and ended up planning a longer stay. The concierge, the villa, and the valley views exceeded every expectation we had.",
    name: "Rahul & Ananya",
    role: "Mountain Home Buyers",
    rating: 4.8,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "As someone who visits luxury retreats often, Vedanta stands apart for its privacy. Eight residences, endless silence, and hospitality that never intrudes.",
    name: "David Chen",
    role: "Luxury Travel Advisor",
    rating: 4.7,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Our family gathering at Vedanta was exactly what we hoped for — spacious rooms, warm interiors, and a setting that made every conversation feel unhurried.",
    name: "Sana Kapoor",
    role: "Family Retreat Guest",
    rating: 4.9,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  },
];

export const CONTACT = {
  whatsapp: "919876543210", // placeholder — update with real number
  phone: "+91 98765 43210",
  email: "concierge@vedantakufri.com",
  address: "Vedanta, Kufri, Shimla, Himachal Pradesh, India",
};

export const BLOGS = [
  {
    slug: "why-kufri-is-the-quietest-escape-from-shimla",
    title: "Why Kufri Is the Quietest Escape from Shimla",
    excerpt:
      "Just beyond the crowds of Shimla, Kufri keeps the Himalayas intimate — cedar air, open views, and evenings that refuse to hurry.",
    category: "Destination",
    date: "2026-03-12",
    readTime: "5 min read",
    cover: BROCHURE.forestMist,
    content: [
      "Shimla has charm, history, and a famous ridge walk. It also has traffic, queues, and weekends that feel louder than the mountains should. Kufri sits only a short drive away, yet it carries a different tempo — fewer shopfronts, more forest, and mornings that begin with mist instead of horns.",
      "At 8,500 feet, the air cools quickly after sunset. Pine and cedar scent the trails. From a private lawn or deck, the valley opens without the pressure to “do” the destination. Guests often say the first gift of Kufri is simply permission to stop planning.",
      "Vedanta was designed for that kind of stay: eight residences, generous indoor rooms, and outdoor space that belongs to you. You are close enough to Shimla for a day visit, and far enough that evenings return to stillness.",
      "If you are choosing between a busy hill station and a quieter Himalayan pocket, Kufri is the answer for travellers who want elevation without the spectacle.",
    ],
  },
  {
    slug: "a-slow-winter-weekend-at-vedanta",
    title: "A Slow Winter Weekend at Vedanta",
    excerpt:
      "Snow on the pines, firelight indoors, and a rhythm built around long breakfasts and unhurried walks.",
    category: "Stay",
    date: "2026-02-18",
    readTime: "6 min read",
    cover: MEDIA.snowValley,
    content: [
      "Winter in Kufri does not ask for an itinerary. It asks for warmth, soft light, and the patience to watch snow settle on the ridge. At Vedanta, mornings often begin later than usual — coffee by a window, a slow meal, coats left by the door until the sun softens the cold.",
      "Afternoons are for short forest walks and long returns to the villa. The great room holds conversation; the fireplace holds the evening. When snowfall arrives, the estate feels even more private — eight residences wrapped in white silence.",
      "Pack layers, leave the packed schedule behind, and let the mountain decide the pace. A winter weekend here is less about sightseeing and more about reclaiming quiet hours with the people you came with.",
    ],
  },
  {
    slug: "designing-for-silence-inside-a-himalayan-villa",
    title: "Designing for Silence Inside a Himalayan Villa",
    excerpt:
      "Stone, cedar, and open volumes — how Vedanta’s interiors protect calm without feeling sparse.",
    category: "Design",
    date: "2026-01-28",
    readTime: "4 min read",
    cover: BROCHURE.greatRoom,
    content: [
      "Silence in a mountain home is not the absence of life. It is the absence of interruption. Vedanta’s interiors favour materials that soften sound and hold warmth — timber, stone, textured fabrics — while rooms stay generous enough for families to gather without crowding.",
      "Light matters as much as layout. Tall openings frame the forest; evenings lean on firelight and low lamps. The goal is not a showroom. It is a room you can live in for days without feeling you should leave.",
      "Private lawns and decks extend that calm outdoors. Design here is quiet on purpose: fewer statements, more lasting comfort at altitude.",
    ],
  },
  {
    slug: "best-time-to-visit-kufri-for-a-private-stay",
    title: "Best Time to Visit Kufri for a Private Stay",
    excerpt:
      "Summer coolness, spring colour, monsoon mist, winter snow — each season offers a different kind of Himalayan stillness.",
    category: "Travel",
    date: "2025-12-05",
    readTime: "5 min read",
    cover: BROCHURE.villaDay,
    content: [
      "There is no single “best” month for Kufri — only the season that matches the stay you want. Summer brings cool days around 20°C and long evenings on the deck. Spring paints the hills with rhododendron. Monsoon wraps the estate in living green and soft fog. Winter brings snow and fireside hours.",
      "For first-time guests seeking outdoor walks and golden light, late spring through early autumn is ideal. For romance and fireplaces, winter is unmatched. Families often prefer summer, when children can use lawns and trails without heavy layers.",
      "Whenever you come, book for privacy first. With only eight residences, Vedanta stays intimate year-round — the mountain changes; the quiet does not.",
    ],
  },
  {
    slug: "what-a-private-himalayan-retreat-should-feel-like",
    title: "What a Private Himalayan Retreat Should Feel Like",
    excerpt:
      "Not a hotel corridor. Not a crowded viewpoint. A home in the mountains that gives you time, space, and clean air.",
    category: "Philosophy",
    date: "2025-11-14",
    readTime: "4 min read",
    cover: BROCHURE.villaTwilight,
    content: [
      "A private retreat should feel like arrival, not check-in. You put your bags down and the house already seems to understand why you came: clean air, room to breathe, and no pressure to perform a holiday.",
      "At Vedanta, that means residences sized for real living — kitchens, lounges, bedrooms with quiet, and lawns that belong to your group alone. Concierge support is available without hovering. The forest is close enough to walk into before breakfast.",
      "If a stay leaves you more rested than entertained, it has done its work. That is the standard we hold for every guest who crosses the threshold.",
    ],
  },
  {
    slug: "wellness-in-the-mountains-beyond-the-spa-menu",
    title: "Wellness in the Mountains, Beyond the Spa Menu",
    excerpt:
      "True restoration at altitude is simpler: sleep, stillness, movement in fresh air, and meals without rush.",
    category: "Wellness",
    date: "2025-10-02",
    readTime: "5 min read",
    cover: MEDIA.yoga,
    content: [
      "Wellness marketing often promises treatments. The mountains offer something quieter: deeper sleep, cooler air, and days without notifications dictating the hour. At Vedanta, wellness begins with the setting — elevation, forest, and residences designed for rest.",
      "Guests stretch on decks at sunrise, walk cedar paths, or simply sit with tea while mist lifts from the valley. Spa moments and soft rituals have their place, but they are accents. The foundation is unhurried time.",
      "Come for restoration that does not need a schedule. Leave with a body that remembers what quiet feels like.",
    ],
  },
];

export const getBlogBySlug = (slug) => BLOGS.find((b) => b.slug === slug);

export const formatBlogDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

