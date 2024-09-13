import { NextIntlClientProvider } from 'next-intl';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TranslationContextProps {
  switchLanguage: (lang: string) => void;
}

// สร้าง context สำหรับการแปลภาษา
const TranslationContext = createContext<TranslationContextProps | null>(null);

// Hook สำหรับการเรียกใช้การแปลในคอมโพเนนต์ต่างๆ
export const useTranslation = () => {
  return useContext(TranslationContext)!;
};

// Component สำหรับห่อหุ้มแอปพลิเคชันและให้บริการการแปล
export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState<Record<string, string>>({});

  // โหลดข้อความแปลเมื่อ locale เปลี่ยนแปลง
  useEffect(() => {
    // Cookie
    // const storedLocale = getCookie("NEXT_LOCALE") || "en";

    // localStorage
    const storedLocale = localStorage.getItem('lang') || 'en';
    setLocale(storedLocale);

    // โหลดข้อความแปลสำหรับ locale ปัจจุบัน
    import(`../locales/${storedLocale}.json`).then((module) => {
      setMessages(module.default);
    });
  }, [locale]);

  // ฟังก์ชันสำหรับสลับภาษา
  const switchLanguage = (newLocale: string) => {
    localStorage.setItem('lang', newLocale);
    setLocale(newLocale); // เปลี่ยน locale ทันที
  };

  return (
    <TranslationContext.Provider value={{ switchLanguage }}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </TranslationContext.Provider>
  );
};
