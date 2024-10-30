import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Великій Бакті – де шелестять трави і танцює тиша | Мої Карпати",
  description:
    "Спокій Великої Бакти обіймає, як пісня лугів і лісів, де життя тече м'яко і повільно, даруючи затишок у колисці закарпатської природи.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/berehiv-raion"}
        city={"/velyka-bakta"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Великій Бакті" }, { city: "/velyka-bakta" }]}
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
