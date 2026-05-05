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