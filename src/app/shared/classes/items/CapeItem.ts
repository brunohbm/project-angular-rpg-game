import IItem, { ITEM_SLOTS, ItemTypeEnum, ItemVariationEnum } from "./IItem";

export default class CapeItem implements IItem {
    key = 'capa_ancestral';
    name: string = 'Capara Ancestral';
    description: string = 'A capa do Guardião Ancestral é uma relíquia lendária, tecida com fios mágicos que protegem seu portador contra qualquer mal.';
    type = ItemTypeEnum.CAPE;
    variation = ItemVariationEnum.COMMON;
    slots = ITEM_SLOTS.CAPE;
    imageSrc: string = '/assets/images/cape.png';
}