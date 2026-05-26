import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';
import PedidoProvider from '../src/context/PedidoProvider';


// app/layout.tsx — reemplazar export const metadata:
export const metadata: Metadata = {
  title: {
    default: 'Sistema de Restaurante',
    template: '%s — Sistema de Restaurante',
    // template aplica a todas las páginas que definen metadata
  },
  description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
  robots: {
    index: false,   // app interna — no indexar en Google
    follow: false,
  },
  openGraph: {
    title: 'Sistema de Restaurante',
    description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
    type: 'website',
    locale: 'es_PE',
    url: 'https:i-sala-2.vercel.app/',
  },
  twitter: {
    card: 'summary',
    title: 'Sistema de Restaurante',
    description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        {/* PedidoProvider envuelve todo — sus hijos pueden leer el Context */}
        <PedidoProvider>
          <NavBar />
          <main className="p-6">{children}</main>
        </PedidoProvider>
      </body>
    </html>
  );
}
