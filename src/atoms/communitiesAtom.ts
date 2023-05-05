import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageurl?: string;
}

export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageUrl?: string;
}

interface CommunityState {
  snippets: CommunitySnippet[];
  // visitedCommunities
}

const defaultCommunityState: CommunityState = {
  snippets: [],
};

export const communityState = atom<CommunityState>({
  key: "communityState",
  default: defaultCommunityState,
});