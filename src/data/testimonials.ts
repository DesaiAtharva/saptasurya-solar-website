// TODO: replace with real Google reviews (name, place, text) when available.
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Prakash Patil',
    role: 'Homeowner, Satara',
    rating: 5,
    text: 'Saptasurya installed a 5KW system for my home. The generation is exactly as promised. Our electricity bill is zero now! Best solar company in the region.',
    avatar: 'P',
  },
  {
    id: 2,
    name: 'Sneha Deshmukh',
    role: 'Business Owner, Mumbai',
    rating: 5,
    text: 'We opted for a 20KW commercial rooftop installation. The Saptasurya team handled all the Net Metering paperwork seamlessly. Highly professional service.',
    avatar: 'S',
  },
  {
    id: 3,
    name: 'Vishal Pawar',
    role: 'Farmer, Baramati',
    rating: 5,
    text: 'Their solar water pump solution is incredible. It works flawlessly even during low sunlight, ensuring my crops get water on time. Highly recommended!',
    avatar: 'V',
  },
  {
    id: 4,
    name: 'Nitin Mane',
    role: 'Residential Customer, Satara',
    rating: 5,
    text: 'Quality panels and a very neat installation process. The after-sales support from Saptasurya is quick and extremely helpful. Complete peace of mind.',
    avatar: 'N',
  },
  {
    id: 5,
    name: 'Anjali Shah',
    role: 'Housing Society Member, Mumbai',
    rating: 5,
    text: "We installed a solar system for our society's common areas. Our monthly maintenance costs have dropped by 40%. The Saptasurya team was very transparent.",
    avatar: 'A',
  },
  {
    id: 6,
    name: 'Suraj Jadhav',
    role: 'Agri-Business Owner, Baramati',
    rating: 5,
    text: 'Excellent work by Saptasurya Solar. The 15KW system they set up for my cold storage is running perfectly. True experts in solar energy.',
    avatar: 'S',
  },
  {
    id: 7,
    name: 'Ramesh Bhosale',
    role: 'Factory Owner, Satara',
    rating: 5,
    text: 'Their EPC execution is top-notch. They completed our 50KW project before the deadline. We are extremely happy with the premium quality of the structure.',
    avatar: 'R',
  },
  {
    id: 8,
    name: 'Neha Kadam',
    role: 'Homeowner, Mumbai',
    rating: 5,
    text: 'I was hesitant about solar initially, but Saptasurya guided me through the entire subsidy process. Now I enjoy 24/7 power without the heavy bills.',
    avatar: 'N',
  },
  {
    id: 9,
    name: 'Sanjay Thite',
    role: 'Dairy Farm Owner, Baramati',
    rating: 5,
    text: 'The solar water heater and panels have drastically cut down our operational costs. Genuine service, authentic products, and a great local team.',
    avatar: 'S',
  },
  {
    id: 10,
    name: 'Kiran Shinde',
    role: 'Commercial complex owner, Satara',
    rating: 5,
    text: 'Best investment ever. Saptasurya Solar offered a premium solution with high-efficiency panels. Their technical knowledge is unmatched in this area.',
    avatar: 'K',
  },
];
