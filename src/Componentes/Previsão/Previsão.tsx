import './Previsão.css'
import circularAPI, { Rotas } from '../../APIS/circularAPI'
import {useRef, useState} from 'react'
import { Ponto } from '../../APIS/circularAPI'
import Horario from './Horario'


function Previsão() {
  const horarios = circularAPI.horariosDate
  const [ponto, setPonto] = useState<Ponto>('Letras')

  const select = useRef<HTMLSelectElement>(null)
  function onchangeHandler(){
    const element = select.current!
    const ponto = element.options[element.selectedIndex].value
    setPonto(ponto as Ponto)
  }
  const pontos = circularAPI.Pontos

  return (
      
      <div className='Previsão'>
        <header>
          <h1>Previsão do Circular</h1>
        </header>
        <main>
        <section className='sectionSelect'>
            <label htmlFor="pontos">Ponto Atual:</label>
              <select ref={select} onChange={onchangeHandler}>
                {pontos.map( (ponto) => {
                  return <option value={ponto}>{ponto}</option>
                })}
              </select>
          </section>     
          <div className='Previsões'>
            {
            horarios.rotas.map( 
                (rota:Rotas) => {
                    const horas = circularAPI.calcularHorarioRestante(rota, ponto, horarios)
                    const horaChegada = horas.tempo
                    const restante = horas.restante
                    const restanteInt = parseInt(restante.replace('m', ''))

                    return restanteInt < 0 ? null : (
                      <Horario 
                      horaChegada={horaChegada} 
                      horaPrevisão={restante} 
                      nome={rota.nome} 
                      blinkColor={restanteInt < 15 ? 'green' : restanteInt < 30 ? 'orange' : 'red'}
                      />
                    )
                }
            )
            }
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
