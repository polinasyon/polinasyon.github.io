// floraveritabani.js 

window.FLORA_VERITABANI = {

  // ====================== BÖLGE / İL BAZLI KAYITLAR ======================

  // ---------- İÇ ANADOLU ----------
  "iç anadolu": {
    flora: "İç Anadolu Bozkır & Kekik / Ayçiçeği / Geven",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 520, nektarBitis: 780 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",      verim: 75, tur: "polen",  gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Yayla / Adaçayı",     verim: 90, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Kekik / Ayçiçeği",    verim: 85, tur: "nektar", gddMin: 580, gddMax: 850 },
      { ay: "Ağustos", bitki: "Kurak Dönem / Geven", verim: 30, tur: "kıtlık", gddMin: 800, gddMax: 1100 }
    ]
  },
  "ankara": {
    flora: "Bozkır – Kekik, Geven, Yonca, Ayçiçeği",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 530, nektarBitis: 800 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 70, tur: "polen",  gddMin: 240, gddMax: 410 },
      { ay: "Haziran", bitki: "Yonca / Adaçayı",    verim: 85, tur: "nektar", gddMin: 410, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Kekik / Ayçiçeği",   verim: 80, tur: "nektar", gddMin: 580, gddMax: 820 },
      { ay: "Ağustos", bitki: "Geven / Kuraklık",   verim: 35, tur: "kıtlık", gddMin: 780, gddMax: 1050 }
    ]
  },
  "konya": {
    flora: "Bozkır – Kekik, Geven, Ayçiçeği, Yonca",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 540, nektarBitis: 810 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 65, tur: "polen",  gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 80, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",   verim: 85, tur: "nektar", gddMin: 600, gddMax: 850 },
      { ay: "Ağustos", bitki: "Kurak Dönem",        verim: 25, tur: "kıtlık", gddMin: 820, gddMax: 1100 }
    ]
  },
  "kayseri": {
    flora: "Yüksek Bozkır – Kekik, Geven, Yayla Çiçekleri",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 560, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 70, tur: "polen",  gddMin: 260, gddMax: 430 },
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 430, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 85, tur: "nektar", gddMin: 620, gddMax: 880 },
      { ay: "Ağustos", bitki: "Kuraklık",           verim: 30, tur: "kıtlık", gddMin: 850, gddMax: 1150 }
    ]
  },
  "sivas": {
    flora: "Yüksek Yayla – Kekik, Geven, Çiçek Balı",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 580, nektarBitis: 880 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Çiçekleri",    verim: 90, tur: "nektar", gddMin: 400, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Kekik / Geven",      verim: 95, tur: "nektar", gddMin: 580, gddMax: 850 },
      { ay: "Ağustos", bitki: "Geven / Otsu",       verim: 70, tur: "nektar", gddMin: 800, gddMax: 1050 }
    ]
  },
  "eskişehir": {
    flora: "Geçiş Bozkır – Kekik, Yonca, Akasya",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 530, nektarBitis: 800 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 240, gddMax: 410 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 410, gddMax: 610 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",   verim: 80, tur: "nektar", gddMin: 580, gddMax: 830 }
    ]
  },
  "nevşehir": {
    flora: "Kapadokya Bozkır – Kekik, Geven, Yonca",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 540, nektarBitis: 810 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 70, tur: "polen",  gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Geven / Ayçiçeği",   verim: 80, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "niğde": {
    flora: "Yüksek Bozkır – Kekik, Geven, Yayla",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 560, nektarBitis: 850 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 430, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 85, tur: "nektar", gddMin: 620, gddMax: 880 }
    ]
  },
  "aksaray": {
    flora: "Bozkır – Ayçiçeği, Kekik, Geven",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 540, nektarBitis: 810 },
    timeline: [
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 80, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",   verim: 85, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "karaman": {
    flora: "Bozkır – Kekik, Geven, Ayçiçeği",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 540, nektarBitis: 810 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",   verim: 80, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "kırıkkale": {
    flora: "Bozkır – Kekik, Yonca, Akasya",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 530, nektarBitis: 800 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 70, tur: "polen",  gddMin: 240, gddMax: 410 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 410, gddMax: 610 },
      { ay: "Temmuz",  bitki: "Ayçiçeği",           verim: 80, tur: "nektar", gddMin: 580, gddMax: 830 }
    ]
  },
  "kırşehir": {
    flora: "Bozkır – Kekik, Geven, Yonca",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 540, nektarBitis: 810 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 620 },
      { ay: "Temmuz",  bitki: "Geven / Ayçiçeği",   verim: 80, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "çankırı": {
    flora: "Geçiş – Kekik, Yonca, Orman Altı",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 550, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 630 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 80, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "yozgat": {
    flora: "Yüksek Bozkır – Kekik, Geven, Yayla",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 560, nektarBitis: 850 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 430, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Ayçiçeği",   verim: 85, tur: "nektar", gddMin: 620, gddMax: 880 }
    ]
  },

  // ---------- EGE ----------
  "muğla": {
    flora: "Ege Çam Balı & Püren / Kekik Florası",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 680, nektarBitis: 1050 },
    timeline: [
      { ay: "Mayıs",   bitki: "Narenciye / Hayıt",  verim: 80, tur: "nektar", gddMin: 280, gddMax: 480 },
      { ay: "Haziran", bitki: "Kekik / Dağ Florası",verim: 85, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Ağustos", bitki: "Çam Pamuklu Koşnili",verim: 95, tur: "nektar", gddMin: 780, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Çam Balı Zirve",     verim: 98, tur: "nektar", gddMin: 950, gddMax: 1300 }
    ]
  },
  "aydın": {
    flora: "Ege – Çam, Narenciye, Kekik, Hayıt",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 650, nektarBitis: 1000 },
    timeline: [
      { ay: "Nisan",   bitki: "Narenciye",          verim: 85, tur: "nektar", gddMin: 250, gddMax: 420 },
      { ay: "Mayıs",   bitki: "Hayıt / Kekik",      verim: 80, tur: "nektar", gddMin: 400, gddMax: 600 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 90, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "izmir": {
    flora: "Ege – Çam, Kekik, Narenciye, Zeytin",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Nisan",   bitki: "Narenciye / Defne",  verim: 80, tur: "nektar", gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Kekik / Dağ",        verim: 85, tur: "nektar", gddMin: 450, gddMax: 680 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 90, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "manisa": {
    flora: "Ege Geçiş – Kekik, Üzüm, Çam, Yonca",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 620, nektarBitis: 950 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 75, tur: "polen",  gddMin: 260, gddMax: 450 },
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 450, gddMax: 680 },
      { ay: "Ağustos", bitki: "Çam / Kurak",        verim: 70, tur: "nektar", gddMin: 750, gddMax: 1000 }
    ]
  },
  "denizli": {
    flora: "Ege Geçiş – Kekik, Çam, Pamuk, Yayla",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 630, nektarBitis: 960 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Hayıt",      verim: 75, tur: "nektar", gddMin: 260, gddMax: 450 },
      { ay: "Haziran", bitki: "Kekik / Dağ",        verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Pamuk / Otsu",       verim: 70, tur: "nektar", gddMin: 650, gddMax: 900 }
    ]
  },
  "uşak": {
    flora: "Ege-İç Anadolu Geçiş – Kekik, Yonca, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 70, tur: "polen",  gddMin: 250, gddMax: 430 },
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 90, tur: "nektar", gddMin: 430, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 80, tur: "nektar", gddMin: 600, gddMax: 880 }
    ]
  },
  "afyonkarahisar": {
    flora: "Ege-İç Anadolu Geçiş – Kekik, Geven, Yayla",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 570, nektarBitis: 890 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yayla",      verim: 90, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 85, tur: "nektar", gddMin: 600, gddMax: 880 }
    ]
  },
  "kütahya": {
    flora: "Ege-İç Anadolu Geçiş – Kestane, Kekik, Çam",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Mayıs",   bitki: "Çayır / Meyve",      verim: 70, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik / Orman Altı", verim: 85, tur: "nektar", gddMin: 580, gddMax: 820 }
    ]
  },

  // ---------- AKDENİZ ----------
  "antalya": {
    flora: "Akdeniz – Narenciye, Kekik, Çam, Püren",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 250, nektarZirve: 550, nektarBitis: 950 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 90, tur: "nektar", gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Kekik / Hayıt",      verim: 85, tur: "nektar", gddMin: 400, gddMax: 600 },
      { ay: "Haziran", bitki: "Püren / Dağ",        verim: 80, tur: "nektar", gddMin: 550, gddMax: 780 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 75, tur: "nektar", gddMin: 800, gddMax: 1100 }
    ]
  },
  "mersin": {
    flora: "Akdeniz – Narenciye, Kekik, Çam, Sedir",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 250, nektarZirve: 560, nektarBitis: 960 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 90, tur: "nektar", gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 400, gddMax: 620 },
      { ay: "Haziran", bitki: "Sedir / Püren",      verim: 80, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "adana": {
    flora: "Çukurova – Narenciye, Ayçiçeği, Pamuk, Kekik",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 240, nektarZirve: 540, nektarBitis: 920 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 95, tur: "nektar", gddMin: 180, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Ayçiçeği / Akasya",  verim: 85, tur: "nektar", gddMin: 400, gddMax: 600 },
      { ay: "Haziran", bitki: "Pamuk / Kekik",      verim: 75, tur: "nektar", gddMin: 550, gddMax: 780 }
    ]
  },
  "hatay": {
    flora: "Akdeniz – Narenciye, Kekik, Zeytin, Defne",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 240, nektarZirve: 550, nektarBitis: 930 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye / Defne",  verim: 90, tur: "nektar", gddMin: 180, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Kekik / Hayıt",      verim: 85, tur: "nektar", gddMin: 400, gddMax: 620 },
      { ay: "Haziran", bitki: "Dağ Florası",        verim: 80, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "osmaniye": {
    flora: "Akdeniz Geçiş – Narenciye, Kekik, Çam",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 260, nektarZirve: 560, nektarBitis: 940 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 85, tur: "nektar", gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 400, gddMax: 620 },
      { ay: "Haziran", bitki: "Çam / Dağ",          verim: 75, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "kahramanmaraş": {
    flora: "Akdeniz-Doğu Geçiş – Kekik, Geven, Sedir",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Kekik",      verim: 80, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Geven / Sedir",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",    verim: 85, tur: "nektar", gddMin: 650, gddMax: 900 }
    ]
  },
  "isparta": {
    flora: "Göller Yöresi – Kekik, Gül, Sedir, Yayla",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Gül / Meyve",        verim: 75, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Kekik / Sedir",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Yayla / Geven",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 900 }
    ]
  },
  "burdur": {
    flora: "Göller Yöresi – Kekik, Geven, Sedir",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Geven",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Yayla / Sedir",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 900 }
    ]
  },

  // ---------- KARADENİZ ----------
  "ordu": {
    flora: "Karadeniz – Kestane, Fındık, Yayla Çiçekleri",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Meyve",     verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",    verim: 90, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "giresun": {
    flora: "Karadeniz – Kestane, Fındık, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane",            verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Yayla / Otsu",       verim: 90, tur: "nektar", gddMin: 600, gddMax: 850 }
    ]
  },
  "trabzon": {
    flora: "Karadeniz – Kestane, Ihlamur, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 860 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 70, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",    verim: 90, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "rize": {
    flora: "Doğu Karadeniz – Anzer, Kestane, Yayla, Rhododendron",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 70, tur: "polen",  gddMin: 230, gddMax: 420 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Anzer / Yayla",      verim: 98, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "artvin": {
    flora: "Doğu Karadeniz – Kestane, Yayla, Endemik Çiçekler",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 75, tur: "polen",  gddMin: 230, gddMax: 420 },
      { ay: "Haziran", bitki: "Kestane",            verim: 95, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Yayla / Endemik",    verim: 98, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "samsun": {
    flora: "Orta Karadeniz – Kestane, Fındık, Ayçiçeği",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Yayla",   verim: 85, tur: "nektar", gddMin: 580, gddMax: 850 }
    ]
  },
  "sinop": {
    flora: "Karadeniz – Kestane, Fındık, Orman",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane",            verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 },
      { ay: "Temmuz",  bitki: "Yayla / Otsu",       verim: 85, tur: "nektar", gddMin: 580, gddMax: 850 }
    ]
  },
  "kastamonu": {
    flora: "Batı Karadeniz – Kestane, Ihlamur, Çam",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 70, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Yayla / Kekik",      verim: 85, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "zonguldak": {
    flora: "Batı Karadeniz – Kestane, Ihlamur, Orman",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 },
      { ay: "Temmuz",  bitki: "Yayla",              verim: 80, tur: "nektar", gddMin: 580, gddMax: 840 }
    ]
  },
  "bolu": {
    flora: "Batı Karadeniz Geçiş – Kestane, Ihlamur, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Yayla / Kekik",      verim: 85, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "düzce": {
    flora: "Batı Karadeniz – Kestane, Fındık, Ihlamur",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "bartın": {
    flora: "Batı Karadeniz – Kestane, Ihlamur, Orman",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 70, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "karabük": {
    flora: "Batı Karadeniz Geçiş – Kestane, Ihlamur, Çam",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 70, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 }
    ]
  },
  "gümüşhane": {
    flora: "Doğu Karadeniz İç – Yayla, Kekik, Geven",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 920 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Endemik",    verim: 95, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "bayburt": {
    flora: "Doğu Karadeniz-İç Geçiş – Yayla, Geven",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 330, nektarZirve: 620, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Çiçekleri",    verim: 90, tur: "nektar", gddMin: 430, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 680, gddMax: 950 }
    ]
  },
  "tokat": {
    flora: "Orta Karadeniz Geçiş – Kestane, Kekik, Yonca",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Yonca",    verim: 90, tur: "nektar", gddMin: 410, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik / Yayla",      verim: 85, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "amasya": {
    flora: "Orta Karadeniz Geçiş – Elma, Kestane, Kekik",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Elma / Akasya",      verim: 80, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Yonca",    verim: 90, tur: "nektar", gddMin: 410, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik",              verim: 80, tur: "nektar", gddMin: 600, gddMax: 860 }
    ]
  },
  "çorum": {
    flora: "Karadeniz-İç Anadolu Geçiş – Kekik, Yonca, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 70, tur: "polen",  gddMin: 240, gddMax: 420 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Ayçiçeği",   verim: 80, tur: "nektar", gddMin: 600, gddMax: 870 }
    ]
  },

  // ---------- MARMARA ----------
  "bursa": {
    flora: "Marmara – Kestane, Ihlamur, Uludağ Yaylası",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 540, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 80, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Uludağ Yayla",       verim: 90, tur: "nektar", gddMin: 600, gddMax: 870 }
    ]
  },
  "balıkesir": {
    flora: "Marmara-Ege Geçiş – Kestane, Çam, Kekik",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 230, gddMax: 420 },
      { ay: "Haziran", bitki: "Kestane / Kekik",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 80, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "çanakkale": {
    flora: "Marmara-Ege – Çam, Kekik, Zeytin, Kestane",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Zeytin",    verim: 75, tur: "nektar", gddMin: 230, gddMax: 420 },
      { ay: "Haziran", bitki: "Kekik / Kestane",    verim: 85, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 80, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "tekirdağ": {
    flora: "Trakya – Ayçiçeği, Yonca, Akasya",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Yonca / Ayçiçeği",   verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",     verim: 95, tur: "nektar", gddMin: 580, gddMax: 850 }
    ]
  },
  "edirne": {
    flora: "Trakya – Ayçiçeği, Yonca, Akasya",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya",             verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Yonca / Ayçiçeği",   verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Ayçiçeği",           verim: 95, tur: "nektar", gddMin: 580, gddMax: 850 }
    ]
  },
  "kırklareli": {
    flora: "Trakya – Ayçiçeği, Ihlamur, Orman",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Ihlamur",   verim: 80, tur: "nektar", gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Yonca / Ayçiçeği",   verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Ayçiçeği",           verim: 95, tur: "nektar", gddMin: 580, gddMax: 850 }
    ]
  },
  "istanbul": {
    flora: "Marmara – Akasya, Ihlamur, Kentsel & Orman",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 260, nektarZirve: 520, nektarBitis: 800 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Ihlamur",   verim: 80, tur: "nektar", gddMin: 210, gddMax: 400 },
      { ay: "Haziran", bitki: "Yonca / Otsu",       verim: 70, tur: "nektar", gddMin: 400, gddMax: 620 }
    ]
  },
  "kocaeli": {
    flora: "Marmara – Kestane, Ihlamur, Fındık",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 75, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "sakarya": {
    flora: "Marmara – Fındık, Kestane, Ihlamur",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Fındık / Akasya",    verim: 80, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "yalova": {
    flora: "Marmara – Kestane, Ihlamur, Meyve",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 80, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "bilecik": {
    flora: "Marmara-İç Anadolu Geçiş – Kestane, Kekik, Yonca",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Yonca",    verim: 90, tur: "nektar", gddMin: 410, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik / Geven",      verim: 80, tur: "nektar", gddMin: 600, gddMax: 870 }
    ]
  },

  // ---------- DOĞU ANADOLU ----------
  "erzurum": {
    flora: "Doğu Anadolu Yayla – Geven, Kekik, Endemik",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 350, nektarZirve: 650, nektarBitis: 1000 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Başlangıç",    verim: 80, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 620, gddMax: 900 },
      { ay: "Ağustos", bitki: "Yayla Zirve",        verim: 90, tur: "nektar", gddMin: 850, gddMax: 1150 }
    ]
  },
  "kars": {
    flora: "Doğu Anadolu – Kafkas Yayla, Geven, Çiçek",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 360, nektarZirve: 660, nektarBitis: 1020 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Çiçekleri",    verim: 85, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Endemik",    verim: 98, tur: "nektar", gddMin: 650, gddMax: 950 },
      { ay: "Ağustos", bitki: "Yayla Devam",        verim: 90, tur: "nektar", gddMin: 900, gddMax: 1200 }
    ]
  },
  "ardahan": {
    flora: "Doğu Anadolu – Yüksek Yayla, Geven",
    baseTemp: 4,
    gdd: { ciceklenmeBaslangic: 370, nektarZirve: 680, nektarBitis: 1050 },
    timeline: [
      { ay: "Temmuz",  bitki: "Yayla / Geven",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 },
      { ay: "Ağustos", bitki: "Endemik Çiçekler",   verim: 90, tur: "nektar", gddMin: 900, gddMax: 1200 }
    ]
  },
  "ağrı": {
    flora: "Doğu Anadolu – Yayla, Geven, Kekik",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 360, nektarZirve: 660, nektarBitis: 1020 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 80, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 }
    ]
  },
  "van": {
    flora: "Doğu Anadolu – Yayla, Geven, Çiçek",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 340, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Çiçekleri",    verim: 85, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 620, gddMax: 920 }
    ]
  },
  "bitlis": {
    flora: "Doğu Anadolu – Yayla, Geven, Endemik",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 340, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 620, gddMax: 920 }
    ]
  },
  "muş": {
    flora: "Doğu Anadolu – Yayla, Geven",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 340, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 95, tur: "nektar", gddMin: 620, gddMax: 920 }
    ]
  },
  "hakkari": {
    flora: "Doğu Anadolu – Yüksek Yayla, Endemik",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 360, nektarZirve: 670, nektarBitis: 1050 },
    timeline: [
      { ay: "Temmuz",  bitki: "Yayla / Geven",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 },
      { ay: "Ağustos", bitki: "Endemik",            verim: 90, tur: "nektar", gddMin: 900, gddMax: 1200 }
    ]
  },
  "iğdır": {
    flora: "Doğu Anadolu Mikro Klima – Meyve, Yonca, Geven",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 80, tur: "polen",  gddMin: 250, gddMax: 430 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 430, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 80, tur: "nektar", gddMin: 620, gddMax: 900 }
    ]
  },
  "erzincan": {
    flora: "Doğu Anadolu – Yayla, Geven, Kekik",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 }
    ]
  },
  "tunceli": {
    flora: "Doğu Anadolu – Yayla, Geven, Kekik",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 }
    ]
  },
  "bingöl": {
    flora: "Doğu Anadolu – Yayla, Geven, Kekik",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 }
    ]
  },
  "malatya": {
    flora: "Doğu-İç Geçiş – Kayısı, Geven, Kekik",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 880 },
    timeline: [
      { ay: "Nisan",   bitki: "Kayısı / Meyve",     verim: 85, tur: "polen",  gddMin: 200, gddMax: 380 },
      { ay: "Haziran", bitki: "Kekik / Geven",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "elazığ": {
    flora: "Doğu-İç Geçiş – Geven, Kekik, Yonca",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 880 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 75, tur: "polen",  gddMin: 240, gddMax: 420 },
      { ay: "Haziran", bitki: "Kekik / Geven",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },

  // ---------- GÜNEYDOĞU ANADOLU ----------
  "şanlıurfa": {
    flora: "Güneydoğu – Pamuk, Geven, Kekik, Yonca",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 260, nektarZirve: 580, nektarBitis: 950 },
    timeline: [
      { ay: "Nisan",   bitki: "Meyve / Akasya",     verim: 70, tur: "polen",  gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Yonca / Kekik",      verim: 80, tur: "nektar", gddMin: 380, gddMax: 580 },
      { ay: "Haziran", bitki: "Pamuk / Geven",      verim: 75, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "diyarbakır": {
    flora: "Güneydoğu – Pamuk, Geven, Kekik",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 260, nektarZirve: 580, nektarBitis: 950 },
    timeline: [
      { ay: "Nisan",   bitki: "Meyve / Akasya",     verim: 70, tur: "polen",  gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Yonca / Kekik",      verim: 80, tur: "nektar", gddMin: 380, gddMax: 580 },
      { ay: "Haziran", bitki: "Pamuk / Geven",      verim: 75, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "mardin": {
    flora: "Güneydoğu – Pamuk, Geven, Kekik, Antep Fıstığı",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 260, nektarZirve: 580, nektarBitis: 950 },
    timeline: [
      { ay: "Nisan",   bitki: "Meyve / Fıstık",     verim: 75, tur: "polen",  gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Kekik / Yonca",      verim: 80, tur: "nektar", gddMin: 380, gddMax: 580 },
      { ay: "Haziran", bitki: "Pamuk / Geven",      verim: 75, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "gaziantep": {
    flora: "Güneydoğu – Antep Fıstığı, Kekik, Geven, Zahter",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 250, nektarZirve: 560, nektarBitis: 920 },
    timeline: [
      { ay: "Nisan",   bitki: "Fıstık / Meyve",     verim: 80, tur: "polen",  gddMin: 190, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Kekik / Zahter",     verim: 90, tur: "nektar", gddMin: 360, gddMax: 560 },
      { ay: "Haziran", bitki: "Geven / Yonca",      verim: 80, tur: "nektar", gddMin: 540, gddMax: 780 }
    ]
  },
  "kilis": {
    flora: "Güneydoğu – Kekik, Geven, Zeytin",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 250, nektarZirve: 560, nektarBitis: 920 },
    timeline: [
      { ay: "Nisan",   bitki: "Zeytin / Meyve",     verim: 75, tur: "polen",  gddMin: 190, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Kekik / Zahter",     verim: 90, tur: "nektar", gddMin: 360, gddMax: 560 },
      { ay: "Haziran", bitki: "Geven",              verim: 80, tur: "nektar", gddMin: 540, gddMax: 780 }
    ]
  },
  "adıyaman": {
    flora: "Güneydoğu – Geven, Kekik, Pamuk",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 570, nektarBitis: 930 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Pamuk / Yonca",      verim: 80, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 75, tur: "nektar", gddMin: 650, gddMax: 900 }
    ]
  },
  "siirt": {
    flora: "Güneydoğu – Pervari Yayla, Geven, Kekik",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 590, nektarBitis: 950 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 260, gddMax: 460 },
      { ay: "Haziran", bitki: "Yayla / Geven",      verim: 95, tur: "nektar", gddMin: 460, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Pervari Zirve",      verim: 98, tur: "nektar", gddMin: 700, gddMax: 980 }
    ]
  },
  "batman": {
    flora: "Güneydoğu – Geven, Kekik, Pamuk",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 570, nektarBitis: 930 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Pamuk / Yonca",      verim: 80, tur: "nektar", gddMin: 450, gddMax: 700 }
    ]
  },
  "şırnak": {
    flora: "Güneydoğu – Yüksek Yayla, Geven, Kekik",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 600, nektarBitis: 970 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Geven",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Kekik / Endemik",    verim: 95, tur: "nektar", gddMin: 700, gddMax: 980 }
    ]
  },

  // ====================== GEÇİŞ İKLİMİ İLÇELERİ ======================
  "simav": {
    flora: "Ege Geçiş – Kestane, Çam, Kekik, Ihlamur",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Mayıs",   bitki: "Çayır / Meyve",      verim: 70, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane & Ihlamur",  verim: 90, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik / Orman Altı", verim: 85, tur: "nektar", gddMin: 580, gddMax: 820 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 75, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "domaniç": {
    flora: "Ege-İç Geçiş – Kestane, Kekik, Geven",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 590, nektarBitis: 930 },
    timeline: [
      { ay: "Haziran", bitki: "Kestane / Kekik",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "tavşanlı": {
    flora: "Ege-İç Geçiş – Kekik, Yonca, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 80, tur: "nektar", gddMin: 600, gddMax: 880 }
    ]
  },
  "emet": {
    flora: "Ege-İç Geçiş – Kekik, Geven, Çam",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 910 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Dağ",        verim: 85, tur: "nektar", gddMin: 430, gddMax: 660 },
      { ay: "Temmuz",  bitki: "Geven / Çam",        verim: 80, tur: "nektar", gddMin: 620, gddMax: 900 }
    ]
  },
  "gediz": {
    flora: "Ege Geçiş – Kekik, Kestane, Üzüm",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 890 },
    timeline: [
      { ay: "Mayıs",   bitki: "Meyve / Akasya",     verim: 75, tur: "polen",  gddMin: 240, gddMax: 420 },
      { ay: "Haziran", bitki: "Kekik / Kestane",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 660 }
    ]
  },
  "saphane": {
    flora: "Ege Yüksek Geçiş – Kekik, Geven, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 940 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yayla",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 85, tur: "nektar", gddMin: 680, gddMax: 950 }
    ]
  },
  "banaz": {
    flora: "Ege-İç Geçiş – Kekik, Yonca, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Yonca",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 80, tur: "nektar", gddMin: 600, gddMax: 880 }
    ]
  },
  "sivaslı": {
    flora: "Ege-İç Geçiş – Kekik, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik",              verim: 85, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Otsu",       verim: 80, tur: "nektar", gddMin: 600, gddMax: 880 }
    ]
  },
  "çivril": {
    flora: "Ege Geçiş – Kekik, Pamuk, Yayla",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Hayıt / Kekik",      verim: 80, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Kekik / Pamuk",      verim: 85, tur: "nektar", gddMin: 450, gddMax: 700 }
    ]
  },
  "çal": {
    flora: "Ege Yüksek – Kekik (yoğun), Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik Zirve",        verim: 95, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",      verim: 85, tur: "nektar", gddMin: 680, gddMax: 950 }
    ]
  },
  "güney": {
    flora: "Ege – Kekik, Geven, Çam",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 570, nektarBitis: 910 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Çam",        verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 80, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "pozantı": {
    flora: "Toros Geçiş – Kekik, Geven, Sedir, Çam",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 250, gddMax: 450 },
      { ay: "Haziran", bitki: "Sedir / Püren",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "feke": {
    flora: "Toros Geçiş – Kekik, Geven, Sedir",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Sedir",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "saimbeyli": {
    flora: "Toros Geçiş – Kekik, Geven, Sedir",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 590, nektarBitis: 940 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Sedir",      verim: 90, tur: "nektar", gddMin: 460, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 85, tur: "nektar", gddMin: 680, gddMax: 950 }
    ]
  },
  "tufanbeyli": {
    flora: "Toros Yüksek Geçiş – Kekik, Geven, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 470, gddMax: 730 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 90, tur: "nektar", gddMin: 700, gddMax: 980 }
    ]
  },
  "karaisalı": {
    flora: "Toros Geçiş – Kekik, Çam, Geven",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Akasya",     verim: 80, tur: "nektar", gddMin: 240, gddMax: 440 },
      { ay: "Haziran", bitki: "Çam / Geven",        verim: 85, tur: "nektar", gddMin: 450, gddMax: 700 }
    ]
  },
  "aladağ": {
    flora: "Toros Geçiş – Kekik, Sedir, Geven",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 580, nektarBitis: 920 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Sedir",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "kozan": {
    flora: "Çukurova-Toros Geçiş – Narenciye, Kekik, Çam",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 550, nektarBitis: 900 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 85, tur: "nektar", gddMin: 200, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Kekik / Akasya",     verim: 80, tur: "nektar", gddMin: 400, gddMax: 600 },
      { ay: "Haziran", bitki: "Çam / Geven",        verim: 75, tur: "nektar", gddMin: 550, gddMax: 800 }
    ]
  },
  "imamoğlu": {
    flora: "Çukurova Geçiş – Narenciye, Ayçiçeği, Pamuk",
    baseTemp: 12,
    gdd: { ciceklenmeBaslangic: 250, nektarZirve: 540, nektarBitis: 900 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",          verim: 90, tur: "nektar", gddMin: 180, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Ayçiçeği / Akasya",  verim: 85, tur: "nektar", gddMin: 400, gddMax: 600 }
    ]
  },
  "uludağ": {
    flora: "Uludağ Yayla – Endemik, Kekik, Çiçek, Kestane",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla Başlangıç",    verim: 85, tur: "nektar", gddMin: 400, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Endemik / Kekik",    verim: 95, tur: "nektar", gddMin: 620, gddMax: 920 }
    ]
  },
  "inegöl": {
    flora: "Marmara-İç Geçiş – Kestane, Ihlamur, Kekik",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 860 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 410, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik",              verim: 80, tur: "nektar", gddMin: 600, gddMax: 870 }
    ]
  },
  "mustafakemalpaşa": {
    flora: "Marmara Geçiş – Kestane, Yonca, Akasya",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 540, nektarBitis: 840 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 80, tur: "polen",  gddMin: 220, gddMax: 400 },
      { ay: "Haziran", bitki: "Kestane / Yonca",    verim: 90, tur: "nektar", gddMin: 400, gddMax: 640 }
    ]
  },
  "dursunbey": {
    flora: "Marmara-Ege Geçiş – Kestane, Çam, Kekik",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 890 },
    timeline: [
      { ay: "Haziran", bitki: "Kestane / Kekik",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Çam / Geven",        verim: 80, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "sındırgı": {
    flora: "Marmara-Ege Geçiş – Kekik, Çam, Kestane",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 890 },
    timeline: [
      { ay: "Haziran", bitki: "Kekik / Kestane",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Çam Salgısı",        verim: 80, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "edremit": {
    flora: "Kazdağı Geçiş – Kestane, Kekik, Çam, Defne",
    baseTemp: 10,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 880 },
    timeline: [
      { ay: "Mayıs",   bitki: "Defne / Akasya",     verim: 80, tur: "nektar", gddMin: 230, gddMax: 420 },
      { ay: "Haziran", bitki: "Kestane / Kekik",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 670 },
      { ay: "Ağustos", bitki: "Çam Salgısı",        verim: 85, tur: "nektar", gddMin: 750, gddMax: 1050 }
    ]
  },
  "ayvacık": {
    flora: "Kazdağı – Kekik, Çam, Zeytin",
    baseTemp: 11,
    gdd: { ciceklenmeBaslangic: 270, nektarZirve: 540, nektarBitis: 880 },
    timeline: [
      { ay: "Mayıs",   bitki: "Kekik / Zeytin",     verim: 85, tur: "nektar", gddMin: 230, gddMax: 430 },
      { ay: "Haziran", bitki: "Kekik / Çam",        verim: 90, tur: "nektar", gddMin: 430, gddMax: 680 }
    ]
  },
  "boyabat": {
    flora: "Karadeniz-İç Geçiş – Kestane, Kekik, Yonca",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 860 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Fındık",    verim: 75, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Kestane / Yonca",    verim: 90, tur: "nektar", gddMin: 410, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Kekik",              verim: 80, tur: "nektar", gddMin: 600, gddMax: 870 }
    ]
  },
  "tosya": {
    flora: "Karadeniz-İç Geçiş – Pirinç, Kekik, Yonca",
    baseTemp: 9,
    gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 860 },
    timeline: [
      { ay: "Mayıs",   bitki: "Akasya / Meyve",     verim: 75, tur: "polen",  gddMin: 230, gddMax: 410 },
      { ay: "Haziran", bitki: "Yonca / Kekik",      verim: 85, tur: "nektar", gddMin: 410, gddMax: 650 }
    ]
  },
  "ilgaz": {
    flora: "Karadeniz-İç Yüksek Geçiş – Yayla, Kekik, Geven",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 940 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Kekik",      verim: 90, tur: "nektar", gddMin: 450, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 90, tur: "nektar", gddMin: 680, gddMax: 950 }
    ]
  },
  "gerede": {
    flora: "Karadeniz-İç Geçiş – Kestane, Yayla, Kekik",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 300, nektarZirve: 570, nektarBitis: 900 },
    timeline: [
      { ay: "Haziran", bitki: "Kestane / Yayla",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Kekik / Geven",      verim: 85, tur: "nektar", gddMin: 650, gddMax: 920 }
    ]
  },
  "mudurnu": {
    flora: "Karadeniz-İç Geçiş – Kestane, Ihlamur, Yayla",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 290, nektarZirve: 560, nektarBitis: 890 },
    timeline: [
      { ay: "Haziran", bitki: "Kestane / Ihlamur",  verim: 90, tur: "nektar", gddMin: 410, gddMax: 660 },
      { ay: "Temmuz",  bitki: "Yayla / Kekik",      verim: 85, tur: "nektar", gddMin: 630, gddMax: 900 }
    ]
  },
  "anzer": {
    flora: "Anzer Yaylası – 400+ Endemik Çiçek",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 350, nektarZirve: 650, nektarBitis: 1000 },
    timeline: [
      { ay: "Temmuz",  bitki: "Anzer Florası",      verim: 99, tur: "nektar", gddMin: 650, gddMax: 950 },
      { ay: "Ağustos", bitki: "Yayla Devam",        verim: 90, tur: "nektar", gddMin: 900, gddMax: 1200 }
    ]
  },
  "pervari": {
    flora: "Pervari Yayla – Geven, Kekik, Çiçek",
    baseTemp: 8,
    gdd: { ciceklenmeBaslangic: 310, nektarZirve: 600, nektarBitis: 960 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla / Geven",      verim: 95, tur: "nektar", gddMin: 450, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Pervari Zirve",      verim: 98, tur: "nektar", gddMin: 700, gddMax: 980 }
    ]
  },
  "çatak": {
    flora: "Van Geçiş – Yayla, Geven, Endemik",
    baseTemp: 6,
    gdd: { ciceklenmeBaslangic: 340, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 85, tur: "nektar", gddMin: 420, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 650, gddMax: 950 }
    ]
  },
  "başkale": {
    flora: "Van Yüksek – Yayla, Geven",
    baseTemp: 5,
    gdd: { ciceklenmeBaslangic: 360, nektarZirve: 670, nektarBitis: 1020 },
    timeline: [
      { ay: "Temmuz",  bitki: "Yayla / Geven",      verim: 95, tur: "nektar", gddMin: 680, gddMax: 980 },
      { ay: "Ağustos", bitki: "Endemik",            verim: 90, tur: "nektar", gddMin: 950, gddMax: 1250 }
    ]
  },
  "solhan": {
    flora: "Bingöl Geçiş – Yayla, Geven, Kekik",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 90, tur: "nektar", gddMin: 430, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Geven / Kekik",      verim: 95, tur: "nektar", gddMin: 660, gddMax: 960 }
    ]
  },
  "genç": {
    flora: "Bingöl Geçiş – Yayla, Geven",
    baseTemp: 7,
    gdd: { ciceklenmeBaslangic: 320, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Haziran", bitki: "Yayla",              verim: 90, tur: "nektar", gddMin: 430, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Geven",              verim: 95, tur: "nektar", gddMin: 660, gddMax: 960 }
    ]
  },

  // ====================== BİTKİ SPESİFİK GDD (TAM) ======================
  "bitki_gdd": {
    "akasya":      { baseTemp: 10, ciceklenme: 420, zirve: 580, bitis: 750 },
    "kestane":     { baseTemp: 8,  ciceklenme: 480, zirve: 650, bitis: 850 },
    "ayçiçeği":    { baseTemp: 10, ciceklenme: 550, zirve: 720, bitis: 950 },
    "kekik":       { baseTemp: 9,  ciceklenme: 380, zirve: 560, bitis: 780 },
    "adaçayı":     { baseTemp: 9,  ciceklenme: 400, zirve: 580, bitis: 800 },
    "çam_salgısı": { baseTemp: 10, ciceklenme: 700, zirve: 950, bitis: 1250 },
    "ihlamur":     { baseTemp: 8,  ciceklenme: 450, zirve: 600, bitis: 780 },
    "narenciye":   { baseTemp: 12, ciceklenme: 280, zirve: 420, bitis: 600 },
    "geven":       { baseTemp: 8,  ciceklenme: 450, zirve: 650, bitis: 900 },
    "yonca":       { baseTemp: 9,  ciceklenme: 400, zirve: 550, bitis: 750 },
    "hayıt":       { baseTemp: 11, ciceklenme: 350, zirve: 500, bitis: 700 },
    "püren":       { baseTemp: 10, ciceklenme: 500, zirve: 700, bitis: 950 },
    "fındık":      { baseTemp: 8,  ciceklenme: 300, zirve: 450, bitis: 600 },
    "sedir":       { baseTemp: 9,  ciceklenme: 480, zirve: 650, bitis: 900 },
    "pamuk":       { baseTemp: 12, ciceklenme: 600, zirve: 800, bitis: 1050 },
    "üçgül":       { baseTemp: 9,  ciceklenme: 380, zirve: 520, bitis: 720 },
    "korunga":     { baseTemp: 8,  ciceklenme: 400, zirve: 550, bitis: 750 },
    "ballıbaba":   { baseTemp: 9,  ciceklenme: 420, zirve: 580, bitis: 780 },
    "lavanta":     { baseTemp: 10, ciceklenme: 450, zirve: 620, bitis: 850 },
    "hardal":      { baseTemp: 8,  ciceklenme: 300, zirve: 420, bitis: 580 },
    "kenger":      { baseTemp: 9,  ciceklenme: 480, zirve: 650, bitis: 880 },
    "çiriş":       { baseTemp: 8,  ciceklenme: 350, zirve: 500, bitis: 700 },
    "nane":        { baseTemp: 10, ciceklenme: 450, zirve: 600, bitis: 800 },
    "defne":       { baseTemp: 11, ciceklenme: 320, zirve: 450, bitis: 620 },
    "erguvan":     { baseTemp: 10, ciceklenme: 280, zirve: 400, bitis: 550 },
    "meşe":        { baseTemp: 9,  ciceklenme: 350, zirve: 500, bitis: 700 },
    "söğüt":       { baseTemp: 8,  ciceklenme: 250, zirve: 380, bitis: 520 },
    "badem":       { baseTemp: 10, ciceklenme: 220, zirve: 350, bitis: 500 },
    "kayısı":      { baseTemp: 10, ciceklenme: 240, zirve: 370, bitis: 520 },
    "elma":        { baseTemp: 9,  ciceklenme: 300, zirve: 450, bitis: 620 },
    "kiraz":       { baseTemp: 9,  ciceklenme: 280, zirve: 420, bitis: 580 },
    "zeytin":      { baseTemp: 12, ciceklenme: 400, zirve: 550, bitis: 750 },
    "okaliptüs":   { baseTemp: 12, ciceklenme: 500, zirve: 700, bitis: 1000 },
    "fiğ":         { baseTemp: 8,  ciceklenme: 350, zirve: 480, bitis: 650 },
    "taş_yoncası": { baseTemp: 9,  ciceklenme: 420, zirve: 580, bitis: 780 },
    "sığırdili":   { baseTemp: 9,  ciceklenme: 400, zirve: 550, bitis: 750 },
    "devedikeni":  { baseTemp: 10, ciceklenme: 500, zirve: 680, bitis: 900 },
    "karahindiba": { baseTemp: 8,  ciceklenme: 280, zirve: 400, bitis: 550 }
  },

  // ====================== VARSAYILAN ======================
  "varsayılan": {
    flora: "Çeşitli Yayla & Tarım Çiçekleri",
    baseTemp: 10,
    gdd: {
      ciceklenmeBaslangic: 300,
      nektarZirve: 550,
      nektarBitis: 850
    },
    timeline: [
      { ay: "Mayıs",   bitki: "Bahar Çiçekleri",     verim: 70, tur: "polen",  gddMin: 250, gddMax: 420 },
      { ay: "Haziran", bitki: "Ana Akım Florası",    verim: 90, tur: "nektar", gddMin: 420, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Otsu",     verim: 80, tur: "nektar", gddMin: 600, gddMax: 850 },
      { ay: "Ağustos", bitki: "Yaz Sonu Kuraklığı",  verim: 35, tur: "kıtlık", gddMin: 800, gddMax: 1100 }
    ]
  }
};
