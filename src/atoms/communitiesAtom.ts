import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";
import { NumberLiteralType } from "typescript";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageurl?: string;
}
