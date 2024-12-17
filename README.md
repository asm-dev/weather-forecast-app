# App del Tiempo - Pronóstico Semanal

Esta aplicación muestra datos del tiempo para una semana utilizando JS con TypeScript. La app emplea lógica de servicios para el cálculo de promedios y renderiza la información en el DOM mediante el uso de una interfaz sencilla.

&nbsp;

## Ejecución

1. Instala dependencias con `npm install`
2. Inicia la aplicación con `npm run launch`
3. Abre la página en tu navegador. Se abre automaticamente con live-server en `http://127.0.0.1:8080`

&nbsp;

## Características principales

- **Visualización y cálculo de datos**: muestra datos detallados, incluyendo temperaturas máxima y mínima, velocidad del viento y estado del tiempo (soleado, nublado, lluvia, etc.), siendo capaz de calcular temperaturas medias tanto diarias como semanales.
- **Manipulación del DOM**: los datos del tiempo se renderizan dinámicamente.
- **Escalabilidad y mantenibilidad**: emplea la lógica de servicios y un diseño modular. Esta organización permite aislar responsabilidades, lo que facilita tanto la amplicación como el mantenimiento del aplicativo, además de ayudar a simplificar las pruebas unitarias en caso de incluirlas en futuras iteraciones. Por ejemplo los datos son procesados en `/services` pero renderizados en  `/views`.

*Estructura de archivos*:

```
src/
├── model/       # Modelos de datos (Weather)
├── service/     # Servicios para lógica de negocio
├── views/       # Vistas y lógica relacionada con el DOM
├── utils/       # Recoge cálculos auxiliares
├── styles/      # Estilos CSS
```
&nbsp;

## Notas sobre el diseño de interfaz

Aunque el objetivo principal del proyecto era explorar el empleo de métodos JS para la manipulación del DOM, se decidió mejorar la aplicación incluyendo una UI básica para mejorar la experiencia del usuario.

*Primera version*:

![image](https://github.com/user-attachments/assets/45ce8664-0150-4c81-9135-97c93088fce2)

*Segunda version*:

![image](https://github.com/user-attachments/assets/71f2ad14-5073-4ed1-ba38-da684816dcc0)
*Version final*:

![image](https://github.com/user-attachments/assets/02711aee-439b-4b83-873a-1a6fb1fcdf02)
