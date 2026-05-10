import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, MapPin, PackageSearch, Truck, ShieldCheck, 
  Building2, Users, FileText, Download, Share2, MessageCircle, 
  QrCode, ChevronDown, CheckCircle2, Phone, Calculator 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'business' | 'resources'>('home');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Navigation */}
      <header className="bg-[#0b6b4f] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-white p-2 rounded-lg">
              <HeartPulse className="w-6 h-6 text-[#0b6b4f]" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading">صيدليات أحمد حسن</h1>
              <p className="text-xs text-green-100">رعايتك في غمضة عين</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${activeTab === 'home' ? 'bg-white text-[#0b6b4f]' : 'hover:bg-white/10 text-white'}`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${activeTab === 'business' ? 'bg-white text-[#0b6b4f]' : 'hover:bg-white/10 text-white'}`}
            >
              شراكات الشركات
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${activeTab === 'resources' ? 'bg-white text-[#0b6b4f]' : 'hover:bg-white/10 text-white'}`}
            >
               موارد الشركاء
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomePage key="home" />}
          {activeTab === 'business' && <LandingPage key="business" />}
          {activeTab === 'resources' && <PartnerResources key="resources" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartPulse className="w-8 h-8 text-[#0b6b4f] mx-auto mb-4" />
          <h2 className="text-white text-lg font-bold mb-2">صيدليات أحمد حسن</h2>
          <p className="mb-6">شبكة من 10 فروع في طنطا لخدمتك أنت وعائلتك 24 ساعة.</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 mb-8 text-sm">
            <span>الخط الساخن أو تواصل مع الفرع الأقرب لك</span>
            <span dir="ltr" className="font-bold">01050283003</span>
          </div>
          <p className="text-sm mb-2">© {new Date().getFullYear()} جميع الحقوق محفوظة لصيدليات أحمد حسن</p>
          <p className="text-xs text-slate-500 font-medium" dir="ltr">Designed by (Dr. Mostafa Abd-el-Kader | +201507055701)</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const branches = [
    { title: "سبرباي", address: "امام مستشفى المنشاوي العام", mobile: "01031164717", landline: "040 345 33 99" },
    { title: "اول طريق شوبر", address: "قبل مدخل كفر عصام", mobile: "01210155704", landline: "040 3332658" },
    { title: "سيجر", address: "أمام المعهد الديني", mobile: "01555901122", landline: "040 3525550" },
    { title: "الاستاد", address: "شارع رياض غرابة خلف المقاولون العرب", mobile: "01128898929", landline: "040 3750767" },
    { title: "البلد", address: "طنطا - ش طه الحكيم بجوار المطافى", mobile: "01031158687", landline: "040 3413762" },
    { title: "شارع مصطفى ماهر", address: "مع تقاطع محمد فريد", mobile: "01114022339", landline: "040 3270242" },
    { title: "المعرض", address: "شارع توفيق غرابه خلف بنزينه اندريا", mobile: "01017084991", landline: "040 3400388" },
    { title: "شارع البنداري", address: "أمام مسجد حمزة خلف مركز القلب", mobile: "01211119062", landline: "040 3572622" },
    { title: "شارع المعاهدة", address: "أمام موقف الجملة", mobile: "01211119067", landline: "040 3592359" },
    { title: "اخر سعيد", address: "بجوار شركة المايه", mobile: "01050283001", landline: "040 3315457" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Promotion / Ads Banner */}
      <div className="bg-gradient-to-r from-[#0b6b4f] to-emerald-600 text-white w-full py-8 text-center relative overflow-hidden shadow-lg border-b-4 border-yellow-400">
        <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform translate-x-12 -translate-y-12">
           <HeartPulse className="w-48 h-48" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full font-bold text-sm mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <span>عرض خاص ولفترة محدودة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading mb-4 text-white drop-shadow-md">
            صيدليات أحمد حسن تدعم الأسر المصرية
          </h2>
          <p className="text-xl sm:text-2xl text-yellow-100 font-bold mb-6">
            اسأل الأن عن برومو كود <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded inline-block transform -rotate-2 ml-1 text-3xl font-black shadow-sm">الشركات</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">خصومات حصرية</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">على منتجات العناية والمستلزمات</span>
          </div>
        </div>
      </div>

      {/* Services / Selling Points */}
      <div className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap font-bold text-slate-700 text-lg">
             <div className="flex items-center gap-3">
               <span className="bg-green-100 text-green-700 p-3 rounded-xl"><Truck className="w-6 h-6" /></span>
               <span>أسرع خدمة توصيل #ادويتك_في_غمضة_عين</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="bg-blue-100 text-blue-700 p-3 rounded-xl font-black text-xl px-4">24h</span>
               <span>خدمة على مدار الساعة</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="bg-slate-100 text-slate-700 p-3 rounded-xl"><QrCode className="w-6 h-6" /></span>
               <span>الدفع: Visa, InstaPay, Vodafone Cash</span>
             </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-slate-900 mb-4">فروع صيدليات أحمد حسن</h2>
            <div className="h-1 w-24 bg-[#0b6b4f] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 font-medium">10 فروع في طنطا لخدمتك في أي وقت وأي مكان داخل المدينة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">{b.title}</h3>
                    <p className="text-slate-500 font-medium">{b.address}</p>
                  </div>
                </div>
                
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#0b6b4f]" />
                    <a href={`tel:${b.mobile.replace(/\s+/g,'')}`} className="text-slate-700 font-bold hover:text-[#0b6b4f]" dir="ltr">
                      {b.mobile}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-400" />
                    <a href={`tel:${b.landline.replace(/\s+/g,'').replace('/','')}`} className="text-slate-600 font-medium hover:text-[#0b6b4f]" dir="ltr">
                      {b.landline}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function LandingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20 bg-slate-50"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b6b4f] to-[#064230] text-white pt-24 pb-32 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-10 right-10 opacity-20 transform rotate-12">
           <Building2 className="w-64 h-64" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 transform -rotate-12">
           <HeartPulse className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-5 py-2 rounded-full font-bold text-sm mb-8 shadow-lg border border-yellow-300"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>الحل الأمثل لرفاهية موظفيك</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-6 leading-tight drop-shadow-lg">
            شراكة استراتيجية <br className="hidden md:block"/> 
            <span className="text-yellow-400 tracking-tight">لصحة أفضل وإنتاجية أعلى</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-green-50 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
            انضم لبرنامج <strong className="text-white">AH Business Bridge</strong> وامنح فريق عملك وصولاً غير محدود لخصومات حصرية، خدمات طبية في موقع العمل، وتوفير حقيقي مع أكبر شبكة صيدليات في طنطا.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-slate-900 font-bold py-4 px-10 rounded-xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-lg border-b-4 border-yellow-500 hover:border-yellow-400"
            >
              <Users className="w-6 h-6" />
              انضم لشبكة الشركاء
            </button>
            <button 
              onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-3 text-lg"
            >
              استعرض المزايا
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/20 pt-8 mt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">+10</div>
              <div className="text-green-100 text-sm md:text-base font-medium">فروع تغطي طنطا</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">15%</div>
              <div className="text-green-100 text-sm md:text-base font-medium">أقصى نسبة خصم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">0</div>
              <div className="text-green-100 text-sm md:text-base font-medium">أعباء إدارية أو رسوم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">24/7</div>
              <div className="text-green-100 text-sm md:text-base font-medium">خدمة توصيل أولوية</div>
            </div>
          </div>
        </div>
        
        {/* Custom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-24 text-slate-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
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

      {/* Calculator Section */}
      <SavingsCalculator />

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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner">
              <div className="flex-1 text-center lg:text-right">
                <h4 className="font-bold text-xl mb-3 text-slate-900">رابط التسجيل والتعريف للشركاء</h4>
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                  يمكنك تحميل رمز الاستجابة السريعة (QR Code) بدقة عالية لطباعته وإضافته في الملصقات، أو النشرات الترويجية الداخلية لتسهيل وصول الموظفين لصفحة التسجيل والاطلاع على الخصومات بشكل مباشر.
                </p>
                <div className="bg-white border border-slate-200 p-4 rounded-xl mb-6 shadow-sm inline-block w-full max-w-md text-right">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">الرابط المباشر للمشاركة</span>
                  <code className="block text-slate-800 font-mono select-all bg-slate-50 p-2 rounded text-left" dir="ltr">
                    {qrUrl}
                  </code>
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
                  <a href={`https://chart.googleapis.com/chart?cht=qr&chs=800x800&chl=${encodeURIComponent(qrUrl)}&chld=H|2`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#0b6b4f] text-white hover:bg-[#08523c] font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                    <Download className="w-5 h-5" />
                    تحميل QR Code عالي الدقة
                  </a>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-[#0b6b4f] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity blur-xl"></div>
                <img src={`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(qrUrl)}&chld=H|2`} alt="QR Code" width={250} height={250} className="relative z-10 w-[200px] sm:w-[250px] aspect-square max-w-full mix-blend-multiply" />
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

function SavingsCalculator() {
  const [employees, setEmployees] = useState(50);
  const [spend, setSpend] = useState(500);
  const [tier, setTier] = useState(0.135);

  const tiers = [
    { label: 'AH - Go', discount: 10, value: 0.1 },
    { label: 'AH - Silver', discount: 12.5, value: 0.125 },
    { label: 'AH - Gold', discount: 13.5, value: 0.135 },
    { label: 'AH - Premium', discount: 15, value: 0.15 },
  ];

  const monthlySavings = Math.round(employees * spend * tier);
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-8 h-8 text-[#0b6b4f]" />
            حاسبة التوفير التقديرية
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            اكتشف حجم التوفير المالي الذي سيحصل عليه فريق عملك عند الانضمام لبرنامج شراكات صيدليات أحمد حسن.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-slate-700">عدد الموظفين المستفيدين (فرد)</label>
                <span className="text-xl sm:text-2xl font-black text-[#0b6b4f]" dir="ltr">{employees}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={employees} 
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b6b4f]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-slate-700">متوسط الإنفاق الشهري للفرد بالأدوية</label>
                <span className="text-xl sm:text-2xl font-black text-[#0b6b4f]" dir="ltr">{spend} ج.م</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="3000" 
                step="100"
                value={spend} 
                onChange={(e) => setSpend(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b6b4f]"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 mb-4 block">فئة الشراكة (نسبة الخصم)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tiers.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setTier(t.value)}
                    className={`py-3 px-2 rounded-xl border-2 font-bold text-sm transition-all focus:outline-none ${tier === t.value ? 'border-[#0b6b4f] bg-green-50 text-[#0b6b4f] shadow-md' : 'border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'}`}
                  >
                     <div className="text-lg sm:text-xl mb-1 flex items-center justify-center gap-1" dir="ltr">
                        {t.discount}%
                     </div>
                    <div className="text-xs">{t.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-[#0b6b4f] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform translate-x-10 -translate-y-10 pointer-events-none">
              <Calculator className="w-64 h-64" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-2 text-green-100">إجمالي التوفير المتوقع</h3>
              <p className="text-green-50 mb-8 sm:mb-10 text-sm">مبالغ يحتفظ بها موظفوك في جيوبهم بفضل الشراكة معنا</p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-6 border border-white/20">
                <div className="text-base sm:text-lg text-green-100 font-medium mb-2">التوفير الشهري</div>
                <div className="text-4xl sm:text-5xl font-black font-heading tracking-tight" dir="ltr">
                  {monthlySavings.toLocaleString()} <span className="text-xl sm:text-2xl font-bold">ج.م</span>
                </div>
              </div>

              <div className="bg-yellow-400 text-yellow-900 rounded-2xl p-6 sm:p-8 shadow-lg transform md:scale-110">
                <div className="text-base sm:text-lg font-bold mb-2">التوفير السنوي (التقريبي)</div>
                <div className="text-4xl sm:text-6xl font-black font-heading tracking-tight" dir="ltr">
                  {yearlySavings.toLocaleString()} <span className="text-xl sm:text-3xl font-bold">ج.م</span>
                </div>
              </div>
              
              <p className="mt-8 sm:mt-12 text-xs text-green-200 opacity-80 text-justify sm:text-center leading-relaxed">
                * تدل الأرقام أعلاه على أرقام تقديرية مبنية على المدخلات، ولا تمثل التزاماً قانونياً لاختلاف المشتريات بين الأفراد. لا تنطبق مستويات الخصم على الأدوية المسعرة جبرياً من قبل وزارة الصحة والسكان، بينما تشمل منتجات العناية، والمستلزمات الطبية والمنتجات غير الدوائية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
