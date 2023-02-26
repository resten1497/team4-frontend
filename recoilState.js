import { atom } from "recoil";

export const nameState = atom({
  key: "name",
  default: "",
});
export const GameList = atom({
  key: "gameList",
  default: {},
});
