interface User {
  name: string;
  username: string;
  avatarUrl: string;
  timeAgo: string;
}

export interface PollOption {
  text: string;
  votes: number;
}

export interface DinamicPostProps {
  id: string;
  type: 'text' | 'text-image' | 'text-poll';
  user: User;
  content: string;
  imageUrl?: string;
  pollQuestion?: string;
  pollOptions?: PollOption[];
}

export const postsMock: DinamicPostProps[] = [
  {
    id: "1",
    type: 'text',
    user: {
      name: 'Juan Pérez',
      username: 'juanito_perez312',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      timeAgo: '2 h',
    },
    content:
      'Hoy fue un gran día para salir a caminar y despejar la mente. 🌞🚶‍♂️',
  },
  {
    id: "2",
    type: 'text-image',
    user: {
      name: 'María González',
      username: 'mariag_94',
      avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      timeAgo: '5 h',
    },
    content: '¡Amanecer en la montaña! 🏞️',
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop',
  },
  {
    id: "3",
    type: 'text-poll',
    user: {
      name: 'Carlos Ramírez',
      username: 'carlos_r',
      avatarUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
      timeAgo: '1 d',
    },
    content: '',
    pollQuestion: '¿Cuál debería ser nuestro próximo destino de viaje?',
    pollOptions: [
      { text: 'París', votes: 12 },
      { text: 'Tokio', votes: 25 },
      { text: 'Nueva York', votes: 8 },
    ],
  },
  {
    id: "4",
    type: 'text',
    user: {
      name: 'Ana López',
      username: 'ana_lo',
      avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      timeAgo: '3 d',
    },
    content:
      'La lectura es el viaje de quienes no pueden tomar un tren 🚂📖.',
  },
];
