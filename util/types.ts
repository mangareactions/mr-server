export enum ContentRating {
  SFW = "sfw",
  NSFW = "nsfw",
}

export enum TagType {
  META = "meta",
  NORMAL = "normal",
  CHARACTER = "character",
  SAUCE = "sauce",
}

export interface Tag {
  name: string;
  type: TagType;
}

export enum UserLevel {
  UNREGISTERED = 0,
  REGISTERED = 1,
  MODERATOR = 2,
}

export interface Image {
  image_id: string;
  tags: Tag[];
  uploaded: string;
  uploaded_by: string;
  resolution: [number, number];
  rating: ContentRating;
  upvotes: number;
  downvotes: number;
}

export interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  user_level: UserLevel;
  favorites: string[];
  avatar_url: string;
  settings: UserSettings;
  integrations: UserIntegrations;
}

export interface UserIntegrations {
  facebook_id?: string;
  discord_id?: string;
  google_id?: string;
}

export interface UserSettings {
  nsfw: boolean;
  blacklisted_tags: string[];
}
