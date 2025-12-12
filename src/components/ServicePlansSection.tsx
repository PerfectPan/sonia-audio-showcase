import { Check, Shield, Headphones, Wrench, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "基础版",
    price: "免费",
    description: "随产品附赠的标准服务",
    icon: Shield,
    features: [
      "1 年官方质保",
      "在线技术支持",
      "固件更新服务",
      "产品使用指南",
    ],
    popular: false,
  },
  {
    name: "专业版",
    price: "¥299",
    period: "/年",
    description: "为专业用户打造的全方位保障",
    icon: Headphones,
    features: [
      "3 年延长质保",
      "24/7 专属客服通道",
      "免费耳垫更换 (1次/年)",
      "优先固件测试资格",
      "专属调音配置文件",
    ],
    popular: true,
  },
  {
    name: "尊享版",
    price: "¥599",
    period: "/年",
    description: "顶级用户的极致尊享体验",
    icon: Crown,
    features: [
      "5 年全面保障",
      "1对1 声学工程师支持",
      "无限次配件更换",
      "新品优先体验权",
      "线下体验店VIP礼遇",
      "年度产品保养服务",
    ],
    popular: false,
  },
];

export const ServicePlansSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            服务方案
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            选择您的专属服务
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            从基础保障到尊享礼遇，我们为每一位 Sonia 用户提供贴心周到的服务体验
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative glass border-border/50 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                      最受欢迎
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-6">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    className="w-full"
                  >
                    {plan.price === "免费" ? "已包含" : "立即订阅"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            所有服务方案均可随时取消，且支持按比例退款
          </p>
        </div>
      </div>
    </section>
  );
};
