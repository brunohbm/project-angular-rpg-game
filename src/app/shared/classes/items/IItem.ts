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
    LEFT_WEAPON: [2, 4],
    GLOVES: [2, 2],
    EARING: [1, 1],
    HELMET: [2, 2],
    NECKLACE: [1, 1],
    ARMOR: [2, 4],
    CAPE: [2, 4],
    RING: [1, 1],
    BELT: [1, 3],
    RIGHT_WEAPON: [2, 4],
    BOOTS: [2, 2],
    CONSUMABLE: [1, 1],
};

export default interface IItem {
  name: string;
  description: string;
  type: ItemTypeEnum;
  variation: ItemVariationEnum;
  slots: [number, number];
  imageSrc: string;
}
