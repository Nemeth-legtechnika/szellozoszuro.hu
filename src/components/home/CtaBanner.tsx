import { Link } from 'react-router-dom';
import { ArrowRight, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaBanner = () => {
  return (
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-3xl opacity-50" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
            <Wind className="w-8 h-8 text-cyan" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Készen állsz a{' '}
            <span className="gradient-cyan-text">friss levegőre?</span>
          </h2>
          
          <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">
            Keresd meg a géped típusához illő szűrőt, és rendeld meg még ma! 
            Gyors szállítással, megbízható minőséggel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/shop">
                Szűrőkereső indítása
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/contact">
                Kérdésed van?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
