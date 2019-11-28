import "./styles.css";
import { getNumber } from "./getNumber";

document.getElementById("app").innerHTML = `
<h1>Hola Candidato de Witideal</h1>
<p>
  Realiza los siguientes 2 ejercicios para demostrar tus conocimientos en Javascript.
  El examen tiene un nivel de dificultad medio, por lo que si no lo terminas no te sientas
  mal. El objetivo es conocer tus habilidades de solución de problemas y tu lógica de
  programación, junto con tus conocimientos especializados en Javascript.
</p>

<h2> Problema 1 </h2>
<p>
Dado un arreglo de entrada con N elementos numéricos se deberá 
manipular para obtener una salida con los mismos elementos ordenados 
de forma que todos los elementos pares queden en las primeras posiciones 
y todos los elementos nones en las últimas.
</p>

<h4> Restricciones </h4>
<ul>
  <li>No se podrá utilizar ningún arreglo extra</li>
  <li>No se podrán utilizar funciones nativas para manipulación de arreglos (push,pop,etc)</li>
</ul>

<h4> Ejemplo</h4>
<h4> Entrada : [1,2,3,4,5,6,7,8,9,0]</h4>
<h4> Salida : [2,4,6,8,0,1,3,5,7,9]</h4>

<h2> Problema 2 </h2>
<p>
Dado un arreglo de entrada con N elementos tipo string 
y la función <strong>getNumber()</strong> que 
recibirá un elemento del arreglo 
de entrada y devolverá su equivalente en tipo numérico, 
se deberán dibujar una cantidad de *(asterisco(s)) 
equivalente al número recibido de dicha función para cada 
elemento del arreglo de entrada.
</p>

<h4> Restricciones </h4>
<ul>
  <li>En caso de que algún elemento se repita, solo se dibujarán los * una vez</li>
  <li>Las entradas (elementos del arreglo de entrada) “numéricas” sólo serán válidas si son enteros positivos</li>
  <li>En caso de ser una entrada inválida se deberá alertar al usuario</li>
</ul>

<h4> Ejemplo</h4>
<h4> Entrada : [“1”,”2”,”2”,”3”,”E”]</h4>
<h4>
Salida: <br>
<br>
* <br>
** <br>
*** <br>
Entrada no válida <br>
</h4> 



`;
