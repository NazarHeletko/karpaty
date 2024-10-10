import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Житло в Самбірському районі: Ідеальний вибір для відпочинку в Карпатах | Мої Карпати",
  description:
    "Житло в Самбірському районі Карпат – ідеальний варіант для комфортного відпочинку в оточенні природи. Орендуйте затишні котеджі чи апартаменти та насолоджуйтесь мальовничими горами, свіжим повітрям і місцевою гостинністю.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={""}
      />
      <RealtyItems
        firstFilter={[
          { title: "Житло у Самбірському районі" },
          { raion: "/sambir-raion" },
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
        Самбірський район, що знаходиться у мальовничих Карпатах, є ідеальним
        вибором для тих, хто шукає спокійний відпочинок у гармонії з природою.
        Оренда житла тут відкриває можливість повністю відчути красу гірського
        регіону та насолодитися традиціями місцевої культури. Від комфортних
        котеджів до сучасних апартаментів – вибір житла в Самбірському районі
        різноманітний, і кожен знайде те, що відповідає його очікуванням. Усі
        варіанти забезпечені необхідними умовами для зручного проживання,
        створюючи затишну атмосферу для вашого відпочинку. Цей куточок Карпат
        приваблює неймовірними гірськими краєвидами, чистим повітрям і безліччю
        можливостей для активного проведення часу. Тут можна вирушити на
        пішохідні маршрути, покататися на велосипеді або порибалити на місцевих
        водоймах. Крім того, місцеві кафе та ресторани здивують вас стравами
        автентичної кухні та привітністю господарів. Обираючи житло в
        Самбірському районі, ви отримуєте можливість відпочити в тихому,
        мальовничому місці та відчути справжній карпатський колорит, поєднаний з
        сучасними зручностями.
      </p>
    </RealtyPage>
  );
}
