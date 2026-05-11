BLQQUE A:
layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?

¿layout.tsx necesita "use client" para importar PedidoProvider?
No.
¿Por qué?
Porque en Next.js (App Router), un Server Component puede importar un Client Component sin problema.
Si PedidoProvider tiene "use client", entonces:
PedidoProvider se ejecuta en el cliente.
layout.tsx puede seguir siendo Server Component (sin "use client").