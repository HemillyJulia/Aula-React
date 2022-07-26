
import './App.css';
import Condicional from './Components/Condicional';
// A parte de fora da função é onde importaremos outros arquivos
//Posso criar uma função dentro da minha função.
function App() {

  return (
    //Eu preciso estar entregando os meus arquivos dentro de um elemento pai.
    //Não posso ter diversos elementos no mesmo nível no retorno
    
    //A maneira correta de declarar o atributo Class no react é utilisando className
    <div className="App">
      
     <h1> Renderização Condicional</h1> 
     <Condicional/>
   
    </div>
  );
}

//Aqui é onde iremos exportar nosso arquivo
export default App;




