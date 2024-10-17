import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі у Стрийському районі | Мої Карпати",
  description:
    "Готелі у Стрийському районі – це ідеальний вибір для комфортного відпочинку в серці Карпат. Насолоджуйтесь сучасними умовами, якісним обслуговуванням та мальовничими краєвидами. Ідеально підходять для туристів, сімейних пар та любителів активного відпочинку!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Стрийському районі" },
          { raion: "/stryi-raion", type: "hotel" },
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
        Цей регіон приваблює туристів своїм природним багатством, історичними
        пам’ятками та різноманітними можливостями для активного відпочинку.
        Готелі у Стрийському районі пропонують широкий вибір номерів, що
        відповідають будь-яким потребам. Від стандартних комфортних кімнат до
        розкішних люксів – тут знайдеться все для вашого затишного перебування.
        Багато закладів також мають ресторани, де ви можете скуштувати смачні
        страви місцевої кухні, а також спа-зони для релаксації після активного
        дня. Цей район – справжня оаза для любителів активного відпочинку. Під
        час літніх місяців ви можете насолоджуватися піші прогулянки,
        велопрогулянки та екскурсії. Зимою – катання на лижах у ближніх гірських
        курортах. Обираючи готелі у Стрийському районі, ви не лише насолодитесь
        комфортом, але й отримаєте можливість зануритися в красу та атмосферу
        Карпат, створивши незабутні спогади про свій відпочинок.
      </p>
    </RealtyPage>
  );
}
