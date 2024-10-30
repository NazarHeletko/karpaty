import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло в Опаці – гармонія та спокій карпатських краєвидів | Мої Карпати",
  description:
    "Виберіть Опаку для єднання з природою: мальовничі долини, тихі вечори та аромат соснових лісів дарують справжній спокій.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/drohobych-raion"}
        city={"/opaka"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло в Опаці" }, { city: "/opaka" }]}
        secondFilter={[
          { title: "Житло у Дрогобицькому районі" },
          { raion: "/drohobych-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Львівській області" },
          { oblast: "/lvivska" },
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
