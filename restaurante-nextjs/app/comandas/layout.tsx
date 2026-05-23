import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Comandas',
};

export default function ComandasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}