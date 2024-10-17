import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Незабутній відпочинок на базах у Стрийському районі: ваша ідеальна втеча в Карпати! | Мої Карпати",
  description:
    "Бази відпочинку у Стрийському районі – це ваш ідеальний куточок для відпочинку в Карпатах. Насолоджуйтесь комфортом, природною красою та безліччю активностей, від піших прогулянок до екскурсій. Виберіть своє місце для незабутнього відпочинку з родиною чи друзями!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Стрийському районі" },
          { raion: "/stryi-raion", type: "base" },
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
        Бази відпочинку у Стрийському районі – це ідеальне місце для тих, хто
        прагне втекти від метушні міста та насолодитися природою. Розташовані
        серед захоплюючих гірських пейзажів, вони пропонують не лише комфорт, а
        й безліч можливостей для активного відпочинку. У цьому регіоні ви
        знайдете різноманітні варіанти баз відпочинку, від затишних котеджів до
        просторих готелів. Кожна база забезпечує всі необхідні умови для
        комфортного перебування: сучасні номери, кухні для самостійного
        приготування їжі та простори для відпочинку на свіжому повітрі.
        Стрийський район також пропонує широкий спектр активностей. Літні
        прогулянки стежками Карпат подарують вам неперевершені краєвиди, а
        взимку ви зможете насолоджуватися катанням на лижах чи сноуборді на
        сусідніх курортах. Екскурсії до місцевих пам’яток, таких як водоспади та
        історичні об’єкти, додадуть різноманіття вашій подорожі.
      </p>
    </RealtyPage>
  );
}
