import { CalendarCheck, MapPin, Wrench } from "lucide-react";

const services = [
  { icon: CalendarCheck, title: "活動企劃", en: "Event Planning", desc: "從概念到執行，提供全方位活動企劃與創意發想，確保每場活動完美呈現。" },
  { icon: MapPin, title: "場地佈置", en: "Venue Setup", desc: "專業場佈團隊，依據活動主題量身打造空間氛圍，涵蓋花藝、燈光與動線規劃。" },
  { icon: Wrench, title: "工程統籌", en: "Project Management", desc: "一站式工程管理服務，統籌帳篷搭建、電力配置、視聽安裝等複雜工程。" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
        Our <span className="text-gradient-orange">Services</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">專業服務，值得信賴</p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.en} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-orange group-hover:scale-110 transition-all duration-300">
              <s.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-1">{s.title}</h3>
            <p className="text-sm text-primary font-medium mb-3">{s.en}</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
