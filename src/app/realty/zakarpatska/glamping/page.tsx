import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Закарпатські глемпінги: Унікальний досвід у серці Карпат | Мої Карпати",
  description:
    "Глемпінги Закарпатської області – це ідеальне місце для тих, хто прагне відпочити на природі з усіма зручностями. Вибирайте з різноманітних локацій, насолоджуйтесь чудовими краєвидами та сучасними зручностями. Відчуйте справжній комфорт під зоряним небом!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={""}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Куполи у Закарпатській області" },
          { oblast: "/zakarpatska", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Закарпатській області" },
          { oblast: "/zakarpatska" },
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
        Глемпінг у Закарпатті: насолода природою з комфортом. Глемпінг – це новий
        спосіб відпочинку, що поєднує в собі романтику кемпінгу та зручності
        готельного номера. Закарпаття, відоме своєю захоплюючою природою і
        мальовничими краєвидами, ідеально підходить для тих, хто бажає
        насолодитися цією унікальною формою відпочинку. Уявіть собі: ви
        занурюєтеся у природу, спите під зоряним небом, але водночас у вас є все
        необхідне для комфорту. Глемпінг забезпечує наявність зручних ліжок,
        сучасних ванних кімнат і навіть кухонь, що робить ваше перебування
        максимально комфортним. Обираючи глемпінг у Закарпатті, ви отримуєте
        можливість зануритися у світ незайманої природи, насолоджуючись
        приголомшливими краєвидами. Це не просто відпочинок, а можливість
        відчути справжню гармонію з навколишнім світом. Закарпаття вражає своїми
        горами, лісами, ріками та озерами, а глемпінги розташовані в
        найкрасивіших куточках регіону. Тут ви зможете насолодитися захоплюючими
        пейзажами, які відкриваються прямо з вашого намету. Багато глемпінгів
        пропонують різноманітні активності на свіжому повітрі: піші прогулянки,
        велопоїздки, риболовлю чи катання на конях. Кожен знайде щось для себе,
        незалежно від того, чи шукаєте ви спокій і релакс, чи пригоди.
        Екологічний аспект також є важливим. Глемпінги в Закарпатті будуються з
        використанням натуральних матеріалів і практик, які мінімізують вплив на
        навколишнє середовище, забезпечуючи відпочинок без шкоди природі. Ваше
        перебування в глемпінгу може бути доповнене різними послугами, такими як
        харчування, сауни або організація екскурсій. Це робить глемпінг у
        Закарпатті ідеальним вибором для тих, хто прагне поєднати комфорт з
        відпочинком на природі та отримати незабутні враження.
      </p>
    </RealtyPage>
  );
}