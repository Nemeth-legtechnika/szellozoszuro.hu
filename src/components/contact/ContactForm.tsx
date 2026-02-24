import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const contactSchema = z.object({
    name: z.string().min(2, t('contact.form.name')).max(100),
    email: z.string().email().max(255),
    phone: z.string().optional(),
    message: z.string().min(10).max(2000),
    website: z.string().max(0).optional(),
  })

  type ContactFormData = z.infer<typeof contactSchema>

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      website: '',
    },
  })

  const onSubmit = (data: ContactFormData) => {
    if (data.website && data.website.length > 0) {
      toast.success(t('contact.form.success'))
      return
    }

    setIsSubmitting(true)

    const subject = encodeURIComponent(`Kontakt: ${data.name}`)
    const body = encodeURIComponent(
      `${t('contact.form.name')}: ${data.name}\n` +
        `${t('contact.form.email')}: ${data.email}\n` +
        `${t('contact.form.phone')}: ${data.phone || '-'}\n\n` +
        `${t('contact.form.message')}:\n${data.message}`,
    )

    window.location.href = `mailto:office@sopronterv.hu?subject=${subject}&body=${body}`

    setIsSuccess(true)
    toast.success(t('contact.form.successDescription'))
    form.reset()

    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{t('contact.form.success')}</h3>
        <p className="text-muted-foreground mb-4">{t('contact.form.successDescription')}</p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false)
          }}
        >
          {t('contact.form.submit')}
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-8">
      <h2 className="text-xl font-semibold text-foreground mb-6">{t('contact.form.title')}</h2>

      <Form {...form}>
        <form onSubmit={(e) => void form.handleSubmit(onSubmit)(e)} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <Input {...form.register('website')} tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.name')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.email')} *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.phone')}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={t('contact.form.phonePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.form.message')} *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t('contact.form.sending')}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t('contact.form.submit')}
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
