import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
        Contact <span className="text-gradient-orange">Us</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">歡迎來電或留言，我們將盡速回覆</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Phone, label: "電話聯繫", value: "0988-105-413", sub: "週一至週五 09:00-18:00" },
          { icon: Mail, label: "電子郵件", value: "info@baizuqu.com", sub: "24小時內回覆" },
          { icon: MapPin, label: "服務據點", value: "台北市信義區", sub: "服務範圍涵蓋全台" },
        ].map((item) => (
          <div key={item.label} className="text-center p-8 rounded-2xl border border-border hover:shadow-card-hover transition-shadow">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-1">{item.label}</h3>
            <p className="text-foreground font-medium">{item.value}</p>
            <p className="text-sm text-muted-foreground">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
