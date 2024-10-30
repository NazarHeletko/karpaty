import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Нагуєвичах – доторк до історії та природи| Мої Карпати",
  description:
    "Нагуєвичі запрошують вас до романтичної подорожі слідами Івана Франка, серед чарівної природи та спокою Карпат.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/drohobych-raion"}
        city={"/nahuievychi"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Нагуєвичах" }, { city: "/nahuievychi" }]}
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
