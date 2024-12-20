import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Глемпінги в Хустському районі: Відпочинок серед природи Карпат | Мої Карпати",
  description:
    "Відкрийте для себе глемпінги в Хустському районі, де комфорт поєднується з природою Карпат. Проведіть незабутні миті в унікальних наметах, насолоджуючись свіжим повітрям, прекрасними краєвидами та можливістю активного відпочинку. Ідеальне місце для любителів природи та затишку, де кожен момент наповнений гармонією та спокоєм.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Хустському районі" },
          { raion: "/khust-raion", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Хустському районі" },
          { raion: "/khust-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Закарпатській області" },
          { oblast: "/zakarpatska" },
        ]}
        forthFilter={[]}
        fifthFilter={[{ title: "Все житло в Карпатах" }, { place: "all" }]}
      />
      <p
        style={{
          color: "#2e2e2e",
          textAlign: "justify",
          fontSize: "14px",
          fontWeight: "300",
          lineHeight: "21px",
        }}
      >
        Глемпінги в Хустському районі — це ваш квиток у світ незабутнього
        відпочинку. Цей район, відомий своїми захоплюючими пейзажами, чистими
        водами та свіжим повітрям, є ідеальним місцем для глемпінгу, де природа
        зустрічається з комфортом. Глемпінг — це не просто намет. Це унікальний
        досвід, який поєднує в собі елементи кемпінгу і готельного сервісу. Ви
        зможете зупинитися в затишному наметі, обладнаному всім необхідним для
        комфортного проживання, відчути дотик природи і при цьому
        насолоджуватися зручностями, які пропонують сучасні глемпінги. Хустський
        район запрошує вас до активного способу життя. Тут ви знайдете безліч
        маршрутів для пішохідних прогулянок, велотуризму, а також можливість
        займатися риболовлею або відвідати природні пам’ятки. Витрачайте час на
        свіжому повітрі, досліджуючи унікальні місця, які цей регіон може
        запропонувати. Глемпінги розташовані в гармонії з навколишнім
        середовищем. Це не лише можливість насолодитися природою, але й привід
        задуматися про екологічність. Ви зможете поринути у світ дикої природи,
        почувши звуки лісу та відчувши свіжість повітря, що наповнить вас
        енергією. Глемпінги в Хустському районі — це більше, ніж просто місце
        для ночівлі; це унікальний досвід, який поєднує комфорт, активний
        відпочинок та красу природи. Незалежно від того, чи плануєте ви
        відпочинок наодинці, чи в компанії близьких, глемпінг стане вашим
        ідеальним прихистком. Відкрийте для себе чарівність Карпат і створіть
        незабутні спогади, які залишаться з вами на все життя.
      </p>
    </RealtyPage>
  );
}
