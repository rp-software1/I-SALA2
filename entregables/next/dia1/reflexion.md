BLOQUE A:
• ¿La estructura del proyecto fue lo que predijiste? ¿Qué archivo te sorprendió más?
LA ESTRUCTURA DEL PROYECTO ME SORPRENDIO PORQU NOO LLEVABA EL SRC COMO EN REACT ES DISTINTO, SIENTO QUE ES MAS SIMPLE Y ENTENDIBLE, EL ARCHIVO QUE ME SORPRENDIO MAS FUE EL LAYOUT QUE ENGLOBA TODO. 
bloque B:
¿Por qué 'use client' es necesario en NavBar pero no en layout.tsx? ¿Qué diferencia hay?
 Idea clave
Next.js separa componentes en:
Server Components (por defecto)
Client Components (cuando usas 'use client')
¿Por qué NavBar necesita 'use client'?
Porque usas esto:
usePathname()
Eso es un hook del cliente
 Depende del navegador (ruta actual en tiempo real)
Entonces:
No puede ejecutarse en el servidor
Necesita 'use client'
¿Por qué layout.tsx NO lo necesita?
Porque normalmente solo hace esto:
<html>
  <body>
    <NavBar />
    {children}
  </body>
</html>

No usa hooks 
No maneja estado
No depende del navegador

BLOQUE C:

La tabla React Router → App Router: ¿fue el momento donde el App Router "hizo clic"? ¿Qué parte fue la más reveladora?
Si, fue muy reveladora la tabla porque nos muestra de manera clara y concisa las diferencias entre React Router y App Router, ademas de que nos ayuda a entender como funciona el App Router y como podemos usarlo en nuestros proyectos.

bloque D:
¿params como prop fue lo que predijiste o esperabas un hook como en React? ¿Qué implica esa diferencia?
Sí, params como prop es lo esperado en Next.js (App Router)
No es algo raro ni improvisado.
De hecho:
En React puro (SPA) → esperarías hooks (useParams)
En Next.js App Router → se diseñó para pasar params como prop del componente de página
¿Por qué NO usan un hook aquí?
Porque estas páginas son, por defecto:
Server Components
Y eso cambia todo.