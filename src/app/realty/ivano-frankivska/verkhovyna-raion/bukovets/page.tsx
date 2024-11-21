import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Буковці — відпочинок з видом на гори | Мої Карпати",
  description:
    "Буковець — де кожен світанок починається з чудового виду на гори, а вечір розцвітає в м’якому світлі заходу сонця. Тут з’єднуються краса природи і романтика спокою.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={"/bukovets"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Буковці" }, { city: "/bukovets" }]}
        secondFilter={[
          { title: "Житло у Верховинському районі" },
          { raion: "/verkhovyna-raion" },
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
