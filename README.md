# TapirCode Labs Website

## Descripción
Sitio web estático para TapirCode Labs, una empresa de desarrollo de software a medida para pequeñas empresas. El sitio incluye funcionalidad de cambio de idioma (español/inglés) y es compatible con GitHub Pages.

## Estructura del Proyecto

```
tapircode-web/
├── css/
│   └── styles.css       # Estilos del sitio
├── js/
│   └── language.js      # Funcionalidad de cambio de idioma
├── index.html           # Página principal
├── version2.html        # Versión alternativa
└── README.md            # Este archivo
```

## Características

- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Cambio de Idioma**: Detección automática del idioma del navegador y opción para cambiar entre español e inglés
- **Almacenamiento Local**: Guarda la preferencia de idioma del usuario
- **Compatible con GitHub Pages**: Puede ser alojado directamente en GitHub Pages sin configuración adicional

## Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y variables)
- JavaScript (vanilla, sin dependencias)
- Google Fonts (Inter)

## Cómo Usar

1. Clona este repositorio
2. Abre `index.html` en tu navegador
3. Para desplegar en GitHub Pages, simplemente sube el repositorio a GitHub y activa GitHub Pages en la configuración del repositorio

## Personalización

- El color principal del sitio se puede cambiar modificando la variable `--primary-color` en `css/styles.css`
- Las imágenes pueden ser reemplazadas por imágenes propias (actualmente se utilizan imágenes de Unsplash)
- El contenido de texto se puede modificar en los archivos HTML utilizando los atributos `data-es` y `data-en` para español e inglés respectivamente