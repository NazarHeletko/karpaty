import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Кам'яниці – спокій і краса у підніжжя Карпат| Мої Карпати",
  description:
    "Зупиніться у Кам’яниці – селі серед чарівних лісів, де можна насолодитися тишею, чистим повітрям і затишком гірського житла.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={"/kamianytsia"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Кам'яниці" }, { city: "/kamianytsia" }]}
        secondFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
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
