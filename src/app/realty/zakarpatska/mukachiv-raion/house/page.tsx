import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Оренда будинків у Мукачівському районі: ваш комфортний відпочинок серед Карпат | Мої Карпати",
  description:
    "Оренда будинків у Мукачівському районі – ідеальний варіант для тих, хто шукає комфортний відпочинок серед мальовничих Карпат. Насолоджуйтеся приватністю, природою та затишком гірських краєвидів, обравши будинок для своєї відпустки.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Мукачівському районі" },
          { raion: "/mukachiv-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Мукачівському районі" },
          { raion: "/mukachiv-raion" },
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
        Оренда будинків у Мукачівському районі – це ідеальний варіант для тих,
        хто прагне усамітнитися в горах і насолодитися красою Карпат. Цей регіон
        пропонує можливість повністю відключитися від міської метушні та відчути
        гармонію з природою. Будинок в оренду дає вам комфорт і свободу, адже ви
        можете самостійно планувати свій відпочинок і насолоджуватися часом з
        родиною або друзями. Мукачівський район відомий не лише своїми
        мальовничими краєвидами, а й багатим культурним спадком та цікавими
        місцями для відвідування. Вибір будинку для відпочинку тут – це
        поєднання затишку, природи та нових вражень.
      </p>
    </RealtyPage>
  );
}
