import { Container, Form, Background } from "./styles";
import { api } from "../../services/api"
import { useState } from "react";
import { Input } from "../../components/Input"
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

;

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    
    function handleSignUp(){
        if( !name || !email || !password){
            return alert("Preencha todos os campos")
        }

        api.post("/users", {name, email, password})
        .then(()=>{
            alert("Usuario cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        });
    }
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    <ButtonText title="Voltar para o login"/>
                    
                </Link>
            </Form>
            <Background/>
                
        </Container>
    );
}