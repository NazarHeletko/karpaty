import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бази відпочинку у Верховинському районі | Мої Карпати",
  description:
    "Бази відпочинку у Верховинському районі — ідеальне місце для романтичного втечі серед карпатських краєвидів. Затишні котеджі, вечори при свічках і незабутні прогулянки створять магію вашого відпочинку!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Верховинському районі" },
          { raion: "/verkhovyna-raion", type: "base" },
        ]}
        secondFilter={[
          { title: "Житло у Верховинському районі" },
          { raion: "/verkhovyna-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
        У кожній базі ви знайдете комфортні котеджі, створені з любов’ю до
        деталей. Тут все продумано для вашого зручності: від сучасних зручностей
        до теплої атмосфери, що надихає на відпочинок і релаксацію. З вікон
        відкриваються вражаючі краєвиди, які запам’ятаються назавжди. Верховина
        приваблює не лише красою своїх ландшафтів, але й безмежними можливостями
        для активного відпочинку. Ви зможете насолоджуватися прогулянками
        мальовничими стежками, катанням на лижах або велосипедах, а також
        дослідженням місцевих традицій і культури. А вечори тут наповнені
        чарівністю: розпалений вогонь, зоряне небо та час, проведений у колі
        близьких. Вибираючи бази відпочинку у Верховинському районі, ви
        відкриваєте для себе місце, де зливаються комфорт і природа, де кожен
        момент стає незабутнім. Дозвольте собі насолодитися цією казкою і
        створити спогади, які залишаться з вами назавжди.
      </p>
    </RealtyPage>
  );
}
