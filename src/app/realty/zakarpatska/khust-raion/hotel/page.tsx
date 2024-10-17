import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Готелі в Хустському районі Карпат: Затишний відпочинок у серці гір | Мої Карпати",
  description:
    "Знайдіть ідеальний готель у Хустському районі Карпат для незабутнього відпочинку. Комфортні умови, мальовничі краєвиди та гірське повітря створять атмосферу повного релаксу.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Хустському районі" },
          { raion: "/khust-raion", type: "hotel" },
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
        Хустський район Карпат — це справжнє перехрестя природи і комфорту, яке
        дарує можливість насолодитися відпочинком у оточенні величних гір та
        живописних пейзажів. Готелі в цьому регіоні пропонують не лише затишні
        умови для проживання, а й безліч варіантів для активного відпочинку та
        релаксації. Вибираючи готель у Хустському районі, ви відкриваєте для
        себе світ гірського туризму, де кожен день можна відкривати нові стежки,
        досліджувати природу або насолоджуватися велосипедними прогулянками.
        Унікальні термальні джерела додають особливого шарму вашому відпочинку,
        забезпечуючи незабутнє відчуття блаженства. Гостинність місцевих жителів
        і багатий культурний спадок регіону створюють атмосферу, яка спонукає до
        відкриттів. Готелі в Хустському районі — це не просто місце для ночівлі,
        а ціле мистецтво поєднання комфорту та автентичності, що залишає
        незабутні враження. Ваш відпочинок тут обіцяє стати неповторним
        досвідом, наповненим гармонією природи і затишком.
      </p>
    </RealtyPage>
  );
}
