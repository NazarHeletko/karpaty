import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Турці – колиска Бойківщини і мальовничих краєвидів | Мої Карпати",
  description:
    "Турка – серце Бойківщини, де вас зустрінуть гори і стародавні звичаї. Затишне житло запрошує відчути карпатську гостинність і красу природи.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={"/turka"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Турці" }, { city: "/turka" }]}
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
