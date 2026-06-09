import { SmartNotification } from "../types";
import { BRAND_CONFIG } from "../constants";

export function getRoleBannerAlert(
  role: string | null,
  brandName: string = "ترنم همدلی"
): { title: string; message: string; badge: string; type: "success" | "warning" | "info" | "critical" } {
  switch (role) {
    case "student":
      return {
        title: "کاهش میانگین تمرکز در تست‌های شبانه",
        message: "هوش مصنوعی متوجه افزایش پاسخ‌های شانسی بر اثر خستگی ذهنی پس از ساعت ۲۱ شده است. لطفا استراحت کایزنی را جدی بگیرید.",
        badge: "هشدار تمرکزی داوطلب",
        type: "warning"
      };
    case "parent":
      return {
        title: "نوسان چشمگیر تراز در آزمون‌های دروس عمومی فرزند",
        message: "فرزند شما در تحلیل تله‌های تستی حسابان پیشرفت چشمگیری داشته اما ادبیات و زیست شناسی نیاز به پیگیری مربی دارد.",
        badge: "پایش نظارتی والدین",
        type: "info"
      };
    case "counselor":
      return {
        title: "کاهش انگیزه و افزایش ساعت استراحت ۳ داوطلب کانون",
        message: "سیستم پایش یکپارچه متوجه کاهش ساعات مطالعه دانش‌آموزان گروه الف شده است. لطفاً مصاحبه روان‌شناختی ثبت کنید.",
        badge: "کنترل پنل مشاور ارشد",
        type: "critical"
      };
    case "teacher":
      return {
        title: "افت ۵ درصدی میانگین درصد پاسخ صحیح آزمون دیروز",
        message: "دانش‌آموزان در تحلیل معانی صریح ادبیات و قیدهای زیست با چالش جدی روبرو شده‌اند. آماده‌سازی تست مکمل پیشنهاد می‌شود.",
        badge: "ارزیابی درسی دبیران",
        type: "warning"
      };
    case "admin":
      return {
        title: "بهینه‌سازی منابع کواین داکر و لود دیتابیس بومی",
        message: "تعداد کاربران همزمان به نقطه اوج رسید ولی منابع حافظه پنهان و تخصیص تراز به صورت ۱۰۰٪ خودکار موازنه گردید.",
        badge: "مانیتورینگ هسته ابری",
        type: "success"
      };
    default:
      return {
        title: "پلتفرم ارزیابی هوشمند فعال است",
        message: "به سامانه پایش یکپارچه تراز و تحلیل تله‌های تستی خوش آمدید. کلیه ماژول‌های ابری آماده به کار هستند.",
        badge: "اعلان عمومی",
        type: "info"
      };
  }
}

export function getNotificationsForRole(role: string | null, brandName: string = BRAND_CONFIG.name): SmartNotification[] {
  switch (role) {
    case "student":
      return [
        {
          id: "st-1",
          type: "challenge",
          title: "چالش تمرکز ۵ دقیقه‌ای کنکور",
          message: `آیا مایلید تله تستی 'قیدهای زیست‌شناسی' را همین الان در وبینار ${brandName} مرور کنید؟`,
          actionLabel: "شروع چالش",
          timestamp: "۱۰ دقیقه پیش",
          read: false,
          points: 50
        },
        {
          id: "st-2",
          type: "motivation",
          title: "پیام مربی کایزن درسی",
          message: `یادتان باشد افزایش تراز پایدار در ${brandName} نتیجه اصلاح مداوم گام‌های کوچک در پاسخ به تله‌هاست.`,
          timestamp: "۳۰ دقیقه پیش",
          read: true
        },
        {
          id: "st-3",
          type: "nudge",
          title: "کایزن: تشخیص افت ریتم تست‌زنی",
          message: "برنامه هوشمند پایش نشان داد که در مباحث مشتق ریاضی و فیزیک نوسان دارید؛ بازنشانی تمرین پیشنهاد می‌شود.",
          actionLabel: "بزن بریم!",
          timestamp: "۲ ساعت پیش",
          read: false
        }
      ];
    case "parent":
      return [
        {
          id: "pa-1",
          type: "alert",
          title: "پایش رفتار آزمونی فرزند شما",
          message: "فرزندتان دیروز آزمون شبیه‌ساز مشتق را تکمیل کرد. تحلیل کایزن و تله‌های حسی او صادر گردید.",
          actionLabel: "مشاهده کارنامه",
          timestamp: "۵ دقیقه پیش",
          read: false
        },
        {
          id: "pa-2",
          type: "motivation",
          title: "رشد تراز و سرمایه‌گذاری آموزشی",
          message: "تراز فرزند شما در این ماه ۴۵۰ واحد رشد داشته است. پورتال نظارتی والدین رضایت‌بخش ارزیابی می‌کند.",
          timestamp: "۱ ساعت پیش",
          read: true
        },
        {
          id: "pa-3",
          type: "nudge",
          title: "توصیه‌نامه جدید مشاور ارشد",
          message: "مشاور تحصیلی برای بازیابی تمرکز و کاهش تنش کنکوری فرزندتان یک توصیه‌نامه رفتاری جدید ثبت کرد.",
          actionLabel: "خواندن توصیه",
          timestamp: "۱ روز پیش",
          read: false
        }
      ];
    case "counselor":
      return [
        {
          id: "co-1",
          type: "alert",
          title: "درخواست اورژانسی مشاوره",
          message: "داوطلب 'امیرحسین رضایی' سطح اضطراب بالایی (۸۵٪) در آزمون عصب‌سنجی شناختی ثبت کرده است.",
          actionLabel: "بررسی الگوها",
          timestamp: "هم‌اینک",
          read: false
        },
        {
          id: "co-2",
          type: "challenge",
          title: "ثبت توصیه‌نامه برای داوطلبان",
          message: "داوطلبان رشته علوم تجربی در تله آزمونی دیروز خستگی چشم ثبت کردند؛ توصیه کایزنی الزامی است.",
          actionLabel: "ثبت توصیه",
          timestamp: "۴۰ دقیقه پیش",
          read: false
        },
        {
          id: "co-3",
          type: "nudge",
          title: "کالیبره سلامت شناختی کلاود",
          message: "نتایج مصاحبه حضوری ۱۲ داوطلب منتظر بازرسی و ممیزی روانشناختی شماست.",
          timestamp: "۲ ساعت پیش",
          read: true
        }
      ];
    case "teacher":
      return [
        {
          id: "te-1",
          type: "alert",
          title: "تحلیل خطای همگانی کلاس",
          message: "در کوییز دیشب فیزیک، بیش از ۵۵٪ دانش‌آموزان در تله حسی گزینه ۳ افتادند! بازنگری لازم است.",
          actionLabel: "مشاهده سوالات",
          timestamp: "۱۰ دقیقه پیش",
          read: false
        },
        {
          id: "te-2",
          type: "challenge",
          title: "الصاق تست‌های جبرانی",
          message: "امکان ممیزی و الصاق تست‌های شبیه‌ساز با ضریب تراز مشخص برای داوطلبان آسیب‌دیده فراهم شد.",
          actionLabel: "ارسال تست",
          timestamp: "۱ ساعت پیش",
          read: false
        },
        {
          id: "te-3",
          type: "motivation",
          title: "تثبیت مطلوب یادگیری",
          message: "میانگین راندمان پاسخ‌گویی داوطلبان کلاس به درصد هدف ۸۷٪ توازن یافته است.",
          timestamp: "۳ ساعت پیش",
          read: true
        }
      ];
    case "admin":
      return [
        {
          id: "ad-1",
          type: "alert",
          title: "پایش زیرساخت شبکه و کلاود",
          message: `کانتینرهای وب و دیتابیس بومی ${brandName} بدون تاخیر در وضعیت ایده‌آل (لود ۱۰٪) قرار دارند.`,
          timestamp: "هم‌اینک",
          read: false
        },
        {
          id: "ad-2",
          type: "challenge",
          title: "تغییر و سفارشی‌سازی نام تجاری",
          message: "تنظیمات تغییر نام پلتفرم با موفقیت در لایه دیتای بومی اعمال شد و سیستم نوسازی گردید.",
          actionLabel: "تنظیمات برند",
          timestamp: "۱۰ دقیقه پیش",
          read: true
        },
        {
          id: "ad-3",
          type: "nudge",
          title: "ممیزی لاگ‌های سیستمی VIP",
          message: "تراکنش‌های اشتراک کایزنی و درگاه بانک با موفقیت ثبت شد و امضای دیجیتال برای آن‌ها تایید گردید.",
          timestamp: "۴ ساعت پیش",
          read: false
        }
      ];
    default:
      return [
        {
          id: "def-1",
          type: "motivation",
          title: "به سامانه خوش آمدید",
          message: `کنترل یکپارچه ارزیابی تراز و کایزن تحصیلی در بستر ابری ${brandName} فعال است.`,
          timestamp: "الان",
          read: false
        }
      ];
  }
}
