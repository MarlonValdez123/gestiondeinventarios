import express from 'express';
import cors from 'cors'; // Importa el middleware CORS
import empresaRouter from './empresa/empresa.module';
import usuarioRouter from './usuario/usuario.module';
import categoriaRouter from './categoria/categoria.module';
import inventarioRouter from './inventario/inventario.module';
import movimientoRouter from './movimiento/movimiento.module';
import pedidoRouter from './pedido/pedido.module';
import productoRouter from './producto/producto.module';
import proveedorRouter from './proveedor/proveedor.module';
import reporteRouter from './reporte/reporte.module';
import rolRouter from './rol/rol.module';
import alertaStockRouter from './alerta-stock/alerta-stock.module';
import authRouter from './auth/auth.module';

const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3001', // Permite solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Permite el uso de cookies
}));

app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/empresa', empresaRouter);
app.use('/usuario', usuarioRouter);
app.use('/categoria', categoriaRouter);
app.use('/inventario', inventarioRouter);
app.use('/movimiento', movimientoRouter);
app.use('/pedido', pedidoRouter);
app.use('/producto', productoRouter);
app.use('/proveedor', proveedorRouter);
app.use('/reporte', reporteRouter);
app.use('/rol', rolRouter);
app.use('/alerta-stock', alertaStockRouter);
app.use('/auth', authRouter); // Usa el módulo de autenticación

const PORT = process.env.PORT || 3000; // Puerto de la aplicación
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Mensaje de inicio del servidor
});