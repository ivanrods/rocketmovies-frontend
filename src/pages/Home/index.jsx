import { Container, Content, Line, NewMovie } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';


export function Home() {
    return (
        <Container>
            <Header/>
            <Line>
                <h1>Meus filmes</h1>
               
                <NewMovie to="New">
                    <FiPlus/>
                    Adicionar filme
                </NewMovie>
            </Line>
            <Content>
                <main>
                    <Section>
                    <Note to="/Details" data={{title: 'Interestellar',
                         tags:[
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Família'}
                            ]
                         }}/>   
                         <Note to="/Details" data={{title: 'Interestellar',
                         tags:[
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Família'}
                            ]
                         }}/>    
                         <Note to="/Details" data={{title: 'Interestellar',
                         tags:[
                            {id: 1, name: 'Ficção Científica'},
                            {id: 2, name: 'Drama'},
                            {id: 3, name: 'Família'}
                            ]
                         }}/>    
                         
                    </Section>
                </main>
                
            </Content>
            
        </Container>
    )
}