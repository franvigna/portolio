# Francisco Vignardel — Portfolio

Portfolio personal. React + Vite + TypeScript + SCSS Modules.

## Stack

- React 19 + TypeScript
- Vite 7 (`@vitejs/plugin-react-swc`)
- SCSS Modules (BEM)

## Desarrollo local

```bash
npm install
npm run dev
```

El formulario de contacto no usa backend: arma un link de Gmail con los datos cargados (nombre, motivo, mensaje) y lo abre en una pestaña nueva.

## Build

```bash
npm run build
npm run lint
```

## Deploy

Configurado para Vercel (`vercel.json`). Sitio 100% estático, sin variables de entorno.

## Estructura

```
src/
  config/constants.ts   # datos de contacto centralizados
  components/           # Sidebar, Hero, About, Education, Skills, Projects, Contact, Footer
```
