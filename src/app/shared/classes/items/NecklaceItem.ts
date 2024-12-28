import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class NecklaceItem implements IItem {
    key = 'colar_ancestral';
    name: string = 'Colar do Guardião Ancestral';
    description: string = 'O Colar do Guardião Ancestral foi forjado pelo clã dos Ferreiros Eternos em eras remotas, como presente para um rei que defendia seu povo contra demônios.';
    type = ItemTypeEnum.NECKLACE;
    variation = ItemVariationEnum.LEGENDARY;
    slots = ITEM_SLOTS.NECKLACE;
    imageSrc: string = '/assets/images/necklace.png';
}