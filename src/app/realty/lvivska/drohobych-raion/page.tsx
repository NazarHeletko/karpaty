import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Житло в Дрогобицькому районі Карпат: Знайдіть свій затишний куточок | Мої Карпати",
  description:
    "Найкраще житло в Дрогобицькому районі на території Карпат: котеджі, садиби, готелі для вашого ідеального відпочинку. Насолоджуйтеся красою Карпат разом із комфортом проживання.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/drohobych-raion"}
        city={""}
        building={""}
      />
      <RealtyItems
        firstFilter={[
          { title: "Житло у Дрогобицькому районі" },
          { raion: "/drohobych-raion" },
        ]}
        secondFilter={[
          { title: "Житло у Львівській області" },
          { oblast: "/lvivska" },
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
        Дрогобицький район, відомий своєю захоплюючою природою та культурною
        спадщиною, приваблює туристів з усіх куточків України та світу. Якщо ви
        мрієте про відпустку в Карпатах, знайти затишне житло стане першим
        кроком до вашого ідеального відпочинку. Котеджі, розташовані серед
        зелених гір, пропонують чудову можливість відпочити від міської метушні.
        Багато з них обладнані всім необхідним для комфортного перебування:
        сучасними кухнями, камінами, що створюють атмосферу затишку, та
        терасами, звідки відкривається приголомшливий краєвид на карпатські
        вершини. Ці котеджі стануть ідеальним місцем для сімейних святкувань чи
        дружніх зустрічей. Приватні садиби в Дрогобицькому районі дарують
        можливість поринути в справжню карпатську атмосферу. Тут ви зможете не
        лише насолодитися смачною домашньою кухнею, але й дізнатися більше про
        традиції та звичаї регіону. Господарі охоче діляться своїми знаннями,
        організовуючи екскурсії та активні програми для гостей. Ви зможете
        знайти варіанти, що підходять як для бюджетного, так і для розкішного
        відпочинку. Готелі в Дрогобицькому районі забезпечують різноманітні
        послуги для комфортного перебування. Тут ви знайдете все: від елегантних
        номерів до спа-послуг і ресторанів з місцевою кухнею. Для тих, хто хоче
        залишити менший слід на природі, еко-готелі стають чудовим вибором, адже
        вони акцентують увагу на екологічності та сталому розвитку.
      </p>
    </RealtyPage>
  );
}
