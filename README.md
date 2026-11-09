# Bienestar Bugambilia

Landing page de una clínica residencial de rehabilitación y salud mental en Cuernavaca, Morelos. Presenta el tratamiento, las instalaciones y el programa de 35 días, y convierte a los visitantes en prospectos con un formulario que los lleva a WhatsApp. Está pensada para familias que buscan un centro de tratamiento y llegan desde buscadores. **En producción.**

## Funcionalidades principales

- **Página única** con portada, tratamiento, instalaciones, programa y contacto, más un encabezado con navegación por secciones.
- **Tratamiento:** detalle de lo que incluye el programa residencial (terapias, valoraciones médicas y psiquiátricas, estimulación magnética, capacidad y seguridad).
- **Instalaciones:** galería de las áreas de la clínica (alberca, jardines, habitaciones, capilla, cancha de usos múltiples y comedor).
- **Captación de prospectos:** el formulario de contacto arma un mensaje con los datos de la persona y abre una conversación de WhatsApp con la clínica; también hay botones directos de contacto en la portada y en la sección de precio.
- **SEO:** idioma `es`, título y descripción orientados a la búsqueda local, URL canónica, Open Graph, Twitter Card y `robots.txt`.
- **Diseño responsivo** con componentes shadcn/ui.

## Capturas

<!-- Agrega aquí tus imágenes, por ejemplo: ![Portada](docs/capturas/portada.png) -->

_Pendiente._

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18.3, TypeScript 5.8, React Router 6.30 |
| Build | Vite 5.4 con `@vitejs/plugin-react-swc` |
| Estilos y UI | Tailwind CSS 3.4, shadcn/ui (Radix UI), Lucide |
| Datos | TanStack Query 5 |
| Pruebas | Vitest 3 con Testing Library y jsdom |

## Arquitectura

Aplicación de una sola página sin backend:

- `src/pages/Index.tsx` compone la landing con una sección por componente: `HeroSection`, `TreatmentSection`, `FacilitiesSection`, `PricingSection` y `ContactSection` (más `Header` y `Footer`).
- `src/components/ui/` contiene los componentes base de shadcn/ui.
- El contacto no guarda datos: `ContactSection` construye la URL de WhatsApp con el mensaje y la abre en una pestaña nueva.
- `index.html` concentra los metadatos de SEO.

## Instalación y ejecución

Requisitos: Node.js 18 o superior y npm.

```bash
git clone https://github.com/LDanielMC/bienestar-bugambilia.git
cd bienestar-bugambilia
npm install
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Sirve la compilación para revisarla |
| `npm run lint` | Revisa el código con ESLint |

El proyecto no usa variables de entorno.

## Pruebas

```bash
npm test    # vitest run
```

Vitest y Testing Library están configurados, pero por ahora solo existe una prueba de ejemplo (`src/test/example.test.ts`).
