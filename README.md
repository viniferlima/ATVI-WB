# ATVI-WB
## Atividade 1 (WB) - Programação Orientada a Objetos - Fatec SJC

-------------------------------------
## Descrição da atividade

Considere  que  você  é  um  empreendedor  e  está  iniciando  as  atividades  da  sua  empresa. Um  dos  primeiros clientes que lhe procurou foi um grupo forte que atua no ramo de estética, o Grupo World Beauty (WB).
O grupo WB  possui  um  modelo  de  negócio  focado  em  pequenas  unidades  espalhadas  por  várias  cidades  no país.
Cada unidade oferece serviços comumente procurados pelo público feminino como manicure, pedicure, design de sobrancelhas, corte e pintura de cabelos.
Além  destes,  também  são  oferecidos  outros  serviços  de  estética  comoremoção  de  rugas,  remoção  de manchas na pele, aplicação de Botox, tratamento para emagrecimento e redução de medidas.
O trabalho da sua empresa é desenvolver uma agenda de clientes para o grupoWB. 
Esta agenda, inicialmente, será  um  sistema  do  tipo  cli  (command-line  interface),  ou  seja,  deverá  funcionar  sem  uma  interface  gráfica muito elaborada, apenas pela linha de comando.
Além disso, cada unidade terá sua própria agenda, os dados não serão compartilhados entre as unidades do grupo WB.


## Funcionalidades

A agenda deverá ter as seguintes funcionalidadesde cadastro:

* CRUD (Create, Read, Update e Delete) de clientes.
* CRUD de produtos ou serviços.
* Registro de consumo dos produtos ou serviços que cada cliente adquiriu

Muito do que o grupo WB precisa ainda não está implementado. 
Desta forma o grupo WB listou algumas funcionalidades que o sistema precisa ter, elas são:
* Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
* Listagem de todos os clientes por gênero.
* Listagem geral dos serviços ou produtos mais consumidos.
* Listagem dos serviços ou produtos mais consumidos por gênero.
* Listagem dos 10 clientes que menos consumiram produtos ou serviços.
* Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.

Antes de entregar o sistema, sua empresa deve testá-lo, cadastrando pelo menos 30 clientes e 20 produtos. Além disso, devem ser testadas todas as funcionalidades.

## Dependências:

* npm install prompt-sync

## Como usar? 

* Assim que finalizar a instalação das dependências do projeto, utilize o comando "npm run start" ou "yarn start" (se preferir) para rodar o programa. 

* No console do terminal irá aparecer uma legenda contendo todas as operações do sistema. Basta escolher a opção desejada para ser executada, e se quiser sair do programa, escolha a opção de número 0. Veja na imagem abaixo:

![image](https://user-images.githubusercontent.com/30990193/230684353-f28bba20-0571-4501-8965-3f5d7497ccb9.png)

* Criei dois arquivos .txt contendo clientes e produtos/serviços fictícios. 
A fim de agilizar o processo de inserção de registros, criei a possibilidade de cadastrar automaticamente 30 clientes (operação 18) e também 20 produtos/serviços (operação 19) que estão contidos nesses arquivos .txt, dentro da pasta "dados".

## 
