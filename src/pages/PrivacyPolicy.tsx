import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="container px-4 py-16 max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首頁
      </Link>

      <h1 className="text-3xl font-black mb-2">隱私權政策</h1>
      <p className="text-muted-foreground text-sm mb-10">
        最後更新日期：2025 年 1 月 1 日
      </p>

      <div className="prose prose-sm max-w-none space-y-8 text-foreground">
        <section>
          <h2 className="text-xl font-bold mb-3">一、公司資訊</h2>
          <p className="text-muted-foreground leading-relaxed">
            擺租趣股份有限公司（以下簡稱「本公司」或「我們」），統一編號：93781557，
            地址：新北市新莊區壽山路101-3號，電子郵件：info@baizuqu.com，客服電話：0988-105-413。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">二、個人資料收集目的</h2>
          <p className="text-muted-foreground leading-relaxed">
            本公司依據《個人資料保護法》規定，於您使用本網站服務時，可能蒐集以下個人資料：
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
            <li>姓名、電子郵件、電話號碼（供活動租賃詢價及聯繫使用）</li>
            <li>網站瀏覽行為資料（供改善網站使用體驗）</li>
            <li>裝置識別碼、IP 位址等技術性資訊</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">三、個人資料利用方式</h2>
          <p className="text-muted-foreground leading-relaxed">
            本公司蒐集之個人資料，僅用於以下目的，且不會在未經您同意的情況下出售或揭露給第三方：
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
            <li>處理活動設備租賃詢價及訂單</li>
            <li>提供客戶服務及技術支援</li>
            <li>寄送服務相關通知及行銷資訊（經您同意後）</li>
            <li>遵守法律法規之義務</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">四、Cookie 使用說明</h2>
          <p className="text-muted-foreground leading-relaxed">
            本網站使用 Cookie 及類似技術以改善瀏覽體驗、分析流量及個人化內容。
            您可透過瀏覽器設定拒絕 Cookie，但部分功能可能因此受限。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">五、資料儲存與安全</h2>
          <p className="text-muted-foreground leading-relaxed">
            本公司採用業界標準之安全措施保護您的個人資料，包含 SSL
            加密傳輸、存取控制等機制。
            您的資料儲存於台灣境內之安全伺服器，並依業務需要設定合理的保存期限。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">六、您的權利</h2>
          <p className="text-muted-foreground leading-relaxed">
            依據個人資料保護法，您對本人之個人資料享有以下權利：
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
            <li>查詢或請求閱覽</li>
            <li>請求製給複製本</li>
            <li>請求補充或更正</li>
            <li>請求停止蒐集、處理或利用</li>
            <li>請求刪除</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-2">
            如需行使上述權利，請透過電子郵件 info@baizuqu.com 聯繫本公司，
            我們將於 30 日內回覆處理。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">七、第三方連結</h2>
          <p className="text-muted-foreground leading-relaxed">
            本網站可能含有第三方網站連結（如 LINE 官方帳號等），
            本公司對該等第三方之隱私權保護措施不負責任，建議您自行閱讀其隱私政策。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">八、MDM 裝置管理聲明</h2>
          <p className="text-muted-foreground leading-relaxed">
            本公司可能透過 Apple Business Manager
            及行動裝置管理（MDM）解決方案管理員工及業務裝置。
            被管理之裝置僅於工作相關用途下受到監管，個人資料之處理均符合本隱私權政策及相關法令之規範。
            裝置使用者對其裝置受管理一事已被告知並取得同意。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">九、隱私政策變更</h2>
          <p className="text-muted-foreground leading-relaxed">
            本公司保留隨時修改本隱私權政策之權利，修改後將於本頁面公告，
            重大變更將另行透過電子郵件通知已留存聯絡資訊之使用者。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">十、聯絡我們</h2>
          <p className="text-muted-foreground leading-relaxed">
            如有任何關於本隱私權政策或個人資料處理之疑問，請聯繫：
          </p>
          <ul className="list-none text-muted-foreground space-y-1 mt-2">
            <li>📧 電子郵件：info@baizuqu.com</li>
            <li>📞 電話：0988-105-413（週一至週五 09:00–18:00）</li>
            <li>🏢 公司名稱：擺租趣股份有限公司</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
