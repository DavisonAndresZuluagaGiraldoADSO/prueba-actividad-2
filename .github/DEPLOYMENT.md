# Configuracion de Despliegue Continuo (CI/CD)

Este proyecto usa GitHub Actions para automatizar la validacion y el despliegue en GitHub Pages.

## Flujos de trabajo

### 1. CI - Integracion Continua (`ci.yml`)
Se ejecuta en cada `push` y `pull_request` hacia `main` o `develop`.

Acciones:
- Instala dependencias
- Ejecuta `npm run check`
- Ejecuta `npm run build`
- Publica el artefacto `build/`

### 2. CD - Despliegue Continuo (`cd.yml`)
Se ejecuta en `main` y tambien cuando el workflow de CI termina correctamente sobre `main`.

Acciones:
- Instala dependencias
- Construye la aplicacion estatica
- Publica `build/` en GitHub Pages

### 3. Control de Calidad (`quality.yml`)
Se ejecuta en cada cambio para monitorear salud tecnica.

Acciones:
- Ejecuta `npm run check`
- Ejecuta `npm audit`
- Ejecuta `npm run build`

## Configuracion requerida en GitHub

### GitHub Pages
1. Ve a `Settings`
2. Entra en `Pages`
3. Selecciona `GitHub Actions` como source
4. Guarda los cambios

### Dominio personalizado
Si necesitas uno, agrega `static/CNAME` antes del build.

## Verificacion local

```bash
npm install
npm run check
npm run build
```

## Troubleshooting

### El build falla
Ejecuta:

```bash
npm install
npm run check
npm run build
```

### GitHub Pages no se actualiza
- Verifica que Pages use `GitHub Actions`
- Espera 1 o 2 minutos despues del despliegue
- Limpia cache del navegador
