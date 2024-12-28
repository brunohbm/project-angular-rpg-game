import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class EaringItem implements IItem {
    key = 'brinco_ancestral';
    name: string = 'Brinco do Guardião Ancestral';
    description: string = 'O Brinco do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.EARING;
    variation = ItemVariationEnum.EPIC;
    slots = ITEM_SLOTS.EARING;
    imageSrc: string = '/assets/images/earing.png';
}