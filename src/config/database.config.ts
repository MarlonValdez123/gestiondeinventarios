import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root', // Cambia esto por tu usuario de MySQL
    password: '', // Cambia esto por tu contraseña de MySQL
    database: 'GestionInventarios', // Cambia esto por el nombre de tu base de datos
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;