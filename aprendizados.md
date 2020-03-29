# Módulo 1

O módulo 1 serve como introdução para o JavaScript, como já tenho uma base forte de outros cursos não me acrescentou muito aprendizado.
Porém, os exercícios propostos ao final do módulo foram ótimos para fixar ainda mais o conteúdo e puder perceber que é um conteúdo muito para quem está começando.
No ultimo exercício tive um pouco de dificuldades pois não havia trabalhado com o a sintaxe *for..of* e com a função join(), mas com um pouco de estudo pude contornar o desafio e aprender duas coisas novas.


# Módulo 2

No módulo 2 eu aproveitei muito o conteúdo sobre a "árvore" DOM, aprendendo a criar e alterar elementos do HTML dentro do script.
Outra habilidade que pude aprimorar diz respeito a selecionar um elemento do meu código HTML. 

Aprendi, por exemplo, que se eu usar o comando *getElementsByTagName* e ouver mais de um daquele tipo que selecionei, basta eu declara a posição, como no exemplo:

> document.getElementsByTagName('input')[0];


Outro ponto que foi esclarecido para mim durante o módulo foi como passar o valor de um input para um alert ou alguma outra possível atribuição. Segue exemplo:

```
var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');

btnElement.onclick = function(){
  var txt = inputElement.value;
  alert(txt);
  }
```

**Esse é um dos primeiros passos na jornada para tratar os elementos da DOM no JavaScript, tornando o HTML mais légivel.**

E ao entender melhor a DOM pude facilitar minha busca por um elemento usando o comando *querySelector*, o que daqui pra frente vai ser um conhecimento muito útil no objetivo de 'limpar' o HTML.

Outro passo, sem dúvida nenhuma muito importante, na limpeza do HTML é a criação de elementos dentro do JS. Como no exemplo a seguir, onde criarei um texto com link:

```
<script>

var linkElement = document.createElement('a');     // estou criando um link
linkElement.setAttribute('href', 'http:github.com');   // estou adicionando um atributo a meu elemento

// AGORA CRIAREI UM TEXTO P

var textElement = document.createTextNode('Acessar o GitHub');
linkElement.appendChild(textElement);  // detalhe no appendChild, que coloca o texto como filho do link

//COLOCADO O TEXTO DENTRO DO MEU LINK (<a></a>), EU DEVO MANDAR ELES PARA O HTML

var containerElement = document.getquerySelector('#app');
containerElement.appendChild(linkElement);  // agora defini o link (que ja contem o texto) como filho do container

*Posso fazer a seguinte analogia: containerElemente é o vô, que recebe o filho dele (linkElement) na sua casa. O linkElement leva o seu filho (textElement) junto.* hehehehe
</script>
```
Isso é o equivalente a colocar a seguinte linha de código no HTML:
```
<div id="app>

<a href='github.com'> Acessar o GitHub </a>

</div>
```

Além de criar um elemento, eu também posso excluir:
```
containerElement.removeChild(textElement);
```

-------

Como ultimo tópico do módulo, foi abordado a maneira de editar o estilo através do JavaScript, seguindo estes passos:

- Crio uma variavel no JS e atribuo a ela o elemento que quero alterar
- Coloco o nome da variavel e '.style' depois mais um '.' e o que desejo modificar

Veja o exemplo a seguir,onde atribuo uma largura, um altura e um fundo para a variável 'box':
```
var boxElement = document.querySelector('.box');

boxElement.style.width=100;
boxElement.style.height=100;
boxElement.style.backgroundColor='#f00';

```

Note que não usei 'background-color' e sim backgroundColor, sem o hífen.

# Módulo 3

Por ser um módulo que envolvi muito mais prática do que os anteriores, pude aprender muito enquanto montávamos um App.

De cara entramos na estrutura do App Todo, que seria um lista de tarefas em que eu poderia criar ou excluir algum elemento dela
O código é montado no HTML da página apenas para demonstração de como esperamos que fique, e logo iniciamos criando os elementos diretamente no JavaScript.
