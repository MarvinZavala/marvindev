'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Brain, Rocket, Music } from 'lucide-react'

export default function About() {
  const interests = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Creando aplicaciones web modernas con Next.js y React'
    },
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description: 'Explorando el potencial de la IA en aplicaciones prácticas'
    },
    {
      icon: Rocket,
      title: 'Startups',
      description: 'Desarrollando ideas innovadoras y soluciones tecnológicas'
    },
    {
      icon: Music,
      title: 'Música Latina',
      description: 'Tocando en banda y mariachi, conectando con mis raíces'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un estudiante de 11° grado apasionado por la tecnología y la innovación. 
            Con más de un año de experiencia en desarrollo web y una app completa en React Native, 
            busco crear soluciones que impacten positivamente en la vida de las personas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Mi Historia
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde Oakland, California, he encontrado en la programación una forma de 
                expresar mi creatividad y resolver problemas reales. Mi viaje comenzó con 
                curiosidad por entender cómo funcionan las aplicaciones que uso diariamente.
              </p>
              <p>
                Actualmente estoy en 11° grado, pero mi pasión por la tecnología me ha llevado 
                a desarrollar proyectos como Localfy, NEGOZAPP, Onlypic y TutorNowSV, cada uno 
                con el objetivo de facilitar la vida de las personas a través de la tecnología.
              </p>
              <p>
                Además de la programación, toco música latina en banda y mariachi, lo que me 
                mantiene conectado con mis raíces y me enseña sobre trabajo en equipo y disciplina.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-600 p-1">
                  <img 
                    src="/0228D122-A3E7-43BC-A27C-A9F94B237DB5.PNG" 
                    alt="Marvin Zavala" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">Marvin Zavala - Desarrollador Web</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Mis Intereses</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}