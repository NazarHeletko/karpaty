import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Велятино – релакс у термальних джерелах Карпат| Мої Карпати",
  description:
    "Проведіть час у Велятино – селі з термальними басейнами, де можна оздоровитися та насолодитися справжнім закарпатським комфортом.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={"/velyatyno"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Велятино" }, { city: "/velyatyno" }]}
        secondFilter={[
          { title: "Житло у Хустському районі" },
          { raion: "/khust-raion" },
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
