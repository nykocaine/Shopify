# Plan para mover la tienda SOEN a otra tienda Shopify

Sacado del repositorio (`nykocaine/Shopify`). Lo que NO está aquí (productos, precios, valores de metacampos) se marca como **perdido** o **por rehacer**.

## 0. Idea principal

El tema entero vive en este repo, así que **no hay que reescribir los textos del tema**. En la tienda nueva:

1. Online Store > Themes > Add theme > **Connect from GitHub** > repo `nykocaine/Shopify`.
2. Mejor conectar **una rama nueva** (por ejemplo `tienda-nueva`) y no `main`, para que los cambios de la tienda nueva no se mezclen con los de la vieja.
3. Con eso llegan solos: home, FAQ, página The Method (el test), Circle, contacto, libro de reclamaciones, reseñas escritas a mano, panel de reciclaje, footer, barra de anuncios, botón de WhatsApp, popup, etc.
   El detalle de esos textos está en `textos-recuperados.md`.

Lo que sigue es lo que **sí** hay que crear a mano en la tienda nueva, porque vive en la base de datos de Shopify y no en el tema.

## 1. Metacampos de producto (Settings > Custom data > Products)

Namespace `custom`. Los tipos son los que deduje por cómo los usa el tema; verifícalos al crearlos.

| Clave (key) | Tipo recomendado | Para qué lo usa el tema |
|---|---|---|
| `subtitle` | Texto de una línea | Subtítulo en tarjetas, menú y ficha |
| `subtitle_2` | Texto de una línea | Segundo subtítulo |
| `badges` | Lista de texto de una línea | Etiquetas sobre el producto |
| `badge_background_color` | Color | Fondo de la etiqueta |
| `badge_text_color` | Color | Texto de la etiqueta |
| `highlight_card` | Verdadero/falso | Tarjeta destacada (más grande) |
| `card_icon` | Archivo (imagen/SVG) | Sello decorativo en la tarjeta |
| `reviews_rating` | Calificación (Rating) | Estrellas |
| `reviews_count` | Número entero | Cantidad de reseñas |
| `aplicacion` | Texto enriquecido | FAQ "Sistema de acción" |
| `aplicacion_primer_dia` | Texto enriquecido (o multilínea) | Pie de la foto 1 |
| `aplicacion_segundo_dia` | Texto enriquecido (o multilínea) | Pie de la foto 2 |
| `aplicacion_resultado` | Texto enriquecido (o multilínea) | Pie 3 "RESULTS" |
| `1aplicacionfoto` | **Archivo, una sola imagen** | Foto 1 del FAQ |
| `2aplicacionfoto` | **Archivo, una sola imagen** | Foto 2 del FAQ |
| `estudios_clinicos` | Texto enriquecido | FAQ "Clinical studies" |
| `ingredientes` | Texto enriquecido | FAQ "Ingredientes" |
| `contraindicaciones` | Texto enriquecido | FAQ "Contraindicaciones" |
| `faq_title_color` | Color | Color de los títulos del FAQ (opcional) |

Importante para las fotos del FAQ: el tipo tiene que ser **Archivo** de una imagen. Si lo creas como lista de archivos o como referencia, el selector no lo ofrece (el problema que tenías antes).

Metacampo de **artículo** (blog): `secondary_image` (Archivo, imagen).

Si los textos son largos, créalos como "Texto enriquecido" para que se vean párrafos. Eso es lo que espera `metafield_tag`.

## 2. Menús (Content > Menus)

Con estos nombres/handles exactos, porque el tema los busca:

- `main-menu` (header)
- `footer` (links del footer)
- `social` (redes; Instagram: https://www.instagram.com/soenskincare/)

El contenido de cada menú se perdió; hay que recordar los enlaces.

## 3. Colecciones y productos

El tema referencia estos handles:

- Colección `all` (viene por defecto en Shopify).
- Productos: `sa-peel`, `duo-peel`, `tca`. El test "Nuestro método" recomienda estos tres según las respuestas.
  **Deben tener exactamente esos handles**, o el resultado del test no encuentra el producto.
- Productos con plantilla propia: gift card (`product.gift-card`, `product.gift-card-2`) y pre-order (`product.pre-order`). Asígnala en cada producto > Theme template.

**Perdido:** títulos, descripciones, precios, variantes, SKUs, inventario, fotos de producto y todos los valores de metacampos. El repo solo trae la estructura, no el contenido.

## 4. Páginas (Content > Pages) y su plantilla

| Página | Plantilla (Theme template) |
|---|---|
| Circle | `page.circle` |
| Contacto (Contáctanos) | `page.contact` |
| Preguntas frecuentes | `page.faq` |
| Libro de reclamaciones (Atención al Consumidor) | `page.libro-reclamaciones` |
| Lista de colecciones | `page.list-collections` |
| Seguimiento de pedido | `page.order-tracking` |
| Nuestro método | `page.the-method` |

Los textos de cada una ya vienen en la plantilla. La página en sí puede estar vacía; solo hay que crearla y elegir la plantilla.

## 5. Archivos (Content > Files)

El tema apunta a imágenes y videos por nombre. En la tienda nueva hay que subirlos **con el mismo nombre** para que se enlacen solos; si no, hay que elegirlos de nuevo en el editor. Lista de los que usa:

- Logos SVG: `SOEN_logo_caja-SA_horizontal_B0AEA8.svg`, `SOEN_logo_caja-SA_vertical_B0AEA8.svg`, `SOEN_logo_horizontal_5B5954.svg`, `SOEN_logo_9FA19C.svg`, `soen_logo_blanco.svg`
- Imágenes: 20 archivos `Generated_Image_*` / `GeneratedImage*`, además de `sss.avif` y `descarga.png`
- Videos: 6 archivos `TikVid.io_*.mp4` y `descarga (1).mp4`

Puedes ver la lista completa con `git grep "shopify://shop_images\|shopify://files" -- templates sections config`.

## 6. Ajustes de la tienda (no vienen con el tema)

- Datos de la tienda, dominio, moneda, impuestos.
- Envíos: según tu FAQ, Lima 2 a 3 días hábiles y provincias 3 a 4 días hábiles vía Shalom u Olva. Revisa la tarifa y el mínimo para envío gratis (la barra dice "Envío gratis a todo el Perú").
- Métodos de pago: tarjeta, Yape, transferencia.
- Políticas legales y correo de contacto (`hello@soenskin.com`).
- Apps: las que tengas instaladas (reseñas, WhatsApp, etc.) hay que reinstalarlas.
- Notificaciones por correo y checkout.

## 7. De dónde sacar la información de los productos

Esto es lo difícil, porque no está en el repo:

1. **Tus propios archivos:** cajas, fichas técnicas, documentos de formulación, hojas de cálculo. La mayor parte del contenido de `ingredientes`, `contraindicaciones` y `estudios_clinicos` sale de ahí.
2. **Wayback Machine (archive.org):** pega la dirección pública de tu tienda y mira si hay copias. Sirve para recuperar descripciones y precios a mano.
3. **Google:** la búsqueda `site:tudominio.com` a veces muestra títulos y descripciones en los resultados.
4. **Lo que sí está en el tema** y se puede reutilizar como base: el FAQ de la ficha de producto, las preguntas de seguridad, las reseñas y el panel de reciclaje (Tapa, Botella, Caja).
5. **Reactivar un mes ($50)** sigue siendo la única forma de exportar todo completo.

## 8. Orden sugerido

1. Crear la tienda nueva y conectar el repo (rama aparte).
2. Crear los metacampos (sección 1).
3. Crear menús, colecciones y páginas con plantilla (secciones 2 a 4).
4. Subir archivos con los mismos nombres (sección 5).
5. Crear los productos (`sa-peel`, `duo-peel`, `tca` primero), llenar descripciones y metacampos, y subir tus fotos.
6. Revisar en el editor de temas que no queden bloques con imagen vacía.
7. Configurar envíos, pagos, políticas y dominio.
