# Kelimelik Yardımcı — kurulum

Dosyayı çift tıklayıp açmak yerine statik olarak yayınla. `file://` protokolünde
Chrome kaydı silebiliyor ve sayfa bazen hiç açılmıyor.

## GitHub Pages (ücretsiz, ~3 dakika)

1. github.com'da yeni bir repo aç (public), adı ne olursa olsun.
2. "Add file → Upload files" ile bu klasördeki 5 dosyayı yükle:
   index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png
3. Settings → Pages → Source: "Deploy from a branch", Branch: main / (root) → Save.
4. 1-2 dakika sonra adres hazır: https://<kullanici>.github.io/<repo>/
5. Telefonda Chrome ile bu adresi aç → menü (⋮) → "Ana ekrana ekle".

Artık normal bir uygulama gibi açılır, çevrimdışı çalışır, kayıtlar kalıcıdır.

## Güncelleme

index.html'i değiştirdiğinde sw.js içindeki `CACHE="kelimelik-v1"` satırını
`kelimelik-v2` yap, yoksa eski sürüm önbellekten gelmeye devam eder.

## Alternatifler

- Netlify Drop (app.netlify.com/drop): klasörü sürükle bırak, anında https adres.
- Cloudflare Pages, Vercel: aynı şekilde statik klasör yüklenir.
