import { Star } from "lucide-react";

const reviews = [
  {
    name: "张伟",
    role: "音乐制作人",
    avatar: "Z",
    rating: 5,
    content: "作为专业音乐人，我对声音品质要求极高。Sonia 的声场还原度令人惊叹，三频均衡，解析力出众。这是我用过最接近监听级别的无线耳机。",
  },
  {
    name: "李明",
    role: "科技博主",
    avatar: "L",
    rating: 5,
    content: "评测过数十款旗舰耳机，Sonia 的自适应降噪算法是我见过最智能的。在嘈杂的咖啡厅和安静的办公室间切换，完全无需手动调节。",
  },
  {
    name: "王芳",
    role: "商务人士",
    avatar: "W",
    rating: 5,
    content: "每周飞行频繁，Sonia 的长续航和舒适度让我的旅途轻松许多。60小时续航不是虚标，实测确实达到了。通话降噪也非常清晰。",
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            用户评价
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            来自专业用户的认可
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            全球音频发烧友和专业人士的真实反馈
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="glass glass-hover rounded-2xl p-6 md:p-8 hover-lift animate-slide-up opacity-0"
              style={{ animationDelay: `${100 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
