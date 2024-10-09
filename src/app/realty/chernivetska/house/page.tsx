import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Будинки в Чернівецькій області: знайдіть свій куточок для відпочинку | Мої Карпати",
  description:
    "Відкрийте для себе затишні будинки в Чернівецькій області, ідеальні для сімейного відпочинку або романтичних вікендів. Наш сайт пропонує широкий вибір житла в мальовничих куточках регіону, де ви зможете насолоджуватись природою, комфортом та спокоєм. Від класичних дерев'яних будинків до сучасних котеджів – кожен знайде тут щось для себе. Розслабтесь у тихій атмосфері, займіться активним відпочинком на природі або просто насолоджуйтесь краєвидами гір і лісів.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={""}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Чернівецькій області" },
          { oblast: "/chernivetska", type: "house" },
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
        Чому варто обрати будиночок для відпочинку в Чернівецьких Карпатах?
        Відпочинок у Карпатах – це можливість поєднати комфорт і близькість до
        природи. Оренда будиночка в Чернівецьких Карпатах дарує повну свободу:
        ви самостійно плануєте свій день, не підлаштовуючись під графіки та
        розклади. У таких будиночках панує затишна атмосфера, яка дозволяє
        розслабитися і відійти від буденних справ. Гірське повітря, неймовірні
        краєвиди та спів птахів стають вашими щоденними супутниками. Будиночки
        розташовані в мальовничих куточках, оточені лісами й горами, що створює
        особливу атмосферу гармонії з природою. Активний відпочинок тут – на
        будь-який смак: походи в гори, катання на лижах або велосипедах,
        риболовля чи піші прогулянки – усе це доступне в будь-яку пору року.
        Також приємним бонусом є можливість самостійно готувати їжу на свіжому
        повітрі, завдяки наявності мангалів чи барбекю-зон. Відпочинок у такому
        форматі ідеально підходить для сімейних поїздок, оскільки створює
        затишну атмосферу для спілкування та спільного проведення часу. Діти
        можуть насолоджуватися грою на природі, а дорослі – повним релаксом. Ви
        також можете взяти з собою домашніх улюбленців, адже багато будиночків
        готові прийняти гостей з тваринами.
      </p>
    </RealtyPage>
  );
}
