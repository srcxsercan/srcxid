# SRCXID

## Genel Bakış

SRCXID, banka ve ödeme sistemleri için Express.js tabanlı bir API sunar ve ayrıca TypeScript ile yazılmış bir sistem modülü içerir.

## Klasör Yapısı
```
SRCXID/
├── src/                # Express.js API dosyaları
│   ├── index.js        # Ana sunucu dosyası
│   ├── plaid.js        # Plaid API entegrasyonu
│   ├── paypal.js       # PayPal API entegrasyonu
│   └── straddle.js     # Straddle API entegrasyonu
├── system-project/     # TypeScript ile yazılmış sistem modülü
│   ├── src/
│   │   ├── main.ts     # TypeScript giriş noktası
│   │   ├── system.ts   # initializeSystem fonksiyonu
│   │   └── types/
│   │       └── index.ts# Tip tanımları
│   ├── package.json    # Sistem modülü bağımlılıkları
│   └── tsconfig.json   # TypeScript yapılandırması
├── .env                # Ortam değişkenleri
└── .github/
	└── copilot-instructions.md # AI için özel talimatlar
```

## Kurulum
```bash
npm install
```

## Express API Kullanımı
```bash
node src/index.js
```
- `/plaid/info`, `/paypal/info`, `/straddle/info` endpointleri ortam değişkenlerini döner.
- `/info` endpointi sunucu durumu ve (varsa) EC2 instance id bilgisini döner.

## TypeScript Sistem Modülü
```bash
cd system-project
npm install
npm run build
npm start
```

## Ortam Değişkenleri
`.env` dosyasını doldurmayı unutmayın. API anahtarları ve gizli bilgiler burada tutulur.

## Katkı
Pull request ve issue açarak katkıda bulunabilirsiniz.

## Lisans
MIT
