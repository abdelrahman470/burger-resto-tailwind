/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js"],
  theme: {
    container: {
      center: true, // يخلي النص في النص
      padding: {
        DEFAULT: '1rem', // padding افتراضي
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // أقصى عرض للشاشة الكبيرة
        xl: '1024px', // نفس الحجم للشاشات الأكبر
        "2xl": "1024px",
      },
    },
    extend: {
      screens: {
        'aboutScreen': '673px', // هنا تعريف الـ breakpoint الجديد
      },
      colors: {
        primaryColor: '#2C2B2B',        // لون داكن هادي للـbackground الرئيسي (قريب من الأسود ولكن أقل حدة)
        primaryColorLight: '#3C3A3A',   // لون داكن فاتح شوية للتأثيرات أو hover
        secondaryColor: '#E1A600',      // أصفر ذهبي دافي للـbuttons أو عناصر تجذب الانتباه
        paragraphColor: '#D1D1D1',      // رمادي فاتح للكتابة
        whiteColor: '#FFFFFF',           // أبيض للنصوص أو خلفيات صغيرة
        blackColor: '#1A1A1A',           // أسود للـtext أو borders
        greenColor: '#4CAF50',           // أخضر معتدل لمؤشرات النجاح أو highlights صغيرة
        redColor: '#E53935',             // أحمر للـalerts أو highlights مهمة
        darkColor: '#1F1F1F',            // داكن عام للخلفيات أو أقسام معينة
        darkColorLight: '#353535',
        redColor: '#f90000',
        promoColor: '#1a1007',
      },
      keyframes:{
        move:{
          "0% , 100%": {transform: 'translateY(-1rem)'},
          "50%": {transform: 'translateY(1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
  },
  plugins: [],
};
