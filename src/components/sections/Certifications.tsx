'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Calendar, ExternalLink, Clock } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Cloud 101',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'Completado',
      description: 'Fundamentos de computación en la nube con AWS, incluyendo servicios básicos y arquitectura cloud.',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'IAM'],
      icon: '☁️'
    },
    {
      title: 'Fullstack Developer',
      issuer: 'Codecademy',
      date: 'En progreso',
      status: 'En curso',
      description: 'Programa completo de desarrollo fullstack cubriendo frontend, backend y bases de datos.',
      skills: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Git'],
      icon: '💻'
    }
  ]

  const achievements = [
    {
      title: 'Desarrollo de App Completa',
      description: 'React Native app con autenticación, base de datos y pagos',
      icon: '📱'
    },
    {
      title: 'Múltiples Proyectos Web',
      description: 'Localfy, NEGOZAPP, Onlypic, TutorNowSV',
      icon: '🌐'
    },
    {
      title: 'Integración de APIs',
      description: 'OpenAI, Stripe, Firebase y APIs personalizadas',
      icon: '🔗'
    },
    {
      title: 'Automatización',
      description: 'Chatbots con RAG y procesos automatizados con n8n',
      icon: '🤖'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Certificaciones & Logros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certificaciones oficiales y logros destacados en mi trayectoria de desarrollo
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <Award className="w-6 h-6 text-primary" />
            Certificaciones Oficiales
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{cert.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={cert.status === 'Completado' ? 'default' : 'secondary'}
                        className={cert.status === 'Completado' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {cert.status === 'Completado' ? (
                          <Calendar className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.date}</span>
                      {cert.status === 'Completado' && (
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          Ver certificado
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Logros Destacados
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{achievement.icon}</div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Próximos Objetivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Completar certificación Fullstack Developer en Codecademy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted rounded-full" />
                  <span>Obtener certificación AWS Solutions Architect Associate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted rounded-full" />
                  <span>Certificación en Machine Learning con Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted rounded-full" />
                  <span>Google Cloud Professional Developer</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}