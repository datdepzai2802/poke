import { read } from "../api/pokemon";
import { Ipokemon } from "../models/pokemon";
import footer from "./footer";
import header from "./header";

const PokemonDetail = {
    render: async function(id){
        const data = await read(id);
        const pokemon:Ipokemon = data.data
        return /*html*/`
        ${header.render()}
        <section
        class="md:flex max-w-[1240px]  w-full bg-white px-[30px] py-[30px] shadow-xl m-auto my-[30px]"
      >
      <div
                    class="bg-gradient-to-t  from-violet-100 to-${pokemon.type[0].type.name} rounded-md max-w-[300px] w-full py-[20px] text-center"
                  >
                    <span class="text-[35px] text-[#3a3a3a9f] font-bold tracking-[4px]"
                      >#${pokemon.id}</span
                    >
                    <img
                      src="${pokemon.image}"
                      class="w-full max-w-[200px] m-auto"
                    />
                    <span
                      class="capitalize text-[#343434] font-semibold text-[22px] tracking-[0px]"
                      >${[pokemon.name]}</span
                    >
                  </div>

                  <div class="ml-[30px]">
                    <div>
                      <h3 class="uppercase font-bold text-[18px] text-[#343434]">
                        base stats
                      </h3>
                      <div class="mt-[6px]">
                        <div class="flex items-center mt-[7px] max-w-[500px] w-full">
                        <p class="mr-[30px] leading-7 max-w-[60px] w-full">Height:</p> <p>${pokemon.height}</p>
                        </div>
                        <div class="flex items-center mt-[7px] max-w-[500px] w-full">
                        <p class="mr-[30px] leading-7 max-w-[60px] w-full">Weight:</p> <p>${pokemon.weight}</p>
                        </div>
                        <div class="flex mt-[7px] max-w-[500px] w-full">
                        <p class="mr-[30px] leading-7 max-w-[60px] w-full">Abilities:</p> <p class="capitalize w-[100px]">${pokemon.abilities.map(abilitie => {if(abilitie.is_hidden){return `${abilitie.ability.name} <br>`}}).join("")}</p> 
                        </div>
                        <div class="flex mt-[7px] max-w-[500px] w-full">
                        <p class="mr-[30px] leading-7 max-w-[60px] w-full">Type:</p> <p class="capitalize">${pokemon.type.map(type => `${type.type.name}<br>`).join("")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="w-full text-right text-[30px] oder:"><a href="/" ><i class="fa-solid fa-xmark"></i></a></div>
      </section>
      ${footer.render()}
        `
    }
}

export default PokemonDetail;