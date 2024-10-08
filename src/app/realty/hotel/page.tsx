import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі в Карпатах – Комфортний Відпочинок у Серці Гір| Мої Карпати",
  description:
    "Обирайте готелі в Карпатах для незабутнього відпочинку серед гірських пейзажів. Комфортні номери, сервіс на найвищому рівні та близькість до природи зроблять вашу подорож особливою.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty oblast={""} raion={""} city={""} building={"/hotel"} />
      <RealtyItems
        firstFilter={[{ title: "Готелі в Карпатах" }, { type: "hotel" }]}
        secondFilter={[]}
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
        Карпати – чудовий вибір для тих, хто прагне поєднати активний відпочинок
        з природною гармонією. Готелі в цьому регіоні надають зручність, затишок
        та безліч варіантів для проведення незабутнього часу. Проживання в
        готелях Карпат має безліч переваг. Ви знайдете великий вибір варіантів,
        від недорогих до преміум-класу з високим рівнем сервісу. В багатьох
        закладах доступні ресторани, спа-процедури, дитячі майданчики та
        конференц-зали для максимального комфорту. Готелі розташовані в
        мальовничих місцях, звідки відкриваються панорамні краєвиди на гори.
        Також тут доступні широкі можливості для активного відпочинку: катання
        на лижах взимку, походи в гори або риболовля влітку – все це поруч. При
        виборі готелю врахуйте сезонність, розташування і доступні послуги, щоб
        зробити ваш відпочинок у Карпатах особливим.
      </p>
    </RealtyPage>
  );
}
