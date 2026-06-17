import custom from '../../../public/custom.webp'
import renovationsImg from '../../../public/renovations.webp'
import landscapingImg from '../../../public/landscaping.webp'
import ndumberi from '../../../public/ndumberi.webp'
import joes from '../../../public/joes .webp'
import joes2 from '../../../public/joes (2).webp'
import joes3 from '../../../public/joes (3).webp'
import frame from '../../../public/a-frame.webp'
import satima1 from '../../../public/satima (1).webp'
import satima2 from '../../../public/satima (2).webp'
import satima3 from '../../../public/satima (3).webp'
import retail from '../../../public/retail (1).webp'
import access1 from '../../../public/landscaping (1).webp'
import access2 from '../../../public/landscaping (2).webp'
import access3 from '../../../public/landscaping (3).webp'
import cabro1 from '../../../public/cabro (1).webp'
import cabro2 from '../../../public/cabro (2).webp'
import cabro3 from '../../../public/cabro3.webp'
import cabro4 from '../../../public/cabro (4).webp'
import mixer from '../../../public/mixer.webp'
import blaster from '../../../public/blast.webp'
import compactor from '../../../public/compact.webp'


export {
     custom, renovationsImg, landscapingImg, ndumberi,
    joes, joes2, joes3, frame, satima1, satima2, satima3,
    retail, access1, access2, access3, cabro1, cabro2, cabro3, cabro4
}

export const services = [
    {
        id: "General Contracting",
        name: "General Contracting",
        image: custom,
        description: "Ground-up custom home construction with schedule control and building expertise.",
        link: '/custom'
    },
    {
        id: "home-renovations",
        name: "Home Renovations",
        image: renovationsImg,
        description: "Transform your entire home with in-house labor and transparent pricing.",
        link: '/remodelling'
    },
    {
        id: "landscaping",
        name: "Landscaping",
        image: landscapingImg,
        description: "Professional landscape design and installation to enhance your property's value.",
        link: '/landscaping'
    },
    {
        id: "equipment hire",
        name: "Equipment Hire",
        image: mixer,
        description: "Comprehensive construction management for residential and commercial projects.",
        link: '/equipments'
    }
]

export const residential = [
    {
        id: 1,
        title: "Custom Home Building ",
        content: "We design and build unique custom homes tailored to your lifestyle, preferences, and budget. From contemporary Nairobi residences to traditional Kenyan designs, our architects and builders create homes that reflect your vision while ensuring structural integrity, energy efficiency, and lasting quality."
    },
    {
        id: 2,
        title: "Residential Estate Development ",
        content: "Planning a residential subdivision or gated community? We manage complete estate development including land preparation, infrastructure installation, utilities connection, and home construction. Our residential development expertise ensures cohesive, marketable properties."
    },
    {
        id: 3,
        title: "Luxury Villa Construction ",
        content: "Specializing in high-end residential construction for Karen, Runda, Muthaiga, and other premium Nairobi neighborhoods, we deliver luxury villas with superior finishes, modern amenities, and architectural distinction"
    },
    {
        id: 4,
        title: "Residential Renovations & Extensions ",
        content: "We handle room additions, second-story expansions, complete home renovations, and upgrade projects with minimal disruption to your household."
    }
]

export const equipment_sequence=[
  {
    "id": 1,
    "title": "Reliable Equipment",
    "description": "Our machinery is professionally maintained, regularly serviced, and thoroughly inspected to ensure maximum uptime and dependable performance on every project."
  },
  {
    "id": 2,
    "title": "Fast Site Delivery",
    "description": "We understand that delays cost money. Our team works efficiently to mobilize and deliver equipment to your site when you need it."
  },
  {
    "id": 3,
    "title": "Experienced Operators",
    "description": "Qualified and experienced operators are available to ensure equipment is used safely, efficiently, and productively."
  },
  {
    "id": 4,
    "title": "Flexible Hire Terms",
    "description": "Whether you need equipment for a day, a month, or the duration of a project, we offer flexible rental plans tailored to your requirements."
  },
  {
    "id": 5,
    "title": "Competitive Pricing",
    "description": "Our transparent pricing structure helps you manage project costs effectively with no hidden fees or unexpected charges."
  },
  {
    "id": 6,
    "title": "Nationwide Coverage",
    "description": "We provide construction equipment hire services across Kenya, ensuring reliable access to machinery wherever your project is located."
  },
  {
    "id": 7,
    "title": "Reduced Downtime",
    "description": "Our proactive maintenance program and responsive support team help minimize equipment breakdowns and keep your project on schedule."
  },
  {
    "id": 8,
    "title": "Wide Equipment Selection",
    "description": "From excavators and bulldozers to graders, rollers, dump trucks, and backhoes, we have the right machinery for virtually any construction task."
  }
]

export const equipment_hire=
[
  {
    "id": 1,
    "title": "Concrete Equipment Hire",
    "image": mixer,
    "alt": "Concrete mixer and concrete pump equipment on a construction site",
    "description": "Achieve consistent, high-quality concrete placement with our range of professional concrete equipment. From concrete mixers and pumps to vibrators and finishing tools, our machinery is designed to improve productivity, reduce labor costs, and ensure superior results on residential, commercial, and infrastructure projects across Kenya."
  },
  {
    "id": 2,
    "title": "Compaction Equipment Hire",
    "image": compactor,
    "alt": "Vibratory roller compacting soil at a construction site",
    "description": "Build on a solid foundation with reliable compaction equipment for soil, gravel, asphalt, and road construction projects. Our fleet includes vibratory rollers, plate compactors, and rammers that deliver the density and stability required to prevent settlement, improve structural integrity, and meet engineering specifications."
  },
  {
    "id": 3,
    "title": "Blasting Equipment Hire",
    "image": blaster,
    "alt": "Rock drilling and blasting equipment operating in a quarry",
    "description": "Tackle the toughest excavation and quarrying challenges with our specialized rock blasting equipment. Designed for mining, road construction, foundation excavation, and large-scale earthworks, our drilling and blasting solutions help break through hard rock efficiently, safely, and cost-effectively, keeping your project on schedule."
  }
]


export const residential_process = [
    {
        id: 1,
        title: 'Consultation',
        content: 'We discuss your vision, assess your land, review your budget, and develop preliminary concepts.'
    },
    {
        id: 2,
        title: 'Design Development',
        content: 'Our architects create detailed plans incorporating your requirements, local building codes, and site characteristics.'
    },
    {
        id: 3,
        title: 'Cost Estimation',
        content: 'You receive comprehensive, itemized quotations with transparent pricing for all construction elements.'
    },
    {
        id: 4,
        title: 'Approvals',
        content: 'We handle all documentation, submissions, and coordination with county authorities and regulatory bodies.'
    },
    {
        id: 5,
        title: 'Execution',
        content: 'Our experienced teams build your home with attention to quality, safety, and your specific requirements.'
    },
    {
        id: 6,
        title: 'Quality Assurance',
        content: 'Multiple inspection checkpoints ensure workmanship and materials meet our rigorous standards.'
    },
    {
        id: 7,
        title: 'Project Completion',
        content: 'We conduct final walkthroughs, address any concerns, and hand over your completed home.'
    },
    {
        id: 8,
        title: 'Warranty Support',
        content: 'Comprehensive warranties protect your investment, and we remain available for any post-completion needs.'
    }
]

export const residential_deliverables = [
    {
        id: 1,
        content: 'Complete architectural design services'
    },
    {
        id: 2,
        content: 'Building permit acquisition and regulatory compliance'
    },
    {
        id: 3,
        content: 'Site preparation and foundation work'
    },
    {
        id: 4,
        content: 'Structural construction using quality materials'
    },
    {
        id: 5,
        content: 'Electrical, plumbing, and HVAC installation'
    },
    {
        id: 6,
        content: 'Interior finishes and custom features'
    },
    {
        id: 7,
        content: 'Landscaping and outdoor amenities'
    },
    {
        id: 8,
        content: 'Final inspections and occupancy certification'
    },
]

export const processes = [
    {
        id: 1,
        title: 'We Talk',
        process: "It starts with a conversation. We come to your property, walk the space and listen to what you're to accomplish.No sales pitch — just an honest look at what's possible and what it might take to get there.",
        cost: 'Cost Estimates'
    },
    {
        id: 2,
        title: 'We Plan',
        process: "By the time we break ground, your budget is 90-95% certain. No guessing, no crossing fingers.Depending on complexity, this phase can take as long as construction itself — and that's a good thing.",
        cost: 'Budget Certainty'
    },
    {
        id: 3,
        title: 'We Build',
        process: "Our fundis show up every day not when they feel like it, not between three other jobs. A dedicated superintendent runs your project, and you get weekly budget reports showing exactly where every dollar went. ",
        cost: 'Progress updates'
    },
    {
        id: 4,
        title: 'We Walk',
        process: "When construction wraps, we walk every room together. Anything that's not right goes on the punch list, and we fix it. We don't collect final payment until you sign off — that's how it should work.",
        cost: '1 Year Warranty'
    }
]

export const renovations = [
    {
        name: 'Design & Planning',
        description: 'Layout optimization, material selections, and budget finalization',
        duration: '1-2 months'
    },
    {
        name: 'Permitting',
        description: 'Navigating local codes and securing necessary approvals',
        duration: '1-3 months'
    },
    {
        name: 'Construction',
        description: 'Demolition to final details, managed by our in-house crew',
        duration: '4-8 months'
    }
]

export const renovationsSequences = [
    { id: 1, name: 'Selective Demolition', description: 'Removing outdated systems and structures carefully' },
    { id: 2, name: 'Structural Mods', description: 'Removing walls or adding support beams' },
    { id: 3, name: 'MEP Rough-In', description: 'New electrical, plumbing, and HVAC routing' },
    { id: 4, name: 'Insulation & Drywall', description: 'Closing up walls and preparing for finishes' },
    { id: 5, name: 'Interior Finishes', description: 'Flooring, cabinetry, and tile installation' },
    { id: 6, name: 'Final Trim & Paint', description: 'The details that bring the project to life' }
]

export const landscapings = [
    {
        name: 'Concept Design',
        description: 'Site analysis, 3D renderings, and plant selection',
        duration: '2-4 weeks'
    },
    {
        name: 'Hardscape Install',
        description: 'Paving, retaining walls, and outdoor structures',
        duration: '2-4 months'
    },
    {
        name: 'Softscape & Irrigation',
        description: 'Planting, lighting, and water management systems',
        duration: '1-2 months'
    }
]

export const landscapingSequences = [
    { id: 1, name: 'Site Preparation', description: 'Grading and clearing the land for new features' },
    { id: 2, name: 'Hardscape Construction', description: 'Building the structural elements of your garden' },
    { id: 3, name: 'Drainage Systems', description: 'Ensuring proper water runoff and management' },
    { id: 4, name: 'Lighting & Smart Sync', description: 'Outdoor lighting and automated controls' },
    { id: 5, name: 'Planting & Aesthetics', description: 'Introducing local flora and final mulch' }
]

export const contracting = [
    {
        name: 'Consultation',
        description: 'Scope definition, site assessment, and initial estimate',
        duration: '1-2 weeks'
    },
    {
        name: 'Project Controls',
        description: 'Scheduling, procurement, and subcontractor management',
        duration: 'Ongoing'
    },
    {
        name: 'Execution',
        description: 'Field supervision and quality assurance inspections',
        duration: 'Project-dependent'
    }
]

export const contractingSequences = [
    { id: 1, name: 'Project Kickoff', description: 'Finalizing contracts and mobilising the crew' },
    { id: 2, name: 'Procurement', description: 'Ordering long-lead materials and equipment' },
    { id: 3, name: 'Trade Coordination', description: 'Simultaneous management of multiple trade partners' },
    { id: 4, name: 'Quality Milestones', description: 'Regular inspections to ensure standards are met' },
    { id: 5, name: 'Handover & Closeout', description: 'Final punch lists and client transition' }
]

export const customs = [
    {
        name: 'Design Phase',
        description: 'Architect pairing, full blueprints, selection planning',
        duration: '3-6 months'
    },
    {
        name: 'Permitting',
        description: 'Building department review, structural approvals',
        duration: '3-6 months'
    },
    {
        name: 'Construction',
        description: 'Foundation to move-in, all trades',
        duration: '10-12 months'
    }
]

export const sequences = [
    { id: 1, name: 'Surveying & Staking', description: 'Layout the building footprint on the lot' },
    { id: 2, name: 'Foundation & Masonry', description: 'Footings, pilings if flood zone, masonry walls' },
    { id: 3, name: 'Framing', description: 'Walls, roof structure, second floor if applicable' },
    { id: 4, name: 'MEP Rough-In', description: 'Electrical, plumbing, and HVAC in walls and floors' },
    { id: 5, name: 'Insulation & Drywall', description: 'Spray-in, blow-in, or batt depending on spec' },
    { id: 6, name: 'Finishes', description: 'Tile, cabinetry, millwork, paint, flooring' },
    { id: 7, name: 'Fixtures & Trim', description: 'Final plumbing/electrical fixtures, trim carpentry' },
    { id: 8, name: 'Final Inspections', description: 'Punch list, client walkthrough, certificate of occupancy' }
]

export const projects = [
    {
        id: "modern-villa",
        title: "Modern Villa",
        category: "Residential",
        location: "Kiambu",
        images: [
            ndumberi, joes, joes2, joes3
        ],
        type: 'custom',
        overview: "A stunning contemporary villa designed to harmonize with the serene landscape of Kiambu. This project focused on creating an open-plan living experience with large floor-to-ceiling windows that invite natural light and offer breathtaking views. The use of natural stone and sustainable wood reflects Greenrock's commitment to quality and environmental consciousness.",
        details: {
            type: "New Build",
            size: "350 m²",
            duration: "10 months",
            completed: "2024",
            teamLead: "Joseph Kaigai",
            architect: "Edge Architecture",
            services: "Full Design-Build, Landscape Integration"
        },
        features: [
            { title: "Smart Integration", description: "Fully automated lighting and security systems." },
            { title: "Eco-Friendly", description: "Solar power and rainwater harvesting systems." },
            { title: "Custom Joinery", description: "Bespoke cabinetry and interior wooden finishes." }
        ]
    },
    {
        id: "a-frame-house",
        title: "A - Frame House",
        category: "Residential",
        location: "Nyahururu",
        images: [
            frame, satima1, satima2, satima3
        ],
        type: 'custom',
        overview: "Nestled in the highlands of Nyahururu, this A-frame house is a masterpiece of rustic modernism. Designed to withstand the cool climate while providing a cozy, light-filled retreat, the structure features a dramatic pitched roof and expansive timber decking. It serves as a perfect escape, blending architectural boldness with functional comfort.",
        details: {
            type: "Bespoke Cabin",
            size: "180 m²",
            duration: "6 months",
            completed: "2025",
            teamLead: "Joseph Kaigai",
            architect: "Pharice Kihara",
            services: "Structural Engineering, Interior Design"
        },
        features: [
            { title: "Panoramic Views", description: "Lofted bedroom with a direct view of the horizon." },
            { title: "Natural Insulation", description: "High-performance thermal glass and wool insulation." },
            { title: "Handcrafted Finishes", description: "Local cedar wood utilized for all internal surfaces." }
        ]
    },
    {
        id: "retail-complex",
        title: "Retail Complex",
        category: "Commercial",
        location: "Nairobi",
        images: [
            retail, joes, joes2, joes3
        ],
        type: 'renovation',
        overview: "A comprehensive transformation of a legacy commercial building into a vibrant, modern retail hub in Nairobi. This project involved structural reinforcement, complete facade redesign, and MEP system overhaul to accommodate high-traffic luxury boutiques and cafes. The result is a premium destination that revitalizes the urban streetscape.",
        details: {
            type: "Commercial Renovation",
            size: "1,200 m²",
            duration: "8 months",
            completed: "2026",
            teamLead: "Njogu Kaigai",
            architect: "Urban Dynamics",
            services: "Tenant Fit-outs, Facade Engineering"
        },
        features: [
            { title: "Glass Facade", description: "UV-protected double-glazed atrium." },
            { title: "Optimized Flow", description: "Redesigned floor plan for maximum foot traffic efficiency." },
            { title: "Energy Efficient", description: "Centralized smart HVAC and LED lighting control." }
        ]
    },
    {
        id: "access-road",
        title: "Access Road",
        category: "Landscaping",
        location: "Nyahururu",
        images: [
            access2, landscapingImg, access1, access3
        ],
        type: 'landscape',
        overview: "Infrastructure meets aesthetics in this private estate access road project. Beyond mere durability, the project focused on slope stabilization using indigenous flora and decorative retaining walls. The winding path was engineered to offer a scenic approach while ensuring all-weather accessibility in the rugged Nyahururu terrain.",
        details: {
            type: "Civil & Landscaping",
            size: "1.5 km",
            duration: "1 month",
            completed: "2026",
            teamLead: "Njogu Kaigai",
            architect: "Greenrock In-house",
            services: "Drainage Design, Hardscape Construction"
        },
        features: [
            { title: "Slope Control", description: "Advanced terraced drainage systems." },
            { title: "Native Flora", description: "Drought-resistant local grass and shrubs." },
            { title: "Durability", description: "Reinforced sub-base for heavy vehicle support." }
        ]
    },
    {
        id: "cabro-installation",
        title: "Cabro Installation",
        category: "Landscaping",
        location: "Naivasha",
        images: [
            cabro1, cabro2, cabro3, cabro4
        ],
        type: 'contracting',
        overview: "A precision hardscaping project for a premium Naivasha resort. This involved the installation of high-strength cabro paving in intricate patterns to create elegant driveways and parking areas. The focus was on perfect leveling, robust drainage, and a visual style that complements the surrounding lake-view architecture.",
        details: {
            type: "Hardscaping",
            size: "2,500 m²",
            duration: "3 months",
            completed: "2024",
            teamLead: "Njogu Kaigai",
            architect: "Lakeside Design",
            services: "Paving, Sub-surface Preparation"
        },
        features: [
            { title: "Intricate Patterns", description: "Custom herringbone and basketweave layouts." },
            { title: "Heavy Load Spec", description: "Engineered for high-tonnage vehicle traffic." },
            { title: "Perfect Drainage", description: "Strategically placed runoff channels and catch basins." }
        ]
    }
]
