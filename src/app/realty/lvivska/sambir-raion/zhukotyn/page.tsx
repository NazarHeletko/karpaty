import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Жукотині – магія природи і затишок Карпат | Мої Карпати",
  description:
    "Жукотин – село, де природа і тиша зливаються в єдине, роблячи житло справжнім прихистком для тих, хто шукає натхнення і відпочинку.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={"/zhukotyn"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Жукотині" }, { city: "/zhukotyn" }]}
        secondFilter={[
          { title: "Житло у Самбірському районі" },
          { raion: "/sambir-raion" },
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
