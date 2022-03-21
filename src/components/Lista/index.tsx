import React from 'react';

function Lista() {
    const tarefas = [
        {
            "tarefa": "React JS",
            "tempo": "04:00:00"
        },
        {
            "tarefa": "Javascript",
            "tempo": "02:00:00"
        }
    ]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item,index) => (
                        <li>
                            <h3>
                                {item.tarefa}
                            </h3>
                            <span>
                                {item.tempo}
                            </span>
                        </li>
                    ))
                }
                
            </ul>
        </aside>
    )
}

export default Lista;