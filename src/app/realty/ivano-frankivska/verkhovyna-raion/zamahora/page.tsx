import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Замагорі — спокійний куточок Карпат | Мої Карпати",
  description:
    "Замагора — це оазис тиші та краси, де серце спокійно б’ється в такт природі. Тут, серед карпатських схилів, ви знайдете спокій і відновлення, відчуєте теплоту кожного моменту.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={"/zamahora"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Замагорі" }, { city: "/zamahora" }]}
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
