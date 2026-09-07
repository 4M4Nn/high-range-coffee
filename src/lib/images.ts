function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const IMAGE_IDS = {
  heroEstate: "1764012393975-9635be075343",
  cherries: "1611096265583-5d745206f2a0",
  dryingYard: "1741012253890-a62490e7ea3e",
  curingWorks: "1511537190424-bbbab87ac5eb",
  warehouse: "1770055592671-01c08cae22be",
  exportContainers: "1590497008432-598f04441de8",
  cupping: "1558996163-68db2afefba6",
  farmerPortrait: "1746623691157-c4c7a3bad0c4",
  handsWithBeans: "1712143525667-717b146a141f",
  greenBeans: "1703646619157-eb553d16d402",
  aerialEstate: "1714810267513-523dcc52d8ee",
} as const;

export const IMAGES = {
  heroEstate: unsplash(IMAGE_IDS.heroEstate, 1920),
  cherries: unsplash(IMAGE_IDS.cherries, 1200),
  dryingYard: unsplash(IMAGE_IDS.dryingYard, 1200),
  curingWorks: unsplash(IMAGE_IDS.curingWorks, 1200),
  warehouse: unsplash(IMAGE_IDS.warehouse, 1200),
  exportContainers: unsplash(IMAGE_IDS.exportContainers, 1200),
  cupping: unsplash(IMAGE_IDS.cupping, 1200),
  farmerPortrait: unsplash(IMAGE_IDS.farmerPortrait, 1200),
  handsWithBeans: unsplash(IMAGE_IDS.handsWithBeans, 1200),
  greenBeans: unsplash(IMAGE_IDS.greenBeans, 1200),
  aerialEstate: unsplash(IMAGE_IDS.aerialEstate, 1920),
} as const;
