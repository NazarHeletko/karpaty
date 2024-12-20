import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Будиночки для відпочинку в Ужгороді та районі: Затишок і комфорт у серці Закарпаття | Мої Карпати",
  description:
    "Знайдіть свій ідеальний будиночок для відпочинку в Ужгороді та навколишніх районах! Наші стильні та затишні котеджі, оточені природною красою Закарпаття, забезпечать вам комфорт і релакс. Чудово підходять для сімейних канікул, романтичних втеч або веселих зустрічей з друзями, вони оснащені всім необхідним для вашого зручного перебування. Відкривайте нові горизонти, насолоджуйтеся атмосферою природи та створюйте незабутні спогади разом з близькими!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки в Ужгородському районі" },
          { raion: "/uzhhorod-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
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
        Будиночки в Ужгородському районі — це можливість поринути в атмосферу
        спокою та насолодитися природою Закарпаття. Відпочинок тут дарує не лише
        комфорт, але й унікальні враження, адже поєднує сучасні зручності та
        багатство місцевих ландшафтів. Розташування поруч з Ужгородом дозволяє з
        легкістю планувати екскурсії до культурних та історичних пам’яток, а
        також відкриває доступ до найкращих гастрономічних закладів регіону.
        Будиночки в цьому районі гармонійно вписуються в природне оточення.
        Затишні дерев’яні котеджі з панорамними вікнами, звідки відкриваються
        краєвиди на Карпати чи тихі річки, створюють ідеальні умови для
        відпочинку від метушні. Багато варіантів пропонують додаткові послуги:
        від сауни і джакузі до приватних терас з мангалами, що робить кожне
        перебування особливим. Відмінна риса Ужгородського району — це
        різноманіття активностей. Навколишні ліси та гірські маршрути пропонують
        чудові можливості для хайкінгу, велопрогулянок чи навіть катання на
        конях. Любителі більш спокійного відпочинку можуть насолодитися
        риболовлею або організувати пікнік біля води. До того ж, відстань до
        таких відомих місць, як Ужгородський замок чи Лумшорські водоспади,
        дозволяє поєднувати спокійний відпочинок з пізнавальними екскурсіями.
        Будиночки в Ужгородському районі — це не просто житло, це досвід
        занурення в закарпатську культуру та природу, що робить кожен візит
        незабутнім.
      </p>
    </RealtyPage>
  );
}