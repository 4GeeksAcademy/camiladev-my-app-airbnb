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


Home
Objetivo
Pantalla de descubrimiento inicial en mobile. Permite iniciar una búsqueda rápida, navegar categorías principales y explorar recomendaciones de alojamientos relevantes según una búsqueda previa.

Layout
Header superior con CTA de búsqueda.
Navegación horizontal por categorías (tabs con estado activo).
Tarjeta de “seguir buscando” como acceso rápido a una búsqueda reciente.
Sección de recomendaciones con carrusel horizontal de tarjetas.
Barra de navegación inferior fija.

HomePage
├── MobileViewport
│   ├── HomeHeader
│   │   └── SearchEntryPill
│   ├── CategoryTabsBar
│   │   ├── CategoryTabItem (Alojamientos)
│   │   ├── CategoryTabItem (Experiencias)
│   │   └── CategoryTabItem (Servicios)
│   ├── ContinueSearchCard
│   │   ├── ContinueSearchInfo
│   │   └── ContinueSearchThumbnail
│   ├── RecommendationSection
│   │   ├── SectionHeader
│   │   │   ├── SectionTitle
│   │   │   └── SectionActionButton
│   │   └── PropertyCarousel
│   │       └── PropertyCard
│   │           ├── PropertyImage
│   │           ├── Badge
│   │           ├── FavoriteButton
│   │           ├── PropertyTitle
│   │           ├── Price
│   │           └── Rating
│   └── BottomTabBar
│       ├── TabItem (Explorar)
│       ├── TabItem (Favoritos)
│       └── TabItem (Iniciar sesión)


Componentes
HomePage
Descripción: Contenedor raíz de la vista Home mobile.
Responsabilidad: Componer todas las secciones visibles de descubrimiento.
Props principales: searchPrompt, categories, lastSearch, recommendationSection, bottomTabs
Estado: Sin estado interno
Eventos: onCategorySelect, onSearchEntryClick, onSectionActionClick, onTabChange

HomeHeader
Descripción: Bloque superior que aloja la entrada de búsqueda.
Responsabilidad: Presentar el punto principal de entrada al flujo de búsqueda.
Props principales: searchEntry
Estado: Sin estado interno
Eventos: onSearchEntryClick

SearchEntryPill
Descripción: Botón tipo píldora “Comienza a explorar” con icono.
Responsabilidad: Disparar navegación a búsqueda o apertura de modal de búsqueda.
Props principales: label, icon, isActive
Estado: pressed
Eventos: onClick

CategoryTabsBar
Descripción: Navegación horizontal por categorías principales.
Responsabilidad: Mostrar categorías y estado seleccionado con indicador visual.
Props principales: items, activeCategory, showNewBadge
Estado: scrollPosition
Eventos: onCategorySelect, onScroll

CategoryTabItem
Descripción: Elemento individual de categoría con icono, texto y opcional badge “Nuevo”.
Responsabilidad: Representar una categoría seleccionable.
Props principales: id, label, icon, isActive, badge
Estado: Sin estado interno
Eventos: onClick

ContinueSearchCard
Descripción: Tarjeta con resumen de búsqueda reciente (destino, fechas, huéspedes) y miniatura.
Responsabilidad: Facilitar reingreso rápido a una búsqueda previa.
Props principales: destination, dateRange, guestSummary, image, ctaLabel
Estado: Sin estado interno
Eventos: onClick

RecommendationSection
Descripción: Bloque de recomendaciones contextualizado por la búsqueda previa.
Responsabilidad: Agrupar título, acción y listado/carrusel de propiedades.
Props principales: title, action, properties
Estado: Sin estado interno
Eventos: onActionClick, onPropertyClick

SectionHeader
Descripción: Encabezado de sección con título y botón de avance.
Responsabilidad: Introducir la sección y ofrecer navegación secundaria.
Props principales: title, actionIcon, actionLabel
Estado: Sin estado interno
Eventos: onActionClick

PropertyCarousel
Descripción: Carrusel horizontal de tarjetas de alojamiento.
Responsabilidad: Renderizar colección scrolleable de propiedades.
Props principales: items, snap, showPartialNextItem
Estado: scrollIndex
Eventos: onScroll, onPropertyVisible, onPropertyClick

PropertyCard
Descripción: Tarjeta compacta de propiedad con imagen, badge, favorito, título, precio y rating.
Responsabilidad: Mostrar resumen visual mínimo del alojamiento.
Props principales: id, title, image, badge, isFavorite, price, rating, location
Estado: Sin estado interno
Eventos: onClick, onFavoriteToggle

Badge
Descripción: Etiqueta contextual sobre la imagen o contenido.
Responsabilidad: Destacar atributos de la propiedad.
Props principales: text, variant
Estado: Sin estado interno
Eventos: onClick

FavoriteButton
Descripción: Acción de guardar/quitar de favoritos sobre la tarjeta.
Responsabilidad: Cambiar estado de guardado del elemento.
Props principales: isActive, icon, ariaLabel
Estado: isPressed
Eventos: onToggle

Price
Descripción: Bloque textual de precio por noche.
Responsabilidad: Mostrar valor monetario principal y unidad temporal.
Props principales: amount, currency, period
Estado: Sin estado interno
Eventos: Sin eventos

Rating
Descripción: Valoración resumida con icono y valor numérico.
Responsabilidad: Comunicar percepción/calidad del alojamiento.
Props principales: value, icon, reviewCount
Estado: Sin estado interno
Eventos: onClick

BottomTabBar
Descripción: Navegación principal inferior de la app en mobile.
Responsabilidad: Permitir cambio entre áreas primarias.
Props principales: tabs, activeTab
Estado: Sin estado interno
Eventos: onTabChange

Componentes reutilizables
SearchEntryPill
CategoryTabsBar
CategoryTabItem
SectionHeader
PropertyCard
Badge
FavoriteButton
Price
Rating
BottomTabBar
Dependencias
HomePage usa HomeHeader, CategoryTabsBar, ContinueSearchCard, RecommendationSection, BottomTabBar.
RecommendationSection usa SectionHeader y PropertyCarousel.
PropertyCarousel usa PropertyCard.
PropertyCard usa PropertyImage, Badge, FavoriteButton, Price, Rating.
Datos necesarios
Texto de entrada de búsqueda.
Lista de categorías con estado activo y badges.
Resumen de búsqueda reciente.
Título de sección contextual.
Colección de propiedades recomendadas.
Estado de favoritos por propiedad.
Precios y moneda.
Calificaciones y cantidad de reseñas.
Configuración de tabs inferiores.
Resultados de búsqueda (Catálogo)
Objetivo
Pantalla de exploración de resultados filtrables. Combina mapa con marcadores de precio y listado de propiedades para comparar ubicación y costo rápidamente.

Layout
Header mobile con botón volver, resumen de búsqueda y acceso a filtros.
Barra horizontal de chips de filtros.
Área de mapa con marcadores de precio superpuestos.
Bottom sheet inferior con handle, mensaje informativo y tarjetas de resultado.
Barra de navegación inferior fija.
Comportamiento responsive esperado:
Desktop: layout de dos columnas (lista a la izquierda + mapa sticky a la derecha).
Mobile: layout apilado con mapa protagonista y resultados en panel inferior deslizable.

SearchResultsPage
├── MobileViewport
│   ├── ResultsHeader
│   │   ├── BackButton
│   │   ├── SearchSummaryPill
│   │   └── FilterButton
│   ├── FilterBar
│   │   └── FilterChip[]
│   ├── StickyMap
│   │   ├── MapCanvas
│   │   ├── PriceMarker[]
│   │   └── ZoomControls (variante desktop/opcional)
│   ├── ResultsBottomSheet
│   │   ├── DragHandle
│   │   ├── FeesNotice
│   │   └── PropertyList
│   │       └── PropertyCard
│   │           ├── PropertyGallery
│   │           ├── Badge
│   │           ├── FavoriteButton
│   │           ├── PropertyInfo
│   │           │   ├── PropertyTitle
│   │           │   ├── Price
│   │           │   └── Rating
│   └── BottomTabBar
│       ├── TabItem (Explorar)
│       ├── TabItem (Favoritos)
│       └── TabItem (Iniciar sesión)

DesktopSearchResultsLayout (variante)
├── ResultsColumn
│   ├── ResultsHeader
│   ├── FilterBar
│   └── PropertyList
└── MapColumn (StickyMap)

Componentes
SearchResultsPage
Descripción: Contenedor raíz de resultados de búsqueda.
Responsabilidad: Orquestar filtros, mapa y listado de propiedades.
Props principales: searchSummary, filters, mapData, results, bottomTabs
Estado: viewMode, activeFilters, mapViewport, selectedProperty
Eventos: onBack, onFilterOpen, onFilterChange, onMapMove, onMarkerClick, onPropertyClick

ResultsHeader
Descripción: Encabezado con navegación y resumen de búsqueda.
Responsabilidad: Mantener contexto de búsqueda y accesos rápidos de control.
Props principales: searchSummary, showBack, showFilterButton
Estado: Sin estado interno
Eventos: onBackClick, onSearchSummaryClick, onFilterButtonClick

SearchSummaryPill
Descripción: Píldora central con destino, fechas y huéspedes.
Responsabilidad: Mostrar resumen editable de la búsqueda actual.
Props principales: destination, dateRange, guestSummary
Estado: Sin estado interno
Eventos: onClick

FilterBar
Descripción: Contenedor horizontal de filtros rápidos.
Responsabilidad: Exponer filtros frecuentes como chips seleccionables.
Props principales: chips, activeChipIds
Estado: scrollPosition
Eventos: onChipSelect, onChipRemove, onScroll

FilterChip
Descripción: Chip de filtro individual.
Responsabilidad: Activar/desactivar un criterio de búsqueda.
Props principales: id, label, isActive, icon
Estado: Sin estado interno
Eventos: onClick

StickyMap
Descripción: Mapa interactivo con marcadores de precio.
Responsabilidad: Visualizar resultados por geolocalización y rango de precio.
Props principales: center, zoom, markers, bounds
Estado: currentZoom, currentCenter, hoveredMarker, selectedMarker
Eventos: onViewportChange, onMarkerClick, onMarkerHover, onMapClick

PriceMarker
Descripción: Burbuja de precio anclada en coordenadas del mapa.
Responsabilidad: Representar costo de una propiedad en ubicación específica.
Props principales: id, lat, lng, price, isSelected, isClustered
Estado: Sin estado interno
Eventos: onClick

ZoomControls
Descripción: Controles de acercar/alejar mapa.
Responsabilidad: Ajustar nivel de zoom del mapa.
Props principales: canZoomIn, canZoomOut
Estado: Sin estado interno
Eventos: onZoomIn, onZoomOut

ResultsBottomSheet
Descripción: Panel inferior deslizable que contiene resultados en mobile.
Responsabilidad: Permitir explorar resultados sin perder contexto del mapa.
Props principales: initialSnap, snapPoints, title, notice, results
Estado: snapIndex, isExpanded
Eventos: onSnapChange, onDragEnd

FeesNotice
Descripción: Mensaje informativo sobre inclusión de tarifas en precio.
Responsabilidad: Mostrar regla global de presentación de precios.
Props principales: icon, text
Estado: Sin estado interno
Eventos: Sin eventos

PropertyList
Descripción: Lista de tarjetas de propiedades.
Responsabilidad: Renderizar resultados con orden y paginación/scroll.
Props principales: items, loading, hasMore
Estado: visibleRange
Eventos: onPropertyClick, onLoadMore, onVisibleRangeChange

PropertyCard
Descripción: Tarjeta de resultado con galería/imagen, info y acciones.
Responsabilidad: Mostrar resumen accionable del alojamiento.
Props principales: id, gallery, badge, isFavorite, title, location, price, rating
Estado: Sin estado interno
Eventos: onClick, onFavoriteToggle, onGalleryChange

PropertyGallery
Descripción: Media visual principal de la tarjeta de resultado.
Responsabilidad: Presentar imagen destacada o carrusel corto.
Props principales: images, currentIndex
Estado: currentIndex
Eventos: onNext, onPrev, onImageClick

PropertyInfo
Descripción: Bloque textual de metadatos de la propiedad.
Responsabilidad: Agrupar título, ubicación, precio y rating.
Props principales: title, location, price, rating, reviewCount
Estado: Sin estado interno
Eventos: onTitleClick, onRatingClick

BottomTabBar
Descripción: Navegación inferior principal en mobile.
Responsabilidad: Cambio de sección global de la app.
Props principales: tabs, activeTab
Estado: Sin estado interno
Eventos: onTabChange

Componentes reutilizables
ResultsHeader
SearchSummaryPill
FilterBar
FilterChip
PropertyCard
PropertyGallery
PropertyInfo
Badge
FavoriteButton
Price
Rating
BottomTabBar
StickyMap
PriceMarker
Dependencias
SearchResultsPage usa ResultsHeader, FilterBar, StickyMap, ResultsBottomSheet, BottomTabBar.
StickyMap usa MapCanvas, PriceMarker y opcionalmente ZoomControls.
ResultsBottomSheet usa DragHandle, FeesNotice y PropertyList.
PropertyList usa PropertyCard.
PropertyCard usa PropertyGallery, Badge, FavoriteButton y PropertyInfo.
PropertyInfo usa Price y Rating.
Datos necesarios
Resumen de búsqueda actual.
Conjunto de filtros disponibles y activos.
Coordenadas, zoom y límites del mapa.
Marcadores con precio y relación a propiedades.
Lista de resultados con imágenes, título, ubicación y metadatos.
Estado de favoritos por resultado.
Información de tarifas mostradas.
Configuración de navegación inferior.
Modo de layout según breakpoint (desktop dos columnas vs mobile apilado).
Detalle de habitación
Objetivo
Pantalla de detalle de una propiedad específica. Prioriza galería visual, información clave del alojamiento y una acción de reserva persistente.

Layout
Hero visual superior a pantalla completa parcial con acciones overlay.
Bloque principal de contenido con esquina superior redondeada.
Información resumida: título, ubicación/tipo, capacidad, rating y reseñas.
Secciones de contenido extendido (amenities, anfitrión, reseñas) en flujo vertical.
Barra inferior sticky con precio y CTA de reserva.
Jerarquía de componentes

RoomDetailPage
├── MobileViewport
│   ├── DetailHeaderOverlay
│   │   ├── BackButton
│   │   ├── ShareButton
│   │   └── SaveButton
│   ├── Gallery
│   │   ├── MainImage
│   │   ├── ImageCounter
│   │   ├── ThumbnailGrid (variante desktop)
│   │   └── ShowAllPhotosButton (variante desktop/mobile expandida)
│   ├── PropertyHeader
│   │   ├── PropertyTitle
│   │   ├── PropertySummary
│   │   └── RatingReviewsRow
│   ├── Divider
│   ├── HostSection
│   ├── AmenitiesSection
│   ├── ReviewsSection
│   └── StickyBookingCard
│       ├── PriceCard
│       └── ReserveButton

Componentes
RoomDetailPage
Descripción: Contenedor raíz del detalle de alojamiento.
Responsabilidad: Componer experiencia visual, contenido descriptivo y acción de reserva.
Props principales: property, gallery, host, amenities, reviews, booking
Estado: selectedImageIndex, isSaved, isShareOpen
Eventos: onBack, onShare, onSaveToggle, onImageChange, onReserve

DetailHeaderOverlay
Descripción: Barra de acciones sobre la galería.
Responsabilidad: Exponer acciones rápidas de navegación y engagement.
Props principales: showBack, showShare, showSave, isSaved
Estado: Sin estado interno
Eventos: onBackClick, onShareClick, onSaveClick

BackButton
Descripción: Botón de retorno al flujo anterior.
Responsabilidad: Navegación hacia atrás.
Props principales: icon, ariaLabel
Estado: isPressed
Eventos: onClick

ShareButton
Descripción: Botón de compartir propiedad.
Responsabilidad: Abrir acciones de compartido.
Props principales: icon, ariaLabel
Estado: isPressed
Eventos: onClick

SaveButton
Descripción: Botón de guardar en favoritos.
Responsabilidad: Alternar estado guardado de la propiedad.
Props principales: isActive, icon, ariaLabel
Estado: isPressed
Eventos: onToggle

Gallery
Descripción: Contenedor de medios del alojamiento.
Responsabilidad: Mostrar imagen principal y variantes de navegación de fotos.
Props principales: images, initialIndex, totalCount
Estado: currentIndex, isFullscreen
Eventos: onImageChange, onOpenAllPhotos

MainImage
Descripción: Imagen principal de la propiedad.
Responsabilidad: Presentar el contenido visual dominante del detalle.
Props principales: src, alt, aspectRatio
Estado: Sin estado interno
Eventos: onClick

ImageCounter
Descripción: Indicador de posición de imagen actual sobre total.
Responsabilidad: Dar contexto de navegación en galería.
Props principales: current, total
Estado: Sin estado interno
Eventos: Sin eventos

ThumbnailGrid
Descripción: Rejilla de miniaturas para navegación rápida de fotos (más frecuente en desktop/tablet).
Responsabilidad: Permitir salto directo entre imágenes.
Props principales: images, activeIndex
Estado: Sin estado interno
Eventos: onThumbnailClick

ShowAllPhotosButton
Descripción: Acción para abrir vista completa de galería.
Responsabilidad: Expandir exploración visual de la propiedad.
Props principales: label
Estado: isPressed
Eventos: onClick

PropertyHeader
Descripción: Encabezado textual del detalle.
Responsabilidad: Agrupar identidad principal de la propiedad.
Props principales: title, summary, rating, reviewCount
Estado: Sin estado interno
Eventos: onRatingClick, onReviewsClick

PropertySummary
Descripción: Texto resumido de tipo de alojamiento, ubicación y capacidad.
Responsabilidad: Comunicar atributos clave sin scrolling adicional.
Props principales: propertyType, location, guestCount, roomCount, bedCount, bathCount
Estado: Sin estado interno
Eventos: Sin eventos

RatingReviewsRow
Descripción: Fila de reputación con rating y cantidad de evaluaciones.
Responsabilidad: Mostrar señal de confianza del alojamiento.
Props principales: rating, reviewCount
Estado: Sin estado interno
Eventos: onClick

HostSection
Descripción: Bloque de información del anfitrión.
Responsabilidad: Presentar identidad del anfitrión y acceso a más detalle.
Props principales: hostName, hostAvatar, hostMeta
Estado: Sin estado interno
Eventos: onHostClick

AmenitiesSection
Descripción: Sección de comodidades disponibles.
Responsabilidad: Enumerar servicios/amenidades del alojamiento.
Props principales: amenities, showAllLabel
Estado: expanded
Eventos: onShowAllClick

ReviewsSection
Descripción: Resumen y acceso a reseñas.
Responsabilidad: Exponer calidad percibida mediante testimonios y puntuación.
Props principales: rating, reviewCount, highlightedReviews
Estado: selectedReviewIndex
Eventos: onReviewClick, onShowAllReviewsClick

StickyBookingCard
Descripción: Barra fija inferior de reserva.
Responsabilidad: Mantener visible precio y CTA principal durante scroll.
Props principales: price, dateRange, ctaLabel, availability
Estado: Sin estado interno
Eventos: onReserveClick, onDateClick

PriceCard
Descripción: Bloque de precio dentro de la barra sticky.
Responsabilidad: Mostrar importe principal y periodo aplicable.
Props principales: amount, currency, period, dateRange
Estado: Sin estado interno
Eventos: onClick

ReserveButton
Descripción: Botón primario para iniciar reserva.
Responsabilidad: Disparar el flujo de booking.
Props principales: label, disabled
Estado: isPressed
Eventos: onClick

Componentes reutilizables
BackButton
ShareButton
SaveButton
Gallery
MainImage
ImageCounter
RatingReviewsRow
PriceCard
ReserveButton
Divider
Dependencias
RoomDetailPage usa DetailHeaderOverlay, Gallery, PropertyHeader, HostSection, AmenitiesSection, ReviewsSection y StickyBookingCard.
Gallery usa MainImage, ImageCounter y variantes ThumbnailGrid/ShowAllPhotosButton.
PropertyHeader usa PropertySummary y RatingReviewsRow.
StickyBookingCard usa PriceCard y ReserveButton.
Datos necesarios
Identidad principal de la propiedad.
Colección de imágenes y contador total.
Ubicación y atributos de capacidad.
Rating y total de reseñas.
Datos del anfitrión.
Lista de amenidades.
Precio, moneda, periodo y rango de fechas visible.
Estado de guardado de propiedad.
Estado de disponibilidad para reserva.

Shared Components
Header (contenedor compartido)
- Variantes: HomeHeader, ResultsHeader, DetailHeaderOverlay

Footer (contenedor compartido)
- Variante mobile: BottomTabBar

BackButton
SearchSummaryPill
SearchEntryPill
FilterButton
FilterChip
CategoryTabItem
Badge
FavoriteButton
SaveButton
ShareButton
PropertyCard
PropertyGallery
PropertyInfo
Gallery
MainImage
ImageCounter
Rating
RatingReviewsRow
Price
PriceCard
ReserveButton
SectionHeader
Divider
StickyMap
PriceMarker