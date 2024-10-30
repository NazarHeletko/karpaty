import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Астеї – затишок на краю кордонів і світанків | Мої Карпати",
  description:
    "Астей – село на кордоні Угорщини і тиші, де світанок золотить лани, а затишне житло стане вашим спокоєм і прихистком серед зелених краєвидів Закарпаття.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/berehiv-raion"}
        city={"/astei"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Астеї" }, { city: "/astei" }]}
        secondFilter={[
          { title: "Житло у Берегівському районі" },
          { raion: "/berehiv-raion" },
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
