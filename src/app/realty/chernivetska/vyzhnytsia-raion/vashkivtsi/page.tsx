import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло у Вашківцях — відкрийте для себе чарівність Карпат | Мої Карпати",
  description:
    "Вашківці — це комфорт серед гірської краси. Обирайте затишні будинки, гостинні садиби чи стильні апартаменти для чудового відпочинку.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={"/vashkivtsi"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло у Вашківцях" }, { city: "/vashkivtsi" }]}
        secondFilter={[
          { title: "Житло у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Чернівецькій області" },
          { oblast: "/chernivetska" },
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
