import { Accessories } from "./Accessories";
import { Cameras } from "./Cameras";
import { Cases } from "./Cases";
import { SportOptics } from "./SportOptics";
import { Video } from "./Video";

export const useItems = () => {
  const allItems = {
    Accessories: Accessories,
    Cameras: Cameras,
    Cases: Cases,
    SportOptics: SportOptics,
    Video: Video,
  };

  return allItems;
};
