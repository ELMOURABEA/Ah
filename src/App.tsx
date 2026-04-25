import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, MapPin, PackageSearch, Truck, ShieldCheck, 
  Building2, Users, FileText, Download, Share2, MessageCircle, 
  QrCode, ChevronDown, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'resources'>('landing');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="bg-[#0b6b4f] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
            <div className="bg-white p-2 rounded-lg">
              <HeartPulse className="w-6 h-6 text-[#0b6b4f]" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading">صيدليات أحمد حسن</h1>
              <p className="text-xs text-green-100 hidden sm:block">برنامج شراكات الشركات AH Business Bridge</p>
            </div>
          </div>
          <nav className="flex gap-2">
            <button 
              onClick={() => setActiveTab('landing')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'landing' ? 'bg-white text-[#0b6b4f]' : 'hover:bg-white/10 text-white'}`}
            >
              الصفحة الرئيسية
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'resources' ? 'bg-white text-[#0b6b4f]' : 'hover:bg-white/10 text-white'}`}
            >
              موارد الشركاء
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'landing' ? (
            <LandingPage key="landing" />
          ) : (
            <PartnerResources key="resources" />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartPulse className="w-8 h-8 text-[#0b6b4f] mx-auto mb-4" />
          <h2 className="text-white text-lg font-bold mb-2">صيدليات أحمد حسن</h2>
          <p className="mb-6">شبكة من 10 فروع في طنطا لخدمتك أنت وعائلتك.</p>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <span>تواصل معنا: مصطفى المرابيع</span>
            <span>هاتف: 01000000000</span>
            <span>بريد: m.elmourabea@gmail.com</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} جميع الحقوق محفوظة لصيدليات أحمد حسن</p>
        </div>
      </footer>
    </div>
  );
}

function LandingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20"
    >
      {/* Hero Section */}
      <section className="relative bg-[#0b6b4f] text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full font-bold text-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>برنامج شراكات الرعاية الصحية للشركات</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            ادعم صحة موظفيك مع <br className="hidden md:block"/> 
            <span className="text-yellow-400">أكبر شبكة صيدليات</span> في طنطا
          </h1>
          
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            خصومات حصرية حتى 15%، توصيل أولوية، وفحوصات دورية في موقع العمل — بدون أي عبء إداري على شركتكم.
          </p>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#0b6b4f] hover:bg-slate-100 font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto"
          >
            <Users className="w-5 h-5" />
            اطلب اجتماع تعريفي 15 دقيقة
          </button>
        </div>
        
        {/* Custom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-24 text-[#f8fafc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.15,193.38,108.64Z"></path>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">لماذا تختار AH Business Bridge؟</h2>
            <div className="h-1 w-20 bg-[#0b6b4f] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin />}
              title="10 فروع في طنطا"
              desc="تغطية محلية كاملة لتسهيل وصول الموظفين إلى أقرب فرع في أي وقت."
            />
            <FeatureCard 
              icon={<PackageSearch />}
              title="مخزون موحد"
              desc="مشاركة ذكية للمخزون بين جميع فروعنا لضمان توافر الأدوية والنواقص."
            />
            <FeatureCard 
              icon={<Truck />}
              title="توصيل أولوية"
              desc="خدمة توصيل سريعة ومخصصة لشركائنا داخل مدينة طنطا."
            />
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-white border-y border-slate-200" id="tiers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">فئات المزايا والخصومات</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">نقدم خيارات مرنة تناسب حجم كل مؤسسة وتضمن أقصى استفادة لموظفيكم.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TierCard 
              badge="AH - Premium"
              discount="15%"
              target="للمصانع الكبيرة والمستشفيات"
              color="bg-slate-900 text-white"
              border="border-slate-800"
            />
            <TierCard 
              badge="AH - Gold"
              discount="13.5%"
              target="للمؤسسات والمكاتب المتوسطة"
              color="bg-yellow-500 text-slate-900"
              border="border-yellow-500"
              featured={true}
            />
            <TierCard 
              badge="AH - Silver"
              discount="12.5%"
              target="للشركات الصغيرة والمحلات"
              color="bg-slate-300 text-slate-900"
              border="border-slate-300"
            />
            <TierCard 
              badge="AH - Go"
              discount="10%"
              target="للشركاء التجزئة والمتاجر"
              color="bg-blue-500 text-white"
              border="border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ & Form Split */}
      <section className="py-24 bg-[#f8fafc]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 flex items-center gap-3">
                <MessageCircle className="text-[#0b6b4f]" />
                الأسئلة الشائعة
              </h3>
              <div className="space-y-4">
                <FAQItem 
                  q="هل الخصم يشمل كل المنتجات؟"
                  a="الخصم يشمل المنتجات المؤهلة (تجميل، عناية شخصية، مستلزمات طبية). لا يشمل الخصم الأدوية الخاضعة لأسعار رسمية جبرية أو المحظور تخفيضها قانونياً بموجب لوائح وزارة الصحة."
                />
                <FAQItem 
                  q="كيف يستفيد الموظف؟"
                  a="بكل سهولة! يعرض الموظف بطاقة شراكة AH أو رمز الـ QR الخاص بالشركة، أو من خلال إبراز كارنيه العمل، في أي فرع من فروعنا العشرة ليتم تطبيق الخصم فوراً."
                />
                <FAQItem 
                  q="هل هناك رسوم إدارية على الشركة؟"
                  a="لا توجد أي رسوم إدارية افتراضية على الشركات للانضمام للبرنامج. أي خدمات إضافية مفوترة يتم الاتفاق عليها كتابياً مسبقاً."
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">اطلب الشراكة الآن</h3>
              <p className="text-slate-500 mb-6 text-sm">أرسل بياناتك وسنتواصل معك خلال 24 ساعة لترتيب الاجتماع.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('تم إرسال الطلب (تجريبي). شكراً لك!'); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل *</label>
                    <input type="text" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0b6b4f] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">اسم الشركة *</label>
                    <input type="text" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0b6b4f] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف *</label>
                  <input type="tel" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0b6b4f] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني *</label>
                  <input type="email" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0b6b4f] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">رسالتك / ملاحظات</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0b6b4f] focus:outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0b6b4f] hover:bg-[#08523c] text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4">
                  إرسال الطلب
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}

function PartnerResources() {
  const [pageUrl, setPageUrl] = useState('');

  React.useEffect(() => {
    setPageUrl(window.location.origin + window.location.pathname);
  }, []);

  const qrUrl = pageUrl || 'https://ahmedhassanpharmacy.com/partner';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="py-12 bg-slate-50 min-h-[80vh]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">بوابة الموارد التسويقية والقانونية</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            مساحة مخصصة لمديري الموارد البشرية والشركاء لتحميل نسخ العقود، مواد الدعاية، ورسائل التواصل الداخلي مع الموظفين.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Contract */}
          <ResourceBlock 
            title="1. اتفاقية شراكة AH Business Bridge (مسودة العقد)"
            icon={<FileText className="text-blue-600" />}
            content={`اتفاقية شراكة AH Business Bridge

المقدمة
هذه الاتفاقية مبرمة بين مجموعة صيدليات أحمد حسن (ويشار إليها فيما بعد بـ«AH») و [اسم الشريك] (ويشار إليه فيما بعد بـ«الشريك») بهدف تقديم خصومات وخدمات رفاهية صحية لموظفي الشريك وأسرهم من الدرجة الأولى عبر 10 فروع تابعة لـ AH في مدينة طنطا.

المادة 1: الخدمات
تتعهد AH بتقديم الخدمات التالية للشريك:
- تطبيق نسب الخصم المتفق عليها لموظفي الشريك وأسرهم من الدرجة الأولى.
- توصيل أولوية داخل مدينة طنطا.
- تنظيم فحوصات صحية دورية في موقع العمل (ضغط دم، سكر حسب الاتفاق).
- توفير مواد توعوية شهرية ودعم حساب مخصص للتواصل مع قسم الموارد البشرية بالشريك.

المادة 2: نسب الخصم وتطبيقها
1. تم تخصيص الشريك بالفئة [اسم الفئة] والتي تمنح موظفي الشريك وأسرهم من الدرجة الأولى خصمًا بنسبة [النسبة]% على المنتجات المؤهلة.
2. تُطبق الخصومات عند تقديم بطاقة AH المصدرة للشريك أو رمز QR المسجل لدى أي من فروع AH.
3. لا تشمل الخصومات المنتجات أو الأدوية التي تُستثنى بموجب القوانين أو اللوائح الحكومية.

المادة 3: مدة الاتفاقية وإنهاؤها
1. مدة هذه الاتفاقية 12 شهراً تبدأ من تاريخ السريان.

المادة 4: الأدوية الخاضعة لأسعار رسمية
1. لا تنطبق نسب الخصم على الأدوية الخاضعة لأسعار رسمية أو أي أدوية يحظر القانون تخفيض أسعارها.

(يمكنك نسخ هذا النص ولصقه في ملف Word للطباعة والتوقيع)`}
            actionText="نسخ مسودة العقد"
          />

          {/* Marketing Materials */}
          <ResourceBlock 
            title="2. مواد الإعلان والتواصل الداخلي (للموارد البشرية)"
            icon={<Share2 className="text-green-600" />}
            content={`--- رسالة واتساب مقترحة للموظفين ---
« زملائي الأعزاء، يسعدنا الإعلان عن انضمام شركتنا لبرنامج AH Business Bridge مع صيدليات أحمد حسن. جميع الموظفين وأفراد الأسرة من الدرجة الأولى سيحصلون على خصم يصل إلى 15% عند عرض بطاقة الشركة أو رمز QR في أي من فروعهم العشرة بطنطا. للتسجيل أرسل اسمك ورقمك الوظيفي إلى قسم الموارد البشرية. »

--- منشور سبيشل ميديا / إيميل داخلي ---
خبر سار لجميع الموظفين!
انضموا لبرنامج AH Business Bridge من صيدليات أحمد حسن — خصومات حصرية وتوصيل أولوية لخدمتكم. فروعنا الـ 10 قريبة منكم أينما كنتم في طنطا.
صحتكم تهمنا!`}
            actionText="نسخ نصوص الدعاية"
          />

          {/* Location Map / One Pager */}
          <ResourceBlock 
            title="3. خريطة الفروع (One-Pager للطباعة التعليق)"
            icon={<MapPin className="text-red-500" />}
            content={`صيدليات أحمد حسن — شبكة الفروع في طنطا
10 فروع لخدمة موظفي شركتكم بسرعة وسهولة

قائمة الفروع:
- الفرع 1: [العنوان] — واتساب: [الرقم]
- الفرع 2: [العنوان] — واتساب: [الرقم]
- الفرع 3: [العنوان] — واتساب: [الرقم]
- ... (سيتم تزويدكم بالأسماء والأرقام الدقيقة عند توقيع العقد مجدولة)

كيف تستفيدون: أعطِ الموظفين كارنيه الشركة → يزورون أي فرع → يُطبق الخصم فوراً.`}
            actionText="نسخ الخريطة"
          />

           {/* QR Code */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <QrCode className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">4. رمز استجابة سريعة (QR Code) لرابط الشراكة</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-6 rounded-lg">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200">
                <img src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(qrUrl)}`} alt="QR Code" width={200} height={200} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">رابط التسجيل والتعريف:</h4>
                <code className="block bg-slate-200 p-3 rounded text-sm text-slate-800 mb-4 select-all" dir="ltr">
                  {qrUrl}
                </code>
                <p className="text-slate-600 mb-4 text-sm">
                  يمكنك حفظ هذه الصورة واضافتها في الملصقات، أو النشرات الترويجية الداخلية لتسهيل وصول الموظفين لمزيد من التفاصيل.
                </p>
                <div className="flex gap-4">
                  <a href={`https://chart.googleapis.com/chart?cht=qr&chs=600x600&chl=${encodeURIComponent(qrUrl)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                    <Download className="w-4 h-4" />
                    عرض بدقة عالية للحفظ
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ---------------- UI Components ---------------- 

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-2 h-full bg-[#0b6b4f] transform origin-top transition-transform scale-y-0 group-hover:scale-y-100"></div>
      <div className="w-14 h-14 bg-green-50 text-[#0b6b4f] rounded-xl flex items-center justify-center mb-6">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
      </div>
      <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function TierCard({ badge, discount, target, color, border, featured = false }: { badge: string, discount: string, target: string, color: string, border: string, featured?: boolean }) {
  return (
    <div className={`rounded-2xl border-2 ${featured ? 'border-yellow-400 shadow-xl relative transform md:-translate-y-4' : 'border-slate-100 shadow-sm'} p-6 flex flex-col items-center text-center hover:shadow-md transition-all`}>
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          الأكثر طلباً
        </div>
      )}
      <div className={`px-4 py-1.5 rounded-full text-sm font-bold mb-6 ${color}`}>
        {badge}
      </div>
      <div className="text-5xl font-black text-[#0b6b4f] mb-2">{discount}</div>
      <div className="text-sm font-bold text-slate-500 mb-6">نسبة الخصم</div>
      <div className="w-full h-px bg-slate-100 mb-6"></div>
      <p className="text-slate-700 font-medium mb-4">{target}</p>
      <ul className="text-right text-sm text-slate-600 space-y-2 mb-8 mt-auto w-full">
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> تغطية 10 فروع</li>
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> توصيل أولوية</li>
      </ul>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#0b6b4f] transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-right flex justify-between items-center font-bold text-slate-800 focus:outline-none"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-4 text-slate-600 leading-relaxed"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResourceBlock({ title, icon, content, actionText }: { title: string, icon: React.ReactNode, content: string, actionText: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('تم نسخ النص إلى الحافظة!');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <button 
          onClick={handleCopy}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#0b6b4f] hover:text-[#08523c] bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-md transition-colors"
        >
          <FileText className="w-4 h-4" />
          {actionText}
        </button>
      </div>
      <div className="p-6 relative group">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">{content}</pre>
        {/* Mobile copy button overlay */}
        <button 
          onClick={handleCopy}
          className="sm:hidden absolute bottom-4 left-4 inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0b6b4f] px-4 py-2 rounded-lg shadow-lg"
        >
          <FileText className="w-4 h-4" />
          نسخ
        </button>
      </div>
    </div>
  );
}
