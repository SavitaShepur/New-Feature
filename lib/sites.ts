export type SiteStatus = "online" | "offline";

export interface Site {
  name: string;
  city: string;
  capacityKw: number;
  todayKwh: number;
  status: SiteStatus;
}

export const sites: Site[] = [
  { name: "Olivewood 02", city: "Cape Town", capacityKw: 120, todayKwh: 412, status: "online" },
  { name: "Watloo Retail", city: "Pretoria", capacityKw: 340, todayKwh: 0, status: "offline" },
  { name: "6th Street Wynberg", city: "Johannesburg", capacityKw: 55, todayKwh: 187, status: "online" },
];

export const kpis = {
  solarTodayKwh: sites.reduce((sum, s) => sum + s.todayKwh, 0),
  gridImportKwh: 96,
  savingsRand: 1840,
};
