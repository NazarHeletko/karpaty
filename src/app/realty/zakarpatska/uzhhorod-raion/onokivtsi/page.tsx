import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Оноківцях – відпочинок серед краси передмістя | Мої Карпати",
  description:
    "Оноківці – село поруч з Ужгородом, де ви знайдете житло для спокійного відпочинку в оточенні квітучих лугів і казкових краєвидів.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={"/onokivtsi"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Оноківцях" }, { city: "/onokivtsi" }]}
        secondFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
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
