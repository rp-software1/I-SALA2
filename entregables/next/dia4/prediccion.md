BLOQUE A:

¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?
Como nosotros no trabajamos con un backend real en si, el id no existe pero si existiera devolveria undefined.

bloque B:
¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?
¿generateMetadata puede hacer await? ___________
¿Puede llamar a getMesaById()? ___________
Sí. En Next.js App Router, generateMetadata puede hacer fetch, usar await y llamar funciones async del backend como getMesaById().