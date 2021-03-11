import { useState } from 'react';

// imutabilidade

// usuarios = ['diego3g', 'diegosf', 'danileao']
// usuarios.push('rafacamarda')

// novoUsuarios = [...usuarios, 'rafacamarda'] // imutabilidade criar novos espaços na memória e não alterar a memória já existente 
export default function Counter() {

    const [counter, setCounter] = useState(0);

    function increment() {
        console.log('Incrementing');
        setCounter(counter + 1);
    }


    return (
        <div>
           <h2>{counter}</h2>
           <button type="button" onClick={increment}>Increment</button> 
        </div>
    )
}
