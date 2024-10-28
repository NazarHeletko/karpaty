import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі у Надвірнянському районі | Мої Карпати",
  description:
    "Готелі у Надвірнянському районі – це чудовий вибір для комфортного відпочинку в Карпатах. Сучасні номери, затишна атмосфера та мальовничі краєвиди створюють ідеальні умови для релаксації. Близькість до туристичних маршрутів робить їх зручними для активного відпочинку та екскурсій.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Надвірнянському районі" },
          { raion: "/nadvirna-raion", type: "hotel" },
        ]}
        secondFilter={[
          { title: "Житло у Надвірнянському районі" },
          { raion: "/nadvirna-raion" },
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
        Готелі району знаходяться неподалік від популярних туристичних
        маршрутів, що дозволяє легко організувати походи в гори, відвідати
        природні пам'ятки або провести день на лижних схилах взимку. Літній
        сезон відкриває можливості для активного відпочинку: прогулянки,
        веломаршрути та екскурсії до мальовничих водоспадів. Обираючи готель у
        Надвірнянському районі, ви отримуєте можливість поєднати комфортне
        проживання з активним дозвіллям на лоні природи, створюючи незабутні
        спогади та приємні враження від подорожі в Карпати.
      </p>
    </RealtyPage>
  );
}
