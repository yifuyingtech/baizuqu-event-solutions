import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="活動場地佈置" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-charcoal/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 container text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-semibold text-lg mb-4 tracking-widest uppercase"
      >
        Professional Event Solutions
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black text-charcoal-foreground leading-tight mb-6"
      >
        活動設備租賃
        <br />
        <span className="text-gradient-orange">一站式工程統籌</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        從帳篷搭建到視聽工程，BAIZUQU 擺租趣為您的活動提供最專業、最高效的設備租賃與統籌服務
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#equipment"
          className="px-8 py-4 rounded-lg bg-gradient-orange text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          瀏覽設備
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-lg border-2 border-charcoal-foreground/30 text-charcoal-foreground font-bold text-lg hover:bg-charcoal-foreground/10 transition-all"
        >
          立即諮詢
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
