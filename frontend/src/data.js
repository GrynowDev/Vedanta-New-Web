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
  { id: "summer", label: "Summer", img: BROCHURE.villaDay, text: "Cool 20°C days, apple orchards in bloom, and endless golden evenings on the deck.", cta: "Explore Summer >" },
  { id: "winter", label: "Winter", img: MEDIA.snowValley, text: "Snowfall blankets the pines. Fireside afternoons and crystalline mountain silence.", cta: "Explore Winter >" },
  { id: "spring", label: "Spring", img: MEDIA.springMeadow, text: "Rhododendrons ignite the hills. Meadows awaken in soft, deliberate colour.", cta: "Explore Spring >" },
  { id: "monsoon", label: "Monsoon", img: BROCHURE.forestMist, text: "Mist drifts through the valley. The forest breathes deep, green and alive.", cta: "Explore Monsoon >" },
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
    img: "https://framerusercontent.com/images/9X2b2tpUg1z6MdbH5TnsJ7dcpY.png?width=640&height=359",
    label: "Sunset Villa",
  },
  {
    img: "https://framerusercontent.com/images/CXMW3PrDeP3YW4oOGmaiHmtfyw.png?width=640&height=850",
    label: "Poolside Retreat",
  },
  {
    img: "https://framerusercontent.com/images/hC3X0Gbnr7Hfy4pbdsv7RUhKus.png?width=640&height=427",
    label: "Garden Elevation",
  },
];

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
