import { Headphones, Volume2, Bluetooth, Battery, Cpu, Waves } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => (
  <div 
    className="glass glass-hover rounded-2xl p-6 md:p-8 hover-lift animate-slide-up opacity-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const features = [
  {
    icon: <Volume2 className="w-6 h-6" />,
    title: "Hi-Res 音频认证",
    description: "支持 96kHz/24bit 高解析度音频，还原录音室级别的声音细节",
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: "自适应降噪",
    description: "AI 驱动的主动降噪技术，智能感知环境自动调节降噪深度",
  },
  {
    icon: <Bluetooth className="w-6 h-6" />,
    title: "多点连接",
    description: "蓝牙 5.3 支持同时连接两台设备，工作娱乐无缝切换",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "60小时续航",
    description: "单次充电续航60小时，快充10分钟可使用5小时",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "空间音频",
    description: "头部追踪技术配合杜比全景声，打造360°沉浸式声场",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "舒适佩戴",
    description: "记忆海绵耳罩配合轻量化钛合金头梁，长时间佩戴无压力",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            核心技术
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            专业级音频体验
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            融合前沿声学科技与人体工学设计，Sonia 重新定义无线耳机的极限
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
