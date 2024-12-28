import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class HamletItem implements IItem {
    key = 'capacete_ancestral';
    name: string = 'Capacete do Guardião Ancestral';
    description: string = 'O Capacete do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.HELMET;
    variation = ItemVariationEnum.LEGENDARY;
    slots = ITEM_SLOTS.HELMET;
    imageSrc: string = '/assets/images/helmet.png';
}