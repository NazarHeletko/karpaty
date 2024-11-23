import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оренда будинків у Ясіня | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/rakhiv-raion"}
        city={"/yasynia"}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Оренда будинків у Ясіня" },
          { city: "/yasynia", type: "house" },
        ]}
        secondFilter={[{ title: "Все житло у Ясіня" }, { city: "/yasynia" }]}
        thirdFilter={[
          { title: "Житло у Рахівському районі" },
          { raion: "/rakhiv-raion" },
        ]}
        forthFilter={[
          { title: "У Закарпатській області" },
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
