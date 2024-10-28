import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі у Косівському районі | Мої Карпати",
  description:
    "Готелі у Косівському районі – це затишок і комфорт у серці Карпат. Сучасні номери, вражаючі краєвиди та широкий вибір послуг забезпечують ідеальний відпочинок серед природи.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Косівському районі" },
          { raion: "/kosiv-raion", type: "hotel" },
        ]}
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
        Готелі в Косівському районі – це поєднання сучасного комфорту та
        природної краси Карпат. Вони пропонують затишні номери з усіма
        зручностями, а їхнє розташування серед гірських пейзажів робить
        відпочинок особливим. Близькість до основних туристичних маршрутів
        дозволяє легко дістатися до найцікавіших місць, таких як водоспади, ліси
        й історичні пам'ятки. Влітку тут можна насолодитися походами в гори або
        велосипедними прогулянками, а взимку – катанням на лижах. Багато готелів
        мають СПА-зони, басейни та ресторани з місцевою кухнею, що робить ваш
        відпочинок повноцінним та комфортним.
      </p>
    </RealtyPage>
  );
}
