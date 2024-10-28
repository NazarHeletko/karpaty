import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Котеджі у Верховинському районі | Мої Карпати",
  description:
    "Котеджі у Верховинському районі — це ідеальне місце для тих, хто прагне відпочити на природі. Затишні котеджі, оснащені усіма зручностями, пропонують комфортний відпочинок у серці Карпат. Насолоджуйтеся живописними краєвидами, пішими прогулянками та активними розвагами на свіжому повітрі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Верховинському районі" },
          { raion: "/verkhovyna-raion", type: "cottage" },
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
        Котеджі у Верховинському районі — це справжній оазис спокою та затишку,
        де ви можете втекти від буденності. Затишні і стильні котеджі пропонують
        комфортні умови, які дозволять вам насолодитися кожним моментом вашого
        відпочинку. Уявіть собі, як ви прокидаєтеся під звуки пташиного співу і
        м’яке світло ранкового сонця, що проникає крізь вікна. Після сніданку на
        терасі, де подають свіжозварену каву, ви можете вирушити на прогулянку
        мальовничими стежками, оточеними неймовірними карпатськими пейзажами. Ці
        котеджі також є ідеальною базою для активного відпочинку: від пішохідних
        маршрутів до лижних спусків у зимовий період. Насолоджуйтесь вечорами
        біля каміну, спілкуючись з близькими або ділячись враженнями від пригод,
        які вам подарує цей чудовий край. Котеджі у Верховинському районі – це
        місце, де ви зможете відновити сили, зарядитися енергією природи та
        створити незабутні спогади про свій відпочинок у Карпатах.
      </p>
    </RealtyPage>
  );
}
