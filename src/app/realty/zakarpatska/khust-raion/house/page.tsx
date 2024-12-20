import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Комфортні будинки для відпочинку у Хустській області - Ваша ідеальна getaway | Мої Карпати",
  description:
    "Зануртеся у відпочинок на природі, обираючи затишні будинки у Хустській області. Відкрийте для себе мальовничі краєвиди Карпат, де кожен момент наповнений атмосферою спокою та гармонії. Наші комфортабельні будинки ідеально підійдуть для сімейного відпочинку чи романтичного виходу на природу. Створіть незабутні спогади з близькими, насолоджуючись активним відпочинком та місцевими делікатесами!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/khust-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Хустському районі" },
          { raion: "/khust-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Хустському районі" },
          { raion: "/khust-raion" },
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
        Хустська область — це справжня перлина Закарпаття, що вабить своєю
        незайманою природою, багатою історією та самобутньою культурою. Якщо ви
        мрієте про відпочинок у цьому мальовничому регіоні, зверніть увагу на
        комфортні будинки, які подарують вам атмосферу домашнього затишку та
        безтурботності. Цей край вражає різноманіттям своїх краєвидів: величні
        гори, густі ліси, бурхливі річки та кришталево чисті озера створюють
        ідеальні умови для активного відпочинку. Ви зможете зануритися в
        атмосферу пригод, зайнявшись пішими походами, велосипедними прогулянками
        чи риболовлею. Хустська область пропонує безліч можливостей для
        дослідження природи, де кожен куточок залишить у вашій пам’яті незабутні
        враження. Обираючи будинок, ви отримуєте не лише комфорт, а й можливість
        насолодитися приватністю. Затишні апартаменти з усіма сучасними
        зручностями створять ідеальні умови для релаксації після активного дня.
        Багато з цих будинків мають просторі двори, де ви можете влаштувати
        пікнік на свіжому повітрі, приготувати страви на грилі або просто
        насолодитися природою в оточенні гір. Не менш важливою частиною
        відпочинку є можливість зануритися в місцеву культуру. Хустська область
        славиться своїми традиціями, ремеслами та смачною кухнею. Відвідавши
        місцеві ринки, ви зможете скуштувати автентичні закарпатські страви та
        насолодитися гостинністю місцевих жителів, які завжди раді поділитися
        своїми кулінарними секретами. Цей регіон також відомий своїми цілющими
        джерелами та термальними водами, які здатні відновити сили і покращити
        загальний стан здоров’я. Це ідеальне місце для тих, хто прагне поєднати
        відпочинок з лікуванням, занурившись у терапевтичні процедури. Обираючи
        будинок у Хустській області, ви робите правильний вибір для активного
        відпочинку, культурних вражень та гармонії з природою. Не пропустіть
        шанс забронювати свій куточок затишку вже сьогодні та відкрийте для себе
        справжню красу Закарпаття!
      </p>
    </RealtyPage>
  );
}