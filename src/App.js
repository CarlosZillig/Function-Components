import { Container } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './Componentes/Formulario/Formulario';

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <h1>Formulario de cadastro!</h1>
      <FormularioCadastro ehValido={validaCpf}></FormularioCadastro>
    </Container>
  );

  function validaCpf(cpf) {
    if(cpf.length !== 11) {
      return {valido:false, texto:"cpf deve ter 11 digitos"}
    } else {
      return {valido:true, texto:""}
    }
  }
}

export default App;
