import './App.css';
import "./stylesheet/gridGallery.css"
import HeaderComponent from "./components/HeaderComponent";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <div className="App">
      <HeaderComponent
        title="Galería de Imágenes con React"
        image="https://img.icons8.com/ios-glyphs/50/22C3E6/react.png"
      />
      <div className="container mt-5">
        <div className="grid-container">
          <CardComponent
            image="https://placedog.net/250/234"
            title="Perrito 1"
            description="Perrito muy lindo que le gusta comer platanos"
          />
          <CardComponent
            image="https://placedog.net/250/233"
            title="Perrito 2"
            description="Perrito muy lindo que le gusta comer sandias"
          />
          <CardComponent
            image="https://placedog.net/250/232"
            title="Perrito 3"
            description="Perrito muy lindo que le gusta comer manzanas"
          />
          <CardComponent
            image="https://placedog.net/250/236"
            title="Perrito 4"
            description="Perrito muy lindo que le gusta comer uvas"
          />
          <CardComponent
            image="https://placedog.net/250/235"
            title="Perrito 5"
            description="Perrito muy lindo que le gusta comer frambuesas"
          />
          <CardComponent
            image="https://placedog.net/251/231"
            title="Perrito 6"
            description="Perrito muy lindo que le gusta comer humanos"
          />
          <CardComponent
            image="https://placedog.net/250/237"
            title="Perrito 7"
            description="Perrito muy lindo que le gusta comer naranjas"
          />
          <CardComponent
            image="https://placedog.net/250/238"
            title="Perrito 8"
            description="Perrito muy lindo que le gusta comer frutillas"
          />
        </div>
      </div>
      <FooterComponent
        title="Galeria"
        description="Esta es una galeria de perros, y tengo que hacer esta descripcion porque me pedian hacer una descripcion corta sobre la galeria en el desafio creo que esto ya es lo suficientemente corta."
        logo="https://img.icons8.com/ios-filled/50/7f8284/doge.png"
        copyleft="https://img.icons8.com/ios-glyphs/20/7f8284/copyleft.png"
        copyleftDescriptionOne="El codigo fuente de esta pagina se distribuye bajo la licencia"
        github="https://img.icons8.com/ios-glyphs/30/000000/ffffff/github.png"
        licence="GNU Affero General Public License"
        licenceLink="https://www.gnu.org/licenses/agpl-3.0.en.html"
        source="SourceCode&lt;__"
        sourceLink="https://github.com/Jesus-Medina/React-Gallery"
      />
    </div>
  );
}

export default App;
