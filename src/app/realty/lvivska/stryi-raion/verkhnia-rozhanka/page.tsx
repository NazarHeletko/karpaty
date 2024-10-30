import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Верхній Рожанці – місце тиші і спокою на висотах Карпат | Мої Карпати",
  description:
    "Верхня Рожанка – село з чистим повітрям і затишком, де житло стане вашим острівцем для справжнього відпочинку і спокою.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={"/verkhnia-rozhanka"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Верхній Рожанці" }, { city: "/verkhnia-rozhanka" }]}
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
