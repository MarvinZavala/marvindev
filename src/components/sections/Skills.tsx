'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['Next.js 15', 'React Native', 'Tailwind CSS', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Backend & Database',
      skills: ['Firebase', 'Firestore', 'Supabase', 'Node.js', 'API Development']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Firebase Hosting', 'Vercel', 'AWS Cloud', 'Git', 'GitHub']
    },
    {
      title: 'AI & Automation',
      skills: ['OpenAI API', 'Chatbots con RAG', 'n8n', 'Automatización de procesos']
    },
    {
      title: 'Payment & APIs',
      skills: ['Stripe API', 'REST APIs', 'API Integration', 'Webhooks']
    },
    {
      title: 'Tools & Others',
      skills: ['VS Code', 'Figma', 'Notion', 'Slack', 'Discord Bots']
    }
  ]

  const languages = [
    { name: 'Español', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'Avanzado', percentage: 90 }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Habilidades & Herramientas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Idiomas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-sm text-muted-foreground">{language.level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Tecnologías dominadas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}