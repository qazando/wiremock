## Projeto de mock da QAZANDO

Esse projeto temos como exemplo uma api de carros.

Temos algumas situações mapeadas no nosso mock que ao registrar algumas massas em específico a gente consegue um determinado valor de resposta.


## Exemplos de massas abaixo:

- Cadastro de veículo: Se o cadastro de veículo for igual a um "fusca" no parâmetro "model". = O mock tem que responder 201
- Cadastro de veículo: Se o cadastro de veículof for igual a um "up tsi" no parâmetro "model" = O mock tem que responder 500

# Como subir o mock.

- baixar o projeto
- Acessar a pasta do projeto
- Rodar o seguinte comando para subir o mock: java -jar wiremock-standalone-3.9.1.jar


OBS: Precisa ter o java instalado em sua máquina na versão 11 pra cima. 

