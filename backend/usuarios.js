const LISTA_USUARIOS = [
  {
    id: 1,
    email: "admin@peluditos.com",
    password: "password123", 
    nombre: "Nadia Admin",
    apellido: "Gomez",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    email: "socio@peluditos.com",
    password: "socio456",
    nombre: "Agustin Socio",
    apellido: "Perez",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    email: "test@peluditos.com",
    password: "test789",
    nombre: "Usuario Test",
    apellido: "Ejemplo",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    email: 'leslie.alexander@example.com',
    password: 'password4',
    nombre: 'Leslie Alexander',
    apellido: 'Smith',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
];

const SUCURSALES_DB = [
    { id: 1, ciudad: "Berazategui", direccion: "Calle 14 N° 4500", telefono: "11-1234-5678" },
    { id: 2, ciudad: "Quilmes", direccion: "Rivadavia 230", telefono: "11-8765-4321" },
    { id: 3, ciudad: "La Plata", direccion: "Av. 7 N° 890", telefono: "221-456-7890" }
];

module.exports = {
    LISTA_USUARIOS,
    SUCURSALES_DB
};