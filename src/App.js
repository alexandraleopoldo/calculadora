import { useState } from "react";
import * as S from "./style";
// importe tudo como s de nome do arquivo

export default function App() {
  // variavel de estado, função atualizadora.
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (event) => {
    setPrimeiroValor(Number(event.target.value));
    console.log(event.target.value);
  };
  const capturandoSegundoValor = (event) => {
    setSegundoValor(Number(event.target.value));
    console.log(event.target.value);
  };
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  const limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
  };
  return (
    <S.Main>
      <S.GlobalStyle />
      <S.Container>
        <S.H1>Calculadora</S.H1>
        {/* onChange é pra capturar o que o usuário está digitando */}
        <S.Input
          type="number"
          placeholder="Digite um número"
          onChange={capturandoPrimeiroValor}
          value={primeiroValor}
        />
        <S.Input
          type="number"
          placeholder="Digite outro número"
          onChange={capturandoSegundoValor}
          value={segundoValor}
        />
        <S.P>Escolhar qual operaçaõ quer realizar:</S.P>
        <S.Section>
          <S.Button onClick={soma}>+</S.Button>
          <S.Button onClick={subtracao}>-</S.Button>
          <S.Button onClick={multiplicar}>x</S.Button>
          <S.Button onClick={divisao}>/</S.Button>
          <S.Button onClick={limpar}>Limpar</S.Button>
        </S.Section>
        <S.H2>Resultado: {resultado}</S.H2>
      </S.Container>
    </S.Main>
  );
}
