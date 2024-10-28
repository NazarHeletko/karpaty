import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Будинки для відпочинку у Вижницькому районі | Мої Карпати",
  description:
    "Будинки для відпочинку у Вижницькому районі – це справжній оазис спокою, де природа гармонійно поєднується з комфортом. Оточені живописними карпатськими пейзажами, ці затишні оселі пропонують все необхідне для ідеального відпочинку. Уявіть собі вечори, проведені біля теплого каміна, та смачні страви, приготовані з місцевих продуктів.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion", type: "house" },
        ]}
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
        Ви зможете насолоджуватися активним відпочинком на свіжому повітрі,
        відправлятися в захоплюючі піші прогулянки або досліджувати мальовничі
        маршрути на велосипедах. Вижницький район також багатий культурними
        пам’ятками, де кожен знайде щось до душі. Обираючи будинки для
        відпочинку у Вижницькому районі, ви створюєте унікальні спогади, повні
        гармонії з природою і затишку. Це місце, де кожен момент стає особливим,
        а відпочинок — незабутнім.
      </p>
    </RealtyPage>
  );
}
