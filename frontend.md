# Prueba Técnica – Frontend Developer

## Objetivo de la prueba:

Evaluar conocimientos prácticos en: 1. Diseño e implementación visual (HTML/CSS + Angular) 2. Comunicación entre componentes 3. Consumo de servicios HTTP con observables

## Enunciado general:

Se te solicita construir una pequeña aplicación Angular que represente la vista de un sistema de reservas de turnos para un gimnasio. En base al siguiente boceto deberás replicar una aplicacion con Angular, respetando el diseño y comportamiento funcional.

```
-------------------------------------
| 🏋️ Reservas disponibles           |
-------------------------------------
| [ Tarjeta de clase 1 ]  → Ver más |
| [ Tarjeta de clase 2 ]  → Ver más |
| [ Tarjeta de clase 3 ]  → Ver más |
-------------------------------------

▼ Al hacer clic → muestra detalle:
-------------------------------------
| Clase: Yoga                        |
| Profesor: Laura                   |
| Cupos: 10                         |
| [ Reservar botón ]                |
-------------------------------------
```

## Requisitos funcionales:

    1.	Diseño
    •	Replicar el diseño entregado (estructura de tarjetas, colores básicos, inputs, botones).
    •	Responsividad mínima: que se vea correctamente en pantallas medianas.
    2.	Comunicación entre componentes
    •	Separar al menos en:
      •	AppComponent: estructura general.
      •	BookingListComponent: lista de reservas disponibles.
      •	BookingDetailComponent: muestra el detalle de una reserva seleccionada.
    •	Implementar Input/Output o Subject para la comunicación entre BookingList y BookingDetail.
    3.	Consumo de servicios
    •	Simular el consumo de un endpoint REST (GET /bookings) usando HttpClient.
    •	Podés mockear la respuesta con json-server, interceptores, o una clase de servicio con un observable.

## Entregables

    •	Código en un repositorio (GitHub).
    •	README.md con:
    •	Instrucciones de instalación y ejecución.
    •	Breve explicación de cómo se comunican los componentes.

## Importante:

    •	Usar Angular + TypeScript (versión 15+ idealmente).
    •	No usar librerías UI (como Angular Material, PrimeNG, Bootstrap, etc.) — todo debe resolverse con HTML/CSS puros o SCSS.
    •	El código debe estar estructurado y seguir buenas prácticas.
