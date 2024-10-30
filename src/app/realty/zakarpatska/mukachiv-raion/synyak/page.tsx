import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Синяку – відпочинок у термальному містечку | Мої Карпати",
  description:
    "Відвідайте Синяк, відомий своєю термальною водою, яка разом із зручним житлом надасть оздоровчий ефект і спокій серед природи.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={"/synyak"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Синяку" }, { city: "/synyak" }]}
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
