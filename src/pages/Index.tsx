import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ValueProposition from '@/components/home/ValueProposition';
import BrandSelector from '@/components/home/BrandSelector';
import BlogPreview from '@/components/home/BlogPreview';
import CtaBanner from '@/components/home/CtaBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <BrandSelector />
        <BlogPreview />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
