import { Startup, Testimonial, ExecutionStep, Story, Resource } from './types';

export const STARTUPS: Startup[] = [
  {
    id: '1',
    name: 'CampusKart',
    founder: 'Aman Verma',
    category: 'FoodTech',
    description: 'Food delivery platform for college campuses, optimized for student schedules and locations.'
  },
  {
    id: '2',
    name: 'EcoBottle',
    founder: 'Priya Sharma',
    category: 'Sustainability',
    description: 'Sustainable reusable bottle brand with a focus on durability and aesthetic design.'
  },
  {
    id: '3',
    name: 'StudyFlow',
    founder: 'Rohit Singh',
    category: 'EdTech',
    description: 'AI productivity tool for students to manage assignments, notes, and study schedules.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aman Verma',
    role: 'Founder of CampusKart',
    content: 'PathSarthee helped me validate my startup idea and build my MVP. Within two months we got our first users.'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Founder of EcoBottle',
    content: 'I only had an idea but no direction. PathSarthee guided me step by step from idea validation to launching my product.'
  },
  {
    id: '3',
    name: 'Rohit Singh',
    role: 'Founder of StudyFlow',
    content: 'The mentorship and execution support from PathSarthee made building my student startup much easier.'
  }
];

export const EXECUTION_STEPS: ExecutionStep[] = [
  {
    title: 'Idea',
    description: 'Submit your idea to the PathSarthee platform',
    icon: 'Lightbulb'
  },
  {
    title: 'Validation',
    description: 'We analyze the idea and check market demand',
    icon: 'Search'
  },
  {
    title: 'MVP',
    description: 'Build the first version of the startup',
    icon: 'Code'
  },
  {
    title: 'Launch',
    description: 'Launch the product and get real users',
    icon: 'Rocket'
  },
  {
    title: 'Growth',
    description: 'Scale the startup using marketing strategies',
    icon: 'TrendingUp'
  },
  {
    title: 'Funding',
    description: 'Prepare for investors and startup accelerators',
    icon: 'DollarSign'
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'How a student validated a startup idea',
    author: 'PathSarthee Team',
    date: 'Oct 12, 2023',
    excerpt: 'The journey of validating a campus-specific problem through real user interviews.',
    content: '...',
    category: 'Validation'
  },
  {
    id: '2',
    title: 'How a student built an MVP in 7 days',
    author: 'Priya Sharma',
    date: 'Nov 5, 2023',
    excerpt: 'Using no-code tools and rapid prototyping to launch EcoBottle.',
    content: '...',
    category: 'MVP'
  },
  {
    id: '3',
    title: 'From idea to first 100 users',
    author: 'Aman Verma',
    date: 'Dec 20, 2023',
    excerpt: 'The marketing strategies used to get the first 100 students on CampusKart.',
    content: '...',
    category: 'Growth'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'How to validate a startup idea',
    description: 'A comprehensive guide on market research and user interviews.',
    category: 'Validation',
    link: '#'
  },
  {
    id: '2',
    title: 'How to build an MVP',
    description: 'The lean startup approach to building your first product.',
    category: 'Development',
    link: '#'
  },
  {
    id: '3',
    title: 'Startup marketing strategies',
    description: 'How to get your first users without a marketing budget.',
    category: 'Marketing',
    link: '#'
  },
  {
    id: '4',
    title: 'Startup funding basics',
    description: 'Understanding equity, pitch decks, and investor relations.',
    category: 'Funding',
    link: '#'
  }
];
