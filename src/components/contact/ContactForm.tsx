import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(2, 'A név legalább 2 karakter legyen').max(100, 'A név max 100 karakter lehet'),
  email: z.string().email('Érvénytelen e-mail cím').max(255, 'Az e-mail max 255 karakter lehet'),
  phone: z.string().optional(),
  machine: z.string().optional(),
  message: z.string().min(10, 'Az üzenet legalább 10 karakter legyen').max(2000, 'Az üzenet max 2000 karakter lehet'),
  // Honeypot field - should remain empty
  website: z.string().max(0, 'Bot detected').optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      machine: '',
      message: '',
      website: '', // Honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Bot detected, silently fail
      toast.success('Köszönjük megkeresését!');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build mailto URL
      const subject = encodeURIComponent(`Kapcsolatfelvétel: ${data.name}`);
      const body = encodeURIComponent(
        `Név: ${data.name}\n` +
        `E-mail: ${data.email}\n` +
        `Telefon: ${data.phone || 'Nincs megadva'}\n` +
        `Gép típusa: ${data.machine || 'Nincs megadva'}\n\n` +
        `Üzenet:\n${data.message}`
      );
      
      // Open email client
      window.location.href = `mailto:office@sopronterv.hu?subject=${subject}&body=${body}`;
      
      setIsSuccess(true);
      toast.success('Köszönjük megkeresését! Szakértőnk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.');
      form.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error('Sajnáljuk, hiba történt a küldés során. Kérjük, írjon közvetlenül az office@sopronterv.hu címre!');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Köszönjük!</h3>
        <p className="text-muted-foreground mb-4">
          Szakértőnk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
        >
          Új üzenet küldése
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-8">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Küldj üzenetet
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <div className="hidden" aria-hidden="true">
            <Input
              {...form.register('website')}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Név *</FormLabel>
                  <FormControl>
                    <Input placeholder="A neved" {...field} />
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
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@example.com" {...field} />
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
                <FormLabel>Telefonszám</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+36 30 123 4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="machine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gép típusa (opcionális)</FormLabel>
                <FormControl>
                  <Input placeholder="pl. Zehnder ComfoAir Q350" {...field} />
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
                <FormLabel>Üzenet *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Írd le kérdésedet vagy kérésedet..." 
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
                Küldés...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Üzenet küldése
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
