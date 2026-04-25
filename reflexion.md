¿Tiene sentido tener un único archivo de tipos? ¿Qué ventaja concreta ves frente a declarar los tipos en cada componente?
Tener un único archivo de tipos (types/index.ts) ayuda a centralizar la definición de las estructuras de datos del proyecto. La principal ventaja es evitar la duplicación de interfaces y mantener consistencia en toda la aplicación. Si un tipo cambia (por ejemplo, Mesa o Pedido), solo se actualiza en un lugar y todos los componentes lo reflejan automáticamente.

Además, mejora la mantenibilidad y la escalabilidad del proyecto, ya que facilita reutilizar tipos entre contextos, páginas y componentes sin redefinirlos.

En cambio, declarar tipos en cada componente puede ser útil en casos muy específicos o pequeños, pero a medida que el proyecto crece, genera duplicación, inconsistencias y mayor probabilidad de errores.