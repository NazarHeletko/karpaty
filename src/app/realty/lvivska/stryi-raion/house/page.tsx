import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Комфортні будинки для відпочинку у Стрийському районі: Ваша ідеальна втеча у Карпати | Мої Карпати",
  description:
    "Комфортні будинки для відпочинку у Стрийському районі – це ваш куточок спокою серед природи. Оцініть затишок, красиві пейзажі та можливості для активного відпочинку в Карпатах. Ідеальне місце для сімейних мандрівок та романтичних вікендів!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Стрийському районі" },
          { raion: "/stryi-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Стрийському районі" },
          { raion: "/stryi-raion" },
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
        У Стрийському районі ви можете обрати різноманітні варіанти житла: від
        затишних дерев'яних котеджів до сучасних будинків з усіма зручностями.
        Багато з них пропонують кухні для самостійного приготування їжі, а також
        простори для відпочинку на свіжому повітрі з мальовничими краєвидами.
        Цей район ідеально підходить для активного відпочинку. Тут ви можете
        займатися пішими прогулянками, катанням на велосипедах або просто
        насолоджуватися красою навколишньої природи. Спокійна атмосфера та
        близькість до природи роблять Стрийський район ідеальним місцем для
        відпочинку від щоденних турбот. Обираючи будинки для відпочинку у цьому
        регіоні, ви отримуєте шанс провести незабутній час у серці Карпат.
      </p>
    </RealtyPage>
  );
}
