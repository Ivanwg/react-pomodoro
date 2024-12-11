export default function (plop) {
    // Создаем новый генератор с именем 'component'
    plop.setGenerator('component', {
        // Описание генератора
        description: 'Создать новый компонент',
        
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
                path: 'src/components/{{dashCase name}}.tsx',
                // Указываем шаблон
                templateFile: 'plop-templates/component.hbs',
            }
        ],
    });
    plop.setGenerator('shared', {
        description: 'Создать новый компонент',
        
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
                path: 'src/components/shared/{{dashCase name}}.tsx',
                templateFile: 'plop-templates/component.hbs',
            }
        ],
    });
};