import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import EmailOpenedInfo from '@/components/subscription/EmailOpenedInfo'
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
import usePath from '@/hooks/use-path'
import useProducts from '@/hooks/use-products'
import {
  deliverSubscription,
  type SubscriptionData,
  subscriptionMailto,
  subscriptionSchema,
} from '@/lib/subscription'
import { SUBSCRIPTION_ENDPOINT, SUBSCRIPTION_FALLBACK_EMAIL } from '@/lib/subscription-config'

const SubscriptionForm = () => {
  const { t, i18n } = useTranslation()
  const paths = usePath()
  const products = useProducts()
  const navigate = useNavigate()
  const [emailOpened, setEmailOpened] = useState(false)
  const schema = subscriptionSchema(
    (key) => t(`subscription.errors.${key}`),
    products.map((p) => p.name),
  )
  const form = useForm<SubscriptionData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      interval: '6m',
      note: '',
      privacy: false,
      website: '',
    },
  })
  const onSubmit = async (data: SubscriptionData) => {
    try {
      const result = await deliverSubscription(
        data,
        SUBSCRIPTION_ENDPOINT,
        i18n.language === 'de' ? 'de' : 'hu',
        () => {
          window.location.href = subscriptionMailto(
            data,
            SUBSCRIPTION_FALLBACK_EMAIL,
            i18n.getFixedT('hu'),
          )
        },
      )
      if (result === 'email') setEmailOpened(true)
      if (result === 'submitted') navigate(paths.subscriptionThanks)
    } catch {
      toast.error(t('subscription.errors.submit'))
    }
  }
  if (emailOpened)
    return (
      <EmailOpenedInfo
        onReturn={() => {
          setEmailOpened(false)
        }}
      />
    )
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-foreground">{t('subscription.form.title')}</h2>
        <div className="hidden" aria-hidden="true">
          <Input {...form.register('website')} tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {(['name', 'email', 'phone', 'model'] as const).map((name) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t(`subscription.form.${name}`)}
                    {name !== 'phone' && ' *'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
                      maxLength={
                        name === 'name' ? 100 : name === 'model' ? 150 : name === 'email' ? 255 : 50
                      }
                      placeholder={t(`subscription.form.${name}Placeholder`)}
                      autoComplete={name === 'model' ? 'off' : name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('subscription.form.brand')} *</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">{t('subscription.form.chooseBrand')}</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="other">{t('subscription.form.other')}</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem>
              <fieldset>
                <legend className="mb-3 text-sm font-medium">
                  {t('subscription.form.interval')} *
                </legend>
                <div className="flex flex-wrap gap-6">
                  {(['6m', '12m'] as const).map((value) => (
                    <label key={value} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={field.name}
                        value={value}
                        checked={field.value === value}
                        onChange={() => {
                          field.onChange(value)
                        }}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        className="h-4 w-4 accent-primary"
                      />
                      {t(`subscription.form.${value}`)}
                    </label>
                  ))}
                </div>
              </fieldset>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('subscription.form.note')}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  maxLength={1000}
                  placeholder={t('subscription.form.notePlaceholder')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(event) => {
                      field.onChange(event.target.checked)
                    }}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    name={field.name}
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />
                </FormControl>
                <FormLabel className="leading-relaxed">
                  {t('subscription.form.privacyBefore')}{' '}
                  <Link to={paths.privacy} className="text-primary underline">
                    {t('subscription.form.privacyLink')}
                  </Link>
                  {t('subscription.form.privacyAfter')}
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {t(
            form.formState.isSubmitting ? 'subscription.form.sending' : 'subscription.form.submit',
          )}
        </Button>
      </form>
    </Form>
  )
}
export default SubscriptionForm
