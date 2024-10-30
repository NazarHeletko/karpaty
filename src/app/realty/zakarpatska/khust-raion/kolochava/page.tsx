import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло в Колочаві – культурний оазис у серці Карпат| Мої Карпати",
  description:
    "Зупиніться в колоритній Колочаві – селі-музеї з багатою історією та автентичним житлом для повного занурення в карпатський дух.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={"/kolochava"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло в Колочаві" }, { city: "/kolochava" }]}
        secondFilter={[
          { title: "Житло у Хустському районі" },
          { raion: "/tyachiv-raion" },
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
