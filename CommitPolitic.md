# Política de Branch

Para garantir um fluxo de trabalho contínuo e de forma padronizada possibilitando o rastreamento das funcionalidades desenvolvidas, será utilizada a estratégia de Git Flow.
A implementação do Git Flow não interfere o produto final, afetando apenas o fluxo de trabalho a fim de garantir rastreabilidade e facilitar a implementação de _pipelines_ de integração e entrega contínua.
Conceitos importantes para implementação da estratégia de Git Flow: <br/>
* master: contém o código de desenvolvimento e tudo que está sendo produzido eventualmente será adicionado à master. Esta deve sempre ser a branch mais estável do projeto.
* devel: contém o código do próximo deploy, isto é, à medida que novas features são implementadas, elas são adicionadas à esta branch para passarem para uma ultima etapa antes de serem adicionadas à branch master.
* us*: são as _user stories_ (histórias de usuário). São as us que determinam quais novas features serão implementadas.
* feature/*: são as branchs de desenvolvimento para uma funcionalidade específica e elas sempre devem ser criadas à partir da branch devel. Por conveção elas tem um padrão de nomeclatura, que será explicado mais abaixo.

Exemplo do fluxo de branches:<br/>
<div>
  <img src="https://media.discordapp.net/attachments/759670081067417600/944200736768679967/branch.png" width="250px"/>
</div><br/>

## Nomeclatura de branches

Toda branch deve estar relacionada a uma funcionalidade ou correção, portanto ela deva estar associada à um issue e uma us. O nome da branch deve ser em PORTUGUÊS e deve seguir o seguinte padrão:

* usXX/feature-nome-da-feature

Em que XX é a primeira us relacionada à feature e *nome-da-feature* é o nome da feature escrito com todos os caracteres minúsculos. Caso a implementação seja de uma documentação não relacionada com nenhuma us, usa-se o prefixo *doc/* no lugar de *usXX/*.

# Política de Commits

## Commits atômicos
Sempre divida seu trabalho em commits pequenos e significativos, de forma que cada commit represente na maior parte das vezes apenas uma funcionalidade. O idioma padrão para efetuar commits e comentários é o português brasileiro. As mensagens devem ser suscintas, diretas e impessoais, expressando de forma clara e objetiva a ação do commit.

## Nomeclatura de commits

Os commits não devem possuir muitos caracteres, portanto tente sempre manter o máximo de 50 caracteres por commit. Caso não consiga descrever seu commit com menos de 50 caracteres, provavelmente seu commit não é atômico.
Se houver mais de uma pessoa participando da implementação, ela deve ser mencionada no commit. A anatomia dos commits é:

* Assunto.<br/>Co-authored-by: example0000< email >

Exemplo de commit atômico:

* Função read-user implementada.<br/>Co-authored-by: example0000 <<example0000@example.com>>
