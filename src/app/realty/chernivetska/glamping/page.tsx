import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінги в Чернівецькій області: комфорт у природі | Мої Карпати",
  description:
    "Відкрийте для себе глемпінги в Чернівецькій області — ідеальне місце для поєднання комфорту та природи. Насолоджуйтеся розкішним відпочинком у затишних наметах серед мальовничих Карпат. Обирайте зручності, активний відпочинок на свіжому повітрі та романтичні вечори під зоряним небом. Глемпінги Чернівецької області забезпечать вам незабутні враження і можливість поринути у красу дикої природи.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={""}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Чернівецькій області" },
          { oblast: "/chernivetska", type: "glamping" },
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
        Глемпінги в Чернівецькій області: Ваш комфортний куточок на природі.
        Глемпінг у Чернівецькій області — це чудовий спосіб насолодитися
        природою Карпат без компромісів у комфорті. Цей новий формат відпочинку
        дозволяє вам поєднати зручності готелів із близькістю до живописних
        ландшафтів. Чому обрати глемпінг? Перш за все, глемпінги пропонують
        неперевершену атмосферу для єднання з природою. Ви зможете
        насолоджуватися свіжим повітрям, слухати звуки природи та спостерігати
        зоряне небо прямо з вашого намету. Багато глемпінгів розташовані в
        мальовничих місцях, що відкривають захоплюючі види на навколишні гори і
        ліси. Крім того, сучасні глемпінги обладнані всім необхідним для
        комфортного перебування: затишні ліжка, електрика, опалення та інколи
        навіть ванні кімнати. Це забезпечує вам комфорт, не відмовляючи від
        природних вражень. Не менш важливим є те, що глемпінги часто пропонують
        різноманітні активності на свіжому повітрі, такі як пішохідні маршрути,
        велоекскурсії, риболовля чи відвідування місцевих пам’яток. Це робить
        ваш відпочинок більш насиченим і цікавим. Унікальні враження Проживання
        в глемпінгу — це не просто нічліг, а можливість отримати незабутні
        враження. Увечері ви зможете зібратися біля вогнища, смакувати смачні
        страви на свіжому повітрі та проводити час з близькими. Глемпінг у
        Чернівецькій області — це ідеальний вибір для романтичного вихідного,
        сімейного відпочинку або втечі від міської суєти. Виберіть глемпінг як
        свій наступний пункт призначення та насолоджуйтеся красою Карпат у
        комфорті!
      </p>
    </RealtyPage>
  );
}
