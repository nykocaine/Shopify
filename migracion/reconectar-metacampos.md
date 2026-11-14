# Conexiones a metacampos quitadas del tema

Se quitaron de `templates/product.json` y `templates/product.gift-card-2.json` para que Shopify cargue las plantillas aunque los metacampos aún no existan. Cuando los crees, vuelve a conectarlos en el editor de temas (botón de conexión dinámica junto a cada campo).

## Ficha de producto (`product`)

| Dónde en el editor | Campo | Metacampo | Tipo |
|---|---|---|---|
| Producto > bloque "Valoración" | Texto lateral | `subtitle_2` | Texto de una línea |
| Producto > bloque "Valoración" | Texto lateral 2 | `subtitle` | Texto de una línea |
| FAQ > "Sistema de acción" (texto con imagen) | Texto | `aplicacion` | Texto enriquecido |
| Idem | Imagen 1 | `1aplicacionfoto` | Archivo (una imagen) |
| Idem | Pie de foto 1 | `aplicacion_primer_dia` | Texto enriquecido |
| Idem | Imagen 2 | `2aplicacionfoto` | Archivo (una imagen) |
| Idem | Pie de foto 2 | `aplicacion_segundo_dia` | Texto enriquecido |
| Idem | Pie de foto 3 | `aplicacion_resultado` (antes con título "RESULTS") | Texto enriquecido |
| FAQ > "Clinical studies" (texto con imagen) | Texto | `estudios_clinicos` | Texto enriquecido |
| FAQ > Preguntas > "¿Cuando no debería ser usado?" | Respuesta | `contraindicaciones` | Texto enriquecido |
| FAQ > "Ingredientes" (texto con imagen) | Texto | `ingredientes` | Texto enriquecido |
| FAQ > "Contraindicaciones" (texto con imagen) | Texto | `contraindicaciones` | Texto enriquecido |

## Gift card 2 (`product.gift-card-2`)

| Dónde | Campo | Metacampo | Tipo |
|---|---|---|---|
| Producto > bloque "Valoración" | Texto lateral | `subtitle` | Texto de una línea |
| Producto > bloque de compra | Texto de la etiqueta "New" | `badges` | Lista de texto de una línea |

Los metacampos `badge_background_color`, `badge_text_color`, `highlight_card`, `card_icon`, `reviews_rating` y `reviews_count` los lee el código del tema directamente; no hay nada que reconectar, solo crearlos (ver `MIGRACION.md`).
