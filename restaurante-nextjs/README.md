# Sistema de Restaurante — RPSoft Bootcamp

## Proyectos

### restaurante-nextjs
Stack: Next.js · TypeScript · Tailwind CSS · App Router

Proyecto académico desarrollado para la gestión de mesas, menú y comandas.

⚠️ Actualmente se trabaja con datos mock (sin backend real).

---

## Instalación

```bash
cd restaurante-nextjs
npm install
npm run dev
npm run build
npm run start
npx tsc --noEmit 
```

---

## Ejecución

Abrir en el navegador:

```bash
http://localhost:3000
```

---

## Variables de entorno

No se utilizan variables de entorno ni backend real actualmente.

---

## Rutas

- / → Home
- /mesas → Lista de mesas y estados
- /menu → Menú de platos
- /carrito → Carrito de pedidos
- /comandas → Gestión de comandas
- /mesa/[id] → Detalle de una mesa

---

## Tecnologías utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- React
- App Router

---

## Estructura principal

```bash
app/
 ├── carrito/
 ├── comandas/
 ├── components/
 ├── menu/
 ├── mesa/
 ├── mesas/
 ├── globals.css
 ├── layout.tsx
 └── page.tsx
```

---

## Equipo

I-SALA2 — RPSoft Bootcamp