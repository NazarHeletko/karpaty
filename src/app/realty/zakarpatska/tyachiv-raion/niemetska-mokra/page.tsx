import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Німецькій Мокрій – відпочинок серед незайманих лісів",
  description:
    "Житло у Німецькій Мокрій – мальовничий куточок для шанувальників природи та тихого відпочинку серед гір.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/tyachiv-raion"}
        city={"/niemetska-mokra"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Німецькій Мокрій" }, { city: "/niemetska-mokra" }]}
        secondFilter={[
          { title: "Житло у Тячівському районі" },
          { raion: "/tyachiv-raion" }, 
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
