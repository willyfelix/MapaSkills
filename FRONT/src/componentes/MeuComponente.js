import React, { useState, useEffect} from 'react'
import Select from 'react-select';
import './MeuComponente.css'


const MeuComponente = () => {

    const [subDivisoes, setSubDivisoes] = useState([]);
    const [cargos, setCargos] = useState([]); 
    const [tecnologias, setTecnologias] = useState([]); 
    const [skills, setSkills] = useState([]);

    // componentDidMount
    useEffect(() => {
        carregarSubDivisoes();
    }, []);

    async function carregarSubDivisoes() {
        const retorno = await fetch('http://localhost:8080/subdivisoes.php?tc_id=1');
        const subdivisoes = await retorno.json();

        const options = subdivisoes.map((item) => {
            return {
                value: item.ID,
                label: item.NOME
            }
        });

        setSubDivisoes(options);
    }
    
    async function carregarCargos (id) {
        console.log(id)
        const retorno = await fetch(`http://localhost:8080/cargos.php?subdivisao_tc_id=${id}`);
        const lista = await retorno.json();

        const options = lista.map((item)=> {
            return {
                value: item.ID,
                label: item.NOME
            }
        });

        setCargos(options);
    }

    async function carregarTecnologias (id) {
        const retorno = await fetch(`http://localhost:8080/tecnologias.php?cargo_id=${id}`);
        const tecnologia = await retorno.json();

        
        const options = tecnologia.map((item)=> {
            return {
                value: item.ID,
                label: item.NOME
            }
        });

        setTecnologias(options);
    }
        
    
    async function carregarSkills (id) {
        const retorno = await fetch(`http://localhost:8080/skills.php?tecnologia_id=${id}`);
        const skills = await retorno.json();
    
    }
    
    return (

        <div>

            <Select className="custom-select" options={subDivisoes}  onChange={(e) => {
                carregarCargos(e.value)
            }}/>

            <Select className="custom-select"  options={cargos} onChange={(e) => {
                carregarTecnologias(e.value)
            }}/>
            
            <Select className="custom-select"  options={tecnologias} onChange={(e) => {
                carregarSkills(e.value)
            }}/>

        </div>
    );
        
};
    
export default MeuComponente; 
    
    // tem uma lista
    // gerar html baseado na lista
    // exemplo:
    /**
    <option value='backend'>backend</option>
    <option value='frontend'>frontend</option>
    */
    
    
    // // forma 01
    // let options;
    // for(let i = 0; i < subDivisoes.length; i++) {
    //     let subdivisao = subDivisoes[i];
    //     options += <option value={subdivisao}>{subdivisao}</option>;
    // }
