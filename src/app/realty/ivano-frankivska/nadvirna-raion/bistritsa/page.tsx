import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Бистриці – незабутні миті серед Карпат | Мої Карпати",
  description:
    "Оберіть Бистрицю для особливого відпочинку: чисті річки, захопливі гірські краєвиди і час, який належить тільки вам.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={"/bistritsa"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Бистриці" }, { city: "/bistritsa" }]}
        secondFilter={[
          { title: "Житло у Надвірняньскому районі" },
          { raion: "/nadvirna-raion" },
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
