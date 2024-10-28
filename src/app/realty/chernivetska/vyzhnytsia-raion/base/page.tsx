import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бази відпочинку у Вижницькому районі | Мої Карпати",
  description:
    "Бази відпочинку у Вижницькому районі пропонують ідеальне місце для релаксації серед карпатських красот. Насолоджуйтесь комфортом сучасних котеджів, затишних будиночків і дружньою атмосферою. Відкрийте для себе можливості активного відпочинку: піші прогулянки, риболовлю та екскурсії до місцевих пам’яток. Скуштуйте смачні страви місцевої кухні і відпочиньте від повсякденної метушні. Ваш незабутній відпочинок чекає на вас у Вижницькому районі!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion", type: "base" },
        ]}
        secondFilter={[
          { title: "Житло у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Чернівецькій області" },
          { oblast: "/chernivetska" },
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
        На базах відпочинку ви знайдете різноманітні варіанти житла — від
        затишних дерев'яних котеджів до сучасних номерів з усіма зручностями.
        Кожен з них спроектований так, щоб ви могли відчути тепло домашнього
        затишку, насолоджуючись при цьому мальовничими краєвидами навколо.
        Просторі тераси та зелені двори запрошують вас на ранкову каву під спів
        птахів або романтичні вечори під зоряним небом. Але Вижницький район —
        це не лише комфорт. Це також безмежні можливості для активного
        відпочинку! Прогулянки по мальовничих стежках, які ведуть до таємничих
        водоспадів і захоплюючих панорам, дарують вам відчуття свободи та
        єднання з природою. Для любителів риболовлі місцеві ріки стануть
        справжнім подарунком, а зимові місяці відкриють двері до лижних трас, де
        адреналін б'є ключем.
      </p>
    </RealtyPage>
  );
}
