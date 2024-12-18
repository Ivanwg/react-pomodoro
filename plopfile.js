export default function (plop) {
  // Создаем новый генератор с именем 'component'
  plop.setGenerator('app', {
    // Описание генератора
    description: 'Создать новый компонент слоя app',

    // Промпты для ввода данных
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента:',
      }
    ],

    // Действия для создания файла на основе шаблона
    actions: [
      {
        type: 'add',
        // Путь до создаваемого файла
        path: 'src/app/{{dashCase name}}.tsx',
        // Указываем шаблон
        templateFile: 'plop-templates/component.hbs',
      }
    ],
  });
  plop.setGenerator('pages', {
    // Описание генератора
    description: 'Создать новый компонент слоя pages',

    // Промпты для ввода данных
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента:',
      }
    ],

    // Действия для создания файла на основе шаблона
    actions: [
      {
        type: 'add',
        // Путь до создаваемого файла
        path: 'src/pages/{{dashCase name}}.tsx',
        // Указываем шаблон
        templateFile: 'plop-templates/component.hbs',
      }
    ],
  });
  plop.setGenerator('widgets', {
    // Описание генератора
    description: 'Создать новый компонент слоя widgets',

    // Промпты для ввода данных
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента:',
      }
    ],

    // Действия для создания файла на основе шаблона
    actions: [
      {
        type: 'add',
        // Путь до создаваемого файла
        path: 'src/widgets/{{dashCase name}}.tsx',
        // Указываем шаблон
        templateFile: 'plop-templates/component.hbs',
      }
    ],
  });
  plop.setGenerator('features', {
    // Описание генератора
    description: 'Создать новый компонент слоя features',

    // Промпты для ввода данных
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента:',
      }
    ],

    // Действия для создания файла на основе шаблона
    actions: [
      {
        type: 'add',
        // Путь до создаваемого файла
        path: 'src/features/{{dashCase name}}.tsx',
        // Указываем шаблон
        templateFile: 'plop-templates/component.hbs',
      }
    ],
  });
  plop.setGenerator('shared', {
    description: 'Создать новый ui компонент слоя shared',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента:',
      }
    ],

    actions: [
      {
        type: 'add',
        path: 'src/shared/ui/{{dashCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      }
    ],
  });
};