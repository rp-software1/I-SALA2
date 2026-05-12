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

BLOQUE B:
¿El TODO era más simple de conectar de lo que esperabas, o fue complicado?
Si no fue tan dificil de conectar, la explicacin estaba bien.

BLOQUE C:
 • ¿La predicción sobre metadata fue correcta? ¿Qué implica esa limitación para el diseño de la app?
Sí, la predicción fue correcta ✅
metadata NO funciona en Client Components porque Next.js genera el SEO y el <title> en el servidor.
Eso implica que en el diseño de la app:
las páginas que necesiten metadata deberían ser Server Components
y la lógica interactiva (useState, useRouter, Context, etc.) debe ir en componentes client separados

BLOQUE D:
¿La separación entre lo que hace el Server Action y lo que hace el cliente fue clara?
Sí, porque el cliente maneja la UI y estados React, mientras el Server Action procesa la lógica del servidor y retorna la respuesta.
