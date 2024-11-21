import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Красноїллі — гуцульська гостинність і природа | Мої Карпати",
  description:
    "У Красноїллі час зупиняється серед гуцульських традицій. Тут вам подарують не лише будинок, а й частинку душі, а природа зачарує на все життя.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={"/krasnoyillya"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Красноїллі" }, { city: "/krasnoyillya" }]}
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
