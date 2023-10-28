import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(LocalStorageBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          aboutUs: "About us",
          lullabiesMuseum: "Lullaby museum",
          traditionalLullabies: "Traditional lullabies",
          singingTogether: "Singing together",
          animatedLullabies: "Animated lullabies",
          personalCabinet: "Personal account",
          search: "Search",
          heroText:
            "Dive into the wonderful world of Ukrainian lullaby. Here, in every note, the soul of the nation comes to life. Each word engraves genetic bounds with ancients. Discover the unique lullabies world, where melodious words of love and tenderness, encoded for a blessed future, flow from generation to generation.",
          listen: "Listen",
          donate: "Donate",
          popularLullabies: "Popular lullabies",
          achievements: "Our achievements",
          lullabies: "lullabies",
          locations: "locations",
          performers: "performers",
          helpWith: "Help with project development:",
          donateHere: "You can donate here:",
          selection: "Lullabies selection",
          ukrainianLullabies: "Ukrainian Lullabies",
          lullabySong:
            "Lullaby song is the first poetic connection between mother and child. It is a tight genetic chain that unites a lot of generations. Child’s national consciousness, their language and worldview, arises from a lullaby.",
          listenToEntireSelection: "Listen to the entire selection",
          theGameUkrainianLullabies: "The game 'Ukrainian lullabies'",
          playEducationalGameWithChatbot:
            "Let's play an educational game with a chatbot - learn more about Ukrainian lullabies.",
          youCanGuessWhichRegion:
            "You can guess which region a lullaby comes from by the rhyme or dialect.",
          youCanLearnAboutThePlots:
            "You can learn about the plots and characters of the lullabies.",
          letsPlay: "Let's play! Come to the game!",
          play: "Play",
          letsPlayQuestion: "Let’s play?",
          termsAndConditions: "Terms and conditions",
          privacy: "Privacy",
          poRegulations: "PO regulations",
          address: "Address:",
          UkraineKyiv: "Ukraine, Kyiv",
          telephone: "Telephone",
          followUsHere: "Follow us here",
          developedBy:
            "Developed by Baza Trainee Ukraine 2023 © All rights reserved",
          projectPurpose: "The purpose of our project",
          projectDescription:
            "The purpose of our project - creating a media platform, where you can meet with lullabies from all Ukrainian regions (Ukrainians and national minorities), learn the songs in order to sing them to your child, or create your own playlist with lullabies for playing it.",
          projectDescription2:
            "For the implementation of the “Ukrainian Lullabies” project, scientists from the Research Laboratory of Ethnomusicology of the National Academy of Music of Ukraine and IT volunteers joined together and presented the project in Hatathon 4.0: Ukraine Heritage Edition, where it became one of the best in the field of preservation of intangible cultural heritage, created the public organization “Lullaby museum”, and are working together on creating a media resource with lullabies songs for mothers and children, for families in Ukraine and abroad.",
          supportUs: "You can support us",
          supportDescription:
            "You can support the development of the “Ukrainian Lullabies” project and stay up to date with the latest news, get nice bonuses by subscribing to the project on Patreon or Buy me a Coffee.",
          supportDescription2:
            "The donations will be used to replenish the collection of lullabies and support the platform's operations: to pay for a server on AWS to save unique records of Ukrainian authenticity, to pay for hosting for the platform, to provide scientific and technical support, legal support for the “Ukrainian Lullabies” project, and for new expeditions and records!",
          supportDescription3:
            "Sincerely, the team of the “Ukrainian Lullabies” project.",
          ourPartners: "Our partners",
          feedbackForm: "Feedback form",
          contactUs:
            "If you have any questions/suggestions/wishes - we are waiting for your messages.",
          name: "Name",
          taras: "Taras",
          messageSubject: "Message subject",
          enterSubject: "Enter the subject of your message",
          messageText: "Message text",
          enterTextMessage: "Enter the text of the message",
          sendMessage: "Send a message",
          popUpThank: "Thank you,",
          popupText: "your message has been sent!",
          underTextArea:
            "Please enter the text of the message. The maximum number of characters is 600.",
          share: "Share",
          shareLink: "The link has been copied",
          searchUnavailable: "Search is temporarily unavailable",
          chatBot: "Chat-bot",
          cookies:
            'By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.',
          acceptAllCookies: "Accept All Cookies",
          cookieSettings: "Cookie Settings",
          toTheMain: "To the main page",
          technikalWorsk:
            "We are currently working on improving the functionality of the site. ",
          technikalWorsk2: "We apologize for any inconvenience.",
          lyrics: "Lyrics",
          collection: "Museum collection",
          alertText:
            "We are working on updating the site and soon you will be able to listen to lullabies from the selected region using the map.",
          footerText1:
            "2023 © NGO “LULLABY MUSEUM” operates with the aims to preserve and promote the intangible cultural heritage of Ukraine. While providing content, we do not grant rights to its use, except for reading, listening, and studying, and we do not transfer any proprietary rights of the owners.",
          footerText2:
            " All rights to the materials used are protected in accordance with the current legislation of Ukraine and applicable international agreements and cannot be used without the consent of NGO “LULLABY MUSEUM”.",
          footerText3:
            "For more details, please refer to our “Terms and Conditions”.",
          schema: {
            nameInvalidName:
              "The field must contain 1-30 characters consisting of letters, apostrophe, dash or space, not at the beginning",
            nameNotAllowedMessage:
              "The field must contain 1-30 characters consisting of letters, apostrophe, dash or space, not at the beginning",
            nameMinLengthMessage:
              "The field must contain 1-30 characters consisting of letters, apostrophe, dash or space, not at the beginning",
            nameMaxLengthMessage:
              "The field must contain 1-30 characters consisting of letters, apostrophe, dash or space, not at the beginning",
            requiredMessage: "This field is mandatory",
            emailNotAllowedMessage: "Please enter a valid Email",
            emailMinLengthMessage: "Please enter a valid Email",
            emailMaxLengthMessage: "Please enter a valid Email",
            themeNotAllowedMessage:
              "Field contains illegal characters or a space at the beginning",
            themeMinLengthMessage:
              "The number of characters must be at least 6",
            themeMaxLengthMessage:
              "The number of characters should not exceed 100",
            messageNotAllowedMessage:
              "Field contains illegal characters or a space at the beginning",
            messageMaxLengthMessage:
              "The number of characters should not exceed 600",
          },
        },
      },
      ua: {
        translations: {
          alertText:
            "Ми працюємо над поліпшенням сайту і невдовзі Ви зможете за допомогою карти прослухати колискові з обраного регіону.",
          collection: "Колекція музею",
          lyrics: "Текст",
          chatBot: "Чат-бот",
          toTheMain: "На головну",
          technikalWorsk:
            "Наразі ми працюємо над поліпшенням функціоналу сайту. ",
          technikalWorsk2: "Просимо вибачення за тимчасові незручності.",
          cookieSettings: "Налаштування cookie",
          acceptAllCookies: " Прийняти всі cookies",
          cookies:
            "Натискаючи «Прийняти всі файли cookie», ви погоджуєтеся на збереження файлів cookie на вашому пристрої для покращення навігації сайтом, аналізу використання сайту та допомоги в наших маркетингових зусиллях.",
          shareLink: "Посилання скопійовано",
          searchUnavailable: "Пошук тимчасово недоступний",
          share: "Поділитись",
          aboutUs: "Про нас",
          lullabiesMuseum: "Музей колискової",
          traditionalLullabies: "Традиційні колискові",
          singingTogether: "Співаємо разом",
          animatedLullabies: "Колискові в анімаціях",
          personalCabinet: "Особистий кабінет",
          search: "Пошук",
          heroText:
            "Поринь у чарівний світ української колискової. Тут у кожній ноті оживає душа народу, у кожному слові закарбовано генетичний зв’язок з родом. Відкрий для себе неповторний колисковий світ, де від покоління до покоління линуть мелодійні слова любові та ніжності, закодовані на щасливу долю дитини.",
          listen: "Послухати",
          donate: "Задонатити",
          popularLullabies: "Популярні колискові",
          achievements: "Наші напрацювання",
          lullabies: "Колискових",
          locations: "Локацій",
          performers: "Виконавців",
          helpWith: "Допоможіть розвитку проєкту:",
          donateHere: "Задонатити можна тут:",
          selection: "Підбірка колискових",
          ukrainianLullabies: "Українські колискові",
          lullabySong:
            "Колискова пісня – це перший поетичний зв’язок матері з дитиною, той міцний генетичний ланцюжок, який єднає між собою багато поколінь. З колискової зароджується національна свідомість дитини, її мова та світогляд.",
          listenToEntireSelection: "Слухати всю підбірку",
          theGameUkrainianLullabies: "Гра 'Українські колискові'",
          playEducationalGameWithChatbot:
            "Пограйте в пізнавальну гру з чат-ботом - дізнавайтесь більше про рідне.",
          youCanGuessWhichRegion:
            "Ви можете вгадати за наспівом або діалектом, з якого регіону походить колискова пісня.",
          youCanLearnAboutThePlots:
            "Ви можете дізнатися про сюжети та персонажів колискових.",
          letsPlay: "Нумо грати! Мерщій до гри!",
          play: "Грати",
          letsPlayQuestion: "Зіграємо?",
          termsAndConditions: "Правила та умови",
          privacy: "Конфіденційність",
          poRegulations: "Звітність ГО",
          address: "Адреса:",
          UkraineKyiv: "Україна, Київ",
          telephone: "Телефон",
          followUsHere: "Слідкуй за нами тут",
          developedBy:
            "Розробка Baza Trainee Ukraine 2023 © Всі права захищені",
          projectPurpose: "Мета нашого проєкту",
          projectDescription:
            "Мета нашого проєкту - створення медіаплатформи, на якій Ви зможете ознайомитися з колисковими піснями з усіх регіонів України (українців та національних меншин), вивчити пісні, щоб співати своїй дитині або створити власний play-лист з колисковими, щоб програвати його.",
          projectDescription2:
            "Для реалізації проєкту “Українські колискові”  науковці з Науково-дослідної лабораторії етномузикології Національної музичної академії України та IT-волонтери з платформи “Baza Trainee Ukraine” об'єднались в команду і представили проєкт на Hatathon 4.0: Ukraine Heritage Edition, де він став одним з найкращих в галузі збереження нематеріальної культурної спадщини, створили громадську організацію “Музей колискової” та разом працюють над створенням медіаресурсу з колисковими піснями для мам і дітей, для родин в Україні і за кордоном.",
          supportUs: "Ви можете підтримати нас",
          supportDescription:
            "Ви можете підтримати розвиток проєкту “Українські колискові” і бути в курсі перших новин, отримати приємні бонуси, оформивши підписку на проєкт на Patreon або Buy me a Coffee.",
          supportDescription2:
            " Донати підуть на поповнення колекції колискових та забезпечення діяльності платформи: на оплату сервера на AWS для збереження унікальних записів української автентики, на оплату хостингу для платформи, на забезпечення наукового та технічного супроводу, юридичної підтримки проєкту і – на нові експедиції та записи!",
          supportDescription3:
            " З повагою, команда проєкту “Українські колискові”.",
          ourPartners: "Наші партнери",
          feedbackForm: "Форма зворотного звʼязку",
          contactUs:
            "Якщо у Вас є питання/пропозиції/побажання - чекаємо Ваших повідомлень.",
          name: "Імʼя",
          taras: "Tарас",
          messageSubject: "Тема повідомлення",
          enterSubject: "Введіть тему повідомлення",
          messageText: "Текст повідомлення",
          enterTextMessage: "Введіть текст повідомлення",
          sendMessage: "Надіслати повідомлення",
          popUpThank: "Дякуємо,",
          popupText: "Ваше повідомлення надіслано!",
          underTextArea:
            "Введіть, будь ласка, текст повідомлення. Максимальна кількість символів 600.",
          footerText1:
            " 2023 © ГО “МУЗЕЙ КОЛИСКОВОЇ” веде діяльність, метою якої є збереження та популяризація нематеріальної культурної спадщини України. Надаючи контент, ми не надаємо прав на його використання, окрім ознайомлення, прослуховування та вивчення, не передаємо будь-яких майнових прав власників.",
          footerText2:
            " Усі права на використані матеріали охороняються у відповідності до чинного законодавства України та діючих міжнародних угод і не можуть бути використані без узгодження з ГО “МУЗЕЙ КОЛИСКОВОЇ”.",
          footerText3: "Детальніше в “Правилах та умовах”.",
          schema: {
            nameInvalidName:
              "Поле має містити 1-30 символів із літер, апострофу, тире або пробілу, не на початку",
            nameNotAllowedMessage:
              "Поле має містити 1-30 символів із літер, апострофу, тире або пробілу, не на початку",
            nameMinLengthMessage:
              "Поле має містити 1-30 символів із літер, апострофу, тире або пробілу, не на початку",
            nameMaxLengthMessage:
              "Поле має містити 1-30 символів із літер, апострофу, тире або пробілу, не на початку",
            requiredMessage: "Це поле обов'язкове для заповнення",
            emailNotAllowedMessage: "Введіть, будь ласка, коректний Email",
            emailMinLengthMessage: "Введіть, будь ласка, коректний Email",
            emailMaxLengthMessage: "Введіть, будь ласка, коректний Email",
            themeNotAllowedMessage:
              "Поле містить заборонені символи або пробіл на початку",
            themeMinLengthMessage: "Кількість символів має бути не менше 6",
            themeMaxLengthMessage: "Кількість символів має бути не більше 100",
            messageNotAllowedMessage:
              "Поле містить заборонені символи або пробіл на початку",
            messageMaxLengthMessage:
              "Кількість символів має бути не більше 600",
          },
        },
      },
    },

    lng: "ua",
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      prefix: "appLanguage",
    },
  });

i18n.on("languageChanged", (lng) => {
  if (lng) {
    localStorage.setItem("selectedLanguage", lng);
  }
});

const savedLanguage = localStorage.getItem("selectedLanguage");
i18n.changeLanguage(savedLanguage || "en");

export default i18n;
