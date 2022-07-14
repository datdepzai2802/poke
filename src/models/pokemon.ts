export interface Ipokemons {
    id:number;
    name: string;
    type: any[];
    image: string;
}
export interface Ipokemon extends Ipokemons{
    abilities: any[];
    height: number;
    weight: number;
}
