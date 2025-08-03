'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Code, Building2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  
  const experiences = [
    {
      title: t('experience.founder'),
      company: 'Strategika Agency',
      location: 'Oakland, CA',
      period: '2024 - Presente',
      type: t('experience.agencyType'),
      icon: Building2,
      description: t('experience.agencyDescription'),
      achievements: [
        t('experience.agencyAchievements.founded'),
        t('experience.agencyAchievements.chatbots'),
        t('experience.agencyAchievements.automation'),
        t('experience.agencyAchievements.website'),
        t('experience.agencyAchievements.clients')
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'n8n', 'OpenAI API', 'RAG']
    },
    {
      title: t('experience.freelancer'),
      company: t('experience.company'),
      location: 'Oakland, CA',
      period: t('experience.period'),
      type: t('experience.type'),
      icon: Code,
      description: t('experience.description'),
      achievements: [
        t('experience.achievement1'),
        t('experience.achievement2'),
        t('experience.achievement3'),
        t('experience.achievement4'),
        t('experience.achievement5')
      ],
      technologies: ['Next.js', 'React Native', 'Firebase', 'Stripe API', 'OpenAI API']
    }
  ]

  const getIconColor = (type: string) => {
    switch (type) {
      case 'Desarrollo':
        return 'text-blue-500'
      case 'Agencia Digital':
        return 'text-purple-500'
      default:
        return 'text-gray-500'
    }
  }

  const getTypeColor = (type: string) => {
    const developmentTypes = [t('experience.type'), 'Development', 'Desarrollo']
    const agencyTypes = ['Agencia Digital', 'Digital Agency']
    
    if (developmentTypes.includes(type)) {
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    }
    if (agencyTypes.includes(type)) {
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    }
    return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
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
            {t('experience.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div
                key={typeof experience.title === 'string' ? experience.title : experience.title.join('')}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${getIconColor(typeof experience.type === 'string' ? experience.type : experience.type.join(''))}`}>
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
                      <Badge className={getTypeColor(typeof experience.type === 'string' ? experience.type : experience.type.join(''))}>
                          {typeof experience.type === 'string' ? experience.type : experience.type.join('')}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">{t('experience.achievements')}</h4>
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
                      <h4 className="font-semibold mb-3">{t('experience.skillsDeveloped')}</h4>
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
              <CardTitle className="text-center">{t('experience.summary')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">{t('experience.summaryStats.yearsExp')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">{t('experience.summaryStats.satisfiedClients')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">{t('experience.summaryStats.agencyFounded')}</div>
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
              <h3 className="text-2xl font-bold mb-4">{t('experience.philosophy')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('experience.philosophyText')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}