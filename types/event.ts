export type EventMeta = {
  title: string;
  date?: string;
  excerpt?: string;
  slug: string;
  draft?: boolean;
  // Event-specific fields
  startTime?: string;
  endTime?: string;
  location?: string;
  registrationUrl?: string;
  tags?: string[];
};

export type EventDetails = EventMeta & {
  content: string;
};
