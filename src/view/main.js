import 'regenerator-runtime';
import '../script/component/app-bar';
import '../script/component/form-control me-2';
import DataSource from '../public/data/DATA.json';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
