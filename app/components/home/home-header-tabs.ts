import { HeaderTab } from "./category-filters";

export const DEFAULT_HOME_TAB_ID = "alojamientos";

export const HOME_HEADER_TABS: HeaderTab[] = [
  { id: "alojamientos", label: "Alojamientos", icon: "🏡" },
  { id: "experiencias", label: "Experiencias", icon: "🎈", isNew: true },
  { id: "servicios", label: "Servicios", icon: "🛎", isNew: true },
];
