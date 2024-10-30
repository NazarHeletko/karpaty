import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Сколе – зелена оаза в серці Карпат | Мої Карпати",
  description:
    "Сколе – місто з величними лісами і гірськими краєвидами, де житло дарує затишок і можливість відчути настрій давньої карпатської землі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={"/skole"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Сколе" }, { city: "/skole" }]}
        secondFilter={[
          { title: "Житло у Стрийському районі" },
          { raion: "/stryi-raion" },
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
