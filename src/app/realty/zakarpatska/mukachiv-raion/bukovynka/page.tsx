import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Буковинці – чарівний куточок у горах | Мої Карпати",
  description:
    "Виберіть житло у Буковинці – тихому селі в оточенні лісів, де кожен день дарує спокій, чисте повітря і неймовірні краєвиди Карпат.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={"/bukovynka"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Буковинці" }, { city: "/bukovynka" }]}
        secondFilter={[
          { title: "Житло у Мукачівському районі" },
          { raion: "/mukachiv-raion" },
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
