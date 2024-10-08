import RealtyBanerGeneral from "@/components/Baners/RealtyBanerGeneral/RealtyBanerGeneral";
import ImageArticleLeft from "@/components/Blocks/ImageArticleLeft/ImageArticleLeft";
import Content from "@/components/Page/ContentPage/Content/Content";
import ContentPage from "@/components/Page/ContentPage/ContentPage";
import Info from "@/components/Page/ContentPage/Info/Info";
import ContentPageHeader from "@/components/Page/ContentPage/ContentPageHeader/ContentPageHeader";
import RealtyBanerThreeItems from "@/components/Baners/RealtyBanerThreeItems/RealtyBanerThreeItems";
import SocialMediaSidebar from "@/components/Blocks/SocialMediaSidebar/SocialMediaSidebar";
import ImageArticleRight from "@/components/Blocks/ImageArticleRight/ImageArticleRight";
import SidebarAd from "@/components/Baners/SidebarAd/SidebarAd";

export default function Home() {
  return (
    <main>
      <ContentPageHeader
        title="Відпочинок в Карпатах"
        src="/regular/mountain-header.png"
        alt="Вид на карпати"
        hrefRealty="/realty"
        hrefTours="/tours"
        hrefPlaces="/places"
      />
      <ContentPage>
        <Content>
          <ImageArticleLeft
            src={"/articles/carpaty1_main.jpg"}
            alt="Вид на карпати"
            title="українські карпати"
          />
          <p>
            Карпати – це справжній скарб української природи. Місце, де можна
            сповнитися натхненням, енергією природи та відпочити морально і
            фізично. Багато наших співвідчизників скептично ставляться до якості
            відпочинку в Україні, але, повірте, в останні роки все сильно
            помінялося. Відпочинок в карпатах є доступним та оптимальним
            варіантом здобути нові враження та при цьому потратити не всі гроші.
            Величезна кількість різноманітно житла, туристичних програм,
            атракціонів природних парків та маршрутів заставить вас повертатися
            сюди далеко не один раз. Відпочинок у Карпатах один з найкращих
            варіантів відволіктися від сірої буденності та запастися враженнями
            на довгий час!
          </p>
          <RealtyBanerGeneral />
          <h2>Де можна поселитися для відпочинку в Карпатах?</h2>
          <p>
            Проживання в Карпатах для вас точно не стане проблемою. Туристична
            інфраструктура місцевості настільки швидко розвивається, що
            практично кожного дня відкриваються нові готелі, котеджні комплекси,
            інстаграм – будиночки , приватні садиби. При цьому власники
            стараються зробити умови проживання настільки комфортними та
            оригінальними на скільки це можливо, бо конкуренція в регіоні
            постійно зростає, тому, потрібно завжди бути на крок попреду
            конкурентів. Це, у свою чергу, є на руку туристам, бо ціни будуть
            прийнятними, а умови на вищому рівні. З іншої сторони завжди можна
            вибрати житло, яке б задовільняло бюджет і потреби, а враження від
            відпочинку в Карпатах більшою мірю забезпечить краєвид та туристичні
            програми.
          </p>
          <RealtyBanerThreeItems
            src1="/baners/house-baner.jpg"
            alt1="Будинок в горах"
            src2="/baners/gamping-baner.jpg"
            alt2="Гемпінг"
            src3="/baners/hotel-baner.jpg"
            alt3="Готель"
          />
          <h2>Найпопулярніші туристичні місця українських Карпат.</h2>
          <p>
            Українські Карпати є одним з найпопулярніших туристичних регіонів
            України, завдяки своїй унікальній природі, культурі та історії. Ось
            деякі з найпопулярніших туристичних місць: 1. Говерла Найвища гора
            України (2061 м). Говерла є популярним місцем для трекінгу і
            альпінізму. Маршрут до вершини є доступним для туристів різного
            рівня підготовки. 2. Буковель Найбільший гірськолижний курорт в
            Україні. Взимку приваблює тисячі туристів для катання на лижах та
            сноуборді, а влітку пропонує велопрогулянки, піші походи та
            відпочинок на природі. 3. Яремче Відомий курорт з мальовничими
            водоспадами, такими як Пробій, та старовинними дерев'яними церквами.
            Яремче також є центром гуцульської культури. 4. Верховина Культурний
            центр Гуцульщини, відоме своєю традиційною архітектурою та музеями,
            такими як Музей Гуцульського побуту та Музей музичних інструментів
            Романа Кумлика.</p>
            <ImageArticleRight src="/articles/goverla_main.jpg" alt="Говерла" title="говерла"/>
            <p> 5. Синевирське озеро Найбільше озеро Карпат, оточене
            густими лісами. Воно часто називається "Морським Оком Карпат" і є
            популярним місцем для піших прогулянок та фотозйомок. 6. Поляниця
            Популярне місце серед туристів завдяки своїм красивим краєвидам і
            близькості до курорту Буковель. Тут можна знайти як зимові розваги,
            так і літні активності. 7. Драгобрат Найвисокогірніший гірськолижний
            курорт України, розташований на висоті 1400 метрів над рівнем моря.
            Це чудове місце для катання на лижах та сноуборді в зимовий період.
            8. Рахів Найвисокогірніше місто України, розташоване в мальовничій
            місцевості. Тут починаються маршрути на Говерлу, Петрос та інші
            гори. 9. Шипітський водоспад Один із найвідоміших водоспадів Карпат,
            розташований біля села Пилипець. Висота водоспаду становить близько
            14 метрів, і це популярне місце для туристів. 10. Тустань
            Середньовічна фортеця, вирізьблена в скелях, розташована в
            Сколівських Бескидах. Це історико-архітектурний заповідник з
            багатьма пішохідними маршрутами. 11. Ворохта Курортне селище, відоме
            своїми старовинними арковими мостами (віадуками), які є одними з
            найвищих в Україні. Це також популярне місце для підйому на Говерлу.
            12. Коломия Місто відоме своїм музеєм "Писанка", де можна побачити
            різноманітні писанки з усієї України.
          </p>
        </Content>
        <Info>
          <SocialMediaSidebar />
          <SidebarAd src="/baners/house-sidebar-baner-1.jpg" alt="Реклама банер" title="Файний House" location="Мукачево"/>
          <SidebarAd src="/baners/house-sidebar-baner-2.jpg" alt="Реклама банер" title="Лісова хатинка" location="Верховина"/>
          <SidebarAd src="/baners/house-sidebar-baner-3.jpg" alt="Реклама банер" title='Котедж "Зелений гайок"'location="Криворівня"/>

        </Info>
      </ContentPage>
    </main>
  );
}

