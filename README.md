# GameApplicationSecond

🌍 **Dil / Language:** [Türkçe](#-proje-amacı) | [English](#-project-purpose)

---

## 🎯 Proje Amacı
GameApplicationSecond, React Native ve modern Expo ekosistemi kullanılarak geliştirilmiş etkileşimli bir mobil oyun uygulamasıdır. Proje; akıcı animasyonlar, özel gradyan tasarımları ve optimize edilmiş arayüz elemanlarıyla kullanıcılara responsive ve keyifli bir mobil oyun deneyimi sunmayı hedefler.

Yazılım mimarisi olarak bileşen tabanlı (component-based) bir yaklaşım benimsenmiş; kullanıcı arayüzü (`ui`) ile oyun mantığı (`game`) bileşenleri birbirinden bağımsız modüller halinde tasarlanmıştır. Bu yapı, hem kodun sürdürülebilirliğini ve test edilebilirliğini artırmakta hem de Android, iOS ve Web platformlarında tutarlı bir performans sağlamaktadır.

## 🛠️ Kullanılan Teknolojiler
* **React Native (v0.79.5)** - Çapraz platform yerel mobil uygulama çatısı
* **React (v19.0.0)** - Kullanıcı arayüzü kütüphanesi
* **Expo (~53.0.20)** - Hızlı geliştirme, yapılandırma ve dağıtım ekosistemi
* **Expo Linear Gradient** - Görsel arka plan gradyan efektleri
* **Expo Font** - Özel yazı tipi (custom font) entegrasyonu ve tipografi yönetimi
* **React Native Web** - Web platformu uyumluluğu ve Metro Runtime desteği

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

1. **Depoyu Klonlayın:**
   ```bash
   git clone https://github.com/Merenylmz/GameApplicationSecond.git
   cd GameApplicationSecond
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Uygulamayı Başlatın:**
   ```bash
   npx expo start
   ```

4. **Platform Seçenekleri:**
   * Android emülatöründe çalıştırmak için terminalde `a` tuşuna basın veya:
     ```bash
     npm run android
     ```
   * iOS simülatöründe çalıştırmak için terminalde `i` tuşuna basın veya:
     ```bash
     npm run ios
     ```
   * Web tarayıcısında çalıştırmak için terminalde `w` tuşuna basın veya:
     ```bash
     npm run web
     ```

## 📌 Ek Bilgiler ve Özellikler
* **Modüler Dizin Yapısı:** `components/game` ve `components/ui` ayrımı sayesinde yeniden kullanılabilir atomik tasarım desenleri.
* **Ekran Yönetimi:** `screens/` dizini altında organize edilmiş farklı oyun aşamaları (başlangıç, aktif oyun, oyun sonu vb.).
* **Görsel Tasarım:** `expo-linear-gradient` ve `expo-font` entegrasyonu ile zenginleştirilmiş, platformlar arası görsel tutarlılık.
* **Çapraz Platform Desteği:** Tek bir kod tabanı üzerinden iOS, Android ve Web ortamlarında çalışabilme yeteneği.

---

# GameApplicationSecond (English)

## 🎯 Project Purpose
GameApplicationSecond is an interactive mobile game application built with React Native and the Expo framework. It is designed to deliver a smooth and responsive gaming experience through custom styling, dynamic gradient themes, and optimized touch interactions.

The project employs a component-driven architecture that separates generic interface components (`ui`) from game-specific logic (`game`). This architectural decoupling ensures high maintainability, reusability, and optimal performance across Android, iOS, and Web platforms.

## 🛠️ Technologies Used
* **React Native (v0.79.5)** - Cross-platform native mobile application framework
* **React (v19.0.0)** - Core UI library
* **Expo (~53.0.20)** - Platform tooling and development workflow
* **Expo Linear Gradient** - Dynamic gradient backgrounds and visual styling
* **Expo Font** - Custom typography and font asset loading
* **React Native Web** - Universal web runtime support via Metro

## 🚀 Installation and Usage

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Merenylmz/GameApplicationSecond.git
   cd GameApplicationSecond
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Metro Bundler:**
   ```bash
   npx expo start
   ```

4. **Target Platforms:**
   * Run on Android emulator:
     ```bash
     npm run android
     ```
   * Run on iOS simulator:
     ```bash
     npm run ios
     ```
   * Run on Web browser:
     ```bash
     npm run web
     ```

## 📌 Additional Information & Features
* **Modular Structure:** Clear separation of concerns between reusable UI elements (`components/ui`) and game rules/states (`components/game`).
* **Screen State Management:** Clean screen organization under `screens/` to handle diverse views such as start screens, active gameplay, and game-over summaries.
* **Custom Assets & Styling:** Integrated typography and linear gradients offering a polished, modern aesthetic across all supported screen sizes.
* **Cross-Platform Readiness:** Out-of-the-box support for mobile platforms as well as browser environments using Expo Web.