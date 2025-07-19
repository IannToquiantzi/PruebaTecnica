Esta aplicación simula un sistema de reservas de clases para un gimnasio. Fue desarrollada en Angular utilizando HTML, SCSS y TypeScript sin librerías externas de UI.

---

## Tecnologías utilizadas

- Angular (v15+)
- TypeScript
- HTML + SCSS (sin Angular Material / Bootstrap)

---
# Consideraciones previas
Existen 2 ramas, la rama main y la rama Prueba, el trabajo que se realizó está en la rama Prueba.

## Instalación y ejecución

1. Clona este repositorio, dentro de la terminal o del IDE:

```bash
git clone https://github.com/IannToquiantzi/PruebaTecnica.git
```

2. Instala las dependencias (Hay que tener instalado Node.js):

```bash
npm install
```

3. Inicia el servidor de desarrollo, dentro del IDE que se encuentren:

```bash
ng serve
```

4. Abre el navegador en esta liga, esa liga aparece automáticamente cuando se hace el paso 3:

```bash
http://localhost:4200
```

## Estructura del proyecto

```bash
src/
├── app/
│   ├── components/
│   │   ├── booking-list/       # Lista de clases disponibles
│   │   └── booking-detail/     # Detalle de la clase seleccionada
│   └── services/
│       └── booking.service.ts  # Servicio simulado con datos mock
```

## Comunicación entre componentes

*BookingListComponent*: muestra tarjetas con las clases disponibles.

Al hacer clic en una tarjeta, emite un evento usando @Output().

*AppComponent*: recibe la clase seleccionada mediante (selectBooking) y la pasa como @Input() al componente de detalle.

*BookingDetailComponent*: recibe la clase como @Input() y muestra su información.

## Simulación de API

La app simula un endpoint REST (GET /bookings) usando un servicio (BookingService) que retorna un Observable con datos estáticos (mock).


