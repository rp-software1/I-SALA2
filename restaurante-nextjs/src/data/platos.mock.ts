import type { Plato } from "../types";

export const platosMock: Plato[] = [
    {
        id: "1",
        nombre: "estofado",
        descripcion: "Estofado de carne con papas",
        categoria: "segundos",
        precio: 10,
        stock: 3,
        disponible: true
    },
    {
        id: "2",
        nombre: "aji de gallina",
        descripcion: "Plato cremoso de pollo",
        categoria: "segundos",
        precio: 12,
        stock: 5,
        disponible: true
    },
    {
        id: "3",
        nombre: "lomo saltado",
        descripcion: "Carne salteada con papas fritas",
        categoria: "segundos",
        precio: 15,
        stock: 0,
        disponible: false
    },
    {
        id: "4",
        nombre: "arroz con pollo",
        descripcion: "Arroz verde con pollo",
        categoria: "segundos",
        precio: 20,
        stock: 4,
        disponible: true
    },
    {
        id: "5",
        nombre: "inka kola",
        descripcion: "Bebida gaseosa",
        categoria: "bebidas",
        precio: 3,
        stock: 8,
        disponible: true
    }
];