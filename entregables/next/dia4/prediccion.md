BLOQUE A:

¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?
Como nosotros no trabajamos con un backend real en si, el id no existe pero si existiera devolveria undefined.

bloque B:
¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?
¿generateMetadata puede hacer await? ___________
¿Puede llamar a getMesaById()? ___________
Sí. En Next.js App Router, generateMetadata puede hacer fetch, usar await y llamar funciones async del backend como getMesaById().

BLOQUE C:
¿El Suspense manual que envuelve <MesaDetalle> en page.tsx — cuándo exactamente muestra el skeleton? ¿MesaDetalle hace algún fetch asíncrono?
¿Cuándo se muestra el skeleton de MesaDetalle?

 Se muestra brevemente durante la carga/hidratación inicial del Client Component dentro de Suspense. Como MesaDetalle no hace operaciones async propias, el skeleton puede durar muy poco.

¿MesaDetalle hace fetch o solo usa los datos que recibe por prop? 
MesaDetalle no hace fetch. Solo usa los datos mock que recibe por props desde page.tsx mediante getMesaById().
BLOQUE D:
Después de llamar a cambiarEstadoMesa() con éxito, ¿el usuario tiene que recargar /mesas manualmente para ver el nuevo estado, o Next.js lo actualiza solo?
¿Next.js actualiza /mesas automáticamente? ___________
¿Qué hace revalidatePath para que eso ocurra? ___________

No necesariamente hay que recargar manualmente /mesas.
Si cambiarEstadoMesa() es una Server Action o una acción del servidor que llama a revalidatePath('/mesas'), entonces Next.js invalida el caché de esa ruta y la próxima renderización obtiene datos frescos automáticamente.
¿Next.js actualiza /mesas automáticamente?
Sí, siempre que uses revalidatePath('/mesas') y la página dependa de datos cacheados/renderizados por el servidor.
El flujo típico es:
El usuario ejecuta cambiarEstadoMesa()
La acción actualiza la base de datos