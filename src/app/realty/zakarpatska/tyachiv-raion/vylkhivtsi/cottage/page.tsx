import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Котеджі у Вільхівцях | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/tyachiv-raion"}
        city={"/vylkhivtsi"}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Вільхівцях" },
          { city: "/vylkhivtsi", type: "cottage" },
        ]}
        secondFilter={[{ title: "Все житло у Вільхівцях" }, { city: "/vylkhivtsi" }]}
        thirdFilter={[
          { title: "Житло у Тячівському районі" },
          { raion: "/tyachiv-raion" },
        ]}
        forthFilter={[
          { title: "Житло у Закарпатській області" },
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
