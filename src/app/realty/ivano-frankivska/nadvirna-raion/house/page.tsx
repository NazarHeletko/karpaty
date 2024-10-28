import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Будинки для відпочинку у Надвірнянському районі | Мої Карпати",
  description:
    "Будинки для відпочинку у Надвірнянському районі – це чудове місце для сімейного або компанійного відпочинку серед природної краси Карпат. Затишні котеджі, сучасні зручності та мальовничі пейзажі створюють атмосферу спокою та релаксу.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Надвірнянському районі" },
          { raion: "/nadvirna-raion", type: "house" },
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
        Надвірнянський район відомий своїми природними красотами та активними
        можливостями для відпочинку. Тут можна насолоджуватися прогулянками в
        горах, велосипедними турами та екскурсіями до культурних пам’яток.
        Влітку вам відкриються численні маршрути для походів, а взимку – чудові
        лижні траси. Обираючи будинки для відпочинку у Надвірнянському районі,
        ви отримуєте шанс відчути магію Карпат, насолодитися природою та
        створити незабутні спогади в затишному оточенні. Це ідеальне місце для
        відновлення сил та насолоди життям.
      </p>
    </RealtyPage>
  );
}
