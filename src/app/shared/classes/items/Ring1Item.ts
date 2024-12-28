import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class Ring1Item implements IItem {
    key = 'anel_1_ancestral';
    name: string = 'Anel do Guardião Ancestral 1';
    description: string = 'O Anel do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.RING;
    variation = ItemVariationEnum.COMMON;
    slots = ITEM_SLOTS.RING;
    imageSrc: string = '/assets/images/ring.png';
}