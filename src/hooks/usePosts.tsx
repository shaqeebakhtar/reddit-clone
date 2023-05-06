import { useRecoilState } from "recoil";
import { postState } from "../atoms/postsAtom";

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = async () => {};

  const onDeletePost = async () => {};

  return {
    postStateValue,
    setPostStateValue,
  };
};

export default usePosts;
