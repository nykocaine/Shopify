Necesito que conectes a metacampos dos bloques de la ficha de producto de mi tienda Shopify (tema "soen") para que cada producto muestre su propio contenido. Hoy esos bloques tienen el texto de SA Peel escrito a mano en el tema; hay que dejarlo conectado a metacampos y rellenar los de SA Peel, TCA y Duo Peel.

Trabaja con calma, paso a paso, y al final dime qué hiciste y qué quedó pendiente. Todo está en español.

## Contexto

- Productos (handles): `sa-peel`, `tca`, `duo-peel`. Todos usan (o deberían usar) la plantilla de producto `product` (la predeterminada). Antes de tocar nada, revisa en cada producto, en Theme template, cuál usa. Si alguno usa otra plantilla, avísame y espera.
- Los metacampos van en el namespace `custom` (Ajustes > Datos personalizados > Productos), igual que los que ya existen (`sistema`, `enfoque`, `sistema_foto_dos`, etc.).
- Editor de temas: Online Store > Themes > Personalizar > selector de plantilla "Productos" > "Producto predeterminado". En la ficha hay dos secciones "Media blocks":
  1. La primera tiene el bloque "Dos imágenes con texto" (PROCESO / RESULTADO) y debajo el bloque "Estadísticas" (98 %, 96 %, 88.5 % y un texto pequeño).
  2. La segunda tiene el bloque "Info panel" (título "formula disclosure" con las filas IDEAL PARA, TIPO DE PIEL, ACTIVOS, TEN EN CUENTA) y a la derecha una imagen.

## Qué NO se toca

- El título "formula disclosure" y los nombres de las filas (IDEAL PARA, TIPO DE PIEL, ACTIVOS, TEN EN CUENTA) se quedan fijos en el tema, igual para todos los productos.
- Las imágenes PROCESO / RESULTADO ya están conectadas a `sistema_foto_dos` y `sistema_foto_tres`: no las toques y no inventes ni subas imágenes. Si TCA o Duo Peel no tienen esas fotos, dímelo y yo las subo.
- Ningún otro bloque, color, tamaño ni orden del tema.

## Paso 1. Crear los metacampos (Ajustes > Datos personalizados > Productos > Agregar definición)

Crea exactamente estos, namespace `custom`, uno por uno. Ojo con el tipo, porque el editor de temas solo ofrece los compatibles.

**Bloque Estadísticas** (el cuadro gris con los porcentajes 98 %, 96 % y 88.5 %, a la derecha de las fotos PROCESO / RESULTADO):

| Nombre sugerido | Clave | Tipo |
|---|---|---|
| Resultado 1 - número | `resultado_1_numero` | Texto de una línea |
| Resultado 1 - texto | `resultado_1_texto` | Texto de una línea |
| Resultado 2 - número | `resultado_2_numero` | Texto de una línea |
| Resultado 2 - texto | `resultado_2_texto` | Texto de una línea |
| Resultado 3 - número | `resultado_3_numero` | Texto de una línea |
| Resultado 3 - texto | `resultado_3_texto` | Texto de una línea |
| Resultados - texto pequeño | `resultado_nota` | Texto de varias líneas |

**Bloque Info panel, vista principal** (cada metacampo es el texto de la derecha de una fila):

| Nombre sugerido | Clave | Tipo |
|---|---|---|
| Fórmula - ideal para | `formula_ideal_para` | Texto enriquecido |
| Fórmula - tipo de piel | `formula_tipo_piel` | Texto enriquecido |
| Fórmula - activos | `formula_activos` | Texto enriquecido |
| Fórmula - ten en cuenta | `formula_ten_en_cuenta` | Texto enriquecido |

**Bloque Info panel, vista alternativa** (el panel tiene un botón que cambia a "ingredientes y para qué sirve cada uno"; ese contenido también cambia por producto):

| Nombre sugerido | Clave | Tipo |
|---|---|---|
| Fórmula alt - título | `formula_alt_titulo` | Texto de una línea |
| Fórmula alt 1 - nombre | `formula_alt_1_nombre` | Texto de una línea |
| Fórmula alt 1 - contenido | `formula_alt_1_contenido` | Texto enriquecido |
| Fórmula alt 2 - nombre | `formula_alt_2_nombre` | Texto de una línea |
| Fórmula alt 2 - contenido | `formula_alt_2_contenido` | Texto enriquecido |
| Fórmula alt 3 - nombre | `formula_alt_3_nombre` | Texto de una línea |
| Fórmula alt 3 - contenido | `formula_alt_3_contenido` | Texto enriquecido |

Si el editor de temas no ofrece algún metacampo en un campo concreto por incompatibilidad de tipo (por ejemplo el título alternativo), no fuerces nada: crea otro metacampo del tipo compatible, dime cuál cambiaste y sigue.

## Paso 2. Rellenar SA Peel primero (que no pierda lo que ya muestra)

En Productos > SA Peel, rellena los metacampos con EXACTAMENTE este texto (es lo que hoy está escrito a mano en el tema):

- `resultado_1_numero`: `98 %`
- `resultado_1_texto`: `De los participantes de un estudio pequeño presentó una mejoría superior al 50% en la hiperpigmentación postinflamatoria.`
- `resultado_2_numero`: `96 %`
- `resultado_2_texto`: `Disminución de lesiones elevadas y enrojecidas asociadas al acné, contribuyendo a mejorar la apariencia de la piel y reducir la presencia de imperfecciones inflamatorias.`
- `resultado_3_numero`: `88.5 %`
- `resultado_3_texto`: `Reducción de comedones, favoreciendo una apariencia más limpia de los poros y una textura cutánea más uniforme.`
- `resultado_nota`: `*Basado en un estudio de observación realizado a 79 participantes después de utilizar SA Peel. Las fotografías no han sido retocadas. Los resultados pueden variar según cada persona.`
- `formula_ideal_para`: `acné, puntos negros, poros, textura irregular y manchas`
- `formula_tipo_piel`: `grasa, mixta y normal`
- `formula_activos`: `ácido salicílico 30 % + ácido láctico 10 % de grado médico`
- `formula_ten_en_cuenta`: dos párrafos: `cada 3–4 semanas` y `no usar en embarazo, lactancia, herpes activo o heridas`
- `formula_alt_titulo`: `ingredientes y para qué sirve cada uno`
- `formula_alt_1_nombre`: `ácido salicílico (30 %)`
- `formula_alt_1_contenido`: `ayuda con el acné, los puntos negros, los poros y la textura irregular. en un ensayo clínico, 3 sesiones redujeron las lesiones de acné no inflamatorias (bae et al., 2013).`
- `formula_alt_2_nombre`: `ácido láctico (10 %)`
- `formula_alt_2_contenido`: `acompaña al ácido salicílico en la fórmula y ayuda a mejorar la textura de la piel.`
- `formula_alt_3_nombre`: `excipientes`
- `formula_alt_3_contenido`: `base de la fórmula que acompaña a los activos.`

## Paso 3. Rellenar TCA y Duo Peel

Mira primero la descripción y los datos del producto en el admin (composición, concentraciones) y úsalos. Rellena los mismos metacampos con contenido propio de cada producto, con generalidades que conozcas sobre la aplicación de peelings de ácido tricloroacético (TCA) y, en Duo Peel, de su combinación según lo que diga el producto.

Reglas, importantes porque es una marca de cuidado de la piel:

- NO inventes datos: ni porcentajes de mejoría, ni estudios, ni número de participantes, ni concentraciones o pH que no estén en el producto. Si no los conoces, para el número usa `XX %`, para el texto usa una frase general sin cifras (por ejemplo, "mejora de la apariencia de la textura y del tono de la piel"), y en `resultado_nota` escribe: `*Datos del estudio pendientes de confirmar. Los resultados pueden variar según cada persona.` Dime cuáles quedaron con `XX %` para que yo ponga los reales.
- Para los activos, si el producto no indica la concentración, escribe solo el nombre del activo (por ejemplo, "ácido tricloroacético (TCA)") y dime que falta la concentración.
- Lenguaje cosmético, nunca promesas médicas: "ayuda a", "mejora la apariencia de", nunca "cura", "elimina" o "trata".
- Mismo estilo que SA Peel: minúsculas, frases cortas, tono cercano, sin mayúsculas salvo siglas (TCA).
- "Ten en cuenta" debe incluir frecuencia general entre sesiones y las contraindicaciones habituales de un peeling profundo (embarazo, lactancia, herpes activo, heridas o piel irritada, y exposición solar sin protección). Si el producto tiene sus propias indicaciones, usa esas.
- La vista alternativa (ingredientes) debe tener un ingrediente por fila, con una frase de para qué sirve; si el producto solo tiene un activo y excipientes, deja la fila 3 vacía o ponla como excipientes. Una fila con el nombre vacío no se muestra, y un resultado con número y texto vacíos tampoco: si un producto tiene menos de 3 resultados, deja el último vacío.
- No publiques ni cambies el estado de ningún producto (borrador/activo) ni nada más.

## Paso 4. Conectar los campos en el editor de temas

En la plantilla `Producto predeterminado`, sección Media blocks:

1. Bloque "Estadísticas": en cada uno de estos campos, pulsa el icono de conexión dinámica (el que aparece junto al campo) y elige el metacampo de producto indicado:
   - Número grande (estadística 1, 2, 3) → `resultado_1_numero`, `resultado_2_numero`, `resultado_3_numero`
   - Texto debajo (estadística 1, 2, 3) → `resultado_1_texto`, `resultado_2_texto`, `resultado_3_texto`
   - Texto pequeño → `resultado_nota`
   - La estadística 4 se queda vacía como está.
2. Bloque "Info panel":
   - "Fila 1: contenido" → `formula_ideal_para`
   - "Fila 2: contenido" → `formula_tipo_piel`
   - "Fila 3: contenido" → `formula_activos`
   - "Fila 4: contenido" → `formula_ten_en_cuenta`
   - "Título alternativo" → `formula_alt_titulo`
   - "Fila alternativa 1/2/3: nombre" → `formula_alt_1_nombre`, `formula_alt_2_nombre`, `formula_alt_3_nombre`
   - "Fila alternativa 1/2/3: contenido" → `formula_alt_1_contenido`, `formula_alt_2_contenido`, `formula_alt_3_contenido`
   - Los nombres de las filas 1 a 4 (IDEAL PARA, TIPO DE PIEL, ACTIVOS, TEN EN CUENTA) y el título "formula disclosure" NO se conectan: se dejan como están.
   - Las filas 5 y 6 y las filas alternativas 4 a 6 se quedan vacías.
3. Guarda la plantilla.

## Paso 5. Verificar

Abre en el navegador las tres fichas (`/products/sa-peel`, `/products/tca`, `/products/duo-peel`) y comprueba en cada una, tanto en escritorio como en móvil:

- Los tres porcentajes, sus textos y el texto pequeño cambian según el producto, y la ficha de SA Peel se ve idéntica a como estaba antes.
- El panel "formula disclosure" muestra los datos del producto, y el botón del panel alterna a la vista de ingredientes con el contenido de ese producto.
- No quedó ningún campo en blanco inesperado ni texto de SA Peel en TCA o Duo Peel.

Al terminar dame una lista: metacampos creados, productos rellenados, campos conectados, y todo lo que quedó con `XX %` o sin dato (concentraciones, estudios, fotos) para que yo lo complete.
