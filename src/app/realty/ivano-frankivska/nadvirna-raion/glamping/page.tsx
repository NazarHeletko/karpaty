import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Глемпінги у Надвірнянському районі – комфортний відпочинок серед природи Карпат | Мої Карпати",
  description:
    "Глемпінги у Надвірнянському районі – ідеальне поєднання комфорту та природи. Затишні намети з сучасними зручностями, неймовірні краєвиди Карпат і безліч можливостей для активного відпочинку забезпечать вам незабутній досвід перебування на свіжому повітрі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Надвірнянському районі" },
          { raion: "/nadvirna-raion", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Надвірнянському районі" },
          { raion: "/nadvirna-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
        Кожен глемпінг оснащений елегантними наметами, які забезпечують затишок
        і комфорт. М'які ліжка, зручні меблі та можливість насолоджуватися
        свіжим повітрям на терасі роблять ваше перебування незабутнім. Цей
        варіант відпочинку підходить для всіх: від романтичних пар до сімей із
        дітьми. Надвірнянський район славиться своєю вражаючою природою та
        різноманітними активностями. Тут ви можете відправитися на захоплюючі
        прогулянки гірськими стежками, зайнятися велоспортом або відвідати
        місцеві культурні пам'ятки. Літо запрошує на екскурсії до водоспадів та
        природних заповідників, а взимку глемпінги стають ідеальною базою для
        лижників. Глемпінги у Надвірнянському районі – це не просто місце для
        ночівлі, а цілий стиль життя, що дарує відчуття свободи та єднання з
        природою. Виберіть цей формат відпочинку, і ви відкриєте для себе нові
        горизонти релаксації і пригод у серці Карпат.
      </p>
    </RealtyPage>
  );
}
