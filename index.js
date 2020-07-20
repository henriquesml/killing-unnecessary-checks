// 1. Usando every para matar verificações de um valor igual, mas em entidades diferentes. Quando ambos precisam atender a uma condição.

var primeira_condicao = true
var segunda_condicao = false

// Exemplo ruim
if ( primeira_condicao == true && segunda_condicao == true ) {
  console.log('Os dois são true (forma ruim)')
}

// Exemplo bom
function isTrue(val){
  return val == true
}

if ( [primeira_condicao, segunda_condicao].every(isTrue) ) {
  console.log('Os dois são true (forma boa)')
}

// 2. Usando includes para matar verificações de um valor igual, mas em entidades diferentes. Quando apenas um precisa atender a condição.

var primeira_condicao = 'sim'
var segunda_condicao = 'não'

// Exemplo ruim
if ( primeira_condicao == 'sim' || segunda_condicao == 'sim' ) {
  console.log('Um deles é sim mesmo (forma ruim)')
}

// Exemplo bom
if ( [primeira_condicao, segunda_condicao].includes('sim') ) {
  console.log('Um deles é sim mesmo (forma boa)')
}

// 3. Verificando a presença de valor em uma váriavel sem várias condições.

var variavel_com_valor = 'Um valor'

// Exemplo ruim
if ( variavel_com_valor != '' && variavel_com_valor != null && variavel_com_valor != undefined ) {
  console.log('Não ta vazio mesmo (forma ruim)')
}

// Exemplo bom
if ( !!variavel_com_valor ) {
  console.log('Não ta vazio mesmo (forma boa)')
}

// 4. Usando dicionário para matar If's com x possibilidades e ações diferentes para cada uma delas.

var tecla_pressionada = 'cima'

// Exemplo ruim
if ( tecla_pressionada == 'cima' ) {
  console.log('Movendo para cima (forma ruim)')
}
else if ( tecla_pressionada == 'baixo' ) {
  console.log('Movendo para baixo (forma ruim)')
}
else if ( tecla_pressionada == 'lado_direito' ) {
  console.log('Movendo para lado direito (forma ruim)')
}
else if ( tecla_pressionada == 'lado_esquerdo' ) {
  console.log('Movendo para lado esquerdo (forma ruim)')
}
else {
  console.log('Parado (forma ruim)')
}

// Exemplo bom
const teclas = {
  cima: 'Movendo para cima (forma boa)',
  baixo: 'Movendo para baixo (forma boa)',
  lado_direito: 'Movendo para o lado direito (forma boa)',
  lado_esquerdo: 'Movendo para o lado esquerdo (forma boa)'
}

console.log(teclas[tecla_pressionada] || 'Parado (forma boa)')