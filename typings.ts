export type InvitationTheme = {
    idTheme: string;
    nameTheme: string;
    totalCreated: number;
    imgCover: string;
    description: string;
  };
  
  export type InvitationData = {
    id: string;
    idTheme: string;
    createdAt: string | Date;
    isPaid: boolean;
    paidAt?: string | Date; 
  
    groomName: string;
    bridalName: string;
  
    dadGroomName: string;
    momGroomName: string;
    dadBridalName: string;
    momBridalName: string;

    eventList: InvitationEvent[];

    sentenceOpening?: string;
    sentenceGreeting?: string;
    sentenceMiddlehook?: string;
    sentenceStory?: string;
    senenceGift?: string;
    sentenceClosing?: string;

    backsound?: string;

    imgCover?: string;
    imgGroom?:string;
    imgBridal?: string;
    imgGallery?: string[];

    rsvp?: RSVP[];
    greetings?: Greetings[];
  };

  export type InvitationEvent = {
      id: string;
      eventName: string;
      address: string;
      gmapsLink: string;
      time: string;
      timeEnd?: string;
      date: string | Date;
      dateEnd?: string | Date;
  }

  export type RSVP = {
      name:string;
      information: string;
      rsvpAt: string | Date
  }

  export type Greetings ={
      name: string;
      greeting: string;
      greetingAt: string | Date;
  }
  