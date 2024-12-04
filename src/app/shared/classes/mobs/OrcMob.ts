import { PlayerService } from "../../services/player/player.service";
import IMob from "./IMob";

export default class OrcMob implements IMob {
    name: string = 'Ork';
    description: string = 'Um grande ork que vive nas planices do norte.';
    health: number = 100;
    xp: number = 10;
    coins: number = 5;
    strength: number = 10;

    receiveAttack(value: number) {
        this.health -= value;
    }

    attack(target: PlayerService) {
        target.receiveAttack(this.strength);
    }
}