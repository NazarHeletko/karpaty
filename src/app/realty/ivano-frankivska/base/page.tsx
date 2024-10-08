import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Бази відпочинку в Карпатах: Івано-Франківська область для ідеального відпочинку",
  description:
    "Відпочинок в Івано-Франківській області – це ідеальна можливість насолодитися красою Карпат. Бази відпочинку пропонують затишок, комфорт і безліч активностей серед мальовничих гір.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={""}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку в Івано-Франківській області" },
          { oblast: "/ivano-frankivska", type: "base" },
        ]}
        secondFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
        ]}
        thirdFilter={[]}
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
        Бази відпочинку в Івано-Франківській області: ваш ідеальний відпочинок у
        серці Карпат Зануртеся в красу Івано-Франківщини, де розташовані чудові
        бази відпочинку, ідеальні для відновлення сил у живописних Карпатах. Цей
        регіон пропонує унікальну можливість втекти від щоденних турбот і
        насолодитися спокоєм серед гірських пейзажів. На базах відпочинку ви
        зможете знайти комфортні умови за доступною ціною, що особливо вигідно
        для великих компаній або сімей. Власні кухні на території дозволять вам
        приготувати смачні страви з місцевих продуктів, а затишна атмосфера
        забезпечить відчуття дому. Окрім цього, ви матимете можливість активно
        провести час, відправляючись у піші походи, катання на лижах взимку чи
        риболовлю влітку. Багато баз також організовують культурні заходи, що
        відкриють для вас глибину місцевих традицій. Виберіть свою ідеальну базу
        відпочинку в Карпатах для незабутніх вражень!
      </p>
    </RealtyPage>
  );
}
