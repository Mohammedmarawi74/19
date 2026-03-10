
import { Slide } from "../types";


const MOCK_DATA: Record<string, Partial<Slide>> = {
  "شروط أهلية دعم المحاصيل البعلية": {
    headerTitle: "برنامج ريف السعودية",
    mainTitle: "شروط أهلية دعم المحاصيل البعلية",
    points: [
      { id: "1", title: "الجنسية", description: "أن يكون المتقدم سعودي الجنسية أو يحمل بطاقة تنقل.", icon: "UserCheck" },
      { id: "2", title: "المهنة", description: "أن يكون المتقدم من ممارسي المهن الزراعية.", icon: "Briefcase" },
      { id: "3", title: "العمر", description: "ألا يقل عمر المتقدم عن 21 عاماً.", icon: "Calendar" },
      { id: "4", title: "الدخل", description: "ألا يتجاوز إجمالي الدخل الشهري 6,000 ريال.", icon: "DollarSign" },
      { id: "5", title: "السكن", description: "أن يكون من سكان المنطقة الإدارية المشمولة بالدعم.", icon: "ClipboardList" },
      { id: "6", title: "الالتزام", description: "الالتزام بجميع الضوابط الصحية والفنية المعتمدة.", icon: "UploadCloud" }
    ]
  },
  "طرق ترشيد استهلاك المياه في الزراعة": {
    headerTitle: "الاستدامة المائية",
    mainTitle: "طرق ترشيد استهلاك المياه في الزراعة",
    points: [
      { id: "1", title: "الري بالتنقيط", description: "استخدام تقنيات الري الحديثة لتقليل الفاقد.", icon: "Sprout" },
      { id: "2", title: "التوقيت المثالي", description: "الري في الصباح الباكر أو عند المساء لتقليل التبخر.", icon: "Calendar" },
      { id: "3", title: "فحص التسربات", description: "الصيانة الدورية لشبكات الري لضمان كفاءتها.", icon: "ClipboardList" },
      { id: "4", title: "تغطية التربة", description: "استخدام المهاد لتقليل تبخر المياه من سطح التربة.", icon: "Leaf" },
      { id: "5", title: "اختيار المحاصيل", description: "زراعة الأصناف المتكيفة مع البيئة المحلية.", icon: "TrendingUp" },
      { id: "6", title: "الحصاد المائي", description: "تجميع مياه الأمطار واستخدامها في أغراض الري.", icon: "UploadCloud" }
    ]
  },
  "كيفية الحصول على شهادة ممارسة زراعية جيدة": {
    headerTitle: "الجودة الزراعية",
    mainTitle: "خطوات الحصول على شهادة (Global G.A.P)",
    points: [
      { id: "1", title: "التسجيل", description: "تقديم طلب رسمي عبر البوابة الإلكترونية المعتمدة.", icon: "ClipboardList" },
      { id: "2", title: "التقييم الأولي", description: "إجراء فحص ذاتي للمزرعة ومطابقتها للمعايير.", icon: "UserCheck" },
      { id: "3", title: "التفتيش", description: "استقبال فريق التفتيش الميداني لتدقيق العمليات.", icon: "Briefcase" },
      { id: "4", title: "فحص العينات", description: "تحليل عينات التربة والمياه والمنتج في المختبر.", icon: "Sprout" },
      { id: "5", title: "المراجعة", description: "مراجعة تقرير التفتيش من قبل لجنة الاعتماد.", icon: "Calendar" },
      { id: "6", title: "إصدار الشهادة", description: "منح الشهادة للمزارع الملتزم بجميع الاشتراطات.", icon: "UploadCloud" }
    ]
  },
  "أهم مميزات برنامج ريف للمزارعين": {
    headerTitle: "دعم وتمكين",
    mainTitle: "مميزات الانضمام لبرنامج ريف",
    points: [
      { id: "1", title: "دعم مالي", description: "تقديم دعم مادي شهري غير مسترد للمستفيدين.", icon: "DollarSign" },
      { id: "2", title: "تدريب فني", description: "إلحاق المزارعين ببرامج تدريبية متطورة.", icon: "Briefcase" },
      { id: "3", title: "تطوير المنتج", description: "المساعدة في رفع جودة وتنافسية المحاصيل.", icon: "TrendingUp" },
      { id: "4", title: "فرص تسويقية", description: "تسهيل الوصول للأسواق والمهرجانات الزراعية.", icon: "UploadCloud" },
      { id: "5", title: "استدامة", description: "تعزيز الاستقرار المهني للأسر الريفية.", icon: "Leaf" },
      { id: "6", title: "استشارات", description: "توفير قنوات تواصل مباشرة مع الخبراء.", icon: "UserCheck" }
    ]
  },
  "تقنيات مكافحة الآفات الزراعية الطبيعية": {
    headerTitle: "الزراعة العضوية",
    mainTitle: "تقنيات المكافحة الحيوية للآفات",
    points: [
      { id: "1", title: "الأعداء الحيوية", description: "استخدام الحشرات النافعة لمهاجمة الآفات.", icon: "UserMinus" },
      { id: "2", title: "المصائد الفرمونية", description: "جذب الحشرات والتخلص منها بطرق صديقة للبيئة.", icon: "ClipboardList" },
      { id: "3", title: "المستخلصات النباتية", description: "استخدام محاليل طبيعية (مثل الثوم والنييم).", icon: "Leaf" },
      { id: "4", title: "الدورة الزراعية", description: "تنويع المحاصيل لكسر دورة حياة الآفة.", icon: "Calendar" },
      { id: "5", title: "الزراعة البينية", description: "زراعة نباتات طاردة للحشرات بجانب المحصول.", icon: "Sprout" },
      { id: "6", title: "النظافة الحقلية", description: "إزالة بقايا المحاصيل المصابة وتدميرها.", icon: "Trash" }
    ]
  },
  "استخدام الطاقة المتجددة في المزارع السعودية": {
    headerTitle: "طاقة نظيفة",
    mainTitle: "مستقبل الطاقة الشمسية في الزراعة",
    points: [
      { id: "1", title: "الري بالطاقة", description: "تشغيل مضخات المياه باستخدام الألواح الشمسية.", icon: "UploadCloud" },
      { id: "2", title: "تقليل التكاليف", description: "خفض فواتير الكهرباء والوقود بشكل كبير.", icon: "DollarSign" },
      { id: "3", title: "صديق للبيئة", description: "الحد من الانبعاثات الكربونية في المزرعة.", icon: "Leaf" },
      { id: "4", title: "صيانة أقل", description: "تتميز أنظمة الطاقة الشمسية بالعمر الطويل.", icon: "ClipboardList" },
      { id: "5", title: "استغلال المساحات", description: "تركيب الألواح فوق البيوت المحمية أو المستودعات.", icon: "Briefcase" },
      { id: "6", title: "التحكم الذكي", description: "ربط أنظمة الطاقة بتطبيقات الهاتف للمراقبة.", icon: "TrendingUp" }
    ]
  },
  "Default": {
    headerTitle: "دليل المزارع الذكي",
    mainTitle: "أهم نصائح التطوير الزراعي",
    points: [
      { id: "1", title: "التخطيط", description: "دراسة السوق قبل اختيار نوع المحصول.", icon: "TrendingUp" },
      { id: "2", title: "التوعية", description: "حضور الدورات التدريبية والندوات الزراعية.", icon: "Briefcase" },
      { id: "3", title: "الجودة", description: "الحرص على إنتاج محاصيل ذات جودة عالية.", icon: "UserCheck" },
      { id: "4", title: "التقنية", description: "إدخال الوسائل الحديثة في عمليات الإنتاج.", icon: "UploadCloud" },
      { id: "5", title: "التسويق", description: "البحث عن منافذ بيع مبتكرة ومباشرة.", icon: "DollarSign" },
      { id: "6", title: "الاستدامة", description: "الحفاظ على الموارد الطبيعية والتربة.", icon: "Leaf" }
    ]
  }
};

export const generateSlideContent = async (topic: string): Promise<Partial<Slide>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const suggested = MOCK_DATA[topic] || MOCK_DATA["Default"];
  return suggested;
};
