import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Романтичне житло у Ланчині – відпочинок у серці Карпат | Мої Карпати",
  description:
    "Проведіть час із близькою людиною в Ланчині, де мальовничі краєвиди Карпат і затишок природи стануть чудовим фоном для вашого відпочинку.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={"/lanchyn"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Ланчині" }, { city: "/lanchyn" }]}
        secondFilter={[
          { title: "Житло у Надвірняньскому районі" },
          { raion: "/nadvirna-raion" },
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
