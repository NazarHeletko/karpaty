import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі в Усть-Чорна | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/tyachiv-raion"}
        city={"/ust-chorna"}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі в Усть-Чорна" },
          { city: "/ust-chorna", type: "hotel" },
        ]}
        secondFilter={[{ title: "Все житло в Усть-Чорна" }, { city: "/ust-chorna" }]}
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
