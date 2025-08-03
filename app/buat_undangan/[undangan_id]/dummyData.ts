import { InvitationData, InvitationEvent, RSVP, Greetings } from '@/typings';

// Data dummy untuk sementara
export const dummyData: InvitationData = {
  id: '1',
  idTheme: 'theme1',
  createdAt: new Date(),
  isPaid: true,
  paidAt: new Date(),
  groomName: 'John Doe',
  bridalName: 'Jane Smith',
  dadGroomName: 'Robert Doe',
  momGroomName: 'Mary Doe',
  dadBridalName: 'James Smith',
  momBridalName: 'Patricia Smith',
  eventList: [
    // {
    //   id: 'event1',
    //   eventName: 'Akad Nikah',
    //   address: 'Jl. Merdeka No. 123, Jakarta',
    //   gmapsLink: 'https://maps.app.goo.gl/xyz',
    //   time: '08:00',
    //   timeEnd: '10:00',
    //   date: new Date('2024-12-25'),
    // },
    // {
    //   id: 'event2',
    //   eventName: 'Resepsi',
    //   address: 'Grand Ballroom, Hotel ABC',
    //   gmapsLink: 'https://maps.app.goo.gl/abc',
    //   time: '11:00',
    //   timeEnd: '15:00',
    //   date: new Date('2024-12-25'),
    // }
  ],
  sentenceOpening: 'Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu...',
  sentenceGreeting: 'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
  sentenceMiddlehook: 'Kami berharap kehadiran Bapak/Ibu...',
  sentenceStory: 'Mereka bertemu pertama kali...',
  senenceGift: 'Untuk kado, kami menerima dalam bentuk...',
  sentenceClosing: 'Terima kasih atas perhatiannya.',
  backsound: 'https://example.com/backsound.mp3',
  imgCover: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?auto=format&fit=crop&w=800&q=80',
  imgGroom: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  imgBridal: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  imgGallery: [
    'https://images.unsplash.com/photo-1529254479751-fbacb4c7b987?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529254479751-fbacb4c7b987?auto=format&fit=crop&w=800&q=80',
  ],
  rsvp: [
    {
      name: 'Alex Johnson',
      information: 'Hadir',
      rsvpAt: new Date(),
    }
  ],
  greetings: [
    {
      name: 'Sarah Connor',
      greeting: 'Selamat ya! Semoga menjadi keluarga sakinah mawaddah warahmah',
      greetingAt: new Date(),
    }
  ]
};