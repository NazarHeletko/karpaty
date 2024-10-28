import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Глемпінги у Вижницькому районі – унікальний відпочинок на лоні природи Карпат! | Мої Карпати",
  description:
    "Глемпінги у Вижницькому районі — це унікальне поєднання природного спокою та комфорту. Проведіть час у стильних наметах, оточених чудовими карпатськими пейзажами. Насолоджуйтесь пішими прогулянками, відкрите серце для нових вражень та скуштуйте смачні місцеві страви. Ваш ідеальний відпочинок у серці Карпат чекає на вас!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion", type: "glamping" },
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
        Глемпінги у Вижницькому районі пропонують не лише затишок, але й
        унікальну атмосферу єднання з природою. Усередині вас зустрінуть затишні
        ліжка, естетичний інтер’єр і навіть елементи розкоші, які нагадають про
        домашній комфорт. Тут ви зможете прокидатися під спів птахів і
        насолоджуватися вечорами, спостерігаючи за зірками прямо з тераси свого
        намету. Цей район славиться багатими можливостями для активного
        відпочинку. Піші прогулянки вздовж мальовничих маршрутів, які ведуть до
        таємничих водоспадів і захоплюючих видів, стануть чудовою можливістю
        відкрити нові грані природи. Взимку, завдяки близькості до лижних трас,
        ви зможете насолодитися зимовими розвагами, повними адреналіну.
      </p>
    </RealtyPage>
  );
}
