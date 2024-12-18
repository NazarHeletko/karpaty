import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінги у Синевирській Поляні | Мої Карпати",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={"/synevyrska-polyana"}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Синевирській Поляні" },
          { city: "/synevyrska-polyana", type: "glamping" },
        ]}
        secondFilter={[{ title: "Все житло у Синевирській Поляні" }, { city: "/synevyrska-polyana" }]}
        thirdFilter={[
          { title: "Житло у Хустському районі" },
          { raion: "/khust-raion" },
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
