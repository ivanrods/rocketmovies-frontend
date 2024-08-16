import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"
import { api } from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTag] = useState("");

    const navegate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTags]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        if(!title){
            return alert("Digite o título da nota.")
        }
        if(newTags){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em dacicionar ou deixe o campo vazio.")
        }
       
        await api.post("/movie_notes", {
            title,
            description,
            tags
        });
        alert("Nota criada com sucesso!")
        navegate("/")
    }
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
                    <Input 
                        placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}
                    />
                        <Input placeholder="Sua nota (de 0 a 5)" /> 
                    </section>
                    

                    <Textarea 
                placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                /> 
                    
                    <Section title="Mardadores">
                    <div className='tags'>
                        {
                            tags.map((tag, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={()=> {handleRemoveTag(tag)}}
                                /> 
                            ))  
                        }
                        
                        <NoteItem 
                            isNew 
                            placeholder="Novo tag"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTags}
                            onClick={handleAddTag}
                        />
                    </div>
                    
                </Section>
                  
                    <div className="buttons">
                        <Button title="Excluir filme"/>
                       
                        
                        <Button 
                    title="Salvar alterações"
                    onClick={handleNewNote}
                    />
                    </div>
                    
                </Form>
            </main>
        </Container>
    );
}