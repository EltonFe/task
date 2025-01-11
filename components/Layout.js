
import styles from "../src/styles/Layout.module.css"
import Card from "./Card"
import { useRef } from 'react'; 
import { useEffect } from 'react';
import { useState } from "react";



var i = 0;





  

export default function Layout() {
    var ContainerRef = useRef(null);
    var tasks = [];
    const [card, setCard] = useState([]);
    const [j, setJ] = useState(0);
    const inputRef = useRef(null);

    /*const inputValue = document.getElementById("input");
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            j++;

                
                
            if (inputValue.value == "" || typeof inputValue == undefined || inputValue == null) {
                confirm("Digite uma Tarefa.")
            } else {

                const newCard = {
                    id: j,
                    idInput: `input${j}`,
                    idCheckbox: `checkbox${j}`,
                    inputValue: inputValue.value
                }
                 
                setCard([...card, newCard]);
                inputValue.value = "";

                    const tarefa = `
                <div id="${j}"><input id="checkbox${j}" type="checkbox" onClick="tarefaExecutada('input${j}','checkbox${j}')"/><input value="${inputValue.value}" id="input${j}" placeholder="Digite aqui sua tarefa" type="text" disabled="true" />
                <button onClick="disabledDelete(${j})">Deletar</button></div>
            `;
                    if (ContainerRef.current) {
                        inputValue.value = "";
                        ContainerRef.current.innerHTML += tarefa;
                    }
                
                
            }
        }
    }
        
  
    */
    useEffect(() => {

        const inputValue = document.getElementById("input");
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
               

                
                
                if (inputRef.current.value.trim() == ""  || !inputRef.current) {
                    confirm("Digite uma Tarefa.")
                } else {

                    const newCard = {
                        id: j+1,
                        idInput: `input${j+1}`,
                        idCheckbox: `checkbox${j+1}`,
                        inputValue:inputValue.value
                    } 
                 
                    setCard((prevCards) => [...prevCards, newCard]);
                    setJ((prevJ) => prevJ + 1);
                    
                    
                    inputRef.current.value = "";

              /*     const tarefa = `
                <div id="${j}"><input id="checkbox${j}" type="checkbox" onClick="tarefaExecutada('input${j}','checkbox${j}')"/><input value="${inputValue.value}" id="input${j}" placeholder="Digite aqui sua tarefa" type="text" disabled="true" />
                <button onClick="disabledDelete(${j})">Deletar</button></div>
            `;
                    if (ContainerRef.current) {
                        inputValue.value = "";
                        ContainerRef.current.innerHTML += tarefa;
                    }
                
                */
                }
            }
        
            }
        

        inputValue.addEventListener('keydown', handleKeyDown);

        // Limpeza para evitar múltiplos listeners
        return () => {
            if (inputValue) {
                inputValue.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [j]);




    const  funcaoEnter=()=>{
    
        const inputValue = document.getElementById("input");
        /*inputEnter.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                j++;
                const inputValue = document.getElementById("input");
                if (inputValue.value == "" || typeof inputValue == undefined || inputValue == null) {
                    confirm("Digite um valor válido.")
                } else {
                    const tarefa = `
                    <div id="${j}"><button onClick="tarefaExecutada('input${j}')">Feito</button><input value="${inputValue.value}" id="input${j}" placeholder="Digite aqui sua tarefa" type="text" disabled="true" />
                    <button onClick="disabledDelete(${j})">Deletar</button></div>
                `;
                    if (ContainerRef.current) {
                        inputValue.value = "";
                        ContainerRef.current.innerHTML += tarefa;
                    }
                
                
                }
            }
        })*/
    }

    
    
    
    
    function disabledDelete(id) {
        const deleteId = document.getElementById(id);
        deleteId.remove();
    }

    const tarefaExecutada = (id,idCheck) => {
        

        i++;
        const tarefa = document.getElementById(id);
        const tarefaCheck = document.getElementById(idCheck)
        if (tarefaCheck.checked) {
            tarefa.style.textDecoration = "line-through";
            tarefa.style.backgroundColor = "#7FFFD4"
            
        } else {
            tarefa.style.textDecoration = "none";
            tarefa.style.backgroundColor = "white"
            
            
        }
        
        
        console.log("Clicou aqui."+id)
    }

    if (typeof window !== 'undefined') {
        window.disabledDelete = disabledDelete;
        window.tarefaExecutada = tarefaExecutada;
        window.funcaoEnter = funcaoEnter;
    }
    
    

    const handleClick = () => {
        
        const inputValue = document.getElementById("input");
        if (inputRef.current.value.trim() == "" || !inputRef.current) {
            confirm("Digite uma Tarefa.")
        } else {
            const newCard = {
                id: j,
                idInput: `input${j}`,
                idCheckbox: `checkbox${j}`,
                inputValue:inputValue.value
            } 
         
            setCard((prevCards) => [...prevCards, newCard]);
            setJ((prevJ) => prevJ + 1);
                    
            
            inputRef.current.value = "";
           /*const tarefa = `
                <div id="${j}" ><input id="checkbox${j}" type="checkbox" onClick="tarefaExecutada('input${j}','checkbox${j}')"/><input value="${inputValue.value}" id="input${j}" placeholder="Digite aqui sua tarefa" type="text" disabled="true" />
                <button onClick="disabledDelete(${j})">Deletar</button></div>
            `;
            if (ContainerRef.current) {
                inputValue.value = "";
                ContainerRef.current.innerHTML += tarefa;
            }
            */
            
        }
  };



    

    return (
        <>
        
            
        <main className={styles.main}>
                
                <h1>Lista de Tarefas</h1>

                
                   <div className={styles.containerInserir}> <input id="input" type="text" placeholder="Digite a tarefa" ref={inputRef} />
                        <button onClick={handleClick} id="btn-inserir">Inserir</button>
                    </div>
                    
                    

                
                    
                    {card.map((value) => (
                        <Card id={value.id} idInput={value.idInput} idCheckbox={value.idCheckbox} tarefa={value.inputValue} card={card} setCard={ setCard} key={value.id}/>
                    ))}
                    
                
               
                
        </main>

        
        </>
    )
}