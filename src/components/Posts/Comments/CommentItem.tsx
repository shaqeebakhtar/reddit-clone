import { Timestamp } from "firebase/firestore";
import React from "react";

type Props = {};

export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};

const CommentItem = (props: Props) => {
  return <div>CommentItem</div>;
};

export default CommentItem;
