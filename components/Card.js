import styles from "../src/styles/Layout.module.css"
import { useRef } from 'react'
import {useEffect} from 'react'

const teste = [];
teste.sp


export default function Card({ id, tarefa, idCheckbox, idInput, setCard,card}) {
    
    const tarefaRef = useRef(null);
    const boxRef = useRef(null);
    const containerRef = useRef(null);
    let deletar;
    useEffect(() => {
        deletar = (id) => {

            setCard((prevCard) => prevCard= card.filter((card) => card.id != id))
        
        
        }
    });


    const tarefaExecutada = (id,idCheck) => {
        

        
        
        const tarefaCheck = document.getElementById(idCheck)
        if (boxRef.current.checked) {
            tarefaRef.current.style.textDecoration = "line-through";
            tarefaRef.current.style.backgroundColor = "#7FFFD4"
            
        } else {
            tarefaRef.current.style.textDecoration = "none";
            tarefaRef.current.style.backgroundColor = "white"
            
            
        }
        
        
        console.log("Clicou aqui."+id)
    }
    
    window.tarefaExecutada = tarefaExecutada;

    

    return (
       <>
            <div className={styles.containerDeletar} ref={containerRef} key={id}><input className={styles.marker} type="checkbox" id={idCheckbox} onClick={() => tarefaExecutada(idInput, idCheckbox)} ref={boxRef} /><div className={styles.tarefa} type="text" value={tarefa} id={idInput} ref={tarefaRef} >{tarefa}</div> <button onClick={() => deletar(id)}>Deletar</button> </div >
        </>
        
      
      
  );
    
}