type HeroProps = {
  image: string
  alt: string
}

const Hero = ({ image, alt }: HeroProps) => (
  <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
    <img src={image} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
  </div>
)

export default Hero
