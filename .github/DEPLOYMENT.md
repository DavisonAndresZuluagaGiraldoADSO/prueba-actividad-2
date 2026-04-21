# Configuración de Despliegue Continuo (CI/CD)

Este proyecto está configurado con GitHub Actions para automatizar integración continua y despliegue continuo.

## Flujos de Trabajo

### 1. **CI - Integración Continua** (`ci.yml`)
Se ejecuta en cada push y pull request a `main` o `develop`.

**Acciones:**
- ✅ Instala dependencias
- ✅ Ejecuta verificación de tipos (TypeScript)
- ✅ Ejecuta linting con svelte-check
- ✅ Construye la aplicación
- ✅ Sube artefactos de build (retenidos 5 días)

**Soporta:** Node.js 18.x y 20.x

### 2. **CD - Despliegue Continuo** (`cd.yml`)
Se ejecuta cuando el CI pasa exitosamente en la rama `main`.

**Acciones:**
- 🚀 Construye la aplicación para producción
- 🌐 Despliega automáticamente a GitHub Pages
- 📦 Crea releases automáticas etiquetadas

### 3. **Control de Calidad** (`quality.yml`)
Se ejecuta en cada cambio para monitorear la calidad.

**Acciones:**
- 🔍 Análisis de cobertura de tipos
- 🔐 Verifica vulnerabilidades con `npm audit`
- 🔨 Compila para verificar errores de compilación

## Configuración Requerida

### GitHub Pages
1. Ve a **Settings** del repositorio
2. Selecciona **Pages**
3. Elige **Deploy from a branch**
4. Selecciona `gh-pages` como rama
5. Guarda los cambios

### Dominio Personalizado (Opcional)
Si tienes un dominio personalizado, descomentar la línea `cname:` en `cd.yml` y agregar tu dominio.

## Variables de Entorno

Agregar en **Settings > Secrets and variables > Actions** si necesitas:
- `DEPLOYMENT_TOKEN`: Token personalizado de despliegue
- `CUSTOM_DOMAIN`: Dominio personalizado para CNAME

## Flujo de Trabajo

```
Push a main/develop
       ↓
   CI - Linting, Build, Tests
       ↓
¿CI Exitoso?
   ├→ NO: Notificación de error
   └→ SI: Continuar
       ↓
(Solo en main) CD - Despliegue automático
       ↓
Aplicación en vivo en GitHub Pages
```

## Monitoreo

- Visualiza el estado en **Actions** tab del repositorio
- Recibe notificaciones en email si los workflows fallan
- Cada release aparece en la pestaña **Releases**

## Troubleshooting

### El build falla
```bash
# Verificar localmente
npm ci
npm run check
npm run build
```

### GitHub Pages no se actualiza
- Verifica que la rama `gh-pages` existe
- Espera 1-2 minutos después del despliegue
- Limpia el caché del navegador

### Desactivar workflows
Ir a **Settings > Actions > General** y cambiar permisos
