BLOQUE A:
1.
¿Qué estructura de carpetas genera create-next-app? Escríbela de memoria antes de ejecutar el comando.
Carpetas que esperas ver: app, public, cpmfiguraciones, modulos.
¿Existe un archivo de rutas tipo App.tsx? no existe 

2.
restaurante-nextjs/
  app/
    layout.tsx    ← ¿Para qué sirve? ¿Qué tiene adentro?: Es el layout global de la aplicación.
Envuelve todas las páginas Y ADRANTO TIENE EL HTML Y EL NAVBAR

    page.tsx      ← ¿A qué ruta corresponde?: CORRESPONDE A LA PAGINA PRINCIPAL HOME

    globals.css   ← ¿Cuándo se aplica?: SE APLICA A TODA LA APLICACION 

  public/         ← ¿Qué va aquí?: AQUI VAN LAS IMAGENES, FAVICON, ICONS BASICAMENTE TODOS LOS ESTATICOS

  tsconfig.json   ← ¿Qué diferencia ves con el de restaurante-frontend/?: DIFERENCIAS QUE VEO SON EL APP ROUTER, CONFIGURACIONES PARA SERVER Y CLIENTE COMPONENTS. 

  next.config.ts  ← ¿Para qué sirve? : PRACTICAMENTE LA CONFIGURACION DEL NEXT.JS, QUE INCLUYE AJUSTES DEL FRAMEWORK, CONFIGURACION DE IMAGENES Y MAS.

BLOQUE B: 
1.El NavBar de React Día 1 usaba NavLink con activeClassName o className con función. ¿Eso va a funcionar en Next.js sin cambios, o necesita adaptación?
¿NavLink funciona en Next.js? 
no va a funcionar tal cual. Next.js no usa React Router, así que tienes que adaptarlo sí o sí.
¿Qué import cambia? 
De:
import { NavLink } from "react-router-dom";
A:
import Link from "next/link";

React Router → NavLink automático
Next.js → Link + lógica manual para activo

BLOQUE C
1. 
¿Cuántas carpetas van a crear en este bloque? Lista los nombres de las carpetas antes de ejecutar el primer mkdir.
Carpetas a crear: EN ESTE BLOQUE CREARE 3 CARPETAS : MENU, MESAS, CARRITO 
Archivos page.tsx a crear: 3 archivos
bloque D:
¿Cómo llega el parámetro mesaId al componente page.tsx? ¿Como prop, como hook, o de otra forma?
El componente recibe mesaId como: 
params.mesaId (prop).
¿Es string o puede ser number?
string.

BLOQUE D:
¿Cómo llega el parámetro mesaId al componente page.tsx? ¿Como prop, como hook, o de otra forma?
El componente recibe mesaId como: prop dentro de params.

¿Es string o puede ser number? Siempre string.


