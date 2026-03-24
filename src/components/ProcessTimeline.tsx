import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "需求諮詢", en: "Inquiry", desc: "了解活動規模、場地條件與預算需求" },
  { num: "02", title: "場地勘查", en: "Site Survey", desc: "專業團隊到場評估，確認施工可行性" },
  { num: "03", title: "簽約付訂", en: "Booking", desc: "確認報價後簽署合約並支付訂金" },
  { num: "04", title: "設備進場", en: "Set-up", desc: "依照排程進行設備運送與現場搭建" },
  { num: "05", title: "現場撤場", en: "Teardown", desc: "活動結束後專業團隊負責撤場復原" },
  { num: "06", title: "結案完成", en: "Completion", desc: "核對清點後完成結案，歡迎回饋建議" },
];

const ProcessTimeline = () => (
  <section id="process" className="py-24 bg-gradient-charcoal">
    <div className="container px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center text-charcoal-foreground mb-2">
        Rental <span className="text-gradient-orange">Process</span>
      </h2>
      <p className="text-charcoal-foreground/60 text-center mb-16">簡單六步驟，輕鬆完成租借</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground font-black text-xl">
              {step.num}
            </div>
            <h3 className="text-charcoal-foreground font-bold mb-0.5">{step.title}</h3>
            <p className="text-xs text-primary font-medium mb-2">{step.en}</p>
            <p className="text-charcoal-foreground/50 text-xs leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
