# Marvin Zavala - Portafolio Personal

¡Bienvenido a mi portafolio personal! Soy Marvin Zavala, un estudiante de high school de 18 años apasionado por el desarrollo web, la inteligencia artificial y la creación de startups.

## 🚀 Sobre el Proyecto

Este es mi sitio web personal desarrollado con las tecnologías más modernas para mostrar mis habilidades, proyectos y experiencia como desarrollador.

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS
- **Componentes**: ShadCN UI
- **Animaciones**: Framer Motion
- **Lenguaje**: TypeScript
- **Deployment**: Vercel (recomendado)

## ✨ Características

- ✅ Diseño responsivo y moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Navegación fluida entre secciones
- ✅ Formulario de contacto funcional
- ✅ Optimizado para SEO
- ✅ Modo oscuro/claro automático
- ✅ Componentes reutilizables
- ✅ Código limpio y bien documentado

## 📋 Secciones

1. **Hero** - Presentación principal con información básica
2. **Sobre Mí** - Biografía personal y mis intereses
3. **Habilidades** - Tecnologías y herramientas que domino
4. **Certificaciones** - Certificaciones oficiales y logros
5. **Proyectos** - Portafolio de proyectos destacados
6. **Experiencia** - Trayectoria profesional y personal
7. **Testimonios** - Reseñas de clientes y frases inspiradoras
8. **Contacto** - Formulario y información de contacto

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/marvinzavala/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Personalización

### Colores

El sitio usa una paleta de colores personalizada definida en `src/app/globals.css`:
- **Primario**: Azul (#07AFFF)
- **Secundario**: Blanco y negro
- **Acentos**: Gradientes azules

### Contenido

Para personalizar el contenido:

1. **Información personal**: Edita los componentes en `src/components/sections/`
2. **Proyectos**: Modifica el array `projects` en `Projects.tsx`
3. **Habilidades**: Actualiza `skillCategories` en `Skills.tsx`
4. **Experiencia**: Edita `experiences` en `Experience.tsx`

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push

### Otras opciones

- **Netlify**: Compatible con builds estáticos
- **Firebase Hosting**: Ideal para integración con Firebase
- **GitHub Pages**: Para hosting gratuito

## 📧 Formulario de Contacto

El formulario está preparado para integrarse con:
- **Formspree**: Servicio recomendado para formularios
- **EmailJS**: Alternativa client-side
- **Netlify Forms**: Si usas Netlify

Para configurar Formspree:
1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Obtén tu endpoint
3. Actualiza la función `handleSubmit` en `Contact.tsx`

## 🔧 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # Componentes ShadCN UI
│   ├── sections/        # Secciones del sitio
│   └── Navigation.tsx   # Navegación principal
└── lib/
    └── utils.ts         # Utilidades
```

## 📞 Contacto

- **Email**: marvin@example.com
- **LinkedIn**: [linkedin.com/in/marvin-zavala](https://linkedin.com/in/marvin-zavala)
- **GitHub**: [github.com/marvinzavala](https://github.com/marvinzavala)
- **Ubicación**: Oakland, California

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Desarrollado con ❤️ por Marvin Zavala en Oakland, California**
