import React from 'react';
import Botao from '../Botao';
class Formulario extends React.Component {
    render(){ //Função obrigatória 
        return ( //A função render retorna:
            <form action="">
                <div>
                    <label htmlFor='tarefa' > 
                        Adicione um novo estudo
                        <input
                        type="text"  
                        name="tarefa" 
                        id="tarefa" 
                        placeholder='porque você quer estudar' 
                        required
                        />
                    </label>

                </div>
                <div>
                    <label htmlFor='tempo'>       
                        Tempo           
                        <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                        />
                    </label>
                </div>
            </form>
        )
    }
}
export default Formulario;