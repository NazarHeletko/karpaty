import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Берегово – термальні води і угорський дух під зірками | Мої Карпати",
  description:
    "Берегово – місто джерел і мрій, де у термальних водах тануть втома і клопоти, а затишне житло зберігає тепло карпатських ночей та угорських традицій.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/berehiv-raion"}
        city={"/berehovo"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Берегово" }, { city: "/berehovo" }]}
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
