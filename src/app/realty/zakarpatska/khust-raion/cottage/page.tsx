import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Котеджі у Хустському районі: Ідеальне місце для відпочинку в Карпатах | Мої Карпати",
  description:
    "Орендуйте затишні котеджі у Хустському районі та насолоджуйтеся мальовничою природою Карпат. Ідеальний вибір для спокійного відпочинку з комфортом та незабутніми враженнями.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Хустському районі" },
          { raion: "/khust-raion", type: "cottage" },
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
        Відпочинок у котеджі в Хустському районі – це можливість втекти від
        міського шуму та поринути у мальовничу природу Карпат. Орендувавши
        котедж, ви отримаєте повну приватність та свободу дій, де все
        підлаштовано під ваш комфорт. Це простір для тих, хто цінує затишок і
        зручності, адже сучасні котеджі оснащені всім необхідним для комфортного
        проживання. Чисте гірське повітря, неймовірні краєвиди, можливість
        самостійно готувати або насолоджуватися відпочинком на терасі –
        ідеальний сценарій для відпустки, сповненої спокою та релаксу.
      </p>
    </RealtyPage>
  );
}
