import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Відпочинок у Карпатах: Котеджі у Рахівському районі для вашого комфорту | Мої Карпати",
  description:
    "Відкрийте для себе затишні котеджі у Рахівському районі Карпат, де комфорт зустрічає красу природи! Наші варіанти проживання ідеально підходять для сімейного відпочинку та романтичних вікендів. Насолоджуйтесь свіжим повітрям, гірськими пейзажами і гостинністю місцевих жителів. Забронюйте свій куточок серед гір вже сьогодні та переживіть незабутні моменти у серці Карпат!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/rakhiv-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Рахівському районі" },
          { raion: "/rakhiv-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло у Рахівському районі" },
          { raion: "/rakhiv-raion" },
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
        Обираючи котедж у Рахівському районі, ви отримуєте можливість
        насолоджуватися усіма зручностями домашнього затишку. Просторі кімнати,
        комфортні ліжка, а також добре обладнані кухні створять ідеальні умови
        для вашого перебування. Багато котеджів мають великі вікна, що
        відкривають захоплюючі види на гори та ліс, дозволяючи вам відчути красу
        навколишньої природи, не виходячи з дому. Цей район пропонує широкий
        вибір котеджів — від сучасних варіантів з усіма зручностями до
        традиційних дерев'яних будинків, які передають автентичний дух
        карпатської культури. У кожному з них ви зможете знайти свою атмосферу
        та комфорт, що задовольнить будь-які уподобання. Не забувайте про
        можливість активно провести час на свіжому повітрі. Рахівський район
        славиться своїми мальовничими маршрутами для пішохідних прогулянок,
        велосипедними стежками та можливостями для зимових видів спорту. Улітку
        ви можете насолоджуватися походами в гори, а взимку — катанням на лижах
        чи сноуборді. Також ви матимете можливість зануритися в місцеву
        культуру, відвідуючи традиційні гастрономічні заходи або майстер-класи з
        приготування гуцульських страв. Це дозволить вам не лише насолодитися
        смачною їжею, але й отримати незабутні враження від місцевого життя. Не
        зволікайте з планами на відпочинок! Забронюйте свій котедж у Рахівському
        районі вже сьогодні і відкрийте для себе всі переваги цього прекрасного
        регіону. Насолоджуйтеся комфортом, красою природи та багатством
        традицій, які зроблять ваше перебування тут по-справжньому незабутнім.
      </p>
    </RealtyPage>
  );
}
