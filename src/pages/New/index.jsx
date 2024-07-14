import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function New(){
    return (
        <Container>
            <Header/>
            <Link to="/">
                <ButtonText title="Voltar" />   
            </Link>
            <main>
                <Form>
                    <header>
                        <h1>Novo filme</h1>      
                    </header>

                    <section>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" /> 
                    </section>
                    

                    <Textarea placeholder="Observações"/>
                    
                    <Section title="Marcadores">
                        <div className="tags"> 
                            <NoteItem value="Drama"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div> 
                    </Section>
                  
                    <div className="buttons">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>  
                    </div>
                    
                </Form>
            </main>
        </Container>
    );
}