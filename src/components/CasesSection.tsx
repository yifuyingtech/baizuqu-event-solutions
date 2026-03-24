import { motion } from "framer-motion";

const cases = [
  { title: "企業年度尾牙", tag: "Corporate Event", desc: "500人規模企業尾牙，含舞台、音響、燈光全套工程" },
  { title: "戶外婚禮派對", tag: "Wedding", desc: "浪漫草地婚禮，歐式帳篷搭配精緻桌椅佈置" },
  { title: "品牌發表會", tag: "Product Launch", desc: "科技品牌新品發表，LED電視牆與專業視聽系統" },
  { title: "市集嘉年華", tag: "Festival", desc: "大型戶外市集活動，帳篷群組與電力系統整合" },
];

const CasesSection = () => (
  <section id="cases" className="py-24 bg-background">
    <div className="container px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
        Case <span className="text-gradient-orange">Studies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">精選案例，實績說話</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-muted aspect-[3/4] flex items-end"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="relative z-10 p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-orange text-primary-foreground text-xs font-bold mb-3">
                {c.tag}
              </span>
              <h3 className="text-charcoal-foreground font-bold text-lg mb-1">{c.title}</h3>
              <p className="text-charcoal-foreground/70 text-sm">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CasesSection;
