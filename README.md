# Maltraxis Landing Page

Landing page interactiva de fantasía oscura para la saga literaria **Maltraxis** del autor **Jose C. Sierra**. 

Este proyecto está construido con **React**, **Vite** y **Tailwind CSS**, y está listo para ser subido a GitHub y desplegado automáticamente en **GitHub Pages**.

---

## 🛠️ Tecnologías Utilizadas

- **Core**: React 18, HTML5, CSS3.
- **Bundler**: Vite 5 (rápido y optimizado para producción).
- **Estilos**: Tailwind CSS v3 (diseño responsivo y adaptativo).
- **Iconos**: Lucide React.
- **CI/CD**: GitHub Actions (despliegue automático a GitHub Pages).

---

## 🚀 Comenzar en Modo Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Esto generará los archivos optimizados en la carpeta `dist/`.

---

## 📦 Configuración para GitHub Pages

El proyecto ya incluye toda la configuración necesaria para subirlo a GitHub y habilitar el despliegue automático.

### ⚠️ IMPORTANTE: Ajustar el Base Path

Antes de subir el código, debes editar el archivo [vite.config.js](vite.config.js) y cambiar el valor de `base` para que coincida con el nombre de tu repositorio en GitHub:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/tu-nombre-de-repositorio/', // 👈 Cambia 'LpageM' por el nombre de tu repositorio
})
```

---

## 🚀 Despliegue en GitHub Pages

Tienes **dos opciones** para desplegar la aplicación:

### Opción 1: GitHub Actions (Recomendado y Automático) 🤖

El proyecto incluye un flujo de trabajo de GitHub Actions en `.github/workflows/deploy.yml`. Cada vez que hagas `git push` a las ramas `main` o `master`, GitHub compilará y desplegará la página automáticamente.

1. Sube tu proyecto a un repositorio de GitHub.
2. En GitHub, ve a la pestaña **Settings** > **Pages** de tu repositorio.
3. En **Build and deployment** > **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona la rama `gh-pages` y la carpeta `/ (root)`.
5. ¡Listo! Tu página se actualizará sola con cada cambio.

### Opción 2: Despliegue Manual desde tu Consola 💻

Si prefieres desplegar manualmente desde tu máquina local sin usar Actions:

1. Ejecuta el comando:
   ```bash
   npm run deploy
   ```
   Este comando compilará el proyecto automáticamente (`predeploy`) y subirá los archivos de producción a la rama `gh-pages` en tu repositorio.

---

## 📁 Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD de GitHub Actions
├── public/                 # Recursos públicos y estáticos
├── src/
│   ├── App.jsx             # Componente React principal
│   ├── index.css           # Estilos de Tailwind CSS y animaciones de lluvia
│   └── main.jsx            # Punto de entrada de React
├── index.html              # HTML base
├── tailwind.config.js      # Configuración de Tailwind CSS
├── postcss.config.js       # Configuración de PostCSS
├── vite.config.js          # Configuración del empaquetador Vite
└── package.json            # Scripts del proyecto y dependencias
```

---

*Creado por Jose C. Sierra. Todos los derechos reservados.*
