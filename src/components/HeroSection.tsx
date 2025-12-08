import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-headphones.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              新品首发 · 限时优惠
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              聆听
              <span className="text-gradient"> 无界 </span>
              <br />
              纯净之声
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Sonia 旗舰无线降噪耳机，搭载自研 Quantum 声学引擎，
              重塑您对声音的全部想象。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                立即购买
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                观看视频
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">60h</div>
                <div className="text-sm text-muted-foreground">超长续航</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">-45dB</div>
                <div className="text-sm text-muted-foreground">深度降噪</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">Hi-Res</div>
                <div className="text-sm text-muted-foreground">音频认证</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
              
              <img
                src={heroImage}
                alt="Sonia 旗舰无线降噪耳机"
                className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
