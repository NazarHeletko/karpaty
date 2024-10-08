import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Комфортне житло у Вижницькому районі Карпат для туристів | Мої Карпати",
  description:
    "Плануєте відпочинок у Карпатах? Забронюйте комфортне житло у Вижницькому районі. Затишні котеджі, садиби та готелі з чудовими краєвидами чекають на вас. Насолоджуйтесь чистим гірським повітрям і гостинністю місцевих жителів. Ваш ідеальний відпочинок починається тут!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={""}
      />
      <RealtyItems
        firstFilter={[
          { title: "Житло у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion" },
        ]}
        secondFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
        У Вижницькому районі ви знайдете безліч варіантів для проживання, що
        підійдуть як для великих компаній, так і для романтичних вікендів.
        Котеджі, розташовані серед мальовничих пейзажів, забезпечують
        максимальний комфорт і приватність. Вони зазвичай обладнані всім
        необхідним: кухнями, просторами для відпочинку та зручними спальнями, що
        дозволяє вам відчувати себе як вдома. Для тих, хто прагне зануритися в
        автентичну атмосферу Карпат, приватні садиби стануть ідеальним вибором.
        У таких місцях ви зможете скуштувати страви місцевої кухні, приготовані
        з любов’ю. Багато господарів пропонують екскурсії до найближчих
        природних пам’яток, що дозволить вам ближче познайомитися з унікальною
        культурою цього регіону. Готелі у Вижницькому районі пропонують
        зручності на будь-який смак. Вони забезпечують високий рівень
        обслуговування, включаючи ресторанні послуги, спа-процедури та
        організацію активного відпочинку. Готелі часто мають панорамні вікна,
        через які відкривається чудовий вид на карпатські вершини, що робить ваш
        відпочинок ще більш привабливим. Не забудьте про бюджетні варіанти, такі
        як хостели та кемпінги. Хостели — це чудове рішення для мандрівників,
        які цінують дружню атмосферу та можливість спілкуватися з іншими
        гостями. Кемпінги ж пропонують можливість зануритися в природу, ночуючи
        під відкритим небом та насолоджуючись звуками лісу.
      </p>
    </RealtyPage>
  );
}
