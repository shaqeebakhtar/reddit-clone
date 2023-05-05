import { useRecoilState } from "recoil";
import { Community, communityState } from "../atoms/communitiesAtom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { CommunitySnippet } from "../atoms/communitiesAtom";

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    if (isJoined) {
      leaveCommunity(communityData.id);
    }
    joinCommunity(communityData);
  };

  const getSnippets = async () => {
    setLoading(true);
    try {
      const snippetsDocs = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );

      const snippets = snippetsDocs.docs.map((doc) => ({ ...doc.data() }));

      setCommunityStateValue((prev) => ({
        ...prev,
        snippets: snippets as CommunitySnippet[],
      }));
    } catch (error) {
      console.log("snippets error", error);
    }
    setLoading(false);
  };

  const joinCommunity = (communityData: Community) => {};
  const leaveCommunity = (communityId: string) => {};

  useEffect(() => {
    if (!user) return;
    getSnippets();
  }, [user]);

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};

export default useCommunityData;
