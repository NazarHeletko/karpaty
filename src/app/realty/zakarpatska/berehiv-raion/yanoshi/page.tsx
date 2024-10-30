import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Яношах – там, де відпочиває душа і мріє серце | Мої Карпати",
  description:
    "Знайдіть у Яношах притулок серед тиші та зелених схилів, де мрії і спогади переплітаються, мов виноград, і залишають незабутні сліди на серці.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/berehiv-raion"}
        city={"/yanoshi"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Яношах" }, { city: "/yanoshi" }]}
        secondFilter={[
          { title: "Житло у Берегівському районі" },
          { raion: "/berehiv-raion" },
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
