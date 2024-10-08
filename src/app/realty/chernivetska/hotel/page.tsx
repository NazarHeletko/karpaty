import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Комфортні готелі в Чернівецькій області для вашого відпочинку в Карпатах | Мої Карпати",
  description:
    "Відпочинок у готелях Чернівецької області – це поєднання комфорту та природи. Виберіть з безлічі готелів у Карпатах, насолоджуйтеся гірськими пейзажами.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={""}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Чернівецькій області" },
          { oblast: "/chernivetska", type: "hotel" },
        ]}
        secondFilter={[
          { title: "Житло у Чернівецькій області" },
          { oblast: "/chernivetska" },
        ]}
        thirdFilter={[]}
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
        Чернівецька область — це місце, де природа зливається з культурною
        спадщиною, створюючи неповторну атмосферу для відпочинку. Якщо ви
        плануєте втекти від міської суєти і насолодитися красою Карпат, вам
        варто розглянути варіант проживання в одному з численних готелів
        регіону. Готелі Чернівецької області вражають різноманіттям: від
        затишних сімейних готелів до розкішних комплексів з усіма зручностями.
        Багато з них розташовані в мальовничих місцях, де з вікон відкривається
        захоплюючий вид на гори. Це не лише приваблює туристів, але й створює
        ідеальні умови для спокійного відпочинку. Проживання в готелі дозволяє
        насолоджуватися комфортом, адже тут є все необхідне: зручні ліжка,
        сучасні ванні кімнати, безкоштовний Wi-Fi та телевізори. Додатково
        багато готелів пропонують ресторанні послуги, де ви зможете спробувати
        традиційні буковинські страви, приготовані з місцевих продуктів. Це —
        ідеальний спосіб зануритися в культуру регіону через гастрономію. Для
        активних туристів Чернівецька область пропонує широкий спектр розваг: ви
        можете кататися на лижах взимку або відправитися в піші прогулянки
        влітку. Готелі часто організовують екскурсії та активні тури, щоб кожен
        гість зміг насолодитися природними красотами та унікальними ландшафтами
        Карпат. Місцеві мешканці славляться своєю гостинністю і завжди готові
        допомогти туристам. Вони охоче діляться порадами щодо найкращих
        маршрутів та культурних пам’яток, які варто відвідати. Вибираючи готелі
        в Чернівецькій області, ви отримуєте можливість провести незабутній
        відпочинок серед величної природи, де спокій і гармонія переплітаються з
        активними пригодами. Це — ідеальний варіант для тих, хто прагне нових
        вражень та незабутніх моментів у житті.
      </p>
    </RealtyPage>
  );
}
