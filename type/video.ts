export interface DataYoutube {
  userId: string;
  email: string;
  url: string;
  idVideo: string;
  vote?: string | null;
  title: string;
  description: string;
  id: string;
  createdAt: Date;
}

export type VoteType = 'UP_VOTE' | 'DOWN_VOTE' | null;
