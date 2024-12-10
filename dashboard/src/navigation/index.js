import { allNav } from "./allNav";

export const getNav = (role) => {
    return allNav.filter(navItem => navItem.role === role);
  };