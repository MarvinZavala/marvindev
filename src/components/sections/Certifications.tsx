'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Calendar, ExternalLink, Clock, Cloud, Code2, Smartphone, Globe, Link, Bot, Target, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Certifications() {
  const { t } = useLanguage()
  const certifications = [
    {
      title: 'AWS Cloud 101',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: t('certifications.status.completed'),
      description: t('certifications.aws.description'),
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'IAM'],
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Fullstack Developer',
      issuer: 'Codecademy',
      date: 'En progreso',
      status: t('certifications.status.inProgress'),
      description: t('certifications.fullstack.description'),
      skills: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Git'],
      icon: Code2,
      color: 'from-blue-500 to-purple-500'
    }
  ]

  const achievements = [
    {
      title: t('certifications.achievementsList.appDevelopment'),
      description: t('certifications.achievementsList.appDevDesc'),
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: t('certifications.achievementsList.multipleProjects'),
      description: t('certifications.achievementsList.multipleProjectsDesc'),
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('certifications.achievementsList.apiIntegration'),
      description: t('certifications.achievementsList.apiIntegrationDesc'),
      icon: Link,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t('certifications.achievementsList.automation'),
      description: t('certifications.achievementsList.automationDesc'),
      icon: Bot,
      color: 'from-indigo-500 to-blue-500'
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
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('certifications.subtitle')}
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
            {t('certifications.officialCerts')}
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
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
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
                      {cert.status === t('certifications.status.completed') && (
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          {t('certifications.viewCertificate')}
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
            {t('certifications.achievements')}
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={typeof achievement.title === 'string' ? achievement.title : achievement.title.join('')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                {t('certifications.nextGoals')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{t('certifications.nextGoalsList.codecademy')}</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <span>{t('certifications.nextGoalsList.awsArchitect')}</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span>{t('certifications.nextGoalsList.machineLearning')}</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span>{t('certifications.nextGoalsList.googleCloud')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}