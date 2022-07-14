import { instance } from "./instance";

export const getAll = () => {
    return instance.get("/pokemons");
};
  
export const get = () => {
    return instance.get("/pokemons?_limit=12")
}
  
export const read = (id) => {
    return instance.get(`/pokemons/${id}`)
}