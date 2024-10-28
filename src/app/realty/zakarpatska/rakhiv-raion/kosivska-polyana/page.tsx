import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Косівській Поляні – відкрийте незвідану природу Карпат| Мої Карпати",
  description:
    "Пропонуємо житло у Косівській Поляні – мальовничому селі на краю Карпат, з неперевершеними краєвидами для спокійного відпочинку.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/rakhiv-raion"}
        city={"/kosivska-polyana"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Косівській Поляні" }, { city: "/kosivska-polyana" }]}
        secondFilter={[
          { title: "Житло у Рахівському районі" },
          { raion: "/rakhiv-raion" },
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
      </p>
    </RealtyPage>
  );
}
