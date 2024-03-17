'use client'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "../page.css"
import axios from "axios"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa";
import "./style.css"

export default function SendEmail() {
        const [dadosFormulario, setDadosFormulario] = useState({
            nome: '',
    email: '',
    numeroCelular: '',
    cep: '',
    numeroComplemento: '',
    precisaDe: '',
    servicoPara: '',
    local: '',
    situacaoLocal: '',
    inicioServico: '',
    temProjeto: '',
    servicosNecessarios: [],
    metragemTotal: '',
    ambientesTrabalhados: [],
    mensagem: '',
        });

        const [loading, setLoading] = useState(false);
        const [sucess, setSucess] = useState(false);
        const [error, setError] = useState(null);

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            if (type === 'checkbox'){
                const isChecked = checked;
                setDadosFormulario((prevData) => ({
                    ...prevData,
                    [name]: isChecked
                    ? [...prevData[name], value]
                    : prevData[name].filter((item) => item !== value),
             }));
            } else{
            setDadosFormulario((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
    };


        const handleSubmit = async (e) => {
            e.preventDefault();

            setLoading(true);

            try {
                await axios.post('http://localhost:5000/api/sender', dadosFormulario);
                setSucess(true);
                console.log("E-mail enviado com sucesso");
            } catch (error) {
                console.error('Erro ao enviar e-mail', error);
                setError("Erro ao enviar e-mail. Por favor, tente novamente mais tarde.");
            }

            setLoading(false);
        };

    return(
        <div className="hero">
            <Header/>
            <div className="w-full flex items-center justify-center pb-4 min-h-[100vh] ">
                {!sucess ? (
                <div className="flex flex-col mt-[190px] bg-gray-500 bg-opacity-55 rounded-xl w-[70%] majorfour:w-[85%]">
                    <form onSubmit={handleSubmit} className="form-orcamento flex flex-col py-3 gap-3 text-2xl items-center justify-center
                     midfour:text-lg">
                        <label>
                            Nome:
                            <input type="text" name="nome" required value={dadosFormulario.nome} onChange={handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required value={dadosFormulario.email} onChange={handleChange} />
                        </label>
                        <label>
                            Celular (DDD+Número):
                            <input type="tel" name="numeroCelular" required value={dadosFormulario.numeroCelular} onChange={handleChange} />
                        </label>
                        <label>
                            CEP (local do serviço):
                            <input type="text" name="cep" value={dadosFormulario.cep} onChange={handleChange} />
                        </label>
                        <label>
                            Número e complemento do local:
                            <input type="text" name="numeroComplemento" value={dadosFormulario.numeroComplemento} onChange={handleChange} />
                        </label>           
                        <label>
                        Precisa de:
                        <select name="precisaDe" required value={dadosFormulario.precisaDe} onChange={handleChange}>
                        <option value="reforma">Reforma</option>
                        <option value="manutencao">Manutenção</option>
                        </select>
                    </label>
                    <label>
  Serviço para:
  <select name="servicoPara" id="">
    <option value="apartamento">Apartamento</option>
    <option value="casa">Casa</option>
    <option value="comercio">Comércio</option>
    <option value="condominio">Condomínio</option>
  </select>
</label>
      <label>
  Ambientes Trabalhados (múltipla escolha):
  {['reforma geral', 'cozinha', 'banheiro', 'sala', 'outro'].map((option) => (
    <div key={option}>
      <input
        type="checkbox"
        name="ambientesTrabalhados"
        value={option}
        checked={dadosFormulario.ambientesTrabalhados.includes(option)}
        onChange={handleChange}
      />
      <span>{option}</span>
    </div>
  ))}
</label>
        <label>
        O local é:
        <select name="situacaoLocal" value={dadosFormulario.situacaoLocal}
          onChange={handleChange}>
        <option value="usado">Usado</option>
          <option value="casa">Novo</option>
          <option value="em construçao">Em construção</option>
          </select>
                </label>
                <label>
        Qual a situação do local?:
        <select name="local" value={dadosFormulario.local}
          onChange={handleChange}>
        <option value="habitado">Habitado/em funcionamento</option>
          <option value="vazio">Vazio</option>
          <option value="nao entregue">Não entregue</option>
          </select>
                </label>
                <label>
        Metragem total:
        <select
          name="metragemTotal"
          value={dadosFormulario.metragemTotal}
          onChange={handleChange}
        >
          <option value="até 20m²">Até 20 m²</option>
          <option value="até 50m²">Até 50 m²</option>
          <option value="até 100m²">Até 100 m²</option>
          <option value="até 150m²">Até 150 m²</option>
          <option value="até 200m²">Até 200 m²</option>
          <option value="acima de 200m²">Acima de 200 m²</option>
          <option value="Grandes metragens 1500m²">Grandes metragens 1500 m²</option>
        </select>
      </label>
      <label>
        Quando pretende iniciar o serviço?:
        <select name="inicioServico" value={dadosFormulario.inicioServico} onChange={handleChange}>

        <option value="imediato/urgente">Imediato/Urgente</option>
          <option value="dentro de 2 meses">Dentro de 2 meses</option>
          <option value="dentro de 6 meses">Dentro de 6 meses</option>
          <option value="6 meses a 1 ano">Entre 6 meses e 1 ano</option>
          <option value="Sem data definida">Sem data definida</option>
          </select>
                </label>
      <label>
        Tem projeto?:
        <select name="temProjeto" value={dadosFormulario.temProjeto} onChange={handleChange}>

        <option value="sim">Sim</option>
          <option value="nao">Não</option>
          <option value="Precisa de projeto">Preciso de projeto</option>
          <option value="Não precisa de projeto">Não é Preciso de projeto</option>
          </select>
                </label>
                <label>
                Serviços Necessários:
                {['Pintura', 'Marcenaria', 'Mármores', 'Pisos e revestimento'].map((option) => (
          <div key={option}>
          <input type="checkbox" name="servicosNecessarios" value={option}
          checked={dadosFormulario.servicosNecessarios.includes(option)}
          onChange={handleChange} id="" />
          <span>{option}</span>
          </div>
          ))}
          </label>
      <label className="flex flex-col">
        <p>Escreva o que quiser:</p>
        <textarea className="text-black w-[300px] bg-slate-300" name="mensagem" value={dadosFormulario.mensagem} rows="6" onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
                    </form>
                </div>
                ) : (
                  <div className="flex flex-col mt-[190px] bg-gray-500 bg-opacity-55 rounded-xl w-[70%] majorfour:w-[85%]">
                    {loading ? (
                      <div className="flex flex-col items-center">
                      <p className="text-white">Carregando...</p>
                      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                    ) : error ? (
                      <p style={{ color: "red" }}>{error}</p>
                    )
                    : (
                      <div className="h-[400px] flex flex-col items-center gap-3 justify-center text-center">
                      <p className="text-2xl font-bold">E-mail enviado com sucesso!</p>
                      <FaCheckCircle className="text-green-500 bg-white rounded-full text-6xl" />
                      </div>
                    )}
                  </div>
                )}
            </div>
            <Footer/>
        </div>
    )
    }