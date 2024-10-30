import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Лумшорах – там, де зливаються водоспади і тиша гір | Мої Карпати",
  description:
    "Лумшори – куточок казки з джерелами, що біжать з Карпат, де природа шепоче легенди, а житло стає затишним сховищем для душевного релаксу.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={"/lumshory"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Лумшорах" }, { city: "/lumshory" }]}
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
