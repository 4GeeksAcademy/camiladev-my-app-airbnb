# context.md

# Contexto del proyecto

## Objetivo

El objetivo de este proyecto es analizar y replicar la arquitectura de componentes de una interfaz de producción ampliamente utilizada: **Airbnb**.

No se pretende copiar el diseño visual definitivo, sino utilizar una interfaz conocida como referencia para identificar los componentes reutilizables, comprender qué datos consume cada uno y definir cómo se relacionan entre las distintas pantallas de la aplicación.

Posteriormente, esta arquitectura servirá como base para construir un sistema de diseño propio.

---

# Stack tecnológico

El proyecto será desarrollado utilizando:

- React.js
- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

# Vistas principales

El proyecto estará compuesto por tres vistas principales.

## 1. Home

La página de inicio funciona como punto de entrada a la aplicación.

Su objetivo es permitir que el usuario inicie una búsqueda de alojamientos mostrando recomendaciones organizadas por categorías.

La interfaz presenta una barra superior persistente para realizar búsquedas, junto con diferentes secciones horizontales que muestran alojamientos recomendados según distintas ubicaciones o intereses.

Cada sección contiene un carrusel de tarjetas con información resumida de cada alojamiento.

### Componentes identificados

- Header
- Footer
- Logo
- Barra de búsqueda principal
- Selector de ubicación
- Selector de fechas
- Selector de huéspedes
- Botón de búsqueda
- Botón "Conviértete en anfitrión"
- Selector de idioma
- Menú de usuario
- Contenedor principal
- Secciones de recomendaciones
- Título de sección
- Carrusel horizontal
- Botón anterior
- Botón siguiente
- Card de alojamiento
- Imagen del alojamiento
- Badge "Favorito entre huéspedes"
- Botón favorito
- Nombre del alojamiento
- Precio por noche
- Calificación


---

## 2. Resultados de búsqueda (Catálogo)

Esta vista muestra el resultado de una búsqueda realizada por el usuario.

El contenido principal consiste en un listado de alojamientos disponibles junto con un mapa que permite visualizar su ubicación aproximada.

Además, incorpora filtros para refinar la búsqueda sin abandonar la página.

Cada alojamiento mantiene una estructura consistente respecto a las tarjetas utilizadas en la Home, aunque presenta mayor cantidad de información.

### Componentes identificados

- Header persistente
- Barra de búsqueda
- Barra de filtros
- Chips de filtros
- Contenedor principal
- Título de resultados
- Mensaje informativo sobre precios
- Layout de dos columnas
- Lista de alojamientos
- Card de alojamiento
- Carrusel de imágenes
- Indicador de imágenes
- Badge de destacado
- Botón favorito
- Información del alojamiento
- Precio
- Calificación
- Características principales
- Mapa interactivo
- Marcadores de precio
- Controles de zoom
- Botón expandir mapa

---

## 3. Vista de detalle de una habitación

Esta vista presenta toda la información de un alojamiento específico.

Su objetivo es ayudar al usuario a tomar una decisión antes de realizar la reserva.

La información se organiza jerárquicamente comenzando por una galería de imágenes, seguida por la descripción del alojamiento, características principales, información del anfitrión y un panel lateral para consultar el precio y comenzar el proceso de reserva.

### Componentes identificados

- Header persistente
- Footer persistente
- Barra de búsqueda
- Título del alojamiento
- Botón compartir
- Botón guardar
- Galería de imágenes
- Imagen principal
- Imágenes secundarias
- Botón "Mostrar todas las fotos"
- Información general del alojamiento
- Ubicación
- Capacidad
- Habitaciones
- Camas
- Baños
- Calificación
- Cantidad de reseñas
- Separadores de contenido
- Panel lateral (Sticky)
- Tarjeta de precio
- Precio por noche
- Información de tarifas
- Botón de reserva
- Información adicional del alojamiento (implementación futura)
- Servicios (implementación futura)
- Opiniones (implementación futura)
- Información del anfitrión (implementación futura)

---

# Componentes compartidos

Los siguientes componentes aparecen en múltiples vistas y deberían diseñarse como componentes reutilizables.

- Header
- Footer
- Logo
- SearchBar
- SearchField
- SearchButton
- UserMenu
- LanguageButton
- HostButton
- PropertyCard
- PropertyImage
- FavoriteButton
- Rating
- Price
- Badge
- SectionTitle
- Carousel
- FilterChip
- Gallery
- StickyCard
- Divider
- Container

---

# Flujo de navegación

```text
Home
   │
   │ Buscar alojamiento
   ▼
Resultados de búsqueda
   │
   │ Seleccionar alojamiento
   ▼
Detalle de habitación
```

---

# Modelo conceptual de datos

Cada alojamiento puede representarse mediante una estructura similar a la siguiente:

```ts
Property {
  id
  title
  location
  images[]
  pricePerNight
  rating
  reviews
  guests
  bedrooms
  beds
  bathrooms
  badges[]
  amenities[]
  isFavorite
}
```

---

# Usuario objetivo

La plataforma está dirigida a personas que desean encontrar y reservar alojamientos temporales de forma rápida y confiable. El usuario busca comparar opciones según ubicación, fechas, precio, capacidad, servicios y valoraciones de otros huéspedes para seleccionar el alojamiento que mejor se adapte a sus necesidades antes de completar una reserva.