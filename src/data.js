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

export const BLOGS = [
  {
    slug: "top-stays-in-kufri-india-8-private-luxury-villas",
    title: "Top Stays in Kufri, India: 8 Private Luxury Villas",
    excerpt:
      "Discover the top stays in Kufri, India — Vedanta's 8 private Himalayan villa residences at 8,500 ft. See why villa living beats hotels for privacy and views.",
    category: "blog",
    date: "2026-07-23",
    readTime: "10 min read",
    cover:
      "https://thumbnail-agent-bucket.s3.ap-south-1.amazonaws.com/thumbnail-agent/b101d51e-76a4-45ba-a601-d4e99f81b24a.png",
    content: [
      "Search for top stays in Kufri, India and you'll get the usual mix: a dozen hotels sorted by star rating, a handful of resorts with pool photos, and a scattering of homestays with inconsistent reviews. What you won't find, unless you know to look for it, is a private villa residence sitting at 8,500 ft with no shared corridors, no lobby traffic, and only eight of them in existence. That's Vedanta by Vaishno Group, and this page exists because the standard \"top stays\" list doesn't actually answer the question most travelers are asking.",
      "The question isn't which hotel has the best rating. It's whether you want a hotel room at all, or a private mansion residence with mountain views on every side and nobody else's footsteps in the hallway. This page ranks Vedanta's eight neo-classical villa residences above the generic hotel/resort aggregator lists — not as a promotional claim, but because the category itself is different.",
      "What \"Top Stays in Kufri\" Really Means: Villa Residence vs. Hotel/Resort. Most searches for best places to stay in Kufri are really two different searches wearing the same words. Some travelers want a hotel or resort — a room, a restaurant downstairs, a front desk, predictable amenities shared with dozens of other guests. Others want something else entirely: an entire private residence, with its own living space, its own kitchen, its own silence, booked for their group alone.",
      "Aggregators like Booking.com, TripAdvisor, and Airbnb are built to answer the first kind of search. They sort by price, star rating, and review volume, which works fine for hotels competing on room count and occupancy. But that sorting logic structurally can't surface a category built on the opposite principle — low volume, high privacy, no shared common space. A property with eight residences and a guest cap will never out-rank a 100-room resort on a platform optimized for inventory scale. It's not that the aggregators are wrong; it's that they're answering a different question than the one a villa-seeking traveler is actually asking.",
      "This page is written for that second traveler — the one who wants to explore Vedanta's eight private villa residences rather than scroll past them as line item #14 in a hotel list.",
      "Vedanta's Eight Residences: An Exclusive Category, Not a Hotel Room Count. Vedanta isn't a hotel with eight rooms. It's eight separate neo-classical mansion residences, each one a complete private stay — its own entrance, its own living areas, its own outdoor space. There is no shared lobby where guests from different bookings cross paths, no communal corridor, no elevator queue at breakfast. Guest density per residence stays low by design, which is the entire point of the model: you're not renting a room inside a building full of strangers, you're occupying a house.",
      "That distinction matters more than it sounds. A 100-room resort at capacity means 100+ separate guest parties sharing dining rooms, pool decks, and parking. Eight residences, even at full occupancy, means eight parties who may never cross paths at all. Exclusivity here isn't a marketing adjective — it's a guest-count math problem, and Vedanta's numbers are simply smaller on purpose.",
      "(Photography callout: this section should carry high-resolution exterior shots of each mansion residence, ideally one per residence, to visually substantiate the \"eight distinct houses\" claim rather than a single generic property photo.)",
      "Himalayan Neo-Classical Architecture & Design. The eight residences share a neo-classical design language that's unusual for the region — colonnaded facades, high-pitched gabled roofs suited to snow load, deep-set windows framing the valley rather than the roadside, and stone-and-timber construction that reads closer to a European hill mansion than the concrete-and-glass box construction common to newer Kufri hotels built for quick turnaround occupancy. Where a typical mid-range Kufri hotel prioritizes room count per floor, these residences prioritize the opposite: fewer walls, taller ceilings, and facades designed to be looked at rather than passed by.",
      "You can view photography of the residences and mountain views to see the difference directly rather than take the architectural comparison on description alone.",
      "Space, Privacy, and Silence by Design. Privacy at Vedanta isn't just about having a locked door. It's built into the spatial layout — residences positioned with distance between them rather than stacked or adjoined, so sound doesn't travel from one guest party to another the way it does through a shared hotel wall or corridor. That's a deliberate acoustic and spatial choice, not an accident of geography, and it's covered in more depth in how Vedanta's villas are designed for silence, which walks through the specific design decisions — window placement, buffer distance, material choices — that keep each residence acoustically its own.",
      "8,500 Ft Elevation: Clean Air, Views, and Climate Advantage. Kufri sits noticeably higher than Shimla, and the difference at Vedanta's elevation of 8,500 feet above sea level is not a marketing footnote — it changes what you actually experience day to day. Summer daytime temperatures at this height typically run 8-10°C cooler than Shimla's lower ridge areas, which matters if you're visiting between April and June when the plains are already uncomfortable. In winter, Kufri gets reliable snowfall — usually starting in late December — while lower Shimla often gets only rain or sleet in the same weeks.",
      "The air itself is measurably different too. At 8,500 ft, you're above most of the vehicle traffic and market density that sits along Shimla's Mall Road corridor, which means less particulate haze and a visibility range that, on a clear post-monsoon morning (typically October to early November), can extend to distant snow-capped ridgelines that simply aren't visible from lower elevations on hazier days. This is also why road and foot traffic noise — a constant undertone in central Shimla — largely disappears at this height; there's less to make noise in the first place. For a deeper look at why this elevation specifically translates into quiet, why Kufri is the quietest escape from Shimla covers the comparison in more detail.",
      "Villa Residence vs. Hotel/Resort: A Side-by-Side Look. The clearest way to see why \"top stays\" means something different here is to put the two categories next to each other directly.",
      "Comparing the two categories directly: Privacy level — an entire private mansion per booking with no shared entrance or lobby, versus an individual room within a shared building with shared lobby, corridors, and elevators. Space per stay — a full residence with multiple rooms, private living area, and private outdoor space, versus a single room or suite with shared common areas. Guest density — one party per residence across eight residences total, versus often 50-150+ rooms with multiple parties simultaneously. Service style — dedicated staff assigned to the residence for the stay, versus shared front desk and floor staff serving all guests. Noise and crowd exposure — minimal, with distance-buffered residences and no shared walls, versus higher, with adjoining rooms and common dining/lobby traffic. Kitchen and living space — a private kitchen and living room included, versus restaurant/room service only with no private kitchen. Booking exclusivity — one residence, one group, no shared occupancy, versus rooms sold independently and simultaneously to multiple parties. Price-value framing — a higher nightly rate priced per residence, covering full space, staff, and privacy, versus a lower nightly rate priced per room with shared amenities.",
      "The price-value question deserves a direct answer: a villa residence costs more per night than a hotel room, but the real comparison is per-residence-for-a-group against per-room-for-an-individual. Split across a family or group of six to eight, and factoring in a full private house with its own kitchen and staff rather than one room among a hundred, the per-person economics close a lot of that gap — while the privacy and quiet simply aren't available at any price in the hotel category.",
      "How Aamod.in and Aggregator Listings Fall Short. If you search for stays in Kufri today, aamod.in and platforms like Booking.com, TripAdvisor, and Airbnb will show you a mix of hotels and resorts sorted by price or star rating. Where a property like Vedanta appears at all in this style of listing, it's typically presented the same way as everything else on the page — a thumbnail, a star rating, an amenities checklist, a \"book now\" button. There's no framing that this is a private villa residence rather than a hotel room, no mention of the 8,500 ft elevation advantage, and no acknowledgment of the silence and low guest density that actually define the stay.",
      "That's the structural gap this page fills. Aggregators are built to compare like-for-like within a single category — hotel to hotel, resort to resort — and they default to sorting by price and volume metrics that a low-inventory private residence model was never built to win. A generic aggregator listing can tell you Vedanta has good reviews. It can't tell you that you're choosing between an entire private mansion and a room down the hall from strangers, because that comparison isn't part of its sorting logic. This page is written specifically to make that comparison explicit, which is the actual gap in every existing search result for top stays in Kufri, India.",
      "What Each Vedanta Residence Offers. Across all eight residences, a consistent set of features carries through, even as each mansion has its own character. Every residence includes a private living area separate from the bedrooms, mountain-facing windows positioned to catch valley views rather than road-facing frontage, and a private kitchen for guests who want to cook rather than rely solely on in-house dining. Staff assigned to a residence during a stay function more like household staff than hotel floor staff — attentive to that one group's schedule rather than split across dozens of rooms.",
      "Outdoor space is private to each residence rather than shared communal grounds, which means mornings on a terrace or lawn happen without other guests walking past. Interior detailing leans into the neo-classical theme — high ceilings, large-format windows, and material choices (stone, timber, wrought detailing) consistent with the exterior architecture rather than a generic hotel-room finish. For the specific layout and inclusions of each residence, it's worth reading through the details on the explore Vedanta's eight private villa residences page directly, since the eight mansions aren't identical copies of one floor plan.",
      "(Photography callout: interior shots — living rooms, kitchens, window views — should accompany this section to show the space rather than just describe it, since \"private living area\" and \"mountain-facing windows\" are claims best supported visually.)",
      "The Vedanta Experience: A Day at 8,500 Ft. A stay here has a rhythm to it that's worth describing rather than just claiming. Mornings start quiet — genuinely quiet, in the sense that the loudest sound for the first hour after sunrise is often birdsong and wind moving through deodar branches, not traffic or a lobby coffee machine. Because the residence has its own kitchen, breakfast can happen on your own schedule rather than a hotel's fixed service window, and many guests take it on the terrace, where the morning haze typically burns off by mid-morning to reveal the ridgelines across the valley.",
      "Midday is when the clean air at elevation is most noticeable — walks around the property don't carry the exhaust smell that lingers along lower Shimla's roads, and the temperature at 8,500 ft usually sits several degrees more comfortable than the plains below, even in peak summer months. Evenings shift the view rather than the quiet: the light over the western ridgeline turns the mansion facades warm gold before dusk, and once night falls, the absence of nearby streetlighting means a visible stretch of stars that most travelers don't get to see from town-center accommodation. It's less a checklist of activities and more the accumulation of small, specific sensory details — the kind covered in more depth in what a private Himalayan retreat should feel like, which goes further into what a full stay actually feels like day to day.",
      "How We Selected These as the Top Stays in Kufri. Calling any property the \"top stay\" in a destination is a claim that needs criteria behind it, not just an assertion. Here's what specifically qualifies Vedanta's residences for that framing on this page:",
      "Elevation — 8,500 ft, verifiably higher than the majority of Kufri and Shimla-area accommodation, with the measurable air quality, temperature, and visibility advantages that come with it. Privacy — whole-residence bookings with no shared corridors or lobbies, versus room-based bookings in a shared building. Architecture — purpose-built neo-classical mansion design, distinct from standard hotel construction, verifiable through direct photography rather than description alone. Guest density — a hard cap of eight residences total, versus 100+ room resorts, meaning a structurally lower ratio of guests to space at any given time. Service exclusivity — staff assigned per residence rather than shared across a building's full occupancy.",
      "These are checkable facts about the property, not adjectives. If a stay doesn't meet this bar — private whole-property booking, meaningful elevation advantage, distinct architecture, and low guest density — it doesn't belong on a top stays list built around this criteria, regardless of star rating. This is also why the comparison in this piece focuses on Vedanta specifically rather than presenting a broader multi-property list: at the private-villa-residence level in Kufri, at this elevation, the category is genuinely narrow.",
      "Frequently Asked Questions About Staying in Kufri.",
      "What's the best time to visit Kufri for a private villa stay? Late April through June offers pleasant daytime temperatures and clear skies before the July-September monsoon brings cloud cover and rain. October and November bring the clearest long-range mountain visibility, while late December through February is best for guests wanting snowfall. A full seasonal breakdown is covered in best time to visit Kufri for a private stay.",
      "How is a villa residence stay different from a norm...",
    ],
  },,
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

