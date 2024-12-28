import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class BeltItem implements IItem {
    key = 'cinto_guardiao_ancestral';
    name: string = 'Cinto do Guardião Ancestral';
    description: string = 'O Cinto do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.BELT;
    variation = ItemVariationEnum.LEGENDARY;
    slots = ITEM_SLOTS.BELT;
    imageSrc: string = '/assets/images/belt.png';
}