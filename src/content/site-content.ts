export type NavigationItem = {
  href: string;
  label: string;
};

export type CourseContent = {
  slug: string;
  name: string;
  category: string;
  primaryKeyword: string;
  audience: string;
  duration: string;
  location: string;
  difficulty: string;
  excerpt: string;
  description: string;
  learningGoals: string[];
  contentOutline: string[];
  coachNotes: string[];
  precautions: string[];
  coverImage: string;
  lineCtaLabel: string;
  lineCtaHref: string;
  contactCtaHref: string;
  faqItems: Array<{ question: string; answer: string }>;
};

export type CoachContent = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
  teachesCourseSlugs: string[];
};

export type BlogPostContent = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  relatedSlugs: string[];
};

export const focusKeywords = [
  "台中滑板教學",
  "台中滑板教室",
  "台中滑板課程",
  "台中滑板教學推薦",
  "滑板教學推薦",
  "台中滑板課程推薦",
  "台中滑板教室推薦",
  "台中滑板教練",
];

export const siteContent = {
  site: {
    name: "Keep 滑板教室",
    tagline: "台中滑板教學，從第一步開始滑出自己的風格",
    description:
      "Keep 滑板教室專注台中滑板教學、兒童滑板課程、成人初學滑板、親子滑板課與一對一滑板教練課程，陪初學者用安全、系統化的方式開始練習。",
    phone: "04-2378-8808",
    email: "hello@keepskateclass.tw",
    lineUrl: "https://lin.ee/keep-skate-class",
    address: "台中市西區模擬路 88 號 2 樓",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80&output=embed",
    areaServed: ["台中", "台中西區", "台中北區", "台中南屯", "台中北屯"],
    instagramUrl: "https://www.instagram.com/",
    heroImage:
      "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=1800&q=85",
  },
  navigation: [
    { href: "/", label: "首頁" },
    { href: "/courses", label: "課程介紹" },
    { href: "/coaches", label: "教練團隊" },
    { href: "/blog", label: "滑板專欄" },
    { href: "/about", label: "關於 Keep" },
    { href: "/contact", label: "聯絡我們" },
  ] satisfies NavigationItem[],
  homeHighlights: [
    {
      title: "台中滑板教學新手友善",
      description: "從站姿、推板、煞車到安全跌倒觀念，讓第一次上板的人也知道下一步怎麼練。",
    },
    {
      title: "兒童、成人、親子分流設計",
      description: "依照年齡、體能與學習目標安排課程內容，不把所有初學者放進同一套節奏。",
    },
    {
      title: "滑板教練現場修正",
      description: "教練會觀察重心、腳位與出力方式，降低自己摸索造成的挫折與受傷風險。",
    },
    {
      title: "以 LINE 完成課程諮詢",
      description: "網站提供完整課程介紹，實際報名與上課安排透過 LINE 由教室回覆。",
    },
  ],
  faqs: [
    {
      question: "完全沒碰過滑板，也適合 Keep 的台中滑板教學嗎？",
      answer:
        "適合。Keep 的課程從零基礎設計，會先帶你理解站姿、重心、推板與安全停下，不會一開始就要求技巧動作。",
    },
    {
      question: "兒童滑板課需要家長陪同嗎？",
      answer:
        "建議家長第一次到場了解課程節奏。Keep 會說明護具、安全規則與課後練習方向，讓家長知道孩子正在學什麼。",
    },
    {
      question: "課程怎麼報名？",
      answer:
        "目前課程諮詢與報名都以 LINE 官方帳號為主。你可以先告訴我們學員年齡、程度、想學的方向與方便上課的區域。",
    },
    {
      question: "想找台中滑板教學推薦，該怎麼判斷課程適不適合？",
      answer:
        "建議看三件事：是否有清楚的新手流程、是否重視護具與安全、教練是否能依照學員程度調整練習內容。",
    },
  ],
  courses: [
    {
      slug: "taichung-beginner-skateboard-class",
      name: "台中初學滑板體驗課",
      category: "初學體驗課",
      primaryKeyword: "台中滑板教學",
      audience: "零基礎成人、青少年、第一次想嘗試滑板的人",
      duration: "約 90 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初級",
      excerpt:
        "第一次上板不用怕，從安全站姿、推板、煞車到簡單轉向，一堂課建立滑板入門感。",
      description:
        "這堂台中滑板教學體驗課專為零基礎設計，重點不是炫技，而是讓你理解滑板怎麼站、怎麼前進、怎麼安全停下來。教練會把動作拆成可跟上的步驟，讓第一次接觸滑板的人能建立信心。",
      learningGoals: ["認識滑板與護具", "建立穩定站姿", "完成推板、煞車與基礎轉向"],
      contentOutline: ["暖身與安全規則", "站姿與重心轉換", "推板與煞車", "課後練習建議"],
      coachNotes: ["先求穩，再求快。第一堂課的目標是讓身體理解滑板節奏。"],
      precautions: ["建議穿平底鞋", "如有舊傷請先告知教練", "課程安排請透過 LINE 洽詢"],
      coverImage:
        "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "加入 LINE 詢問體驗課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "沒有自己的滑板可以上課嗎？",
          answer: "可以，第一次體驗可先洽詢教室是否有基礎裝備可使用。",
        },
        {
          question: "體驗課後可以接正式課嗎？",
          answer: "可以，教練會依照你的站姿、平衡與目標建議下一步課程。",
        },
      ],
    },
    {
      slug: "taichung-kids-skateboard-class",
      name: "台中兒童滑板課",
      category: "兒童滑板課",
      primaryKeyword: "台中滑板課程",
      audience: "6 歲以上兒童、想培養平衡感與運動自信的家庭",
      duration: "約 60 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初級",
      excerpt:
        "以孩子能理解的節奏練習上下板、平衡、短距離滑行與安全規則。",
      description:
        "兒童滑板課重視安全感與成就感。Keep 會用遊戲化練習與短目標回饋，協助孩子從怕跌倒到願意嘗試，適合正在尋找台中滑板教室或兒童滑板課程的家長。",
      learningGoals: ["建立上下板信心", "理解護具與場地安全", "完成短距離滑行與方向控制"],
      contentOutline: ["護具檢查", "上下板練習", "重心遊戲", "家長課後回饋"],
      coachNotes: ["孩子的進步需要安全感，課程會先讓孩子敢站、敢滑、敢停。"],
      precautions: ["建議家長第一次陪同", "請完整配戴護具與安全帽"],
      coverImage:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問兒童滑板課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "孩子怕跌倒怎麼辦？",
          answer: "教練會從低風險動作開始，先建立上下板與停下來的安全感。",
        },
        {
          question: "兒童課會教技巧嗎？",
          answer: "會依程度安排，但初期重點是平衡、控制與安全習慣。",
        },
      ],
    },
    {
      slug: "taichung-adult-skateboard-class",
      name: "台中成人滑板課",
      category: "成人滑板課",
      primaryKeyword: "台中滑板課程推薦",
      audience: "成人初學者、想系統化學滑板的人",
      duration: "約 75 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初級到初中級",
      excerpt:
        "成人也能從零開始，透過清楚的動作拆解練出穩定滑行與轉向。",
      description:
        "成人滑板課適合想認真學會滑板、但不想自己盲目摸索的人。教練會針對重心、腳位與節奏感做細部調整，讓成人初學者安全累積滑行能力。",
      learningGoals: ["穩定推板", "改善重心控制", "建立轉向與煞車節奏"],
      contentOutline: ["動態暖身", "基礎滑行檢查", "轉向與速度控制", "個人化練習方向"],
      coachNotes: ["成人學滑板不晚，關鍵是用正確節奏累積可重複的動作。"],
      precautions: ["建議穿著方便活動的服裝", "可先透過 LINE 描述目前程度"],
      coverImage:
        "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問成人滑板課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "成人零基礎會不會太晚？",
          answer: "不會。成人通常更能理解動作原理，只要循序練習就能穩定進步。",
        },
      ],
    },
    {
      slug: "taichung-family-skateboard-class",
      name: "台中親子滑板共學課",
      category: "親子滑板課",
      primaryKeyword: "滑板教學推薦",
      audience: "親子家庭、想一起運動與學習的家長和孩子",
      duration: "約 75 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初級",
      excerpt:
        "讓家長與孩子一起理解滑板安全、平衡與練習節奏，建立共同運動回憶。",
      description:
        "親子滑板課不是讓大人站在旁邊看，而是讓家庭一起進入滑板的節奏。課程會安排適合大人與孩子共同完成的練習，適合正在比較滑板教學推薦的家庭。",
      learningGoals: ["親子共同學習安全規則", "完成基礎站姿與滑行", "建立課後一起練習的方法"],
      contentOutline: ["親子暖身", "安全規則說明", "分段動作練習", "共同挑戰任務"],
      coachNotes: ["親子課的重點是一起完成，而不是比較誰學得快。"],
      precautions: ["家長與孩子皆需配戴護具", "課程前可先告知孩子年齡與運動經驗"],
      coverImage:
        "https://images.unsplash.com/photo-1536318431364-5cc762cfc8ec?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問親子課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "親子課需要家長有滑板經驗嗎？",
          answer: "不需要，課程會從基礎開始，家長與孩子都能一起跟上。",
        },
      ],
    },
    {
      slug: "taichung-private-skateboard-coach",
      name: "台中一對一滑板教練課",
      category: "一對一私人課",
      primaryKeyword: "台中滑板教練",
      audience: "想快速修正動作、需要個人化教學的學員",
      duration: "約 60 到 90 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "依程度調整",
      excerpt:
        "由滑板教練依照你的程度調整內容，適合想針對卡關動作快速修正的人。",
      description:
        "一對一課程適合希望教練集中觀察動作的人。無論你是初學者、卡在轉向，或想準備進階技巧，台中滑板教練會依照你的目標安排練習順序。",
      learningGoals: ["找出動作卡點", "建立個人練習菜單", "提升滑行穩定度或技巧準備度"],
      contentOutline: ["程度評估", "動作拆解", "針對卡點練習", "課後練習建議"],
      coachNotes: ["私人課會把時間集中在最需要修正的動作，不追求塞滿內容。"],
      precautions: ["建議先透過 LINE 說明想改善的動作", "可提供影片讓教練初步判斷"],
      coverImage:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問一對一教練",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "一對一適合完全新手嗎？",
          answer: "適合，尤其是想用更快速度建立正確基礎的新手。",
        },
      ],
    },
    {
      slug: "taichung-two-person-skateboard-class",
      name: "台中一對二滑板教學",
      category: "一對二教學",
      primaryKeyword: "台中滑板教室推薦",
      audience: "朋友、情侶、手足或親子兩人一起學習",
      duration: "約 75 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初級到初中級",
      excerpt:
        "兩人一起上課，保留教練回饋密度，也能互相陪伴建立練習動力。",
      description:
        "一對二滑板教學適合想和朋友或家人一起開始的人。課程會兼顧兩位學員的程度，不會只照顧其中一位，適合正在找台中滑板教室推薦的人。",
      learningGoals: ["建立共同基礎", "分別修正個人動作", "留下可一起練習的課後方向"],
      contentOutline: ["雙人程度確認", "共同基礎練習", "個別動作修正", "課後練習建議"],
      coachNotes: ["兩人課的節奏會兼顧互動與個別回饋。"],
      precautions: ["兩位學員程度差異太大時，教練會建議調整課程安排"],
      coverImage:
        "https://images.unsplash.com/photo-1517869175579-1b4b4fdb46a4?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問一對二課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "兩人程度不同可以一起上嗎？",
          answer: "可以先洽詢，教練會判斷是否適合同堂，或建議分開安排。",
        },
      ],
    },
    {
      slug: "taichung-group-skateboard-class",
      name: "台中團體滑板課",
      category: "團體班",
      primaryKeyword: "台中滑板課程",
      audience: "朋友團體、企業活動、學校社團、品牌體驗活動",
      duration: "依人數與活動目標規劃",
      location: "台中市區合作練習場地或指定活動場域",
      difficulty: "依團體程度調整",
      excerpt:
        "適合團體活動與品牌體驗，從安全說明到基礎滑行都能依人數調整。",
      description:
        "團體滑板課適合想安排運動體驗、社團活動或品牌活動的人。Keep 會依照人數、年齡與活動目標，設計安全、有節奏且容易參與的台中滑板課程。",
      learningGoals: ["完成團體安全規則", "體驗基礎滑行", "建立共同活動記憶"],
      contentOutline: ["活動需求確認", "安全與護具說明", "分組練習", "團體挑戰或成果拍攝"],
      coachNotes: ["團體課重視流程與安全，會依人數安排教練比例建議。"],
      precautions: ["需事先提供人數、年齡層與場地需求", "大型活動請提前洽詢"],
      coverImage:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問團體課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "團體課可以到指定場地嗎？",
          answer: "可先透過 LINE 提供場地資訊，教室會評估安全與活動可行性。",
        },
      ],
    },
    {
      slug: "taichung-advanced-skateboard-tricks",
      name: "台中進階滑板技巧課",
      category: "進階技巧班",
      primaryKeyword: "滑板教學推薦",
      audience: "已有基礎滑行能力，想學 Ollie、Shove-it 或動作銜接的學員",
      duration: "約 90 分鐘",
      location: "台中市區合作練習場地",
      difficulty: "初中級到進階",
      excerpt:
        "針對已具備基礎滑行的人，拆解技巧動作前置、節奏與常見卡點。",
      description:
        "進階技巧課適合已能穩定滑行、想進入技巧練習的學員。教練會先檢查基礎是否足夠，再安排 Ollie 前置、Shove-it 節奏或其他技巧拆解。",
      learningGoals: ["檢查技巧前置能力", "理解起跳與腳位節奏", "改善常見卡點與練習方法"],
      contentOutline: ["基礎能力檢查", "技巧動作拆解", "分段練習", "課後自主練習菜單"],
      coachNotes: ["進階技巧不是硬跳，基礎越穩，技巧越容易長出來。"],
      precautions: ["建議先具備穩定滑行與轉向能力", "可先提供練習影片給教練判斷"],
      coverImage:
        "https://images.unsplash.com/photo-1531327431456-837da4b1d562?auto=format&fit=crop&w=1400&q=85",
      lineCtaLabel: "LINE 詢問進階課",
      lineCtaHref: "https://lin.ee/keep-skate-class",
      contactCtaHref: "/contact",
      faqItems: [
        {
          question: "完全新手可以直接上進階技巧課嗎？",
          answer: "不建議。若還不會穩定滑行，會先建議從初學或成人基礎課開始。",
        },
      ],
    },
  ] satisfies CourseContent[],
  coaches: [
    {
      slug: "coach-azhe",
      name: "阿哲教練",
      role: "台中滑板教練 / 初學與技巧拆解",
      experience: "6 年教學經驗",
      specialties: ["台中滑板教學", "兒童滑板啟蒙", "Ollie 前置訓練"],
      bio: "擅長把初學者最怕的跌倒、重心與出腳節奏拆解成安全好懂的步驟，讓孩子與成人都能建立穩定信心。",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      teachesCourseSlugs: [
        "taichung-beginner-skateboard-class",
        "taichung-kids-skateboard-class",
        "taichung-advanced-skateboard-tricks",
      ],
    },
    {
      slug: "coach-jing",
      name: "小靜教練",
      role: "親子與成人基礎滑板教練",
      experience: "4 年教學經驗",
      specialties: ["親子滑板課", "成人基礎轉向", "課後練習規劃"],
      bio: "重視每位學員對動作的理解速度，會把練習拆成小目標，讓進步更看得見，也讓家長知道孩子正在累積什麼能力。",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      teachesCourseSlugs: [
        "taichung-family-skateboard-class",
        "taichung-adult-skateboard-class",
        "taichung-two-person-skateboard-class",
      ],
    },
  ] satisfies CoachContent[],
  blogPosts: [
    {
      slug: "taichung-skateboarding-class-recommendation",
      title: "台中滑板教學推薦怎麼選？新手報名前先看這 5 件事",
      category: "課程選擇",
      excerpt:
        "想找台中滑板教學推薦，不只看價格，更要看安全流程、教練回饋與課後練習方向。",
      coverImage:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=85",
      publishedAt: "2026-04-28",
      readTime: "6 分鐘",
      seoTitle: "台中滑板教學推薦怎麼選？新手報名前先看這 5 件事",
      metaDescription:
        "正在找台中滑板教學推薦？這篇整理新手選滑板教室前要看的安全流程、課程節奏、教練回饋與報名建議。",
      keywords: ["台中滑板教學推薦", "滑板教學推薦", "台中滑板教室推薦"],
      sections: [
        {
          heading: "先看課程是不是為新手設計",
          body: [
            "好的滑板教學不會一開始就要求技巧，而是先讓你理解站姿、重心與停下來的方式。",
            "對初學者來說，能不能安全開始，比第一堂課學幾個動作更重要。",
          ],
        },
        {
          heading: "教練回饋比場地更重要",
          body: [
            "台中有不同練習場域，但新手真正需要的是教練能看出你的腳位、重心與出力問題。",
            "如果課程只讓你自己滑，進步速度通常會比有回饋的教學慢很多。",
          ],
        },
        {
          heading: "確認報名方式與課後建議",
          body: [
            "報名前可以先透過 LINE 說明年齡、程度與目標，讓教室建議適合的課程。",
            "課後若有清楚練習方向，才比較容易把課堂內容延續到自己的練習。",
          ],
        },
      ],
      relatedSlugs: ["taichung-skateboard-class-guide"],
    },
    {
      slug: "taichung-skateboard-class-guide",
      title: "台中滑板課程有哪些？初學、兒童、成人與親子課差異整理",
      category: "課程介紹",
      excerpt:
        "台中滑板課程不是只有一種，初學者、兒童、成人、親子和進階技巧的學習節奏都不同。",
      coverImage:
        "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=1400&q=85",
      publishedAt: "2026-04-26",
      readTime: "7 分鐘",
      seoTitle: "台中滑板課程有哪些？初學、兒童、成人與親子課差異整理",
      metaDescription:
        "想了解台中滑板課程怎麼選？這篇整理初學體驗、兒童滑板課、成人滑板課、親子共學與進階技巧課的差異。",
      keywords: ["台中滑板課程", "台中滑板課程推薦", "台中滑板教室"],
      sections: [
        {
          heading: "初學體驗課適合先試水溫",
          body: [
            "如果你還不確定自己是否喜歡滑板，初學體驗課能用較短時間認識安全與基本滑行。",
          ],
        },
        {
          heading: "兒童課與成人課的節奏不同",
          body: [
            "兒童課更重視安全感、遊戲化與家長溝通；成人課則會更強調動作理解與自主練習。",
          ],
        },
        {
          heading: "進階課要先確認基礎",
          body: [
            "想練 Ollie 或 Shove-it 前，最好先具備穩定滑行、轉向與基本重心控制。",
          ],
        },
      ],
      relatedSlugs: ["kids-start-skateboarding-age"],
    },
    {
      slug: "kids-start-skateboarding-age",
      title: "兒童幾歲可以開始學滑板？家長最在意的安全與節奏建議",
      category: "親子滑板",
      excerpt: "孩子想學滑板，家長最常問的是年齡、安全、護具與課程節奏。",
      coverImage:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1400&q=85",
      publishedAt: "2026-04-22",
      readTime: "5 分鐘",
      seoTitle: "兒童幾歲可以開始學滑板？家長最在意的安全與節奏建議",
      metaDescription:
        "兒童滑板課怎麼開始？整理孩子學滑板的年齡建議、護具重點、家長陪同與安全課程節奏。",
      keywords: ["兒童滑板課", "台中滑板教學", "親子滑板課"],
      sections: [
        {
          heading: "年齡不是唯一判斷標準",
          body: [
            "比起年齡，更重要的是孩子是否能理解指令、接受護具、願意慢慢嘗試。",
          ],
        },
        {
          heading: "先從安全感建立開始",
          body: [
            "很多孩子不是不會，而是怕跌倒。先讓孩子習慣站板、下板與停下來，會比急著滑行更有效。",
          ],
        },
        {
          heading: "家長可以先看課程節奏",
          body: [
            "第一次上課建議家長陪同，了解教練怎麼處理安全、鼓勵與課後練習。",
          ],
        },
      ],
      relatedSlugs: ["taichung-skateboarding-class-recommendation"],
    },
    {
      slug: "taichung-skateboard-coach-guide",
      title: "台中滑板教練怎麼挑？從教學方式、回饋與安全觀念判斷",
      category: "教練選擇",
      excerpt:
        "好的滑板教練不只是會滑，而是能把動作拆解成初學者聽得懂、做得到的步驟。",
      coverImage:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=85",
      publishedAt: "2026-04-18",
      readTime: "6 分鐘",
      seoTitle: "台中滑板教練怎麼挑？從教學方式、回饋與安全觀念判斷",
      metaDescription:
        "正在找台中滑板教練？這篇整理挑選滑板教練時要注意的教學方式、動作回饋、安全觀念與課程安排。",
      keywords: ["台中滑板教練", "台中滑板教學推薦", "滑板教學推薦"],
      sections: [
        {
          heading: "會滑不等於會教",
          body: [
            "教練需要能看出學員卡在哪裡，並把問題轉成下一個可練習的小步驟。",
          ],
        },
        {
          heading: "安全觀念要比技巧更前面",
          body: [
            "初學者最需要的是知道如何降低風險，包括護具、場地禮儀與停下來的方法。",
          ],
        },
        {
          heading: "一對一課適合精準修正",
          body: [
            "如果你已經卡在某個動作，一對一滑板教練課通常比團體課更有效率。",
          ],
        },
      ],
      relatedSlugs: ["taichung-skateboarding-class-recommendation"],
    },
  ] satisfies BlogPostContent[],
};

export function getCourseBySlug(slug: string) {
  return siteContent.courses.find((course) => course.slug === slug);
}

export function getCoachBySlug(slug: string) {
  return siteContent.coaches.find((coach) => coach.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return siteContent.blogPosts.find((post) => post.slug === slug);
}
