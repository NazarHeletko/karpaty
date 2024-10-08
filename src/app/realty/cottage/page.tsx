import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Затишні котеджі в Карпатах – ідеальне місце для вашого відпочинку серед природи| Мої Карпати",
  description:
    "Оренда затишних котеджів у Карпатах для комфортного відпочинку серед гір та природи. Оберіть ідеальне житло для відпочинку в будь-яку пору року, насолоджуючись мальовничими краєвидами та свіжим повітрям.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty oblast={""} raion={""} city={""} building={"/cottage"} />
      <RealtyItems
        firstFilter={[{ title: "Котеджі в Карпатах" }, { type: "cottage" }]}
        secondFilter={[]}
        thirdFilter={[]}
        forthFilter={[]}
        fifthFilter={[{ title: "Інше житло в Карпатах" }, { place: "all" }]}
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
        Відпочинок у котеджах Карпат – це чудовий спосіб провести час серед гір,
        насолоджуючись красою природи та затишком. Приватні котеджі забезпечують
        комфорт і незалежність, дозволяючи вам розслабитися у спокої та
        самостійно планувати свій відпочинок. Тут ви зможете проводити вечори
        біля каміна, готувати улюблені страви та насолоджуватися часом з
        близькими. Карпати – це місце, де природа захоплює своєю красою. Чисте
        повітря, густі ліси, величні гори та спокійні озера створюють ідеальні
        умови для відновлення сил. Для любителів активного відпочинку Карпати
        пропонують численні можливості: взимку катання на лижах та сноуборді, а
        влітку – походи, веломаршрути та риболовлю. Кожен зможе знайти котедж за
        своїм смаком: від затишних дерев'яних будинків з традиційною атмосферою
        до сучасних варіантів із зручностями, які забезпечують максимальний
        комфорт.
      </p>
    </RealtyPage>
  );
}
