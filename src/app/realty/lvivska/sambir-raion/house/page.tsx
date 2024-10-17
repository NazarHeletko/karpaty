import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Будинки для відпочинку у Карпатах: Оренда житла в Самбірському районі | Мої Карпати",
  description:
    "Оренда будинків для відпочинку у Самбірському районі Карпат. Обирайте затишні котеджі, приватні садиби та еко-садиби серед мальовничої природи. Ідеальне місце для спокійного відпочинку в горах!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Самбірському районі" },
          { raion: "/sambir-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Самбірському районі" },
          { raion: "/sambir-raion" },
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
        Самбірський район Карпат – це місце для спокійного відпочинку серед
        природи. Оренда будинку тут дає можливість насолодитися гірськими
        пейзажами та чистим повітрям без зайвої метушні. У цьому регіоні
        доступні різні варіанти житла: приватні садиби, комфортні котеджі та
        екологічні еко-садиби. Відпочинок у Самбірському районі приваблює тишею
        та можливістю відчути справжній колорит Карпат. Незалежно від сезону,
        тут завжди знайдуться розваги – від піших прогулянок влітку до лиж
        взимку.
      </p>
    </RealtyPage>
  );
}
