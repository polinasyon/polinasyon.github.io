// === 7 BÖLGE FLORA VERİTABANI (TÜBİTAK / TAGEM temelli referans) ===
window.bolgeHaritasi = {

  // 1) MARMARA
  "marmara": {
    flora: "Marmara: Ihlamur, Kestane, Akasya & Ayçiçeği",
    timeline: [
      { ay: "Mart", bitki: "Erken Bahar / Erik–Badem", verim: 50, tur: "polen" },
      { ay: "Nisan", bitki: "Meyve / Çayır", verim: 70, tur: "polen" },
      { ay: "Mayıs", bitki: "Akasya / Bahar Çayırı", verim: 78, tur: "nektar" },
      { ay: "Haziran", bitki: "Ihlamur & Kestane Zirve", verim: 92, tur: "nektar" },
      { ay: "Temmuz", bitki: "Ayçiçeği / Otsu", verim: 85, tur: "nektar" },
      { ay: "Ağustos", bitki: "Geç Dönem / Kuraklık", verim: 40, tur: "polen" },
      { ay: "Eylül", bitki: "Sonbahar Desteği", verim: 42, tur: "polen" },
      { ay: "Ekim", bitki: "Kışlatma Hazırlığı", verim: 25, tur: "kıtlık" }
    ]
  },

  // 2) EGE
  "ege": {
    flora: "Ege: Maki, Kekik, Püren & Çam Balı",
    timeline: [
      { ay: "Mart", bitki: "Erken Bahar / Maki", verim: 60, tur: "polen" },
      { ay: "Nisan", bitki: "Narenciye / Erken Maki", verim: 75, tur: "nektar" },
      { ay: "Mayıs", bitki: "Hayıt / Püren", verim: 82, tur: "nektar" },
      { ay: "Haziran", bitki: "Kekik / Dağ Florası", verim: 86, tur: "nektar" },
      { ay: "Temmuz", bitki: "Sıcaklık Stresi (kıyı–ova)", verim: 38, tur: "kıtlık" },
      { ay: "Ağustos", bitki: "Çam Pamuklu Koşnili", verim: 82, tur: "nektar" },
      { ay: "Eylül", bitki: "Çam Zirve & Püren", verim: 90, tur: "nektar" },
      { ay: "Ekim", bitki: "Sonbahar Florası", verim: 68, tur: "nektar" }
    ]
  },

  // 3) AKDENİZ
  "akdeniz": {
    flora: "Akdeniz: Narenciye, Maki, Defne, Keçiboynuzu & Çam",
    timeline: [
      { ay: "Mart", bitki: "Erken Narenciye", verim: 80, tur: "nektar" },
      { ay: "Nisan", bitki: "Portakal / Narenciye Zirve", verim: 95, tur: "nektar" },
      { ay: "Mayıs", bitki: "Maki (Hayıt–Püren–Defne)", verim: 86, tur: "nektar" },
      { ay: "Haziran", bitki: "Yaz Maki / Yayla Geçiş", verim: 62, tur: "nektar" },
      { ay: "Temmuz", bitki: "Aşırı Sıcaklık Stresi", verim: 22, tur: "kıtlık" },
      { ay: "Ağustos", bitki: "Kuraklık / Çam Başlangıç", verim: 28, tur: "kıtlık" },
      { ay: "Eylül", bitki: "Keçiboynuzu / Çam", verim: 75, tur: "nektar" },
      { ay: "Ekim", bitki: "Sonbahar Maki", verim: 72, tur: "nektar" }
    ]
  },

  // 4) İÇ ANADOLU
  "iç anadolu": {
    flora: "İç Anadolu: Bozkır, Kekik, Adaçayı, Yonca & Ayçiçeği",
    timeline: [
      { ay: "Mart", bitki: "Kışlatma", verim: 20, tur: "kıtlık" },
      { ay: "Nisan", bitki: "Erken Bahar Polen", verim: 48, tur: "polen" },
      { ay: "Mayıs", bitki: "Meyve / Akasya / Çayır", verim: 72, tur: "polen" },
      { ay: "Haziran", bitki: "Yayla / Adaçayı / Yonca", verim: 88, tur: "nektar" },
      { ay: "Temmuz", bitki: "Kekik / Ayçiçeği", verim: 84, tur: "nektar" },
      { ay: "Ağustos", bitki: "Kurak Dönem (dearth)", verim: 28, tur: "kıtlık" },
      { ay: "Eylül", bitki: "Sonbahar Desteği", verim: 34, tur: "polen" },
      { ay: "Ekim", bitki: "Kışlatma", verim: 18, tur: "kıtlık" }
    ]
  },

  // 5) KARADENİZ
  "karadeniz": {
    flora: "Karadeniz: Kestane, Ormangülü, Ihlamur & Yayla",
    timeline: [
      { ay: "Mart", bitki: "Erken Gelişim", verim: 42, tur: "polen" },
      { ay: "Nisan", bitki: "Bahar / Çayır / Fındık Altı", verim: 62, tur: "polen" },
      { ay: "Mayıs", bitki: "Ormangülü / Komar", verim: 82, tur: "nektar" },
      { ay: "Haziran", bitki: "Kestane Zirve", verim: 95, tur: "nektar" },
      { ay: "Temmuz", bitki: "Yayla Çiçekleri", verim: 86, tur: "nektar" },
      { ay: "Ağustos", bitki: "Orman Altı / Geç", verim: 45, tur: "polen" },
      { ay: "Eylül", bitki: "Sonbahar Akımı", verim: 38, tur: "polen" },
      { ay: "Ekim", bitki: "Kışlatma Hazırlığı", verim: 22, tur: "kıtlık" }
    ]
  },

  // 6) DOĞU ANADOLU
  "doğu anadolu": {
    flora: "Doğu Anadolu: Yüksek Yayla, Korunga, Yonca & Alpin Çayır",
    timeline: [
      { ay: "Mart", bitki: "Kışlatma (kar)", verim: 12, tur: "kıtlık" },
      { ay: "Nisan", bitki: "Kar Erimesi", verim: 30, tur: "kıtlık" },
      { ay: "Mayıs", bitki: "Uyanma & İlk Polen", verim: 58, tur: "polen" },
      { ay: "Haziran", bitki: "Korunga / Yonca / Yayla", verim: 85, tur: "nektar" },
      { ay: "Temmuz", bitki: "Yüksek Yayla Zirve", verim: 95, tur: "nektar" },
      { ay: "Ağustos", bitki: "Alpin Çayırlar", verim: 75, tur: "nektar" },
      { ay: "Eylül", bitki: "Geç Dönem", verim: 38, tur: "polen" },
      { ay: "Ekim", bitki: "Kışlatma", verim: 15, tur: "kıtlık" }
    ]
  },

  // 7) GÜNEYDOĞU ANADOLU
  "güneydoğu": {
    flora: "Güneydoğu: Maki, Kekik, Yonca & Erken Bahar / Yaz Kıtlığı",
    timeline: [
      { ay: "Mart", bitki: "Erken Bahar", verim: 52, tur: "polen" },
      { ay: "Nisan", bitki: "Bahar / Maki", verim: 75, tur: "nektar" },
      { ay: "Mayıs", bitki: "Kekik / Çayır / Yonca", verim: 82, tur: "nektar" },
      { ay: "Haziran", bitki: "Kurak Başlangıç", verim: 36, tur: "kıtlık" },
      { ay: "Temmuz", bitki: "Aşırı Sıcaklık", verim: 15, tur: "kıtlık" },
      { ay: "Ağustos", bitki: "Derin Kuraklık", verim: 12, tur: "kıtlık" },
      { ay: "Eylül", bitki: "Zayıf Sonbahar", verim: 28, tur: "kıtlık" },
      { ay: "Ekim", bitki: "Kışlatma", verim: 18, tur: "kıtlık" }
    ]
  },

  // Fallback
  "varsayılan": {
    flora: "Türkiye Genel: Yayla & Tarım Florası (ortalama)",
    timeline: [
      { ay: "Mart", bitki: "Erken Gelişim", verim: 42, tur: "polen" },
      { ay: "Nisan", bitki: "Bahar Çiçekleri", verim: 60, tur: "polen" },
      { ay: "Mayıs", bitki: "Bahar Akımı", verim: 72, tur: "polen" },
      { ay: "Haziran", bitki: "Ana Akım Florası", verim: 88, tur: "nektar" },
      { ay: "Temmuz", bitki: "Yaz Akımı / Otsu", verim: 78, tur: "nektar" },
      { ay: "Ağustos", bitki: "Yaz Sonu Kuraklığı", verim: 35, tur: "kıtlık" },
      { ay: "Eylül", bitki: "Sonbahar Desteği", verim: 40, tur: "polen" },
      { ay: "Ekim", bitki: "Kışlatma Hazırlığı", verim: 25, tur: "kıtlık" }
    ]
  }
};


// === 7 BÖLGE HARİTASI (il + geçiş ilçeleri) ===
window.bolgeHaritasi = {
  "iç anadolu": [
    "ankara", "konya", "kayseri", "eskişehir", "sivas", "kırıkkale", "aksaray",
    "karaman", "kırşehir", "niğde", "nevşehir", "yozgat", "çankırı",
    // geçiş ilçeleri
    "kızılcahamam", "nallıhan", "beypazarı", "emirdağ", "seydişehir", "bozkır", "sungurlu"
  ],
  "ege": [
    "izmir", "manisa", "aydın", "denizli", "kütahya", "afyon", "afyonkarahisar", "uşak", "muğla",
    // geçiş
    "simav", "acıpayam", "tavas", "dinar", "sandıklı", "fethiye", "marmaris"
  ],
  "akdeniz": [
    "antalya", "adana", "mersin", "burdur", "hatay", "osmaniye", "ısparta", "isparta", "kahramanmaraş",
    // geçiş / toros
    "elmalı", "elmali", "kaş"
  ],
  "karadeniz": [
    "trabzon", "rize", "artvin", "ordu", "giresun", "samsun", "zonguldak", "sinop", "tokat",
    "çorum", "amasya", "kastamonu", "karabük", "bartın", "bolu", "düzce",
    "gümüşhane", "bayburt",
    // geçiş
    "ilgaz", "tosya", "merzifon", "vezirköprü", "şebinkarahisar", "kelkit", "yusufeli", "iskilip"
  ],
  "doğu anadolu": [
    "erzurum", "erzincan", "kars", "ardahan", "ağrı", "ığdır", "van", "bingöl", "muş",
    "bitlis", "tunceli", "elazığ", "malatya", "hakkari"
  ],
  "marmara": [
    "istanbul", "kocaeli", "sakarya", "yalova", "bursa", "balıkesir", "çanakkale",
    "tekirdağ", "edirne", "kırklareli", "bilecik",
    // geçiş
    "edremit", "ayvacık"
  ],
  "güneydoğu": [
    "gaziantep", "şanlıurfa", "diyarbakır", "mardin", "batman", "siirt",
    "adıyaman", "kilis", "şırnak"
  ]
};
