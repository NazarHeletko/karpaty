import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Готелі у Вижницькому районі – ваші комфортні ворота до краси Карпат! | Мої Карпати",
  description:
    "Готелі у Вижницькому районі — це ідеальне місце для тих, хто прагне відпочити у серці Карпат. Насолоджуйтеся затишком сучасних готелів, які пропонують всі зручності для комфортного перебування. Відкрийте для себе красу природи, взявши участь у піших прогулянках, лижному катанні та екскурсіях до місцевих пам’яток. У вечірній час розслабтеся у компанії близьких, насолоджуючись атмосферою спокою та гармонії. Ваш ідеальний відпочинок чекає на вас у Вижницькому районі!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion", type: "hotel" },
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
        Окрім комфортного проживання, Вижницький район славиться безмежними
        можливостями для активного відпочинку. Відвідувачі можуть
        насолоджуватися піші прогулянками мальовничими маршрутами, відкриваючи
        для себе чарівні водоспади та ліси. Взимку тут відкриваються можливості
        для лижного катання та сноубордингу, що робить район популярним серед
        любителів зимових видів спорту. Не забувайте про культурні скарби
        регіону. Місцеві музеї, народні свята та традиції дарують можливість
        зануритися в атмосферу української культури. Скуштуйте страви
        карпатської кухні, які приготовані з любов’ю, і насолоджуйтеся
        гостинністю місцевих мешканців. Обираючи готелі у Вижницькому районі, ви
        не лише забезпечуєте собі комфортний відпочинок, а й відкриваєте нові
        горизонти для дослідження природи та культури. Тут ви зможете
        насолодитися кожним моментом, створюючи незабутні спогади на все життя.
      </p>
    </RealtyPage>
  );
}