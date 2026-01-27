import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  const orderContact = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+36 20 806 9072',
      href: 'tel:+36208069072',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'office@sopronterv.hu',
      href: 'mailto:office@sopronterv.hu',
    },
  ];

  const technicalContact = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+36 20 323 8172',
      href: 'tel:+36203238172',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'info@sopronterv.hu',
      href: 'mailto:info@sopronterv.hu',
    },
    {
      icon: MessageSquare,
      title: 'Skype',
      value: 'nemeth_kalman',
      href: 'skype:nemeth_kalman?chat',
    },
  ];

  const generalInfo = [
    {
      icon: MapPin,
      title: 'Központ',
      value: 'Sopron, Magyarország',
      subtext: 'Országos szervizpartneri hálózattal',
      href: null,
    },
    {
      icon: Clock,
      title: 'Ügyfélszolgálat',
      value: 'H-P: 8:00 - 16:00',
      subtext: null,
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="section-dark py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              <span className="gradient-cyan-text">Kapcsolat</span>
            </h1>
            <p className="text-dark-muted text-lg max-w-2xl mb-4">
              Kérdésed van a szűrőkkel kapcsolatban? Segítünk megtalálni a géped típusához illő megoldást.
            </p>
            <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-lg px-4 py-2">
              <MapPin className="w-4 h-4 text-cyan" />
              <span className="text-dark-foreground text-sm">
                <strong>Országos lefedettség:</strong> Bár központunk Sopronban található, szervizpartnereink révén az ország egész területén elérhetőek vagyunk!
              </span>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Order & Shipping */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Rendelés, Szállítás
                  </h2>
                  <div className="space-y-3">
                    {orderContact.map((item) => (
                      <div 
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <a 
                            href={item.href}
                            className="font-medium text-foreground hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Support */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Szakmai, technikai kérdések
                  </h2>
                  <div className="space-y-3">
                    {technicalContact.map((item) => (
                      <div 
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <a 
                            href={item.href}
                            className="font-medium text-foreground hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Info */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Elérhetőség
                  </h2>
                  <div className="space-y-3">
                    {generalInfo.map((item) => (
                      <div 
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                          {item.subtext && (
                            <p className="text-xs text-cyan mt-1">{item.subtext}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-dark rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-dark-foreground mb-4">
                    Gyors válasz garantált
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed mb-4">
                    Munkanapokon 24 órán belül válaszolunk minden megkeresésre. 
                    Sürgős rendelés esetén hívj minket telefonon!
                  </p>
                  <div className="flex items-center gap-2 text-cyan font-medium">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+36208069072" className="hover:underline">
                      +36 20 806 9072
                    </a>
                  </div>
                </div>

                {/* Company Info */}
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Németh Légtechnika Kft.</p>
                  <p>Adószám: 26290438-2-08</p>
                  <p>Cégjegyzékszám: 08 09 029861</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
