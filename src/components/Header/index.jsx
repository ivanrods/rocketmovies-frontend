
import { Container, Profile, Logo} from "./styles";
import { Input } from "../Input";


export function Header(){
    return (
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>

            <Input placeholder="Pesquilar pelo título" />

            <Profile to="/profile">
                <div>
                    <strong>Ivan Rordrigues</strong>
                    <span>Sair</span>

                </div>
                <img src="https://github.com/ivanrods.png" 
                alt="Foto do usuário" 
                />
                
            </Profile>
            
        </Container>
    );
}