import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Снідавці – місце для відновлення душі серед Карпат| Мої Карпати",
  description:
    "Снідавка дарує атмосферу спокою та релаксу: шелест лісів, чисте повітря і ніжні вечори в оточенні карпатських вершин.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={"/snidavka"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Яблунові" }, { city: "/snidavka" }]}
        secondFilter={[
          { title: "Житло у Косівському районі" },
          { raion: "/kosiv-raion" },
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
