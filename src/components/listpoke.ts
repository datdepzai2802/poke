import { Ipokemons } from "../models/pokemon";
import { get, getAll } from "../api/pokemon";
import header from "./header";
import footer from "./footer";

const listpoke = {
    render: async function(){
        const data = await getAll();
        const pokemons:Ipokemons[] = data.data
        return /*html*/`
        ${header.render()}
        <section class="pt-[30px] px-[25px] max-w-[1240px] m-auto   flex flex-wrap  items-center justify-start">
        ${pokemons.map(pokemon => `

          <a href="/pokemon/${pokemon.id}" class="m-auto max-w-[240px] mt-[30px] py-[40px] w-full text-center shadow-md hover:shadow-2xl bg-${pokemon.type[0].type.name} bg-opacity-90 cursor-pointer" data-id="${pokemon.id}" id="pokemonList">
            <div class="w-[150px] m-auto ">
              <img src="${pokemon.image}" class="w-full ">
            </div>
            <div>
            <h2 class="capitalize font-medium text-[22px] text-white font-semibold">${pokemon.name}</h2>
            <div class="mb-[10px] text-[#fff]">Type:${pokemon.type.map(type =>`
            <span class="text-[#efefef]">${type.type.name}</span>
          `).join("-")}</div>
            </div>
          </a>
        `).join("")}
        </section>

       
        ${footer.render()}
        `
    },
    
}
export default listpoke;