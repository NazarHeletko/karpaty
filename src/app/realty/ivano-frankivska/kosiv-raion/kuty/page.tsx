import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Кутах – куточок душевного спокою серед Карпат| Мої Карпати",
  description:
    "Зупиніться в Кутах, де гармонія природи, гірські краєвиди та затишок села дарують справжній відпочинок для душі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={"/kuty"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Кутах" }, { city: "/kuty" }]}
        secondFilter={[
          { title: "Житло у Косівському районі" },
          { raion: "/kosiv-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
