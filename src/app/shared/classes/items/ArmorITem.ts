import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class ArmorItem implements IItem {
    key = 'peitoral_guardiao_ancestral';
    name: string = 'Peitoral do Guardião Ancestral';
    description: string = 'O Peitoral do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.ARMOR;
    variation = ItemVariationEnum.COMMON;
    slots = ITEM_SLOTS.ARMOR;
    imageSrc: string = '/assets/images/armor.png';
}