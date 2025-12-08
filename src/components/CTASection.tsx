import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            准备好体验
            <span className="text-gradient"> 极致之声 </span>
            了吗？
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            限时首发价 ¥2,999，赠送原装收纳盒与一年延保服务
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              立即订购
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              预约体验
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            30天无理由退换 · 2年质保 · 免费配送
          </p>
        </div>
      </div>
    </section>
  );
};
