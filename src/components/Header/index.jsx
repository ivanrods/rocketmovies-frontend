
import { Container, Profile, Logo} from "./styles";
import { Input } from "../Input";
import { useAuth } from '../../hooks/auth';
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;
    return (
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>

            <Input placeholder="Pesquilar pelo título" />

            <Profile >
                <div>
                    <strong>{user.name}</strong>
                    <span onClick={signOut}>Sair</span>

                </div>
                <Link to="/Profile">
                    <img src={avatarUrl}
                    alt={user.name}/>
                </Link>
                
                
            </Profile>
            
        </Container>
    );
}