import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "最低租借金額是多少？", a: "我們的最低租借金額依設備類型而異，一般活動設備最低起租金額為 NT$5,000。大型工程專案另行報價，歡迎來電或 LINE 諮詢取得精確報價。" },
  { q: "運費如何計算？", a: "運費依據活動地點距離與設備數量計算。大台北地區基本運費另計，跨縣市或偏遠地區將根據實際路程報價。報價單中會清楚列明所有費用。" },
  { q: "設備損壞的賠償標準為何？", a: "正常使用之自然耗損不收取費用。若因人為疏失導致設備損壞，將依合約中載明的賠償標準處理。簽約前我們會詳細說明各項設備的損壞賠償條款。" },
  { q: "遇到下雨天可以取消嗎？", a: "活動前 7 天以上取消可全額退還訂金；3-7 天內取消收取 50% 訂金作為處理費用；3 天內取消恕不退還訂金。如遇颱風等不可抗力因素，雙方可協商延期或退款方案。" },
  { q: "可以只租設備不含搭建服務嗎？", a: "部分小型設備（如桌椅、地毯等）可提供自取租借方案。帳篷、舞台、LED牆等大型設備因安全考量，皆需由我方專業團隊負責搭建與拆卸。" },
];

const FAQSection = () => (
  <section className="py-24 bg-surface">
    <div className="container px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
        常見<span className="text-gradient-orange">問題</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12">FAQ — Frequently Asked Questions</p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
