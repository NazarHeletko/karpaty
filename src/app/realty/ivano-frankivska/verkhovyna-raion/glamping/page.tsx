import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінги у Верховинському районі | Мої Карпати",
  description:
    "Глемпінги у Верховинському районі – це неповторний досвід поєднання розкоші та дотиків природи, де кожен момент наповнений магією карпатських пейзажів. Уявіть собі, як ви прокидаєтеся в комфортному наметі з панорамними вікнами, через які ранкове сонце наповнює простір теплом, а свіже повітря приносить запахи лісу та гірських квітів.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Верховинському районі" },
          { raion: "/verkhovyna-raion", type: "glamping" },
        ]}
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
        Ці глемпінги створені для тих, хто прагне втекти від буденності, але не
        хоче відмовлятися від комфорту. У кожному наметі ви знайдете зручні
        ліжка, стильний інтер’єр і всі зручності для ідеального відпочинку.
        Вечорами, сидячи біля вогнища, ви зможете насолоджуватися душевними
        розмовами під зоряним небом, слухаючи шепіт вітру серед дерев. Глемпінги
        пропонують різноманітні активності: від пішохідних маршрутів у серці
        карпатської природи до екскурсій, які відкриють вам секрети місцевих
        традицій та культурної спадщини. У спекотні дні ви зможете охолодитися в
        прохолодних гірських ріках, а зимові вечори запросять вас на катання на
        лижах чи сноуборді. Глемпінги у Верховинському районі – це місце, де
        природа і комфорт створюють унікальну атмосферу для романтичного
        відпочинку, сімейних пригод чи зустрічей з друзями. Тут ви знайдете не
        лише затишок, а й справжню гармонію з природою, яка залишить у вашому
        серці незабутні спогади.
      </p>
    </RealtyPage>
  );
}
