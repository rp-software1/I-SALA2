---
sala: I-SALA1
curso: Next.js
dia: 4
estado: en_progreso
loom: (agregar link al terminar)
---

## Bloques
- [Y] A — getMesaById en api.ts + verificar con Postman
- [Y] B — page.tsx con fetch real + generateMetadata + notFound()
- [Y] C — MesaDetalle Client Component + Suspense manual
- [Y] D — Server Action cambiarEstadoMesa + revalidatePath
- [ ] E — Verificación TypeScript + flujo completo
- [ ] F — Evaluación entre pares + Loom + PR

## Verificación final
- [ ] Clic en mesa → /mesa/[id] muestra datos reales
- [ ] Pestaña del browser muestra "Mesa N — Restaurante"
- [ ] Cambiar estado → la mesa en /mesas se actualiza
- [ ] npx tsc --noEmit → 0 errores
- [ ] PR aprobado por sala par
