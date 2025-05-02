"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#92b73a] to-[#7a9a2e] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Agromind ile Tarımın Geleceğini Keşfedin</h1>
            <p className="text-xl mb-8">
              Yapay zeka destekli çözümlerimizle tarım sektöründe verimliliği artırın, 
              kaynakları optimize edin ve sürdürülebilir tarım uygulamalarını benimseyin.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#92b73a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Hemen Başlayın
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Özelliklerimiz
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Akıllı Tarım Analizi",
                description: "Toprak ve hava koşullarını analiz ederek en uygun ekim ve hasat zamanlarını belirleyin."
              },
              {
                icon: "📊",
                title: "Veri Odaklı Kararlar",
                description: "Gerçek zamanlı veri analizi ile tarımsal kararlarınızı optimize edin."
              },
              {
                icon: "🌍",
                title: "Sürdürülebilir Tarım",
                description: "Çevre dostu uygulamalarla gelecek nesillere yaşanabilir bir dünya bırakın."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-[#92b73a] text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nasıl Çalışır?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "Veri Toplama", description: "Toprak ve hava verilerini sensörlerle topluyoruz" },
              { number: "2", title: "Analiz", description: "Yapay zeka ile verileri analiz ediyoruz" },
              { number: "3", title: "Öneriler", description: "Size özel tarımsal öneriler sunuyoruz" },
              { number: "4", title: "Takip", description: "Süreci sürekli takip ediyoruz" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#92b73a] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {step.number}
                </motion.div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Fiyatlandırma
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Başlangıç",
                price: "₺499",
                features: ["Temel toprak analizi", "Hava durumu takibi", "Aylık raporlar"]
              },
              {
                title: "Profesyonel",
                price: "₺999",
                features: ["Tüm Başlangıç özellikleri", "Gelişmiş analizler", "Haftalık raporlar", "Özel destek"],
                popular: true
              },
              {
                title: "Kurumsal",
                price: "₺1999",
                features: ["Tüm Profesyonel özellikleri", "API erişimi", "Özel entegrasyonlar", "7/24 destek"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-lg shadow-md ${plan.popular ? 'border-2 border-[#92b73a] relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#92b73a] text-white px-4 py-1 rounded-tr-lg">Popüler</div>
                )}
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm text-gray-500">/ay</span></div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-[#92b73a] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#92b73a] text-white py-2 rounded-lg hover:bg-[#7a9a2e] transition duration-300"
                >
                  Başla
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Müşterilerimiz Ne Diyor?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Agromind sayesinde verimliliğimiz %30 arttı. Kesinlikle tavsiye ediyorum.",
                name: "Ahmet Yılmaz",
                role: "Çiftçi, Konya"
              },
              {
                quote: "Yapay zeka destekli çözümleri ile tarım işletmemizi bir üst seviyeye taşıdık.",
                name: "Ayşe Demir",
                role: "Tarım İşletmesi Sahibi, İzmir"
              },
              {
                quote: "Sürdürülebilir tarım için en iyi çözüm ortağımız.",
                name: "Mehmet Kaya",
                role: "Organik Tarım Uzmanı, Antalya"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#92b73a] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Tarımın Geleceğine Hazır mısınız?</h2>
            <p className="text-xl mb-8">
              Agromind ile tanışın ve tarım işletmenizi bir adım öteye taşıyın.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#92b73a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Ücretsiz Demo İsteyin
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
