'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Marvin demostró una capacidad excepcional para entender nuestras necesidades y crear una solución que superó nuestras expectativas.",
      author: "Carlos Mendoza",
      role: "Propietario de Negocio Local",
      project: "Localfy",
      rating: 5
    },
    {
      quote: "Su trabajo en nuestra app móvil fue impresionante. La atención al detalle y la funcionalidad son de primera clase.",
      author: "Ana Rodriguez",
      role: "Emprendedora",
      project: "NEGOZAPP",
      rating: 5
    },
    {
      quote: "A pesar de su joven edad, Marvin muestra una madurez profesional y habilidades técnicas que rivalizan con desarrolladores senior.",
      author: "Dr. Miguel Santos",
      role: "Director Académico",
      project: "TutorNowSV",
      rating: 5
    }
  ]

  const motivationalQuotes = [
    {
      quote: "La innovación distingue entre un líder y un seguidor.",
      author: "Steve Jobs"
    },
    {
      quote: "El código es poesía escrita en lógica.",
      author: "Marvin Zavala"
    },
    {
      quote: "La tecnología es mejor cuando acerca a las personas.",
      author: "Matt Mullenweg"
    },
    {
      quote: "No se trata de las ideas, se trata de hacer que las ideas sucedan.",
      author: "Scott Belsky"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Testimonios & Inspiración
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lo que dicen sobre mi trabajo y las frases que me inspiran a seguir innovando
          </p>
        </motion.div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Lo que dicen mis clientes
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary mt-1">Proyecto: {testimonial.project}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Motivational Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Frases que me inspiran
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {motivationalQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4 group-hover:text-primary/50 transition-colors" />
                    <blockquote className="text-lg font-medium mb-4 leading-relaxed group-hover:text-primary transition-colors">
                      "{quote.quote}"
                    </blockquote>
                    <cite className="text-muted-foreground text-sm">
                      — {quote.author}
                    </cite>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-bold mb-6 leading-relaxed">
                "Mi misión es usar la tecnología para crear soluciones que realmente importen, 
                conectando a las personas y facilitando sus vidas diarias."
              </blockquote>
              <cite className="text-primary font-semibold">
                — Marvin Zavala
              </cite>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5⭐</div>
              <div className="text-sm text-muted-foreground">Calificación promedio</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}