import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Житло в Карпатах: Найкращі варіанти оренди у Стрийському районі для вашого відпочинку | Мої Карпати",
  description:
    "Знайдіть ідеальне житло у Стрийському районі в Карпатах! Пропонуємо котеджі, готелі та садиби для будь-якого відпочинку. Насолоджуйтесь природою, комфортом та незабутніми враженнями. Забронюйте зараз!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={""}
      />
      <RealtyItems
        firstFilter={[
          { title: "Житло у Стрийському районі" },
          { raion: "/stryi-raion" },
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
        Карпати завжди були привабливим напрямком для тих, хто шукає гармонії з
        природою та відпочинку від метушні повсякденного життя. Стрийський
        район, розташований в серці Івано-Франківської області, пропонує безліч
        можливостей для комфортного проживання. У цій статті ми розглянемо
        кілька найцікавіших варіантів житла, які можуть стати вашим домом під
        час подорожі до цього прекрасного регіону. Одним із найпопулярніших
        варіантів є гірські котеджі, які вражають своєю атмосферою затишку та
        домашнього тепла. Вони зазвичай мають все необхідне для комфортного
        перебування: кухні для приготування смачних страв, каміни для
        романтичних вечорів та тераси з приголомшливими краєвидами на гори.
        Багато котеджів розташовані поруч із лижними трасами, що робить їх
        ідеальним місцем для зимового активного відпочинку. Якщо ви прагнете
        автентичності, варто звернути увагу на приватні садиби. Оренда такої
        садиби — це не просто житло, а можливість зануритися в традиційну
        культуру Карпат. Господарі часто пропонують не тільки комфортні умови,
        але й смачну домашню кухню, екскурсії по навколишніх пам'ятках та цікаві
        розваги. Ви зможете насолодитися карпатською гостинністю, що залишить
        приємні спогади. Для любителів зручностей у Стрийському районі є
        різноманітні готелі, включаючи еко-готелі, які пропонують не лише
        комфорт, а й можливість зберегти зв'язок з природою. Готелі зазвичай
        мають все, що потрібно для безтурботного відпочинку: ресторани,
        спа-послуги, тренажерні зали та організацію екскурсій. Еко-готелі ж, у
        свою чергу, підкреслюють важливість сталого розвитку та намагаються
        зберегти навколишнє середовище, надаючи своїм гостям унікальний досвід.
      </p>
    </RealtyPage>
  );
}
