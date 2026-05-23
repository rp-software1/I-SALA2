BLOQUE B:
¿El primer deploy fallará sin las variables de entorno? SÍ
¿Qué error específico aparecería? Error de variables de entorno no definidas (por ejemplo: Missing environment variable o undefined)

BLOQUE C:
¿Cuántos redeploys van a necesitar después de configurar las variables — uno o varios?
¿Cuántos redeploys necesita Vercel después de configurar variables? 
¿Vercel hace el redeploy automáticamente al agregar variables? 

No configuré variables de entorno ni realicé redeploys relacionados con NEXT_PUBLIC_API_URL porque el proyecto no consume un backend real en producción.

La aplicación funciona con datos simulados (platosMock y mesasMock) definidos localmente dentro del frontend Next.js, por lo que no existe una API externa desplegada en Railway o Render que requiera configuración en Vercel.
Por esa razón:
 no fue necesario agregar NEXT_PUBLIC_API_URL
 no se necesitó conectar un backend externo
 el deploy depende únicamente del frontend y de que npm run build compile correctamente.
 
