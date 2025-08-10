export type ChallengeStatus =
  | "PROPOSAL_PUBLISHED"
  | "PROPOSAL_FUNDED"
  | "UNDER_EVALUATION"
  | "COMPLETED"
  | "CANCELLED"
  | "EXPIRED"
  | "REFUNDED";

export interface ChallengeProps {
  id: string;
  description: string;
  price: number;
  currency: string;
  timeRequiredDays: number;
  hashtags: string[];
  status: ChallengeStatus;

  likesCount: number;
  visitsCount: number;
  sharesCount: number;
  commentsCount: number;
  likedByMe?: boolean;
  startDate: string;
  videoUrl: string;

  createdAt: string;

  user: {
    fullName: string;
    userId: string;
    profileImageUrl: string | null;
    gender: string;
  };

  sponsor?: {
    userId: string;
    fullName: string;
    profileImageUrl: string | null;
  };
}

export const mockProposals: ChallengeProps[] = [
  {
    id: "1",
    description: "Haz un video haciendo un desafío divertido",
    price: 50,
    currency: "USD",
    timeRequiredDays: 3,
    hashtags: ["#diversión", "#video", "#reto"],
    status: "PROPOSAL_PUBLISHED",

    likesCount: 10,
    visitsCount: 150,
    sharesCount: 5,
    commentsCount: 2,
    likedByMe: false,
    startDate: "2025-08-01T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-28T12:00:00Z",

    user: {
      fullName: "Juan Pérez",
      userId: "user1",
      profileImageUrl: null,
      gender: "male",
    },

    sponsor: undefined,
  },
  {
    id: "2",
    description: "Crea un tutorial sobre desarrollo web",
    price: 100,
    currency: "USD",
    timeRequiredDays: 7,
    hashtags: ["#tutorial", "#web", "#programación"],
    status: "PROPOSAL_FUNDED",

    likesCount: 25,
    visitsCount: 300,
    sharesCount: 10,
    commentsCount: 8,
    likedByMe: true,
    startDate: "2025-08-05T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-30T08:00:00Z",

    user: {
      fullName: "Ana Gómez",
      userId: "user2",
      profileImageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      gender: "female",
    },

    sponsor: {
      userId: "sponsor1",
      fullName: "Empresa XYZ",
      profileImageUrl: null,
    },
  },
  {
    id: "3",
    description: "Realiza un unboxing creativo de un gadget popular",
    price: 40,
    currency: "USD",
    timeRequiredDays: 2,
    hashtags: ["#unboxing", "#tech", "#creativo"],
    status: "UNDER_EVALUATION",

    likesCount: 8,
    visitsCount: 120,
    sharesCount: 2,
    commentsCount: 1,
    likedByMe: false,
    startDate: "2025-08-10T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-08-01T10:00:00Z",

    user: {
      fullName: "Carlos Mendoza",
      userId: "user3",
      profileImageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
      gender: "male",
    },

    sponsor: undefined,
  },
  {
    id: "4",
    description: "Graba un vlog sobre un día en tu ciudad",
    price: 80,
    currency: "USD",
    timeRequiredDays: 5,
    hashtags: ["#vlog", "#ciudad", "#viaje"],
    status: "COMPLETED",

    likesCount: 30,
    visitsCount: 450,
    sharesCount: 15,
    commentsCount: 12,
    likedByMe: true,
    startDate: "2025-07-20T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-15T09:00:00Z",

    user: {
      fullName: "María López",
      userId: "user4",
      profileImageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      gender: "female",
    },

    sponsor: {
      userId: "sponsor2",
      fullName: "Patrocinador ABC",
      profileImageUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  },
  {
    id: "5",
    description: "Crea un video motivacional para emprendedores",
    price: 60,
    currency: "USD",
    timeRequiredDays: 4,
    hashtags: ["#motivacion", "#emprendedores", "#video"],
    status: "CANCELLED",

    likesCount: 12,
    visitsCount: 200,
    sharesCount: 7,
    commentsCount: 3,
    likedByMe: false,
    startDate: "2025-07-15T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-10T11:00:00Z",

    user: {
      fullName: "Laura Torres",
      userId: "user5",
      profileImageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
      gender: "female",
    },

    sponsor: undefined,
  },
  {
    id: "6",
    description: "Documenta el proceso de una receta tradicional",
    price: 70,
    currency: "USD",
    timeRequiredDays: 6,
    hashtags: ["#cocina", "#receta", "#tradicional"],
    status: "EXPIRED",

    likesCount: 5,
    visitsCount: 90,
    sharesCount: 1,
    commentsCount: 0,
    likedByMe: false,
    startDate: "2025-07-01T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-06-25T14:00:00Z",

    user: {
      fullName: "Miguel Rivera",
      userId: "user6",
      profileImageUrl: "https://randomuser.me/api/portraits/men/28.jpg",
      gender: "male",
    },

    sponsor: {
      userId: "sponsor3",
      fullName: "Gastronomía Inc",
      profileImageUrl: null,
    },
  },
  {
    id: "7",
    description: "Haz un cover musical creativo de una canción popular",
    price: 55,
    currency: "USD",
    timeRequiredDays: 3,
    hashtags: ["#musica", "#cover", "#creativo"],
    status: "REFUNDED",

    likesCount: 18,
    visitsCount: 210,
    sharesCount: 9,
    commentsCount: 4,
    likedByMe: false,
    startDate: "2025-08-02T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-29T13:00:00Z",

    user: {
      fullName: "Sofía Martínez",
      userId: "user7",
      profileImageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
      gender: "female",
    },

    sponsor: undefined,
  },
  {
    id: "8",
    description: "Graba un video sobre deportes extremos",
    price: 90,
    currency: "USD",
    timeRequiredDays: 5,
    hashtags: ["#deportes", "#extremos", "#acción"],
    status: "PROPOSAL_PUBLISHED",

    likesCount: 22,
    visitsCount: 380,
    sharesCount: 12,
    commentsCount: 6,
    likedByMe: true,
    startDate: "2025-08-08T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-31T15:00:00Z",

    user: {
      fullName: "Diego Ramírez",
      userId: "user8",
      profileImageUrl: null,
      gender: "male",
    },

    sponsor: {
      userId: "sponsor4",
      fullName: "SportPro",
      profileImageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  },
  {
    id: "9",
    description: "Realiza un video educativo sobre sostenibilidad",
    price: 75,
    currency: "USD",
    timeRequiredDays: 6,
    hashtags: ["#educacion", "#sostenibilidad", "#medioambiente"],
    status: "PROPOSAL_FUNDED",

    likesCount: 14,
    visitsCount: 220,
    sharesCount: 5,
    commentsCount: 3,
    likedByMe: false,
    startDate: "2025-08-03T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-27T11:00:00Z",

    user: {
      fullName: "Valeria Soto",
      userId: "user9",
      profileImageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
      gender: "female",
    },

    sponsor: undefined,
  },
  {
    id: "10",
    description: "Crea un video sobre técnicas de pintura rápida",
    price: 65,
    currency: "USD",
    timeRequiredDays: 4,
    hashtags: ["#arte", "#pintura", "#rapida"],
    status: "UNDER_EVALUATION",

    likesCount: 9,
    visitsCount: 140,
    sharesCount: 3,
    commentsCount: 2,
    likedByMe: false,
    startDate: "2025-08-06T00:00:00Z",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    createdAt: "2025-07-29T09:00:00Z",

    user: {
      fullName: "Andrés Morales",
      userId: "user10",
      profileImageUrl: "https://randomuser.me/api/portraits/men/50.jpg",
      gender: "male",
    },

    sponsor: {
      userId: "sponsor5",
      fullName: "ArteStudio",
      profileImageUrl: null,
    },
  },
];
