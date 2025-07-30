'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Smartphone, Globe, Users, GraduationCap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Localfy',
      description: 'Plataforma para conectar negocios locales con su comunidad, facilitando el descubrimiento de servicios y productos cercanos.',
      image: '🏪',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Google Maps API'],
      features: ['Geolocalización', 'Perfiles de negocio', 'Sistema de reseñas', 'Chat en tiempo real'],
      status: 'Completado',
      type: 'Web App',
      icon: Globe,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'NEGOZAPP',
      description: 'Aplicación móvil completa para gestión de pequeños negocios con inventario, ventas y análisis financiero.',
      image: '📊',
      technologies: ['React Native', 'Firebase', 'Stripe API', 'Chart.js'],
      features: ['Gestión de inventario', 'Procesamiento de pagos', 'Analytics', 'Reportes automáticos'],
      status: 'Completado',
      type: 'Mobile App',
      icon: Smartphone,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Onlypic',
      description: 'Red social enfocada en fotografía con filtros AI, compartir instantáneo y comunidad de fotógrafos.',
      image: '📸',
      technologies: ['Next.js', 'Supabase', 'OpenAI API', 'Cloudinary'],
      features: ['Filtros con IA', 'Feed personalizado', 'Stories', 'Marketplace de fotos'],
      status: 'En desarrollo',
      type: 'Web App',
      icon: Users,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'TutorNowSV',
      description: 'Plataforma educativa que conecta estudiantes con tutores especializados para clases personalizadas online.',
      image: '🎓',
      technologies: ['Next.js', 'Firebase', 'Zoom API', 'Stripe'],
      features: ['Matching inteligente', 'Videollamadas integradas', 'Sistema de pagos', 'Calendario'],
      status: 'Completado',
      type: 'Web Platform',
      icon: GraduationCap,
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-500 hover:bg-green-600'
      case 'En desarrollo':
        return 'bg-yellow-500 hover:bg-yellow-600'
      default:
        return 'bg-gray-500 hover:bg-gray-600'
    }
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de mis proyectos más importantes, desde aplicaciones móviles hasta plataformas web completas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-blue-600/20 flex items-center justify-center text-2xl">
                          {project.image}
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{project.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Características principales</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Proyectos completados</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Apps móviles</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">APIs integradas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Proyectos funcionales</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">¿Tienes una idea en mente?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevos desafíos y colaboraciones. 
            Si tienes un proyecto interesante, ¡hablemos!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Iniciar un proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  )
}