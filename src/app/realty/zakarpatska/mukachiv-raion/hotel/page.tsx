import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Готелі в Мукачівському Районі: Вибір для Ідеального Відпочинку в Карпатах | Мої Карпати",
  description:
    "Відкрийте для себе найкращі готелі в Мукачівському районі, де поєднуються комфорт та природа. Насолоджуйтеся незабутнім відпочинком у серці Карпат з унікальними можливостями для активного дозвілля, гастрономічними враженнями та автентичною атмосферою. Оберіть готель, який відповідає вашим потребам, і насолоджуйтеся затишком та гостинністю Закарпаття.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Мукачівському районі" },
          { raion: "/mukachiv-raion", type: "hotel" },
        ]}
        secondFilter={[
          { title: "Житло у Мукачівському районі" },
          { raion: "/mukachiv-raion" },
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
        Мукачівський район — ідеальне місце для вашого відпочинку в Карпатах.
        Цей регіон приваблює туристів своєю неймовірною природною красою,
        різноманітними активностями та привітністю місцевих жителів. Перш за
        все, мальовничі пейзажі, що оточують район, створюють атмосферу спокою і
        умиротворення. Гори, зелені ліси, річки і водоспади чекають на вас. Тут
        можна займатися пішими прогулянками, велопоїздками та риболовлею, а
        взимку — катанням на лижах. Готелі Мукачівського району пропонують
        комфортні умови для проживання. Ви зможете насолоджуватися смачними
        стравами місцевої кухні, спа-послугами та різноманітними розвагами. Це
        відмінний вибір для тих, хто цінує комфорт і затишок. Також варто
        звернути увагу на багатий культурний спадок Закарпаття. Ви матимете
        змогу скуштувати традиційні страви, ознайомитися з місцевими звичаями і
        придбати сувеніри від майстрів народних ремесел. Обираючи готель у
        Мукачівському районі, ви забезпечите собі незабутній відпочинок,
        наповнений новими враженнями та емоціями. Це місце стане справжнім
        куточком спокою, де ви зможете відновити сили та насолодитися часом,
        проведеним з близькими.
      </p>
    </RealtyPage>
  );
}
