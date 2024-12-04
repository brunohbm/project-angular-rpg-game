import { PlayerService } from "../../services/player/player.service";
import IItem from "../items/IItem";

export default interface IMob {
    name: string;
    description: string;
    health: number;
    xp: number;
    coins: number;
    strength: number;
    lot?: IItem;
    
    receiveAttack(value: number): void;
    attack(target: PlayerService): void;
}