import { PokemonAbility } from "./pokemon-ability";
import { PokemonGamesIndices } from "./pokemon-games-indices";
import { PokemonSprites } from "./pokemon-sprites";

export interface PokemonInfo {

       
    sprites: PokemonSprites;

    abilities : PokemonAbility[];

    game_indices:  PokemonGamesIndices[];


}
