import "./pages/index.scss"
import Accardion from "./components/Accardion/Accardion"
const accardions = document.querySelector(".accordions");

const arr = [
    {
      "title": "Заработанные средства",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "Крупные клиенты",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "title": "Инклюзивность",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "title": "Свои исследования",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "title": "Использование Digital",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "title": "Большой опыт",
      "body": "За время сущетсования проекта с 2016 года социальная предпринимательская модель Everland доказала свою эффективность  - мы действительно умеем давать работу людям с разными видами инвалидности"
    },
]


const renderAcardeon = (() => {
    arr.forEach(element => {
        const accardion = new Accardion('.accardion__template', element);
        const accardionElement = accardion.generate();
        accardions.append(accardionElement);
    });
})

renderAcardeon();