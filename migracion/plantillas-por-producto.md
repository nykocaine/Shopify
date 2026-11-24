# Contenido distinto en cada producto (sin metacampos)

Esta guía explica cómo hacer que cada producto (SA Peel, TCA Peel, Duo Peel…) muestre su propio contenido en la página de producto (Info panel, FAQ, Estadísticas, etc.) **sin crear metacampos** y sin cargar datos a mano en cada producto.

## La idea

Shopify permite tener **varias plantillas de producto** y elegir cuál usa cada producto. Cada plantilla guarda su propio contenido. Así:

| Producto | Plantilla | Archivo |
|---|---|---|
| SA Peel (y cualquier producto sin plantilla elegida) | `product` (la de siempre) | `templates/product.json` |
| TCA Peel | `tca` | `templates/product.tca.json` |

No hay que crear nada desde cero: la de TCA ya está hecha y se edita en el editor visual de Shopify como cualquier página.

## Cómo asignar la plantilla a un producto

1. Shopify Admin → **Productos** → abre **TCA Peel**.
2. A la derecha, en **Organización del producto** (Product organization) → **Plantilla del tema** (Theme template).
3. Elige **tca**. Guarda.

Si no ves "tca" en la lista, espera un par de minutos a que Shopify sincronice el tema desde GitHub y recarga la página.

## Cómo crear la plantilla de otro producto (por ejemplo Duo Peel)

Se hace en el editor, sin código:

1. Admin → **Tienda online** → **Temas** → **Personalizar**.
2. Arriba, en el selector de páginas, abre **Productos** → **Crear plantilla**.
3. Ponle nombre (por ejemplo `duo`) y elige **basada en: Producto por defecto** (o en `tca`). Se crea con todo el contenido ya copiado.
4. Edita en el editor lo que sea propio de ese producto (ver la lista de abajo).
5. Asígnala al producto como en la sección anterior.

## Qué es propio de cada producto (lo que hay que revisar al crear una plantilla)

- **Info panel** (sección Media Blocks, bloque *Info panel*): las 4 filas (ideal para, tipo de piel, activos, ten en cuenta) y el **contenido alternativo** (ingredientes y para qué sirve cada uno).
- **Estadísticas** (bloque *Estadísticas*): son datos de un estudio de **SA Peel**. Por eso la plantilla de TCA **no las incluye**. Añade ese bloque en otras plantillas solo cuando tengas datos propios de ese producto.
- **FAQ** (bloque *FAQ*): las preguntas son generales; revisa las respuestas que nombran un producto concreto (por ejemplo, días de descamación o frecuencia).
- **Fotos** de las tarjetas (imágenes con texto, dos imágenes con texto…): cámbialas por las del producto.
- **Reseñas**: son las mismas en todas las plantillas hasta que las cambies.

Lo que ya cambia solo por producto (porque usa metacampos del producto): los acordeones de *Ingredientes* y *Contraindicaciones* y las fotos del *Sistema*, dentro de la sección principal.

## Qué datos de TCA ya están cargados en `product.tca.json`

Todos salen del díptico de TCA Peel (`migracion/contenido-dipticos.md`):

- Ideal para: cicatrices de acné, manchas, líneas finas y textura.
- Tipo de piel: todo tipo de piel.
- Activos: TCA 30 % + ácido salicílico 10 %.
- Ten en cuenta: cada 4 semanas; no usar en embarazo, lactancia, herpes activo o heridas; no usar si tomaste isotretinoína en los últimos 2 meses.
- Contenido alternativo (ingredientes): TCA y ácido salicílico, con el estudio clínico del díptico (4 sesiones mejoraron las cicatrices de acné más que el ácido glicólico al 70 %, Manjhi et al., 2024).

**Falta** (no está en los dípticos, no se inventó): la lista INCI completa de cada producto, qué hace el ácido salicílico dentro del TCA Peel, y estadísticas propias de TCA.

## Limitaciones (importante)

- **Los cambios de estructura no se copian solos.** Si en el futuro cambias la *estructura* de la plantilla por defecto (añades, quitas o reordenas secciones), hay que repetir ese cambio en las plantillas de los otros productos. Los cambios de *contenido* de una plantilla no afectan a las demás.
- Cada plantilla se edita por separado en el editor (selector de páginas → Productos → elige la plantilla).

## Cuándo conviene pasar a metacampos

Las plantillas por producto son lo más simple con pocos productos (2 a 4). Si llegas a 5 o más, conviene usar **metacampos** (una sola plantilla que lee los datos de cada producto) y cargarlos de una vez con una **importación por CSV** (Admin → Productos → Importar, con columnas `Metafield: custom.<nombre>`), en vez de uno por uno. En ese caso, pide que se conecten los campos del Info panel y del FAQ a metacampos (en el editor, cada campo de texto tiene el icono de "conectar fuente dinámica").
