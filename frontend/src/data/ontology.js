// Схема базы знаний «Кулинарная книга»: типы сущностей и связи между ними.
// Координаты (x, y) нужны только для отрисовки схемы на странице «Схема БЗ».
const row2 = (i) => 75 + i * 125;

export const nodes = [
  { id: 'Dish', ru: 'Блюдо', x: 700, y: 40 },

  { id: 'Cuisine', ru: 'Кухня', x: row2(0), y: 190 },
  { id: 'Diet', ru: 'Диета', x: row2(1), y: 190 },
  { id: 'Course', ru: 'Тип блюда', x: row2(2), y: 190 },
  { id: 'CookingMethod', ru: 'Способ', x: row2(3), y: 190 },
  { id: 'Season', ru: 'Сезон', x: row2(4), y: 190 },
  { id: 'Occasion', ru: 'Повод', x: row2(5), y: 190 },
  { id: 'Region', ru: 'Регион', x: row2(6), y: 190 },
  { id: 'Author', ru: 'Автор', x: row2(7), y: 190 },
  { id: 'Source', ru: 'Источник', x: row2(8), y: 190 },
  { id: 'Tag', ru: 'Тег', x: row2(9), y: 190 },
  { id: 'Step', ru: 'Шаг', x: row2(10), y: 190 },

  { id: 'Utensil', ru: 'Утварь', x: 880, y: 350 },
  { id: 'Technique', ru: 'Техника', x: 1030, y: 350 },
  { id: 'Ingredient', ru: 'Ингредиент', x: 1200, y: 350 },

  { id: 'Nutrient', ru: 'Нутриент', x: 330, y: 510 },
  { id: 'Allergen', ru: 'Аллерген', x: 900, y: 510 },
  { id: 'Brand', ru: 'Бренд', x: 1060, y: 510 },
  { id: 'IngredientCategory', ru: 'Категория', x: 1240, y: 510 },
];

export const edges = [
  ['Dish', 'Cuisine', 'BELONGS_TO'],
  ['Dish', 'Diet', 'SUITABLE_FOR'],
  ['Dish', 'Course', 'HAS_COURSE'],
  ['Dish', 'CookingMethod', 'USES_METHOD'],
  ['Dish', 'Season', 'IN_SEASON'],
  ['Dish', 'Occasion', 'SERVED_AT'],
  ['Dish', 'Region', 'FROM_REGION'],
  ['Dish', 'Author', 'CREATED_BY'],
  ['Dish', 'Source', 'SOURCED_FROM'],
  ['Dish', 'Tag', 'TAGGED_WITH'],
  ['Dish', 'Step', 'HAS_STEP'],
  ['Dish', 'Utensil', 'REQUIRES_UTENSIL'],
  ['Dish', 'Technique', 'USES_TECHNIQUE'],
  ['Dish', 'Ingredient', 'CONTAINS'],
  ['Dish', 'Nutrient', 'HAS_NUTRIENT'],
  ['Step', 'Utensil', 'USES_UTENSIL'],
  ['Step', 'Technique', 'USES_TECHNIQUE'],
  ['Step', 'Ingredient', 'USES_INGREDIENT'],
  ['Ingredient', 'Nutrient', 'HAS_NUTRIENT'],
  ['Ingredient', 'Allergen', 'CONTAINS_ALLERGEN'],
  ['Ingredient', 'Brand', 'FROM_BRAND'],
  ['Ingredient', 'IngredientCategory', 'HAS_CATEGORY'],
];

// Связи узла с самим собой
export const selfEdges = [
  ['Dish', 'VARIANT_OF'],
  ['Ingredient', 'HAS_SUBSTITUTE'],
  ['IngredientCategory', 'SUBCATEGORY_OF'],
];
