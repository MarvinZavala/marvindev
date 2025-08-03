'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Smartphone, Globe, Users, GraduationCap, Building2, Palette } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const projects = [
    {
      title: t('projects.localfy.title'),
      description: t('projects.localfy.description'),
      image: '🏪',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Google Maps API'],
      features: t('projects.localfy.features'),
      status: t('projects.status.completed'),
      type: t('projects.type.webApp'),
      icon: Globe,
      demoUrl: 'https://github.com/MarvinZavala',
      githubUrl: 'https://github.com/MarvinZavala'
    },
    {
      title: t('projects.negozapp.title'),
      description: t('projects.negozapp.description'),
      image: '📊',
      technologies: ['React Native', 'Firebase', 'Stripe API', 'Chart.js'],
      features: t('projects.negozapp.features'),
      status: t('projects.status.completed'),
      type: t('projects.type.mobileApp'),
      icon: Smartphone,
      demoUrl: 'https://negozapp.com',
      githubUrl: 'https://github.com/MarvinZavala'
    },
    {
      title: t('projects.onlypic.title'),
      description: t('projects.onlypic.description'),
      image: '📸',
      technologies: ['Next.js', 'Supabase', 'OpenAI API', 'Cloudinary'],
      features: t('projects.onlypic.features'),
      status: t('projects.status.completed'),
      type: t('projects.type.webApp'),
      icon: Users,
      demoUrl: 'https://www.onlypic.art/',
      githubUrl: 'https://github.com/MarvinZavala'
    },
    {
      title: t('projects.tutornow.title'),
      description: t('projects.tutornow.description'),
      image: '🎓',
      technologies: ['Next.js', 'Firebase', 'Zoom API', 'Stripe'],
      features: t('projects.tutornow.features'),
      status: t('projects.status.completed'),
      type: t('projects.type.webPlatform'),
      icon: GraduationCap,
      demoUrl: 'https://github.com/MarvinZavala',
      githubUrl: 'https://github.com/MarvinZavala'
    },
    {
      title: t('projects.strategika.title'),
      description: t('projects.strategika.description'),
      image: '🚀',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'n8n', 'OpenAI API', 'RAG'],
      features: t('projects.strategika.features'),
      status: t('projects.status.completed'),
      type: t('projects.type.agencyWebsite'),
      icon: Building2,
      demoUrl: 'https://strategikagency.com',
      githubUrl: 'https://github.com/MarvinZavala'
    },
    {
      title: t('projects.zalabsdigital.title'),
      description: t('projects.zalabsdigital.description'),
      image: '🎨',
      technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript', 'SEO Tools', 'Analytics'],
      features: t('projects.zalabsdigital.features'),
      status: t('projects.status.completed'),
      type: 'Digital Agency',
      icon: Palette,
      demoUrl: 'https://zalabsdigital.com',
      githubUrl: 'https://github.com/MarvinZavala'
    }
  ]

  const getStatusColor = (status: string) => {
    const completedTranslations = [t('projects.status.completed'), 'Completado', 'Completed']
    const inProgressTranslations = [t('projects.status.inProgress'), 'En desarrollo', 'In development']
    
    if (completedTranslations.includes(status)) {
      return 'bg-green-500 hover:bg-green-600'
    }
    if (inProgressTranslations.includes(status)) {
      return 'bg-yellow-500 hover:bg-yellow-600'
    }
    return 'bg-gray-500 hover:bg-gray-600'
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
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={typeof project.title === 'string' ? project.title : project.title.join('')}
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
                            {typeof project.title === 'string' ? project.title : project.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{typeof project.type === 'string' ? project.type : project.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(typeof project.status === 'string' ? project.status : project.status.join(''))}>
                        {typeof project.status === 'string' ? project.status : project.status.join('')}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {typeof project.description === 'string' ? project.description : project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">{t('common.technologies')}</h4>
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
                      <h4 className="font-semibold mb-2 text-sm">{t('projects.mainFeatures')}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {(Array.isArray(project.features) ? project.features : [project.features as string]).map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex pt-4">
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        🚀 {t('projects.viewDemo')}
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
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">{t('projects.stats.projectsCompleted')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">{t('projects.stats.digitalAgency')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">{t('projects.stats.apisIntegrated')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">{t('projects.stats.satisfiedClients')}</div>
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
          <h3 className="text-2xl font-bold mb-4">{t('projects.cta.title')}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('projects.cta.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('contact')}
          >
            {t('projects.cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}