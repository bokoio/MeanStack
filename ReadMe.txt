git init
git add .
git commit -m "First push"
git push --set-upstream git@gitlab.com:bokoio/mean-stack.git master
Criado o novo repositorio

depois sempre fazer:
git add .
git commit -m "Comment"
git push

iniciar a aplicaçao:
cd Dev/UDMY_MEAT/MEAT_APP/meat-app-starter-master
ng serve
open new tab
cd Dev/UDMY_MEAT/MEAT_APP/meat-app-starter-master
json-server db.json

Instalaçao do NODEJS
--ja tinha instalada a versao v8.10.0
node -v

Instalaçao do Angular CLI
npm install -g @angular/cli

As 2 instalaçoes feitas no inicio do curso.

S3 Instroduçao ao Typescript
Instalar o TS 
npm install -g typescript

tsc -v
Version 3.1.2

Configuraçao do typescript
o typescript sempre usa o arquivo de configuraçao:
tsconfig.json

Os arquivos de TS(typescript) sempre sao acopiados com outro de mesmo nome com extençao .js que é gerado apos a compilaçao do arquivo .ts

compilar via linha de comandos
na pasta onde estao os arquivos .ts
tsc app.ts (app.ts é o nome do arquivo ts a ser compilado)

para colocar o compilador do TS em modo de escuta:
tsc -w

O compilador ira verificar as configuraçoes do arquivo tsconfig.json.

declaraçao de variaveis:
let varNome: tipo
varNome = Valor_qualquer
let varNomea (somente assim é chamada de variavel Any que pode ser de qualquer tipo)
varNomea = Valor_qualquer


S3A8 (Funcoes em TS);

funcoes podem ser nomeadas ou anonimas(os argumentos podem ser tipados e serao verificados pelo compilador)

function useTheForce(name:string): void {
	console.log('Use the force, '+name);
}

let shortestRun = function(parsecs:number):boolean {
	return parsecs < 12;
}

Arrow functions:
nao precisa ser declarada a palavra reservada function
no exemplo abaixo é uma funçao para filtrar dado em um array

Sem arrowfunction
let tieFighters = ships.filter(function(ship){
	retrun ship.type === 'TieFighter'
})

Mesma funcao com arrowfunction
let tieFighters = ships.filter(ship => ship.type === 'TieFighter')
lado esquerdo os parametros e (=>)no lado direito a implementaçao.

Declarando uma Variavel como funçao:
let call: (name:string) => void
call = name => console.log("Do you copy, " + name + "?")
call("R2");

No JS todos os parametros sao opcionais(lembrar de sempre validar os parametros dentro das funcoes)
Ja no TS todos os parametros sao obrigatorios.
Para que um parametro seja opcional em TS deve-se utilizar o ? apos o nome do parametro:
function inc(speed: number, inc?:number) : number{
	let i = inc || 1
	return speed + i
}
inc(5,1)
>6

Parametros REST (sao indicados no final da declaraçao e indica que esse parametro pode receber multiplos valores e os transforma em um array dentro da funcao)
Funcao sem REST:
function countJedis(jedis: number[]): numbers{
	return jedis.reduce((a,b) => a + b,0)
}

countJedis([2,3,4])
>9

Funcao com REST:(os 3 pontos sao o que indica o parametro REST)
function countJedis(...jedis: number[]): number{
	return jedis.reduce((a,b) => a + b,0)
}
countJedis(2,3,4) a chamada é diferente, pois os valores sao passados separados por , 
>9

S3A10
Classe é a definiçao de um objeto de como ele vai se comportar
é um modelo, define atributos e comportamento
Instancia de uma classe é um objeto.

(Basico de uma classe :
Atributos, construtores e metodos)

Definiçao de classe
Nome da classe começa com maiusculo
as variaveis por padrao sao publicas

class Spacecraft{
	propulsor:string

	constructor(propulsor:string){
	this.propulsor = propulsor
	}

	jumpIntoHyperSpace(){
		console.log("Entering hyperspace with" + this.propulsor)
	}
}

EM TS a mesma classe

class Spacecraft{

	constructor(public propulsor:string){}

	jumpIntoHyperSpace(){
		console.log("Entering hyperspace with" + this.propulsor)
	}
}

HERANÇA
Para extender uma classe se usa a palavra extends

class MillennumFalcon extends Spacecraft{
	constructor(){
	super("hyperdrive") O constructor herda da classe Spacecraft e deve-se usar o super
	}

	jumpIntoHyperSpace(){
		if(Math.random() >=0.5){
		super.jumpIntoHyperSpace()
		} else {
			console.log("Failed")
		}
	}
}

INTERFACES

definem um contrato entre as classes que a impletam devem obedecer
pode ser um conjunto de atributos ou um comportamento comum para varias classes, aqui nao tem implementaçao, somente indica o que devem ser implementado.

Interfaces tambem podem herdar de outras interfaces

Aqui as naves que implementam essa interface serao naves de carga

interface Containership{
	cargoContainers:number
}


class MillennumFalcon extends Spacecraft implements Containership{
	cargoContainers:number

	constructor(){
	super("hyperdrive")
	this.cargoContainers = 4 aqui a implementaçao da interface
	}	
}

funcao para verificar se uma nave é uma boa nave de carga:

function goodForTheJob(ship: Containership): boolean{
	return ship.cargoContainers > 2
}

let falcon = new MillennumFalcon()
console.log(goodForTheJob(falcon))
>true



S3A12
Modulos (ES6)
O que é um modulo
Um modulo contem:
Classes, interfaces, funcoes e variaveis
com o escopo de deixar isolados esses codigos do resto da aplicaçao, para que caso ajam declaraçoes com o mesmo nome, nao mudem o seu comportamento.
Organiza o conteudo.

para exportar basta indicar no final do arquivo .ts/.js o que sera exportado
Exemplo:

interface Containership{
	cargoContainers: number
}

export{Containership}

é possivel indicar um alias para a exportaçao:
export{Containership as Cship}

Ou indicar na declaraçao:

export interface Containership{
	cargoContainers: number
}


importar um modulo:

import {Containership} from "./app"
se houverem mais classes do mesmo arquivo basta separar por virgula.
a path do arquivo é relativa e nao deve conter a extençao.


NAMESPACE:

é outra tecnica para organizar o codigo.
serve para evitar a colisao de nomes

Sao os antigos modulos internos do TS
Similar aos modulos, somente o que tiver expecificado para ser exportado 
é que ficara disponivel para ser utilizado.

Exemplo:
No exemplo abaixo somente a classe ShipClieaner ficaria vizivel para ser importada e utilizada.

Arquivo: utilities.ts

namespace Utilities{
	export class ShipCleaner{

	}
	function calcDistance(){

	}
}

Para importar um namespace:


Arquivo: other.ts
Obrigatorio as 3 barras
///<reference path = "utilities.ts">

let cleaner = new utilities.ShipCleaner() fica disponivel para ser usada.
...
let distance = utilities.calcDistance() nao fica disponivel para ser usada


S3A13

TS organizaçao com modulos
Separado o codigo que estava em app.ts em outros 2 arquivos base-ships e starfighters
Realizamos a exportaçao e importacao dos modulos.


S3A14

Os pacotes npm instalados servem para garantir que os tipos usados em dev sejam corretos e que nao iremos sobreescrever tipos e nem usar tipos que nao existam.

instalei :
 
 npm install --save lodash@4.17
 >lodash@4.17.11
 sudo npm install --save-dev  @types/lodash@4.14
 >@types/lodash@4.14.117

S3A15
Importanto uma biblioteca em JS e aplicaçao TS:
basta fazer:
npm install --save lodash@4.17
npm install --save-dev  @types/lodash@4.14


S4

S4A16 - Gerando uma aplicaçao com angular-cli
Para criar a aplicaçao

ng new jedi-academy --prefix=jad

para iniciar o servidor do angular por meio do webpack
ng serve


S4A17 - Estrutura da aplicaçao
webpack o que é:
é uma biblioteca em JS responsavel por criar bundles
para que seja possivel iniciar o angular no navegador
abaixo alguns bundles que iniicializam:
main
polyfills
runtime
styles
vendor

Polyfills: para internacionalizaçao, compatibilidade com browsers  velhos, etc...
styles : para o css

S4A18 - Configurao e bootstrap
Ao startar a aplicaçao com o ng serve, sao injetados os bundles gerados pelo webpack:
Os bundles sao injetados no final do index.html em tempo de execuçao.

Arquivo index.html:
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>JediAcademy</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <jad-root></jad-root>
</body>
</html>

Inspecionando o index.html do browser:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>JediAcademy</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <jad-root></jad-root>
<script type="text/javascript" src="runtime.js"></script><script type="text/javascript" src="polyfills.js"></script><script type="text/javascript" src="styles.js"></script><script type="text/javascript" src="vendor.js"></script><script type="text/javascript" src="main.js"></script></body>
</html>

os bundles sao esses scripts .js
O ultimo script o main.js é o responsavel por
dar o start no bootstrap da aplicaçao

Verificar o arquivo main.ts
tem comentarios nas linhas de codigo.

Verificar o arquivo app.module.ts -- comentario sobre metadados

S4A19 - Componentes

Componentes sao pequenas partes independentes e reuzaveis:
Em angular componentes sao:
CLASSES que tem um determinado ciclo de vida possui um TEMPLATE para definir uma aparencia e um SELECTOR(TAG) para ser usado por outras partes da aplicaçao.

Componentes sao elementos personalizados.

Como definir um componente:

Classe segue as definiçoes do ECS 2015 + as features do TS
TAGs que serao usadas com o componente
Apos declarados o componente é necessario informar a qual modulo angular ele pertence


Arquivo xxx.ts

import{Component} from '@angular/core'

@Component({/*decorator*/
	selector: 'app-first',
	templateUrl: './myfirst.component.html'
})


@NgModule({
	declarations: [MyComponent]
})

export class MyComponent{

	constructor(){}

}



S4A20 - Primeiro componente

Na raiz do projeto digitar:
ng g= generate c = component component_name --spec especificar se cria arquivos de teste 
ng g c header --spec=false

S4A21 - Property Binding

Linkar o valor de uma propriedade de um elemento a uma expressao Angular.

//no componente
...
user = {name : 'Luke SkyLager'}

//no template do componente(.html)
<input type="text" [value]="user.name">
o name ira mostrar o valor que esta no componente
Somente em um sentido oneWayBind sentido do componente verso o template.

//no componente
...
user = {name : 'Luke SkyLager', 
				isJedi: true}

//no template do componente(.html)
<input type="text" [value]="user.name">
<div[hidden]="!user.isJedi">
	location of the jedi temple
</div>

No exemplo acima usamos o DOM [hidden] para somente mostrar a div quando o nome for de um jedi.


<div [class.ligth]="user.isJedi" ></div> ... se a expressao for verdadeira o angular ira dicionar a classe LIGTH a pagina
<div class="ligth">
	...
</div>

S4A22 - Property Bind First Component

criado um novo componente chamado student com o comando:

ng g c student --spec=false

Property Bind é usar os colchetes [] dentro da tag html
[hidden]="!isJedi"


S4A23 - Passar valores a um componente

Ou Lista o atributo que quer export na lista de imputs do decorator @components
ou marca o atributo com outro decorate chamado @input
Exemplo:

import{ Component, Input } from '@angular/core'

@component ({
	selector: 'mt-header',
	template: '<h1> {{title}}</h1>'
})

export class HeaderComponent{
	@Input()title: string
}

<!--usando o header em outro comp. -->
<mt-header title="Minha App"></mt-header>

<!-- DOM em runtime -->
<mt-header title="Minha App">
	<h1>Minha App</h1>  ......Conteudo Renderizado
</mt-header>

Component Parent tambem vai poder passar o valor para o Bind da forma abaixo;
<!-- template interpolation -->
<mt-header title="{{isJedi ? 'Jedi' : 'Sith'}}"></mt-header>

<!-- property binding -->
<mt-header [title]="isJedi ? 'Jedi' : 'Sith'"></mt-header>

Tambem é possivel passar um alias para o componente fazendo da seguinte forma:


import{ Component, Input } from '@angular/core'

@component ({
	selector: 'mt-header',
	template: '<h1> {{title}}</h1>'
})

export class HeaderComponent{
	@Input('value')title: string
}

para usar o componente:
<mt-header value="Titulo"></mt-header>

S4A24 - Usando o decorator @Inpunt

Alterada a classe StudentComponent (student.components.ts)
foi inserido o decorate @Input em 2 propriedades para que recebam os valores do componente parent.
que no caso vendo de app.component.html(pagina inicial)


O problema de nao estar utilizando o true e false como boolean e sim como string, se deu porque nao estavamos usando a propriedade como property bind estavamos passando os valores para o componente normalmente:
<jad-student name="Felipe" isJedi="true"></jad-student>
e nao dessa forma:
<jad-student name="Felipe" [isJedi]="true"></jad-student>

A4S25 -Diretivas:
Componentes sao diretivas com templates
Componentes herdao todo de diretivas:
3 Tipos de diretivas:
*Componentes
*Estruturais (sao os NGs do outro curso MEAN ng-if, ng-for, etc...)
*Atributos


**Estruturais:
Forma abreviada:
<!--ng if-->
<input type="text" [value]="user.name">
<div *ngIf="user.isJedi"> o * indica que sera inclusa a tag div
	location of the jedi temple
</div>

Forma normal:
<!--ng if-->
<input type="text" [value]="user.name">
<template [ngIf]="user.isJedi"> 
  <div>
		location of the jedi temple
	</div>
</template>

A4S26 - Usando NGIF e NGFOR

Refactoring
Trocando o hidden por ngif no student.component.html.
NGfor no app.componets.ts

S4A27 - Operador navegaçao segura
Operador de navegaçao segura é o ?
Porque se ao utilizar um componente nao passamos os parametros no console do browser vai dar um monte de erros.
Alterado o arquivo student.component.html e o app.component.ts

S4A28 Eventos de um Componente
é a chamada de uma funcao quando um botao for acionado.

S4A29 - Emitindo Eventos em 1 componente

Componentes podem emitir um evento personalizado:
Usando a classe: EVENTEMITTER

Foi so pra saber que existe vai ser usado mais a frente no projeto.


S4A30 - Adicionar eventos a elementos do template

Alterado o student.component.html onde é feita a chamada

Era dessa forma:
<div *ngIf="student">
	<div>
		Student: {{student?.name}}
		<div *ngIf="student?.isJedi">
			Jedi Temple: {{student?.temple}}
		</div>
	</div>
</div>
<p *ngIf="!student">
	No data for students
</p>

A açao do clicked esta implementada no arquivo:
student.component.ts

No Angular è possivel fazer uso das variaveis de elementos do DOM.
da seguinte forma:

student.component.html
Inserida a tag textarea

utiliza a # para nomear e para que seja utilizar os atributos e os valores do componente.


S4A31 - Lidando com erros:

Verificar console do webpack
E o console do browser


S5A32 - Baixando os fontes dos proximos projetos:
https://github.com/cod3rcursos/meat-app-starter

depois de unziped 
/home/pippo/Dev/UDMY_MEAT/MEAT_APP/meat-app-starter-master/
npm install
para instalar as dependencias desse projeto.
apos a instalaçao rodar o ng serve

S5A34 - Criaçao dos componentes HEADER e HOME

Criado o componente header com o comando:
ng g c header --spec=false opcao spec false para nao gerar o arquivo de teste.
Criada a pasta header dentro da pasta src/app

criado o componente HOME com o comando 
ng g c home --spec=false opcao spec false para nao gerar o arquivo de teste.
Criada a pasta home dentro da pasta src/app

o prefixo mt que foi usado para criar a aplicaçao no Angular Cli (arquivo angular-cli.json 
"apps": [
     {....
      "prefix": "mt",
      ....
      }
      )é que é usada dentro das tags html dos componentes.

S5A35 - O que sao ROTAS:

Basicamente é um array que contem o caminho para cada componente:
Como no curso anterior MEAN onde indicava o componente e os parametros.
Esse exemplo é um pouco diferente do outro curso, porque a versao é diversa.

export const ROUTES: Route = [
	{path:'', component: RestaurantsComponent},
	{path:'restaurant/:id', component: RestaurantComponent},
	{path:'about', component: AboutComponent},
	.....
]

no modulo raiz:

@NgModule({
	declarations:[...],
	imports: [...., RouterModule.forRoot(ROUTES)],
})
export class AppModule

No html:

<!-- no template de algum componente -->
<a routerLink="/restaurants">Restaurantes</a>

<!-- OU  -->
<a [routerLink]="['/restaurants']" ></a>



S5A36 - Aplicando conceito de routing na APP

criado o componente about com o comando:
ng g c about --spec=false

Criado o arquivo app.routes.ts dentro da pasta src/app 

O componente router-outlet de dentro do html (app.component.html)
é o responsavel pelo dinamismo da pagina(por fazer a troca de paginas do DOM)

alterado tambem o arquivo app.modules.ts
a linha alterada foi  RouterModule > RouterModule.forRoot(ROUTES)

Corrigir o problema de ficar ativo o botao de restaurantes:

header.component.html
<li class="active"><a href="#">Restaurantes</a></li>
estava fixo no codigo para deixar ativo o botao.
o modulo router fornece informaçoes para saber qual o modulo ativo no momento:
routerLinkActive="" = a classe de CSS a qual se deseja que seja aplicada para que os componentes que estao abaixo desse componente acionado receba.

header.component.html
no Botao do MEAT inseri a rota para a raiz da app


S5A37 - Criando o componente Restaurantes

ng g c restaurants --spec=false

inserido o link para o modulo recem criado dentro do header.component.html, 
criada a rota para o modulo dentro do app.routes.ts

Criado um outro componente para agrupar as informaçoes comuns a todos os restaurantes nao mais na raiz da aplicaçao mas sim dentro do componente restaurantes:
./app/
     restaurants/
ng g c restaurant --spec=false

dentro do arquivo restaurant.component.ts foi criada uma propriedade
para receber os dados do resturante

Adicionado o marcador Input a propriedade do componente.

Criado o arquivo restaurant.model.ts criada uma interface para expecificar os tipos dos dados que serao recebidos de imput


Criado um array em memoria para representar os dados dos restaurantes, antes de ter o backend implementado:
dentro da classe restaurants
arquivo restaurants.components.ts:
criamos um array com os dados dos restaurantes:



S5A38 - Injeçao de Dependencia


é um padrao de projeto, onde a aplicaçao deixa de instanciar manualmente seus objetos e passa a depender do framework para instanciar os objetos que ela quer usar.
O framework gerencia a instanciaçao dos objetos bem como suas dependencias e disponibiliza isso para os componentes da aplicaçao.

Para deixa um componente disponivel para ser injetado é necessario declarar ele na lista de providers do componente ou modulo:

se for declarado no componente, uma instancia fica disponivel para o componente e para seus filhos.
...
@Component({ providers: [MyFirstService ] })
export class MyFirstComponent{
	constructor(pirvate firstService: MyFirstService){}

}



Mas se for declarado no modulo o componente fica disponivel para todos modulos da aplicaçao.

@NgModule({
	delcarations: [...],
	providers: [MyFirstService]
})

export class AppModule {}



S5A39 - Serviços

Em Angular Sao classes comuns que podem ser injetadas em componentes ou em outros serviços.
Servicos sao usados para o encapsulamento de acesso ao backend.
Servicos podem ser SINGLETONS
Sao candidatos para guardar dados para toda a aplicaçao

export class MyFirstService{
	constructor (){ }
	list(): MyType[]{//Chama a api de backend}
}

Os escopos em Angular sao 3

No escopo do Modulo:-----providers:[] - todos os serviços declarados no modulo raiz do Angular fica disponivel para ser injetado em todas as classes desse mesmo modulo, isso inclue outros modulos e outros serviços. Todos irao compatilhar da mesma instancia desse serviço.

Componente e seus filhos--providers:[] - Se for declarado no componente esse servico sera instaciado e ficara disponivel somente para o componente e para os seus filhos.

Somente no componente--viewProviders:[] - Sera instanciado e ficara disponivel somente para o componente ninguem mais vai ter acesso a essa instancia.

Serviços tambem podem solicitar a injeçao de outros serviços usando o decorator @Injectable()

....
import {Injectable } from '@angular/core'
import {Http } from '@angular/http'

@Injectable()-----Apenas para receber injeçoes...

export class MyService{
	
	constructor(private http: Http){

	}

	list(){
	return this.http.get('/url')
	}
}

Alguns exemplos de servicos que Angular disponibiliza:

Title - é responsavel por obter e alterar o titulo de uma pagina
Http - Encapsula o acesso HTTP
Router - Realiza a navegao de forma progamatica.



Title:

import { Title } from '@Angular/platform-browser'

@Component({
	viewProviders:[Title]
})

Export class MyPageComponent{
	
	constructor(title: Title){
	title.setTitle(':: My fancy Title ::')
	}
}

S5A40 Criando A Classe de Serviço para restaurantes

Criado arquivo restaurants.service.ts dentro da pasta src/app/restaurants

S5A41 - Reactive Programming e HTTP

Programaçao reativa é quando um evento acontece ele notifica aos interados que por sua vez reagem a esse evento.

Observer Pattern

Objeto que produz evento e os listners que esperam por esse evento.

Evento acontece, parte a notificaçao e o objeto interesado recebe.

Em reactive programming os eventos vem em streans(iterator)
que é uma cadeia de eventos que podem ser modificados ou ate mesmo gerar uma nova deia de eventos.


Reactive é a combinaçao de 2 padroes:
ITERATOR E OBSERVER
Iterator que vai passar item a item na STREAM 
Observer que notifica os itens interassados

A extençao usada pelo Angular para o Reactive programming é a RXJS.
Nessa extençao o objeto principal é observable.


Exemplo:

Observable.from ([1,2,3,4,5])............|-STREAM
.map(x => x+3)...........................|-TRANSFORMAÇAO
.filter(x => x%2 == 0)
.subscribe(x => console.log(x))//4,6,8...|-LISTNER

Observable => Multplos eventos
Promises   => Um evento

outro exemplo

....
this.http.get('/url')
	.map(response => response.json())
	.subscribe(data => this.mydata = data)
	.....
....

Os metodos da api HTTP retornam OBSERVABLE<RESPONSE>
get,post,put,delete,head,options

sempre remover a inscriçao, para nao gerar memori leaki
A melhor forma é sempre tratar erro com o cath:

save (mydata){
	return this.http.post('/url', json.stringify(mydata)).
	.map(response => response.json() )
	.map( result => result.id).
	catch(error => {
	console.log(error)
	Observable.throw(`Error posting $ {mydata}`)
	})
}

S5A42 - Configurando API de Backend

npm install -g json-server
Iniciar o server:

json-server db.json

O db é qualquer DB, nesse caso ja temos esse arquivo com dados dentro.

Isso faz com que a API esteja pronta para ser consultada respondendo:
http://localhost:3000/restaurants
http://localhost:3000/menu
http://localhost:3000/reviews
http://localhost:3000/orders


S5A43 Adicionando HTTP ao Serviço de restaurantes

Primeiro iremos indicar onde o servidor da api esta rodando,
para isso foi criado o arquivo app.api.ts na src/app/

no arquivo tem so uma varial com a url da API


S5A44 - Tratamento de erros com Cath
dentro do arquivo restaurants.services.ts
Todo metodo response precisa de uma resposta.
Por isso se algo der errado na requisiçao DEVE se tratar o erro e restituir algo para o metodo.

Criado o arquivo src/app/app.error-handler.ts
Para criar uma funçao estatica com a finalidade de tratar erros da aplicaçao.

S5A45 - Parametrizando Rotas
Passar e obter parametros

Arquivo das rotas:
....
{path:'restaurant/:id', component: RestaurantComponent}
...

No arquivo html
....
<a [routerLink] = "['/restaurant', restaurant.id]" >....</a>
....

é da mesma forma como no outro curso na url uma ID valida na URL

2 Formas de obter os parametros da URL

Snapshot - fazer uma fotografia dos parametros no momento da chamada

Subscribe - se inscrever na rota e escutar pela mudança nos parametros.


1 -) Injetar o objeto ActivatedRoute que representa a rota ativa no momento
2 -) Obter o id por meio do snapshot, o snapshot é muito util quando nao nos preocupamos se a rota ira mudar e o nosso componente ira sair de cena ou destruido...
Esse é o modo mais comum em Angular.

3 -) Subscribe, onde o componente esta escutando a rota e a cada modifica na rota parte uma açao do componente.


export class AppComponent implements OnInit {

  myObj: any

  constructor( private route: ActivatedRoute) { } ---ponto 1

  ngOnInit() {
    this.route.params.subscribe(parms => { ---ponto 3
  	const id = params['id']
  	this.myObj = //...obter os dados baseado no id
  )}
  }
}

S5A46 - Criando o componente para o detalhe de um restaurante

Criaçao dos componentes:

dentro da pasta src/app
Criado o componente restaurant-detail
ng g c restaurant-detail --spec=false

depois dentro da pasta do restaurant-detail
foram criados outros 2 componentes:

ng g c menu --spec=false
ng g c shopping-cart --spec=false
ng g c menu-item --spec=false


S5A47 - Servico HTTP para o detalhe do Restaurante

S5A48 - Rotas para avaliacoes e menu
criado o componente
reviews
ng g c reviews --spec=false

Dentro do arquivo app.routes
com a propriedade children

S5A49 - Pipes

Sao responsaveis pela transformaçao de dados para uma apresentaçao diferente
Sao os filtros do Angular 1
Na verdade é uma transformaçao de dados(uppercase, lowercase, moeda, data, limitar valores,etc)

Exemplos:
pipe json
user = {name: 'Luke SkyDancer', isJedi: true}

<div>{{user}}</div>
Assim ira mostrar somente o valor de name que no caso é Luke SkyDancer
<div>{{user | json}}</div>
Ira mostrar todo o conteudo do array json
{name: 'Luke SkyDancer', isJedi: true}
Muito util para debugar.

representaçao percentual
<div>{{0.5 | percent}}</div>
=> <div>50%</div>

Formataçao de data:
<div>{{dtnascimento | date: 'dd/MM/yyyy'}}</div>
=> <div>12/12/1994</div>

Moedas:

<div>{{price | currency: 'BRL' : true}}</div>
=> <div>R$45.90</div>

Limitador de caracteres e numeros:
user = {name: 'Luke SkyDancer', isJedi: true}
<div>{{user.name | slice: 0:4 }}</div>
=> <div>Luke</div>

Pipes tambem podem ser combinados entre eles.


=> <div></div>


S5A50 - Componente de avaliaçao e Pipes Async Date

restaurants.service.ts
incluido o metodo para as reviews
muito similar ao do curso anterior


Mudamos tambem o icone dos reviews,
que tambem mostrava a carinha feliz mesmo quando a nota era baixa
reviews.component.html

S5A51 - Implementando Itens do Menu

menu-itens.component.ts
menu-itens.models.ts
menu-itens.component.html
restaurant.service.ts
menu.component.ts
menu.component.html

S5A52 - Implementando o Carrinho de compras:

Items tem que ficar na memoria ate que o cliente decida encerrar o pedido

Criaçao de um novo serviço para que se possa compartilhar os dados entre todos os que desejam acessar esses dados, porque esses dados ficam disponiveis na aplicaçao.

Novo serivço dentro da pasta
../shopping-cart/shopping-cart-service.ts

S5A53 - Aplicando eventos no componente do carrinho de compras

shoppingfCart.component.ts Foram criadas as funcoes que serao chamadas pelo click 
shoppingfCart.component.html Adicionados os clicks
menu-component.html o listner do carrinho de compras linhas 6 e 11

S5A54 - Ajustando os valores para a moeda REAL.

Pacote intl adicionado no arquivo package.json
é o pacote para a internacionalizaçao
Ja estava instalado pelo npm

Mas faltava a importaçao dele no arquivo polyfils.ts

Apos isso no modulo raiz da aplicaçao deve ser indicado ao Angular para usar a connfiguraçao pt-BR
linha 2  e  linha 42

S6A55 - Template Forms

é uma forma declarativa de configurar os formularios no template do componente.

utilizando a diretiva NGMODEL nos inputs que devem ser controlados pelo framework.

sempre que declarada uma tag form o Angular subentente e aplica implicitamente a marcaçao NGFORM
<form>..................................NGFORM
	<input type="text" name="name"/>
</form>
com o NGFORM podemos controlar:

VALIDADE
VALOR
DIRTY
PRISTINE
TOUCHED

Com ngform é obrigatorio utilizar a diretiva ngModel

<form>..................................NGFORM
	<input type="text" name="name" ngModel />
</form>
Uma vez adicionada essa diretiva o form passa a ficar ciente do valor campo.
e se o campo tiver um valor valido o form sera valido. E se o campo for invalido o form tambem sera invalido.

form(valid)
.....name(valid) 

é possivel associar a diretiva como oneway binding, para quando o valor no componente for alterado o valor do campo tambem sera alterado o inverso nao se aplica...


<form>..................................NGFORM
	<input type="text" name="name" [ngModel]="username" />
</form>

@Component({})
	export class UserOcmponent{
		username: string = "Nome do usuario..."
	}

Para que seja possivel tanto receber quanto passar o valor para o componente(two-way binding) a sintaxe é a seguinte:


<form>..................................NGFORM
	<input type="text" name="name" [(ngModel)]="username" />
</form>

@Component({})
	export class UserOcmponent{
		username: string = "Nome do usuario..."
	}

S6A56 - Criando o componente de compra

ng g c order --spec=false

Depois inclui uma rota para o novo componente
app.routes.ts
Depois disso no componente shopping-cart.componente.html
adicionei a rota para novo componente.([routerLink]="['/order']")


S6A57 - Usando template no formulario de compras

*Importante*:
Importar o modulo de Forms no modulo raiz do projeto(app.module.ts)
import { FormsModule } from '@angular/forms';
e 
@NgModule({
  declarations: [
   ...
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  ...
})


na tag form colocar a informaòao NOVALIDATE, para nao deixar ao browser a incumbencia de validar o formulario, porque cada browser utiliza um metodo de validaçao proprio, diminui a experiencia no site.

Adicionada a variavel #form para testes

Para que seja possivel utilizar as diretivas ngModel é necessario que o componente tenha a propriedade NAME atribuida.


S6A58 - Validaçao com template Forms

NGMODEL  Status visuais que podem dar feedback ao usuario:

Valid/Invalid

Pristine/Dirty - Pristine= Estado inicial do campo, Dirty = Campo modificado

Untouched/Touched - Entrada e saida no campo

Para saber o status de um campo é necessario fornecer um nome para a diretiva NGMODEL do campo, utlizamos uma template variable, uma vez feito isso podemos utilizar essa variavel em qualquer ponto do formulario para exibir o status ao usuario.

<form>
	<input type="text" name="name" [ngModel]="username" #ipt="ngModel" />
  <span *ngIf="ipt.invalid" > Nome invalido</span>
</form>

Validaçoes que podemos atribuir a um campo:

required - se é obrigatorio ou nao 
pattern - que recebe um padrao de expressao regular.
minlength e maxlength

S6A59 - Validaçao do formulario de compras;

Validaçao com NGMODEL
Required: indica se um campo é obrigatorio.
MinValue: Valor minimo de um campo.
MaxValue: Valor maximo de um campo.
Pattern: Expressao regular para validar o campo.

order.component.html

S6A60 - Aplicando FeedBack visual.

order.component.html

Verificar a validade de um campo ou verificar se o campo ja foi preenchido.
Usar a uma templatevariable:
#inputAddress="ngModel"

Os componentes estavam recebendo feedback visual fixos, exemplo do campo complemento.

Codigo ficou verbose, sera uma criada uma classe para fazer a validaçao dos campos.


S6A61 - Criando um componente de input (Content Projection)

Criada uma nova pasta chamada shared
onde foi criado o componente INPUT
ng g c input --spec=false

removido uma div do order.componente.html e levado para o input.component.html
no lugar da div removida foi colocada a chamada ao novo componente
<mt-input>

So que dessa forma o formulario nao tem mais controle sobre o componente de input endereço que no caso é o exemplo utilizado, o formulario que antes controlava os 3 campos de input que temos na tela agora controla somente 2
O input esta encapsulado.
false 
{ "address": "", "number": "", "optional": "" }

false 
{"number": "", "optional": "" }

Para solucionar esse problema uma tecnica e a que sera usada é a Content Projection:
Iremos delegar ao componente somente a funçao visual do input.

para isso usamos a diretiva <ng-content></ng-content>

Exemplo de um input no html do order.component.html(template):
<div class="col-sm-6 col-xs-12">
	<mt-input-container errorMessage="Campo obrigatòrio e com minimo de 5 caracteres" label="Endereço">
			<input class="form-control" name="address"  ngModel required minlength="5" autocomplete="off" placeholder="Endereço">
	</mt-input-container>
</div> 


S6A62 - Validaçao com expressao regulares

Campo numero esta aceitando letras e nao somente numeros.
E para validar que isso nao aconteça, é feita uma validaçao com expressao regular.

order.component.html
pattern="^[0-9]*$" no campo numero

S6A63 - Criando Componente Usando ControlValueAccessor (P1)

Criado um novo componente para fazer a gerencia da forma de pagamento.
radio
shared/radio
ng g c radio --spec=false

criado o arquivo radio-option.model.ts
para auxiliar na verificaçao e validaçao da opçao selecionada.

O componente html da tela sao radio-buttons 

S6A64 - Criando Componente Usando ControlValueAccessor (P2)


S6A65 - Componentes para itens da compra

Criado um novo componente que ira ser responsavel por adicionar ou remover quantidade de itens ou excluir o item da lista.
ng g c order-items --spec=false

No componente order-items esta sendo emitido eventos de exclusao adiçao e remoçao de itens.


S6A66 - Enviando os itens da compra 

S6A67 - Componente Total da compra.
Criado o componente delivery-costs dentro do componente order
Alterei o order.component.html inserindo a tag do componente <mt-delivery-costs>
e os parametros.
Alterei tambem o order.component.ts criando o metodo itemsValue para passar o valor total da compra para o componente que ira somar o valor do ferte.
O arquivo order-service.ts onde criei o metodo itemsValue()
E os arquivos do componente recem criado.

Foi colocada a forma de pagamento como obrigatoria.


S6A67 - Finalizando a compra HTTP Post
Criado um novo evento para o click de finalizar o pedido
order.component.html

Criado um novo model em order/order.model.ts


S6A69 - Navegaçao pragmatica via router.

Removida as informaçoes de debug da pagina de compras

Criada a pagina de compra finalizada, com o novo componente:

ng g c order-sumary --spec=false


Dentro do order.component.ts
tem essa funòao;
	checkOrder(order: Order): Observable<string>{
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		return this.http.post(`${MEAT_API}/orders`, 
														JSON.stringify(order), 
														new RequestOptions({headers: headers}))
		.map(response=> response.json())
	}

	que no map esta esta devolvendo um objeto e nao uma string para pegarmos o ID

2 maneiras para pegar a string ID:

dessa forma retorna a "string" com o ID

	checkOrder(order: Order): Observable<string>{
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		return this.http.post(`${MEAT_API}/orders`, 
														JSON.stringify(order), 
														new RequestOptions({headers: headers}))
		.map(response=> response.json())
		.map(order => order.id)
	}

E desta forma tambem:

	checkOrder(order: Order): Observable<order>{
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		return this.http.post(`${MEAT_API}/orders`, 
														JSON.stringify(order), 
														new RequestOptions({headers: headers}))
		.map(response=> response.json())
	}


S6A70 - Criando o componente de RATING

Criada a classe rating
dentro da pasta sharing
ng g c rating --spec=false
Essa classe serve para classificar o serviço prestado.


S7A71 - O que sao Reactive Forms

é a nova forma que o Angular traz para implementar formularios

Ao invez de usar ng model e configurar validadores nos campos passa a usar
Cria instancias de form group ou form controls dentro de um componente.


Exemplo
O form é apresentado por formGroup que vai agrupar um ou mais campos dentro dele
o angular fornece o FormBuilder que ajuda na tarefe de criar o componentes

@Component({....})
export class UserComponent implements OnInit {
	userForm: FormGroup 

	constructor(private fb: FormBuilder){}

	ngOnInit(){
	this.userForm = this.fb.group({
	  username:'', //2 campos inicializados com valores vazios.
	  password: ''

	})
	}
}


O mesmo resultado do codigo a cima so que com o formbuilder do angular utilizando a classe control do formbuilder

@Component({....})
export class UserComponent implements OnInit {
	userForm: FormGroup 

	constructor(private fb: FormBuilder){}

	ngOnInit(){
	this.userForm = this.fb.group({
	  username: this.fb.control(''),
	  password: this.fb.control('')

	})
	}
}

Os validados podem ser passados como array na hora de criar o componente:
exemplo abaixo seta como obrigatorio o campo username e o campo password ter no minimo 3 caracteres

@Component({....})
export class UserComponent implements OnInit {
	userForm: FormGroup 

	constructor(private fb: FormBuilder){}

	ngOnInit(){
	this.userForm = this.fb.group({
	  username: this.fb.control('', [Validators.required]),
	  password: this.fb.control('', [Validators.ninlength(3)])

	})
	}
}

Se houver a necessidade de agrupar campos do mesmo formulario tambem é possivel:
a vantagem disso é a validaçao pode ser feita a nivel de grupos

@Component({....})
export class UserComponent implements OnInit {
	userForm: FormGroup 

	constructor(private fb: FormBuilder){}

	ngOnInit(){
	this.userForm = this.fb.group({
	  username: this.fb.control('', [Validators.required]),
	  password: this.fb.control('', [Validators.ninlength(3)]),
	  address: this.fb.group({street: '',
	  zip:''
	  })
	})
	}
}

o template nao usa mais a marcacao ng utiliza diretamente o nome do controler
<form [formGroup]="userForm">
	<input type="text" formControlerName="username"/>
	<input type="password" formControlName="password"/>
	<div formGroupName="address">
		<input type="text" formControlName="street" />
		<input type="text" formControlName="zip" />
</form>


S7A72 - Refatorando a aplicaçao para Reactive Forms 

*Importante nao esquecer de importar o modulo ReactFormsModel na classe principal da aplicaçao app.module.ts


iniciamos por order.component.ts

importando modulos FormGropup e FormBuilder ambos from @Angular

S7A73 - Validaçao de Formulario com Reactive Forms

order.component.ts


S7A74 - Criando validadores personalizados

Alterado somente o modulo order.component.ts e order.componen.html


S8A75 - Modulos

Servem para organizar a aplicaçao.
Para que a aplicaçao nao seja carregada inteira para um usuario que tem acesso somente a determinadas funcionalidades.(lazyloading)

Tipos de modulos:

Root module - todos os modulos na raiz da aplicaçao
Shared & Core modules:
Share sao os modulos que sao condivisos por toda a aplicaçao
Core modules onde ficam todos os serviços da aplicaçao mas nao contem componentes a exemplo do modulo Http do proprio Angular.

Feature Module - Contem as implementaçoes das funcionalidades da aplicaçao, pode ajudar a tornar o carregamento da aplicaçao mais rapido, pois é possivel escolher apenas um conjunto de features para carregar ao iniciar a aplicaçao.

Para usar um model é necessaria uma classe com o decorator @NgModel
Exemplo:
@NgModule({
	declarations:[...],
	imports:[...],
	providers: [...],
	exports:[...]
})
exports class MyModule{}


S8A76 - Carregamento tardio de modulos (Lazy-Loading)

Refatorando para dividir a aplicaçao em modulos.

No caso da aplicaçao em questao, o Sobre esta carregando junto com a aplicaçao, que por enquanto nao faz diferença no carregamento da aplicaçao pois é um html statico e possui somente texto.
Mas por escopo de estudo sera separada em um modulo.

O que resta no root da raiz é o Restaurantes pois é importante para a aplicaçao, pois é o core do sistema. Faz sentido carregar ao ser aberta a aplicaçao.

A aplicaçao carrega tudo o que esta dentro do arquivo app.module.ts
Onde o componente AbouteComponet é carregado junto com todos os demais.

Dentro da pasta about foi criado o arquivo about.module.ts
em um modulo esse import é obrigatorio:
import { NgModule } from '@angular/core'
bem como o decorator
@NgModule


S8A77 - Modulo compartilhado (SharedModule)
Criado o arquivo 
shared/shared.module.ts
onde foram trazidas as declaraçoes dos componentes para o modulo.

No modulo raiz da aplicaçao foram removidas as declaraçoes dos 3 componentes e tambem dos componentes raiz carregados na inicializaçao da app.

S8A78 - Feature Module (Modulo de compra)
Dentro da pasta order criado o arquivo order.module.ts
Onde foram importados os componentes:
OrderComponent
OrderItemsComponent
DeliveryCostsComponent
SharedModule

Criada a rota tambem para o carregamento tardio (lazyModule) do modulo de compras.
A rota criada foi somente uma e com o caminho padrao (path:'') e que ira carregar o componente principal que no caso é o componente de compras (OrderCOmponent)

No arquivo app.module.ts foram removidas as importaçoes dos modulos.
No arquivo app.routes.ts foi criada uma rota nova para o carregamento tardio do modulo.

S8A79 - Criando um CORE Module com serviços

Criada uma nova pasta chamada CORE e o arquivo core.module.ts
No nosso caso o core model ira refenciar os serviços e nao serao agurpados em uma pasta.

Esse modulo contera somente a lista de providers e nenhum outro codigo.


S8A80 - Adicionando Serviços a um modulo compartilhado (SharedModule with providers)

shared.module.ts
addicionada o modulo ModuleWithProviders a lista de modulos a serem importados
app.module.ts
O core module da pasta passada ja nao é mais util. 

S8A81 - Pré-carregamento de todos os modulos: (Pre loading)

Essa funcionalidade permite carregar um modulo em background com uma nova tread, fazendo com que o modulo ao ser requisitado nao demore a ser carregado.

Para isso tem que ser usado o Modulo Angular PreloadAllModules do @angular/router.

Essa configuraçao fica a raiz da aplicaçao (app.module.ts)

Na configuraçao das rotas (imports: RouterModule....) adicionamos as estrategias de carregamento.

S9A82 - Animaçoes

Angular tem um modulo especifico para animaçoes que é baseado em uma spec chamada web animations API

Atualmente somente o chrome e o firefox implementao parte das features. porem tambem esta disponivel como polyfild para o restante dos browsers.

O Modulo de animaçao do angula esta em:
@angular/animations

Exemplo abaixo é de um botao que ao ser acionado muda de tamanho:

@Component({
	template: `<button[@stretch]="buttonState" > Click </button>`
	animations:[
	trigger(stretch,[
		state('normal', style({width: '40px'})),
		state('', style({width: '120px'})),
		transition('normal => stretched', animate('300ms')),
		transition('stretched => normal', animate('500ms')),
	])
	]	
})

export class ButtonComponent{buttonState = 'stretched'}


Quando temos uma animaçao onde a propriedade transition é igual podemos escrever dessa forma



@Component({
	template: `<button[@stretch]="buttonState" > Click </button>`
	animations:[
	trigger(stretch,[
		state('normal', style({width: '40px'})),
		state('', style({width: '120px'})),
		transition(' * => * ', animate('300ms')),
	
	])
	]	
})


S9A82 - Instalando o Modulo de animaçoes:

Para usar animaçao é necessario importar as dependencias:

Modulo de animaçao do Angular

Importar o Polyfil (para rowsers que nao suportam animaçoes)

Browser animation 

Module no modulo raiz.
--------

Modulo de animaçao do angular(forçando a versao para manter a compatibilidade)
npm install--save @angular/animation@4.0.0

Module PolYfills:
npm install --save web-animations-js

--------

Na raiz da aplicaçao(../src), no arquivo polyfills.ts
import 'web-animations-js/web-animations.min.js'

Apos no arquivo app.module.ts:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




S9A84 - Definindo um Snackbar:

Iremos criar uma snackbar para informar ao usuario que a açao de adicionar e remover itens do carrinho ocorreu.

Para isso criamos um novo componente dentro do modulo shared
messages/snackbar

ng g c snackbar --spec=false

Ao ser criado um novo componente dentro de um modulo comportilhado, as definiçoes ja sao inseridas no dentro do modulo que no caso é shared.module.ts
Nesse caso foi incluido tambem dentro do export para que o novo modulo possa ser compartilhado.


Dessa vez o arquivo .css permaneceu e tem conteudo dentro.

Alteramos o arquivo app.component.html para inserir a snackbar

O restante das alteraçoes foram todas feitas dentro do componente.


S9A85 - Aplicando animaçoes ao Snackbar:

Serao usadas duas propriedades html para esse componente 
Hidden e Visible



S9A86 - Usando Observable para o componente Snackbar:


implementaçao de um serviço de notificaçoes

criado o arquivo notification.service.ts
alterado o shared.module.ts

No shooping-cart.service.ts é onde estao os serviços de inserir e remover itens do carrinho de compras, iremos utilizar ali o serviço de notificaçoes.

**Todo serviço que vai receber algo deve ser marcado como injectable
import { Injectable } from '@angular/core'
@Injectable()


S9A87 - Usando os Operadores Do e SwithMap

SwithMap troca o observable.
Do executa uma acao no meio.


S9A88 - Utilizando outros metodos de animaçao:

Apresentar a lista dos restaurantes de forma animada.

A animaçao vai ser feita no componente individual (no caso do restaurante) restaurant.component.ts

Uma vez que a configuraçao da animaçao esteja pronta(restaurant.component.ts) existem 2 passos a serem realizados ainda:
_) Associar a trigger a um elemento (<div class="place-info-box" [@restaurantAppeared]='restaurantState' >) dentro do arquivo restaurant.component.html
_) Associar a trigger a um stado do elemento.
restaurant.component.ts

S9A89 - Incluindo animaçoes nos itens do menu:

A animaçao é feita dentro do Menu Item

Basicamente copia e cola da outra animaçao
menu-item.component.ts e menu-item.component.html
