# Soporte en Español para Viajeros por Asia

Sitio web React con enrutamiento automático y despliegue en GitHub Pages.

## 🚀 Características

- **Enrutamiento automático**: Cada archivo `*Page.tsx` en `/pages` se convierte en una ruta única
- **URLs amigables**: Los nombres camelCase se convierten automáticamente a kebab-case
- **Despliegue automático**: GitHub Actions construye y despliega en cada push a `main`
- **Tailwind CSS**: Estilos modernos y responsive
- **React 19**: Última versión de React

## 📁 Estructura del Proyecto

```
/workspace
├── pages/                    # Páginas del sitio (auto-descubiertas)
│   └── *Page.tsx            # Cada archivo crea una ruta única
├── src/
│   ├── main.jsx             # Punto de entrada con enrutador automático
│   └── index.css            # Estilos Tailwind
├── .github/workflows/
│   └── deploy.yml           # Workflow de GitHub Actions
├── dist/                     # Output del build (desplegado a GitHub Pages)
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Comandos Disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build para producción
npm run preview   # Preview del build localmente
```

## 📄 Cómo Agregar Nuevas Páginas

1. Crea un nuevo archivo en `/pages` con el formato `*Page.tsx`:

```tsx
// pages/ContactoPage.tsx
import React from 'react'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <h1>Página de Contacto</h1>
    </div>
  )
}
```

2. El sistema genera automáticamente la URL:
   - Archivo: `ContactoPage.tsx` → URL: `/contacto`
   - Archivo: `MiPaginaPage.tsx` → URL: `/mi-pagina`
   - Archivo: `SoporteenEspañolparaViajerosporAsíaPage.tsx` → URL: `/soporte-en-español-para-viajeros-por-asía`

3. Haz push a GitHub y se desplegará automáticamente

## 🌐 Despliegue en GitHub Pages

### Configuración Inicial

1. **Push a GitHub**:
```bash
git add .
git commit -m "Initial commit with GitHub Actions setup"
git push origin main
```

2. **Configurar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages**
   - En **Source**, selecciona: **GitHub Actions**
   - Guarda los cambios

3. **Esperar el despliegue**:
   - Ve a la pestaña **Actions**
   - Verás el workflow ejecutándose
   - Cuando termine, tu sitio estará en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### URLs de Ejemplo

| Archivo | URL |
|---------|-----|
| `pages/HomePage.tsx` | `/home` |
| `pages/SobreNosotrosPage.tsx` | `/sobre-nosotros` |
| `pages/ContactoPage.tsx` | `/contacto` |
| `pages/SoporteenEspañolparaViajerosporAsíaPage.tsx` | `/soporte-en-español-para-viajeros-por-asía` |

## 🔧 Configuración Técnica

- **Vite**: Build tool rápido
- **React Router DOM**: Enrutamiento cliente
- **Tailwind CSS v4**: Framework de estilos
- **GitHub Actions**: CI/CD automático

## 📝 Notas Importantes

- ✅ El repositorio es **público**, cualquiera puede ver tu sitio
- ✅ Las páginas deben terminar en `Page.tsx` para ser descubiertas
- ✅ Usa camelCase para los nombres de archivo (ej: `MiPaginaPage.tsx`)
- ✅ El build se genera en `/dist` y se despliega automáticamente

## 🆘 Solución de Problemas

### El build falla
- Ejecuta `npm run build` localmente para verificar
- Revisa que todas las dependencias estén en `package.json`

### Página 404
- Asegúrate que el archivo termine en `Page.tsx`
- Verifica que esté en la carpeta `/pages`

### El sitio no se actualiza
- Limpia el caché del navegador (Ctrl+Shift+R)
- Revisa la pestaña **Actions** en GitHub

## 📄 Licencia

ISC