BLOQUE A:
• ¿Qué parte de la instalación fue confusa?
• ¿Qué opción del tsconfig no tienes claro para qué sirve?
Me confundió la configuración inicial y no tenía claro para qué sirve jsx en el tsconfig.json.
bloque B:
 ¿Cuántos errores aparecieron? ¿Más o menos de lo que predijiste?
 Aparecieron 63 errores en 6 archivos.

Fueron más de lo esperado, porque al inicio parecía que eran pocos, pero el problema de never[] hizo que se multiplicaran en cadena.

• ¿Qué error fue el más inesperado?
El más inesperado fue:

Property 'estado' does not exist on type 'never'

Porque:

No era obvio al inicio
El problema real venía de useState([]) sin tipo
Terminó rompiendo .map, .reduce y varias props
bloque c
• ¿El tipado de 'onAgregar' fue lo que esperabas?  ¿Qué significa '(plato: Plato) => void'?
 
 Si, fue lo que esperaba, significa que la funcion recibe un parametro 'plato' que es de tipo 'Plato' y no devuelve nada.

 bloque E
 ¿Tiene sentido tipar el retorno de las funciones API? ¿Qué beneficio concreto ves?
 Si, ya que nos brinda seguridad , claridad y a identificar errores antes de la ejecucion de la aplicacion.

 bloque F:
 Qué concepto te costó más?

El tipado de estados con useState, especialmente cuando TypeScript los convierte en never[] si no defines el tipo. También entender cómo tipar correctamente props y context.

¿Qué ventaja viste de TypeScript?

Que detecta errores antes de ejecutar la app (por ejemplo, funciones no definidas o props mal usadas) y te da autocompletado más preciso, lo que hace el código más seguro y fácil de mantener.
