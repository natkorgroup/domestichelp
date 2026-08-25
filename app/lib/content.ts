export type Service = {
  slug: string;
  title: string;
  singular: string;
  summary: string;
  introduction: string;
  suitedFor: string;
  responsibilities: string[];
  qualities: string[];
};

export type City = {
  slug: string;
  name: string;
  province: string;
  abbreviation: string;
  region: "Ontario" | "British Columbia" | "Alberta" | "Quebec";
  neighbourhoods: string[];
  description: string;
};

export const services: Service[] = [
  {
    slug: "household-assistants",
    title: "Household Assistants",
    singular: "household assistant",
    summary: "A capable, dependable extra pair of hands for the everyday rhythms of home.",
    introduction: "A great household assistant notices what needs doing, keeps the day moving, and brings a reassuring sense of order to your home.",
    suitedFor: "Busy professionals, ageing parents, and families who need practical, flexible help without hiring several separate people.",
    responsibilities: ["Light housekeeping and home organization", "Grocery shopping and household errands", "Simple meal preparation", "Appointment coordination and reminders", "Laundry and wardrobe care", "Daily practical support"],
    qualities: ["Good judgment and discretion", "Calm, proactive communication", "Comfort working independently", "Experience in private family homes"],
  },
  {
    slug: "housekeepers",
    title: "Housekeepers",
    singular: "housekeeper",
    summary: "Attentive, consistent care for the spaces, belongings, and routines that matter to you.",
    introduction: "The right housekeeper learns the particular way you like your home cared for and maintains it with consistency, attention, and respect.",
    suitedFor: "Families seeking a long-term private housekeeper, regular in-home support, or experienced care for a larger residence.",
    responsibilities: ["Regular household cleaning and upkeep", "Laundry, folding, and linen changes", "Kitchen and bathroom care", "Wardrobe and closet organization", "Careful handling of household belongings", "Household supply management"],
    qualities: ["Strong attention to detail", "Respect for privacy and belongings", "Dependable long-term availability", "Experience caring for private residences"],
  },
  {
    slug: "senior-companions",
    title: "Senior Companions",
    singular: "senior companion",
    summary: "Warm, practical, strictly non-medical support that helps older adults remain comfortable at home.",
    introduction: "Staying at home can feel much easier when someone dependable is there for conversation, meals, errands, and the daily routines that support independence.",
    suitedFor: "Older adults who value their independence and families looking for reliable, non-medical companionship for a parent.",
    responsibilities: ["Friendly conversation and companionship", "Meal preparation and grocery shopping", "Escorting to appointments and activities", "Household organization and errands", "Routine reminders and practical support", "Keeping family members appropriately informed"],
    qualities: ["Patience, warmth, and emotional maturity", "Experience supporting older adults", "Clear, respectful communication", "An understanding of non-medical boundaries"],
  },
  {
    slug: "private-cooks",
    title: "Private Cooks",
    singular: "private cook",
    summary: "Thoughtful, dependable meal preparation shaped around your tastes, routines, and household.",
    introduction: "A private household cook takes the daily planning out of good meals, from thoughtful shopping to a kitchen left clean and ready for tomorrow.",
    suitedFor: "Families, busy professionals, and older adults who want consistent homemade meals without managing the cooking themselves.",
    responsibilities: ["Meal planning around household preferences", "Grocery shopping and pantry organization", "Fresh meal preparation and batch cooking", "Thoughtful accommodation of dietary preferences", "Kitchen cleanup after meal preparation", "Coordination around family schedules"],
    qualities: ["Confident practical cooking ability", "Organized kitchen habits", "Attention to ingredients and preferences", "Experience preparing meals in private homes"],
  },
  {
    slug: "family-assistants",
    title: "Family Assistants",
    singular: "family assistant",
    summary: "Calm, versatile household support that gives busy families room to breathe.",
    introduction: "A family assistant brings together the practical tasks that often fall between everyone else's responsibilities, helping home life feel more organized.",
    suitedFor: "Working parents and multigenerational families looking for flexible support with errands, household routines, and everyday coordination.",
    responsibilities: ["Family scheduling and household coordination", "Errands, shopping, and deliveries", "Meal preparation and kitchen organization", "Laundry and household tidying", "Support with family logistics", "Coordination with household service providers"],
    qualities: ["Flexibility and sound judgment", "Strong organization and communication", "A friendly, professional manner", "Experience supporting active households"],
  },
  {
    slug: "household-managers",
    title: "Household Managers",
    singular: "household manager",
    summary: "Experienced, discreet oversight for homes that need confident day-to-day coordination.",
    introduction: "An experienced household manager keeps a complex home running smoothly, coordinating people, schedules, vendors, and the details a busy family should not have to chase.",
    suitedFor: "Larger private residences, busy professionals, and families managing multiple household staff members or service providers.",
    responsibilities: ["Household schedules and operating routines", "Coordination of staff and service providers", "Maintenance appointments and vendor follow-up", "Household purchasing and inventory", "Travel-related home preparations", "Clear communication with family principals"],
    qualities: ["Proven private-household experience", "High discretion and mature judgment", "Excellent vendor and staff coordination", "Confident, independent decision-making"],
  },
  {
    slug: "housekeeper-cooks",
    title: "Housekeeper-Cooks",
    singular: "housekeeper-cook",
    summary: "One trusted person for thoughtful home care, family meals, and a smoother daily routine.",
    introduction: "When your household needs both regular housekeeping and fresh meals, a housekeeper-cook combines those responsibilities into one practical, consistent position.",
    suitedFor: "Households that prefer one dependable employee to manage routine cleaning, laundry, groceries, and everyday meal preparation.",
    responsibilities: ["Routine housekeeping and home upkeep", "Laundry and household organization", "Meal planning and grocery shopping", "Fresh family meals and simple meal preparation", "Kitchen cleanup and pantry organization", "Coordination around household routines"],
    qualities: ["Strong combined housekeeping and cooking experience", "Comfort balancing several responsibilities", "Reliable routines and thoughtful communication", "An organized, independent working style"],
  },
  {
    slug: "live-in-household-help",
    title: "Live-In Household Help",
    singular: "live-in household employee",
    summary: "Consistent in-home support for families who need a trusted person close at hand.",
    introduction: "For some households, having a trusted employee living on the property makes daily support more consistent and easier to coordinate.",
    suitedFor: "Larger households, older adults, and families seeking an established in-home arrangement with clearly defined duties and accommodation.",
    responsibilities: ["Agreed daily housekeeping and practical support", "Meal preparation and household errands", "Companionship and everyday routines", "Flexible coordination around household schedules", "Careful respect for personal boundaries", "Clear work hours, accommodation, and time off"],
    qualities: ["Previous live-in or private-home experience", "A respectful, independent temperament", "Strong communication around boundaries", "Long-term reliability and discretion"],
  },
];

export const cities: City[] = [
  { slug: "toronto", name: "Toronto", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Rosedale", "Forest Hill", "Lawrence Park", "The Annex"], description: "Personal household recruitment for established Toronto neighbourhoods and busy private residences." },
  { slug: "oakville", name: "Oakville", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Old Oakville", "Southeast Oakville", "Joshua Creek", "Glen Abbey"], description: "Thoughtful private household staffing for Oakville families who value continuity, experience, and fit." },
  { slug: "mississauga", name: "Mississauga", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Lorne Park", "Port Credit", "Mineola", "Sheridan"], description: "Experienced household support for families and older adults across Mississauga." },
  { slug: "vaughan", name: "Vaughan", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Kleinburg", "Thornhill", "Woodbridge", "Maple"], description: "Discreet private-household recruitment for Vaughan homes and multigenerational families." },
  { slug: "richmond-hill", name: "Richmond Hill", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Bayview Hill", "Oak Ridges", "Mill Pond", "South Richvale"], description: "Reliable household staff for Richmond Hill families looking for a genuinely personal match." },
  { slug: "markham", name: "Markham", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Unionville", "Angus Glen", "Thornhill", "Cathedraltown"], description: "Considered household recruitment for Markham families, working professionals, and ageing parents." },
  { slug: "ottawa", name: "Ottawa", province: "Ontario", abbreviation: "ON", region: "Ontario", neighbourhoods: ["Rockcliffe Park", "New Edinburgh", "The Glebe", "Westboro"], description: "Private household staffing for Ottawa families seeking experienced, discreet, long-term help." },
  { slug: "vancouver", name: "Vancouver", province: "British Columbia", abbreviation: "BC", region: "British Columbia", neighbourhoods: ["Shaughnessy", "Kerrisdale", "Point Grey", "Dunbar"], description: "Experienced private household employees for Vancouver homes where trust and discretion matter." },
  { slug: "west-vancouver", name: "West Vancouver", province: "British Columbia", abbreviation: "BC", region: "British Columbia", neighbourhoods: ["British Properties", "Dundarave", "Ambleside", "Caulfeild"], description: "Personal household recruitment for West Vancouver residences and families seeking consistent support." },
  { slug: "north-vancouver", name: "North Vancouver", province: "British Columbia", abbreviation: "BC", region: "British Columbia", neighbourhoods: ["Edgemont", "Upper Lonsdale", "Deep Cove", "Lynn Valley"], description: "Carefully matched household employees for North Vancouver families and older adults." },
  { slug: "victoria", name: "Victoria", province: "British Columbia", abbreviation: "BC", region: "British Columbia", neighbourhoods: ["Oak Bay", "Rockland", "James Bay", "Gordon Head"], description: "Thoughtful household support and senior companionship for Victoria-area families." },
  { slug: "kelowna", name: "Kelowna", province: "British Columbia", abbreviation: "BC", region: "British Columbia", neighbourhoods: ["Upper Mission", "Lower Mission", "Kettle Valley", "Glenmore"], description: "Experienced private household help for Kelowna residences, families, and ageing parents." },
  { slug: "calgary", name: "Calgary", province: "Alberta", abbreviation: "AB", region: "Alberta", neighbourhoods: ["Mount Royal", "Elbow Park", "Britannia", "Aspen Woods"], description: "Discreet, personal recruitment for Calgary families and established private households." },
  { slug: "montreal", name: "Montreal", province: "Quebec", abbreviation: "QC", region: "Quebec", neighbourhoods: ["Outremont", "Town of Mount Royal", "Golden Square Mile", "Île-des-Sœurs"], description: "Personal household recruitment for Montreal families, with attention to English- and French-speaking preferences." },
  { slug: "westmount", name: "Westmount", province: "Quebec", abbreviation: "QC", region: "Quebec", neighbourhoods: ["Upper Westmount", "Westmount Park", "Victoria Village", "Summit Woods"], description: "Discreet private-household recruitment for Westmount homes where experience and trust come first." },
];

export const regions = ["Ontario", "British Columbia", "Alberta", "Quebec"] as const;

export const steps = [
  { title: "Tell us about home", text: "We learn what your household needs, your preferences, and the kind of person who will fit." },
  { title: "We do the searching", text: "We personally source, speak with, and thoughtfully shortlist relevant candidates." },
  { title: "Meet your shortlist", text: "You meet a small number of people selected for your home, not a directory of strangers." },
  { title: "Hire with confidence", text: "Choose your person. Full recruitment includes reference checks and a replacement guarantee." },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export const enquiryEmail = "hello@domestichelp.ca";
