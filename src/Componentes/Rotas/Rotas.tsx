import './Rotas.css'
type Rotas= {
  nome: string
  id: number
  pontos: string[]
}
const rotas: Rotas[] = [
  { nome: "teste", id: 1, pontos: ["ponto1", "ponto2"] },
  { nome: "teste", id: 2, pontos: ["ponto1", "ponto2", "ponto3"] },
  { nome: "teste", id: 3, pontos: ["ponto1"] },
  { nome: "teste", id: 4, pontos: ["ponto1", "ponto2"] }
]
function Rotas() {
  const pontos:string[] = rotas[0].pontos
  return (
      
      <div className='Rotas'>
        <header>
          <h1>Rotas do Circular</h1>
                 
        </header>
        <main>
        <section>
            <label htmlFor="cars">Escolha uma rota:</label>
              <select id="cars" name="cars">
                <option value="volvo">anel</option>
                <option value="saab">anel</option>
                <option value="fiat">anel</option>
                <option value="audi">anel</option>
              </select>
          </section>     
          <div className='Pontos'>
          {
          pontos.map( 
            (ponto:String) => {
            return (
              <div className='Ponto'>
                <h3>{ponto}</h3>
                <img src='https://www2.ufjf.br/eletrica_potencia/wp-content/uploads/sites/523/2014/08/ICE.jpg'>
                </img>
              </div>
            )
          })}
          </div>
         
        </main>
         
      </div>
  )
}

export default Rotas