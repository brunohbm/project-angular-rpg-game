export enum ItemVariationEnum {
  COMMON = 'common',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
}

export enum ItemTypeEnum {
  LEFT_WEAPON = 'left_weapon',
  GLOVES = 'gloves',
  EARING = 'earing',
  HELMET = 'helmet',
  NECKLACE = 'necklace',
  ARMOR = 'armor',
  CAPE = 'cape',
  RING = 'ring',
  BELT = 'belt',
  RIGHT_WEAPON = 'right_weapon',
  BOOTS = 'boots',
  CONSUMABLE = 'consumable',
}

export const ITEM_SLOTS: { [
  key in keyof typeof ItemTypeEnum
]: [number, number] } = {
  LEFT_WEAPON: [4, 6],
  GLOVES: [4, 4],
  EARING: [2, 2],
  HELMET: [4, 4],
  NECKLACE: [2, 2],
  ARMOR: [4, 6],
  CAPE: [4, 6],
  RING: [2, 2],
  BELT: [2, 6],
  RIGHT_WEAPON: [4, 8],
  BOOTS: [4, 4],
  CONSUMABLE: [2, 2],
};

export default interface IItem {
  key: string;
  name: string;
  description: string;
  type: ItemTypeEnum;
  variation: ItemVariationEnum;
  slots: [number, number];
  imageSrc: string;
}
