# GRID SIMPLLES
Este documento contém informações sobre a instalação e estrutura do Grid Simples

---

## Instalação

* [Github](https://github.com/gabrielmelo/grid-simples.git): `https://github.com/gabrielmelo/grid-simples.git`


## Grid

- 12 columns;
- Responsive e fluído;
- Cada columns será envolvida com um `.row`;
- Cada coluna terá a classe `.column-$`, onde $ é igual a quantidade de coluna(s) desejada.


### Classes Especiais

- `.column-third` Representa 1/3 do container;

- `.column-two-thirds` Representa 2/3 do container;

- `.column-half` Representa a metada do container;

- `.column-quarter` Representa 1/4 do container;

### Layout Responsivos

- Em tamanho de tela menos (<1024px) as colunas terão seu espaçamento interno (padding) reduzido.

- Em tamanho de tela (<768px) todas as colunas terá uma largura de 100%;


## Uso

*** Exemplos layouts com sidebar: ***

	<div class="container">
    	<div class="row">
        	<div class="column-8">...</div>
	        <div class="column-4">..</div>
    	</div>
	</div>

*** Exemplos layouts sem sidebar: ***

	<div class="container">
    	<div class="row">
        	<div class="column-12">...</div>
    	</div>
	</div>

*** Exemplos layouts com classes especiais: ***

	<div class="container">
    	<div class="row">
        	<div class="column-two-thirds">...</div>
        	<div class="column-third">...</div>
    	</div>
	</div>>
