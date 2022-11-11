import React from 'react';
import { Button, TextField, Switch, FormControlLabel} from '@material-ui/core'
import { useState } from 'react';

function FormularioCadastro({ehValido}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErro] = useState({cpf:{valido: true, texto:""}})

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log({nome, sobrenome, cpf, promocoes, novidades})
        }}>
            <TextField 
                id="nome" 
                label="Nome:" 
                value={nome}
                variant="outlined" 
                fullWidth 
                margin="normal"
                key={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
            /> 
            <TextField 
                id="sobrenome" 
                label="Sobrenome:" 
                variant="outlined" 
                value={sobrenome}
                fullWidth 
                margin="normal"
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                
            />
            <TextField 
                id="cpf" 
                label="CPF:" 
                variant="outlined" 
                value={cpf}
                fullWidth 
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={() => {
                    const validarCpf = ehValido(cpf)
                    setErro({cpf:validarCpf})
                }}
                margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value)
                }}   
            />

            <FormControlLabel 
                label="Promocoes"
                control={<Switch 
                    name='promocoes' defaultChecked color='primary' 
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    />}
            />

            <FormControlLabel 
                label="Novidades"
                control={<Switch 
                    name='novidades' defaultChecked color='primary'
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    />}
            />

            <Button type="submit" color='primary' variant="container" fullWidth>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;