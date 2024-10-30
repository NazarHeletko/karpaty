import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло на Синевирській Поляні – відпочинок на лоні природи біля озера Синевир | Мої Карпати",
  description:
    "Орендуйте житло біля знаменитого озера Синевир – чудовий куточок для єднання з природою та незабутніх пейзажів.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={"/synevyrska-polyana"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло на Синевирській Поляні" }, { city: "/synevyrska-polyana" }]}
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
