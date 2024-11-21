import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Житло в Устеріках — комфортний відпочинок біля Черемоша | Мої Карпати",
  description:
    "Устеріки — де Черемош тихо співає свої пісні, а вечори наповнені романтичним світлом заходу сонця. Тут ви знайдете місце для душі і спокою.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={"/usteriky"}
        building={""}
      />
      <RealtyItems
        firstFilter={[{ title: "Житло в Устеріках" }, { city: "/usteriky" }]}
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
