# Testes Automatizados da Calculadora

## Requisitos

- Node.js e npm instalados
- Navegador Chrome instalado

## Instalação das Dependências

Antes de rodar os testes, você precisará instalar as dependências do projeto. Para isso, siga os passos abaixo:

1. Clone o repositório para sua máquina local:

   ```sh
   git clone https://github.com/Dudu-Souza/calculadora-teste.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd calculadora-teste
   ```

3. Instale as dependências necessárias usando o npm:

   ```sh
   npm install
   ```

## Executando os Testes

Após instalar as dependências, você pode rodar os testes automatizados com o comando abaixo:

```sh
npm test
```

Isso irá executar os testes usando o Mocha, com o Selenium WebDriver simulando a interação do usuário e o Chai validando os resultados esperados.

## Estrutura dos Testes

Os testes foram escritos para cobrir os principais cenários de uso da calculadora, incluindo:

- Operações matemáticas básicas: soma, subtração, multiplicação e divisão.
- Casos de erro: divisão por zero e entrada inválida.

Os testes garantem que a calculadora funcione corretamente em todos esses cenários, simulando o uso real do usuário.

## Observações

- Caso encontre problemas ao rodar os testes, verifique se o Chrome está instalado e atualizado.
- Certifique-se de que todas as dependências foram instaladas corretamente.
- Caso precise alterar o caminho do navegador ou configurar outras opções do Selenium, edite o arquivo de configuração dos testes conforme necessário.