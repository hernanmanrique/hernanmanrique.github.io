---
layout: post
title: "¿Se está secando el Campo de Marte? Una mirada desde el espacio"
date: 2026-09-23 15:00:00+0200
description: Uso imágenes Sentinel-2 y el índice NDVI para seguir la salud de la vegetación del Campo de Marte, en Jesús María (Lima), entre 2023 y 2026.
tags: teledetección sentinel-2 ndvi lima r gee
categories: análisis-espacial
giscus_comments: false
related_posts: false
toc:
  sidebar: false
---

El Campo de Marte es uno de los pocos pulmones verdes de Lima. Ubicado en Jesús María, entre la Avenida General Salaverry y el Jirón Horacio Urteaga, es un espacio que miles de vecinos usan diariamente para escapar, al menos momentáneamente, del caos vehicular que caracteriza a los distritos vecinos del centro de Lima.

Dese hace varios meses, he oído cómo el Campo de Marte se ha ido deteriorando debido al descuido de las autoridades. En ese sentido, quise saber cómo ha cambiado la salud de su vegetación en los últimos años. En lugar de ir a medirla en el terreno, la observé desde el espacio.

Para ello, realice un análisis rápido del parque usando un indicador denominado 'NDVI'. La imagen de abajo presenta los resultados de este análisis, y muestra cómo la salud de la vegetación se ha reducido considerablemente en el presente año.

{% include figure.liquid loading="eager" path="assets/img/blog/campo-de-marte-ndvi.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Mapas de NDVI del Campo de Marte de Jesús María para 2023, 2024, 2025 y 2026" %}

<div class="caption">
    Estrés vegetal en el Campo de Marte medido con NDVI a partir de imágenes Sentinel-2, 2023–2026. Los tonos verdes indican vegetación más vigorosa; los rojos, vegetación estresada o suelo descubierto.
</div>

## ¿Qué es el NDVI?

El NDVI (Índice de Vegetación de Diferencia Normalizada) es una de las herramientas más usadas en teledetección (remote sensing) para aproximarse a la salud de las plantas.

La idea es sencilla. Una planta sana absorbe mucha luz roja para hacer fotosíntesis y refleja con fuerza la luz infrarroja cercana, que nuestros ojos no ven. Por el contrario, una planta estresada o seca hace lo contrario. El índice compara ambas bandas:

$$
NDVI = \frac{NIR - Rojo}{NIR + Rojo}
$$

Los valores del NDVI van de -1 a 1. En la práctica, valores cercanos a 0,2 o menos suelen corresponder a suelo desnudo, caminos o pasto muy seco, mientras que valores por encima de 0,6 indican vegetación densa y vigorosa.

## Datos y método

Usé imágenes del satélite **Sentinel-2**, del programa europeo Copernicus, que ofrecen una resolución de 10 metros por píxel en las bandas roja (B4) e infrarroja cercana (B8). Es decir, cada cuadradito que se ve en el mapa representa unos 100 m² del parque.

Descargué y procesé las imágenes con **Google Earth Engine (GEE)**, calculé el NDVI para cada año y luego armé los mapas en **R**, recortando el resultado al perímetro del parque y superponiéndolo sobre un mapa base de OpenStreetMap.

## ¿Qué muestran los mapas?

Volvamos a los mapas. Entre 2023 y 2025 el patrón es bastante estable, ¿no es así?. Buena parte de las áreas de césped se mantiene en tonos verdes y amarillos, con valores de NDVI entre 0,5 y 0,7. Los tonos rojizos se concentran en lo que uno esperaría: los pasos peatonales que cruzan el parque en diagonal y las zonas de losas y canchas del complejo deportivo.

No obstante, a partir del 2026 observamos otra historia. El rojo deja de limitarse a los caminos y se extiende por grandes superficies de césped, sobre todo en la mitad sur y en el centro del parque. Las zonas que en años anteriores aparecían verdes ahora muestran valores de NDVI por debajo de 0,3. Solo algunos parches aislados conservan el vigor de antes.

## ¿Qué ocurrió en el 2026?

Una limitación del mapa anterior es que este presenta valores promedio para todo el año 2026. Es decir, el mapa resume toda la información disponible en una sola figura. Si pudiéramos indagar en el progresivo deterioro del Campo de Marte con mayor 'resolución temporal' (es decir, con más viñetas representando más fechas) podríamos observar mejor su evolución en el tiempo.

Intentémoslo otra vez usando Sentinel 2.

{% include video.liquid path="assets/video/blog/CampoDeMarte_NDVI_Monthly_2025-08_2026-09.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true %}

<div class="caption">
    Evolución mensual del NDVI en el Campo de Marte, agosto 2025 – septiembre 2026, a partir de imágenes Sentinel-2.
</div>



## ¿Cómo interpretar este cambio?

Los datos satelitales nos dicen *dónde* y *cuánto* cambió la vegetación, pero no *por qué*. Hay varias explicaciones posibles que valdría la pena contrastar en el terreno:

- **Riego**: cambios en la frecuencia o en la fuente de agua para regar las áreas verdes.
- **Uso intensivo**: eventos masivos, ferias o actividades que compactan el suelo y maltratan el césped.
- **Obras o remodelaciones** dentro del parque.
- **Condiciones climáticas** particulares del año.

También conviene tener en cuenta algunas limitaciones. Con píxeles de 10 metros, los bordes de caminos y árboles se mezclan con el césped. Además, el NDVI de un año depende de la fecha exacta de las imágenes: en Lima, la nubosidad del invierno y la estacionalidad del riego pueden influir en los valores.

Aun así, la magnitud y la extensión del cambio en 2026 sugieren algo más que ruido estadístico.

## ¿Por qué importa?

Lima es una de las capitales con menos área verde por habitante de América Latina, y su clima desértico hace que cada parque dependa casi por completo del riego. Espacios como el Campo de Marte cumplen funciones que van más allá de lo recreativo: regulan la temperatura, mejoran la calidad del aire y son parte de la vida cotidiana del barrio.

Herramientas abiertas como Sentinel-2 y Google Earth Engine permiten que cualquier persona, sea investigador, periodista o vecino, pueda monitorear estos espacios de forma gratuita y sistemática.

Si conoces lo que ha pasado en el Campo de Marte este año, me encantaría saberlo.

---

*Datos: imágenes Copernicus Sentinel-2 vía ESA/Google Earth Engine. Mapa base: © colaboradores de OpenStreetMap.*
