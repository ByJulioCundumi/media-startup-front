export interface ChallengeRequestProps {
  id: string;
  description: string;
  userName: string;
  userHandle: string;
  userAvatar: string;
  views: number;
  likes: number;
  comments: number;
  isAdmin: boolean;
}

// mockChallengeRequests.ts
export const mockChallengeRequests = [
  {
    id: "ch_001",
    description:
      "Quiero ver a alguien bailando salsa en plena calle principal con una coreografía divertida y llena de energía. Se valorará la originalidad y el vestuario llamativo.",
    userName: "Carlos Pérez",
    userHandle: "carlitodance",
    userAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    views: 124,
    likes: 56,
    comments: 8,
    isAdmin: false,
  },
  {
    id: "ch_002",
    description:
      "Preparar una comida completa utilizando solo las manos, sin cuchillos, ollas o sartenes. ¡Creatividad al máximo!",
    userName: "María López",
    userHandle: "marilo_cooks",
    userAvatar: "https://randomuser.me/api/portraits/women/62.jpg",
    views: 340,
    likes: 150,
    comments: 25,
    isAdmin: false,
  },
  {
    id: "ch_003",
    description:
      "Grabar un video diciendo un trabalenguas complicado en 5 idiomas distintos en menos de un minuto. Se premiará la fluidez y pronunciación.",
    userName: "Luis Martínez",
    userHandle: "polyglotLuis",
    userAvatar: "https://randomuser.me/api/portraits/men/18.jpg",
    views: 210,
    likes: 97,
    comments: 14,
    isAdmin: false,
  },
  {
    id: "ch_004",
    description:
      "Completar una rutina intensa de 100 burpees, 200 sentadillas y 50 flexiones en menos de 15 minutos, grabando todo el proceso.",
    userName: "Ana Torres",
    userHandle: "anatorresfit",
    userAvatar: "https://randomuser.me/api/portraits/women/77.jpg",
    views: 415,
    likes: 202,
    comments: 32,
    isAdmin: false,
  },
];

