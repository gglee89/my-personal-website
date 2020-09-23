export const interests = {
  'Artificial Intelligence': {
    title: 'Artificial Intelligence',
    description: 'Understand how computers are used to model human behavior.',
    image: 'artificial-intelligence-4389372_1920-min.jpg',
  },
  Traveling: {
    title: 'Traveling',
    description: 'Explore and discover new places and cultures.',
    image: 'barcelona-3226639_1280-min.jpg',
  },
  Hobbies: {
    title: 'Hobbies',
    description: 'Read & Learn',
    image: 'coding-3013602_1280-min.jpg',
  },
  'Code Design Patterns': {
    title: 'Code Design Patterns',
    description:
      'Implement code structures with: Reusability, Modularity, Efficiency, and Easy to Grasp.',
    image: 'programming-1873854_1280.png',
  },
  'Software Requirement': {
    title: 'Software Requirement',
    description: 'Documentation on feature requirements.',
    image: 'development-5235091_1920-min.jpg',
  },
  Food: {
    title: 'Food',
    description: 'Experience new tastes, and learn with the creative process.',
    image: 'food-photography-2610863_1920-min.jpg',
  },
  Trading: {
    title: 'Trading',
    description: 'Development collaboration on Stock Trading applications.',
    image: 'stock-1863880_1280-min.jpg',
  },
  'Mockup Design': {
    title: 'Mockup Design',
    description:
      'Design of low-fidelity and high-fidelity prototypes for development guidance.',
    image: 'plans-1867745_1920-min.jpg',
  },
  Running: {
    title: 'Running',
    description: 'Running alongside nature and with groups.',
    image: 'street-marathon-1149220_1280-min.jpg',
  },
  'Rich Web/Native UX': {
    title: 'Rich Web/Native UX',
    description:
      'Research on approaches to deliver best UX on cross-platform development.',
    image: 'mockup-654585_1920-min.jpg',
  },
  'Keep Learning': {
    title: 'Keep Learning',
    description:
      'Continuously doing research on Web Development Trends and Machine Learning.',
    image: 'learn-3653430_1920-min.jpg',
  },
  'Native App Dev': {
    title: 'Native App Dev',
    description: 'Build native application with React Native.',
    image: 'electronics-1851218_1280-min.jpg',
  },
};

Object.keys(interests).map((interestKey) => {
  Object.assign(interests[interestKey], {
    isEmph: false,
    isVisible: false,
  });
});
