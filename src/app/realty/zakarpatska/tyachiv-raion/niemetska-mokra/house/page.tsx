import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оренда будинків у Німецька Мокра | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/tyachiv-raion"}
        city={"/niemetska-mokra"}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Оренда будинків у Німецька Мокра" },
          { city: "/niemetska-mokra", type: "house" },
        ]}
        secondFilter={[{ title: "Все житло в Німецька Мокра" }, { city: "/niemetska-mokra" }]}
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
