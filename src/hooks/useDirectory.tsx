import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DirectoryMenuItem,
  directoryMenuState,
} from "../atoms/directoryMenuAtom";
import { useRouter } from "next/router";
import { communityState } from "../atoms/communitiesAtom";
import { FaReddit } from "react-icons/fa";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const router = useRouter();
  const communityStateValue = useRecoilValue(communityState);

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));

    router.push(menuItem.link);
    if (directoryState.isOpen) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };

  useEffect(() => {
    const { currentCommunity } = communityStateValue;

    if (currentCommunity) {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `r/${currentCommunity.id}`,
          link: `/r/${currentCommunity.id}`,
          imageUrl: currentCommunity.imageUrl,
          icon: FaReddit,
          iconColor: "blue.500",
        },
      }));
    }
  }, [communityStateValue.currentCommunity]);

  return {
    directoryState,
    toggleMenu,
    onSelectMenuItem,
  };
};

export default useDirectory;
