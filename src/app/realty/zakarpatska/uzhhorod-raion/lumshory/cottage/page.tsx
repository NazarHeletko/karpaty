import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Котеджі в Лумшорах | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={"/lumshory"}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі в Лумшорах" },
          { city: "/lumshory", type: "cottage" },
        ]}
        secondFilter={[{ title: "Все житло в Лумшорах" }, { city: "/lumshory" }]}
        thirdFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
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
