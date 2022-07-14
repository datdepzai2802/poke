import Navigo from 'navigo'; // When using ES modules.
import listpoke from './components/listpoke';
import PokemonDetail from './components/details';

const router = new Navigo('/', {linksSelector: "a"});

const print = async function (components, id?:number){
  const app = document.getElementById('app');
  if(app) app.innerHTML = await components.render(id);
  if(components.afterRender) components.afterRender()
}

router.on({
  '/':()=> print(listpoke),
  '/pokemon/:id':(data) => {
    const id = +data.data.id
    print(PokemonDetail, id)
  }
});
router.resolve();
