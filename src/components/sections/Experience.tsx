'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Code, Leaf, Music } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Web Freelance',
      company: 'Proyectos Independientes',
      location: 'Oakland, CA',
      period: '2023 - Presente',
      type: 'Desarrollo',
      icon: Code,
      description: 'Desarrollo de aplicaciones web y móviles completas usando tecnologías modernas como Next.js, React Native y Firebase.',
      achievements: [
        'Creé 4+ aplicaciones web funcionales desde cero',
        'Desarrollé una app móvil completa en React Native',
        'Integré múltiples APIs (Stripe, OpenAI, Firebase)',
        'Implementé sistemas de autenticación y pagos',
        'Automaticé procesos usando n8n y chatbots con RAG'
      ],
      technologies: ['Next.js', 'React Native', 'Firebase', 'Stripe API', 'OpenAI API']
    },
    {
      title: 'Jardinero',
      company: 'Servicios de Jardinería Local',
      location: 'Oakland, CA',
      period: '2022 - 2023',
      type: 'Trabajo de Campo',
      icon: Leaf,
      description: 'Trabajo de jardinería que me enseñó disciplina, responsabilidad y la importancia del trabajo duro.',
      achievements: [
        'Desarrollé una fuerte ética de trabajo',
        'Aprendí gestión del tiempo y organización',
        'Mejoré habilidades de comunicación con clientes',
        'Gané experiencia en trabajo físico y al aire libre',
        'Ahorré dinero para invertir en mi educación tecnológica'
      ],
      technologies: ['Gestión del tiempo', 'Atención al cliente', 'Trabajo en equipo']
    },
    {
      title: 'Músico de Banda y Mariachi',
      company: 'Grupos Musicales Locales',
      location: 'Oakland, CA',
      period: '2020 - Presente',
      type: 'Arte y Cultura',
      icon: Music,
      description: 'Participación activa en bandas y mariachi, manteniendo viva la tradición musical latina.',
      achievements: [
        'Participé en múltiples presentaciones públicas',
        'Desarrollé habilidades de trabajo en equipo',
        'Mantuve conexión con mis raíces culturales',
        'Aprendí disciplina a través de la práctica musical',
        'Mejoré habilidades de presentación y confianza'
      ],
      technologies: ['Instrumentos musicales', 'Trabajo en equipo', 'Presentaciones públicas']
    }
  ]

  const getIconColor = (type: string) => {
    switch (type) {
      case 'Desarrollo':
        return 'text-blue-500'
      case 'Trabajo de Campo':
        return 'text-green-500'
      case 'Arte y Cultura':
        return 'text-purple-500'
      default:
        return 'text-gray-500'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Desarrollo':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Trabajo de Campo':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Arte y Cultura':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experiencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria diversa me ha dado una perspectiva única, combinando tecnología, trabajo duro y arte
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${getIconColor(experience.type)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                          <p className="text-muted-foreground font-medium">{experience.company}</p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className={getTypeColor(experience.type)}>
                        {experience.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">Logros y Aprendizajes</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies/Skills */}
                    <div>
                      <h4 className="font-semibold mb-3">Habilidades Desarrolladas</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Resumen de Experiencia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia diversa</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Áreas de experiencia</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Habilidades desarrolladas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Mi Filosofía de Trabajo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada experiencia me ha enseñado algo valioso: la jardinería me dio disciplina y ética de trabajo, 
                la música me enseñó sobre colaboración y creatividad, y la programación me permite combinar 
                lógica con innovación. Esta diversidad me hace un desarrollador más completo y empático.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}