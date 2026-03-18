# 🚀 Guía de Deployment - Descuubre Intelligence

Esta guía te ayudará a desplegar el proyecto en GitHub Pages de forma automática.

## 📋 Requisitos Previos

- Tener el repositorio ya creado en GitHub
- Permisos de administrador en el repositorio
- Node.js v18+ instalado localmente (para testing)

---

## 🔧 Configuración Paso a Paso

### **Paso 1: Configurar el archivo `vite.config.js`**

Actualiza el archivo `vite.config.js` en la raíz del proyecto:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/descuubre-intelligence/',  // ← Agrega esta línea
})
```

> **Nota**: El valor de `base` debe coincidir con el nombre de tu repositorio de GitHub.

---

### **Paso 2: Crear el Workflow de GitHub Actions**

Crea el siguiente archivo en tu repositorio:

**Ruta**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### **Paso 3: Habilitar GitHub Pages en el Repositorio**

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En la sección **Build and deployment**:
   - **Source**: Selecciona **GitHub Actions**
   
![GitHub Pages Configuration](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/select-github-actions-source.webp)

5. Guarda los cambios

---

### **Paso 4: Hacer Commit y Push de los Cambios**

```bash
# Agregar los cambios
git add vite.config.js .github/workflows/deploy.yml

# Hacer commit
git commit -m "ci: configurar GitHub Pages deployment"

# Push a GitHub
git push origin main
```

---

### **Paso 5: Verificar el Deployment**

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Deberías ver un workflow ejecutándose llamado **"Deploy to GitHub Pages"**
3. Espera a que termine (puede tomar 1-3 minutos)
4. Una vez completado, ve a **Settings** > **Pages**
5. Verás la URL pública de tu sitio:
   ```
   https://acampero-descuubre.github.io/descuubre-intelligence/
   ```

---

## ✅ Checklist de Deployment

- [ ] Actualizar `vite.config.js` con el `base` path correcto
- [ ] Crear archivo `.github/workflows/deploy.yml`
- [ ] Habilitar GitHub Pages en **Settings** > **Pages**
- [ ] Seleccionar **GitHub Actions** como source
- [ ] Hacer commit y push de los cambios
- [ ] Verificar que el workflow se ejecute correctamente
- [ ] Visitar la URL pública para confirmar

---

## 🔄 Deployments Automáticos

Una vez configurado, cada vez que hagas `push` a la rama `main`, GitHub Actions automáticamente:

1. ✅ Instalará las dependencias
2. ✅ Compilará el proyecto (`npm run build`)
3. ✅ Desplegará la versión actualizada a GitHub Pages

---

## 🐛 Troubleshooting

### Error: "Deployment failed"
- Verifica que hayas habilitado GitHub Pages en Settings
- Asegúrate de que el `base` en `vite.config.js` coincida con el nombre del repositorio

### Error: "Page not found"
- Verifica que el valor de `base` en `vite.config.js` sea correcto
- Asegúrate de que la URL incluya el nombre del repositorio

### Error: "Build failed"
- Revisa los logs en la pestaña **Actions**
- Asegúrate de que `npm run build` funcione localmente

---

## 🌐 Alternativas de Deployment

Si prefieres otras plataformas, puedes usar:

### **Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Arrastra la carpeta 'dist' a netlify.com
```

### **Cloudflare Pages**
1. Conecta tu repositorio en Cloudflare Pages
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`

---

## 📞 Soporte

Si tienes problemas con el deployment:
1. Revisa la [documentación oficial de Vite](https://vite.dev/guide/static-deploy.html)
2. Consulta la [documentación de GitHub Pages](https://docs.github.com/pages)
3. Abre un issue en el repositorio

---

<div align="center">
  <strong>¡Listo para desplegar! 🚀</strong>
  <br>
  <sub>Descuubre Intelligence 2026</sub>
</div>
