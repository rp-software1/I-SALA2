BLOQUE A: 
¿El backend tiene GET /pedidos?estado=pendiente para filtrar? Verificarlo con Postman antes de escribir código.
¿GET /pedidos?estado=pendiente funciona? No de forma nativa en el frontend por HTTP, pero si lo usaremos usando .filter(p => p.estado === 'pendiente') sobre tu array de objetos mock.
URL exacta de PATCH para cambiar estado: simularemos elcambio de estado con un boton que cambie el estado del objeto mock a 'en_preparacion'.
