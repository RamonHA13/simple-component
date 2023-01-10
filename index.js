const root = document.getElementById("root");
const url = "https://rickandmortyapi.com/api/character";
let apiResults;

const componentUserCard = props => {

    return( root.innerHTML +=  `
    <div>
        <h2>User no: ${props.id}</h2>
        <picture>
            <img src='${props.image}' />
        </picture>
        <p>Nombre: ${props.name}</p>
        <p>Gender: ${props.gender}</p>
    </div>`)
};
async function getData(){
    let datos = await fetch(url);
    datos = await datos.json();
    
    const {info, results} = datos;
    console.log(results)

    results.map((element) => {
        return componentUserCard(element)
    })
}

getData()

        
// componentUserCard(users);