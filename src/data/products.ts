export interface Product {
  id: string;
  englishName: string;
  chineseName: string;
  category: string;
  description: string;
  features: string[];
  rentalPrice: string;
}

export const categories = [
  { id: "tents", en: "Tents & Structures", zh: "帳篷與結構" },
  { id: "furniture", en: "Furniture Rental", zh: "桌椅家具" },
  { id: "av", en: "AV & Lighting", zh: "視聽與燈光" },
  { id: "power", en: "Power Solutions", zh: "電力支援" },
  { id: "props", en: "Event Props", zh: "活動道具" },
];

export const products: Product[] = [
  // Tents & Structures
  { id: "T001", englishName: "European Marquee Tent", chineseName: "歐式宮廷帳", category: "tents", description: "典雅歐風設計，適合戶外婚禮及高端宴會使用", features: ["防風防雨結構", "可搭配燈光佈置", "模組化彈性尺寸"], rentalPrice: "詢價 Inquiry" },
  { id: "T002", englishName: "Transparent Canopy", chineseName: "透明帳篷", category: "tents", description: "全透明設計，打造星空下的夢幻活動體驗", features: ["360度通透視野", "強化PVC材質", "適合夜間活動"], rentalPrice: "詢價 Inquiry" },
  { id: "T003", englishName: "Pagoda Tent", chineseName: "尖頂帳篷", category: "tents", description: "經典尖頂造型，適合展覽攤位與接待區使用", features: ["快速搭建", "多頂串聯設計", "品牌客製化"], rentalPrice: "詢價 Inquiry" },
  { id: "T004", englishName: "Frame Tent", chineseName: "框架式帳篷", category: "tents", description: "無中柱設計，最大化使用空間", features: ["無中柱寬敞空間", "抗風等級高", "適合大型活動"], rentalPrice: "詢價 Inquiry" },

  // Furniture
  { id: "F001", englishName: "Folding Chair", chineseName: "摺疊椅", category: "furniture", description: "輕便耐用的標準活動座椅，大量供應", features: ["輕量易搬運", "可堆疊收納", "多色可選"], rentalPrice: "詢價 Inquiry" },
  { id: "F002", englishName: "Banquet Table", chineseName: "長條宴會桌", category: "furniture", description: "標準尺寸宴會長桌，適合各式餐會場合", features: ["穩固結構", "附桌裙搭配", "180cm標準尺寸"], rentalPrice: "詢價 Inquiry" },
  { id: "F003", englishName: "Bar Counter Set", chineseName: "吧檯桌椅組", category: "furniture", description: "時尚吧檯組合，適合酒會與社交活動", features: ["LED燈光效果", "高腳設計", "現代簡約風格"], rentalPrice: "詢價 Inquiry" },
  { id: "F004", englishName: "Lounge Sofa", chineseName: "休閒沙發組", category: "furniture", description: "舒適沙發組，打造VIP休息區與貴賓室", features: ["高級皮革材質", "多種配色", "含茶几搭配"], rentalPrice: "詢價 Inquiry" },

  // AV & Lighting
  { id: "A001", englishName: "LED Video Wall", chineseName: "LED電視牆", category: "av", description: "高解析度LED顯示牆，室內外皆適用", features: ["P3高解析度", "無縫拼接", "專業工程安裝"], rentalPrice: "詢價 Inquiry" },
  { id: "A002", englishName: "PA Sound System", chineseName: "PA音響系統", category: "av", description: "專業級音響系統，涵蓋各規模活動需求", features: ["Line Array設計", "含專業調音", "500-5000人規模"], rentalPrice: "詢價 Inquiry" },
  { id: "A003", englishName: "Stage Lighting Kit", chineseName: "舞臺燈光組", category: "av", description: "專業舞台燈光，營造完美氛圍與視覺效果", features: ["Moving Head燈具", "DMX控台操作", "含燈光設計師"], rentalPrice: "詢價 Inquiry" },

  // Power Solutions
  { id: "P001", englishName: "Generator Set", chineseName: "發電機組", category: "power", description: "穩定供電方案，確保活動不斷電運作", features: ["靜音機型", "多規格可選", "含專業電工"], rentalPrice: "詢價 Inquiry" },
  { id: "P002", englishName: "Power Distribution Board", chineseName: "配電盤", category: "power", description: "專業配電管理，安全分配現場用電", features: ["漏電斷路保護", "客製化迴路", "符合安全法規"], rentalPrice: "詢價 Inquiry" },
  { id: "P003", englishName: "Cable Ramp", chineseName: "線槽護蓋", category: "power", description: "地面線材保護方案，確保人員安全通行", features: ["高載重設計", "防滑表面", "模組化連接"], rentalPrice: "詢價 Inquiry" },

  // Event Props
  { id: "E001", englishName: "Red Carpet", chineseName: "紅地毯", category: "props", description: "高級紅毯，為活動入場增添隆重儀式感", features: ["多寬度可選", "防滑底層", "客製化長度"], rentalPrice: "詢價 Inquiry" },
  { id: "E002", englishName: "Ribbon Cutting Set", chineseName: "剪綵用具組", category: "props", description: "完整剪綵道具組合，含金色大剪刀與彩帶", features: ["全套組合", "專業級道具", "含佈置服務"], rentalPrice: "詢價 Inquiry" },
  { id: "E003", englishName: "Inflatable Arch", chineseName: "充氣拱門", category: "props", description: "大型充氣拱門，適合開幕典禮與路跑活動", features: ["客製化印刷", "快速充氣", "夜間LED發光"], rentalPrice: "詢價 Inquiry" },
];
