import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Відпочинок у Рахівському районі: Найкращі бази для вашого комфорту | Мої Карпати",
  description:
    "Знайдіть ідеальне місце для відпочинку у Рахівському районі Карпат! Наш сайт пропонує різноманітні бази відпочинку, де ви зможете насолоджуватися комфортом, красою природи та автентичними гуцульськими традиціями. Від сімейних вікендів до активного відпочинку на свіжому повітрі — у нас є все для вашого незабутнього відпочинку. Забронюйте своє місце вже сьогодні та відчуйте магію Карпат!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/rakhiv-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Рахівському районі" },
          { raion: "/rakhiv-raion", type: "base" },
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
        Рахівський район — це справжній куточок для любителів активного
        відпочинку та незайманої природи. Бази відпочинку в цьому регіоні
        надають неперевершену можливість зануритися в красу Карпат, вдихнути
        чисте гірське повітря та відновити сили. Чому варто обрати Рахівський
        район? Незаймана природа: Високі вершини, густі ліси та бурхливі річки
        формують унікальну атмосферу для відпочинку. Тут ви знайдете ідеальне
        середовище для релаксації і занурення в природну красу. Активний
        відпочинок: Рахівський район пропонує безліч можливостей для активного
        проведення часу: від гірського туризму і велоспорту до лижного спорту,
        сноубордів та риболовлі. Це місце, де кожен знайде заняття до душі.
        Культурна спадщина: Цей регіон — колиска гуцульської культури. Тут ви
        зможете дізнатися про місцеві традиції, скуштувати смачні страви
        гуцульської кухні та придбати унікальні сувеніри ручної роботи. Доступні
        ціни: Вартість відпочинку на базах у Рахівському районі, як правило, є
        нижчою, ніж в інших популярних туристичних напрямках Карпат. Це дозволяє
        вам насолоджуватися якісним відпочинком без значних витрат.
      </p>
    </RealtyPage>
  );
}
