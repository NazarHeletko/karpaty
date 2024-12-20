import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бази відпочинку у Завидово | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={"/zavydivo"}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Завидово" },
          { city: "/zavydivo", type: "base" },
        ]}
        secondFilter={[{ title: "Все житло у Завидово" }, { city: "/zavydivo" }]}
        thirdFilter={[
          { title: "Житло у Мукачівському районі" },
          { raion: "/mukachiv-raion" },
        ]}
        forthFilter={[
          { title: "В Закарпатській області" },
          { oblast: "/zakarpatska" },
        ]}
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
      ></p>
    </RealtyPage>
  );
}
