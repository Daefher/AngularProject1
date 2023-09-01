import { Pokemon } from "./pokemon"; 
export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}
