import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Косоні – теплі джерела і лагідні вечори | Мої Карпати",
  description:
    " У Косоні, де земля дихає теплом джерел, знайдіть прихисток, що огорне вас спокоєм, ніби обійми Карпат, і подарує вам миті справжнього релаксу.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/berehiv-raion"}
        city={"/koson"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Косоні" }, { city: "/koson" }]}
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
