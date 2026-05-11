BLOQUE A:
¿La predicción A fue correcta? ¿layout.tsx necesitaba "use client" para importar PedidoProvider?
Sí, la predicción fue correcta.
layout.tsx NO necesitaba "use client" para importar PedidoProvider.

¿Por qué?
Porque layout.tsx puede seguir siendo un Server Component y aun así importar un Client Component (PedidoProvider).

En Next.js App Router:
Server Components ➜ pueden importar Client Components
Client Components ➜ NO pueden importar Server Components interactivos
Como PedidoProvider ya tiene "use client", Next.js crea automáticamente el límite cliente/servidor. Por eso el layout no necesita marcarse como cliente.