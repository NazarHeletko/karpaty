import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Космачі – серед традицій та краси гуцульського краю| Мої Карпати",
  description:
    "Космач вражає красою традицій та гірських пейзажів, де кожен день сповнений духом свободи та автентичності.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={"/kosmach"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Космачі" }, { city: "/kosmach" }]}
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
