const specs = [
  { label: "驱动单元", value: "50mm 生物振膜" },
  { label: "频响范围", value: "4Hz - 80kHz" },
  { label: "阻抗", value: "32Ω" },
  { label: "灵敏度", value: "105dB/mW" },
  { label: "蓝牙版本", value: "5.3" },
  { label: "编解码器", value: "LDAC / aptX HD / AAC" },
  { label: "降噪深度", value: "-45dB" },
  { label: "续航时间", value: "60小时（降噪关）/ 40小时（降噪开）" },
  { label: "快充", value: "10分钟充电 = 5小时续航" },
  { label: "重量", value: "250g" },
  { label: "充电接口", value: "USB-C" },
  { label: "防护等级", value: "IPX4" },
];

export const SpecsSection = () => {
  return (
    <section id="specs" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            技术规格
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            精确到每一个细节
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            每一项参数都经过严格调校，只为呈现最纯净的声音
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 md:px-8 py-5 ${
                  index !== specs.length - 1 ? "border-b border-border/50" : ""
                } hover:bg-secondary/50 transition-colors`}
              >
                <span className="text-muted-foreground font-medium">{spec.label}</span>
                <span className="text-foreground font-semibold text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
