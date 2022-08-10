### ENCRIPTADOR
![Imagen modelo Desktop ](models/Desktop/Encriptador%20-%201%20Desktop.png)
> Este pequenho proyecto es el resultado de un Challenge realizado en Alura.
Se busco trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación fueron las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales (En mi caso me di la libertad de incorporar ? (unicode = 63))
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Aqui me di la libertad de que al momento de seleccionar el boton de copiado, el texto sea trasladado momentaneamente al sector de input para lograr una mejor experiencia en medios mobiles
