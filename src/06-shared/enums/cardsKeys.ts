interface SectionItem {
    label: string;
    name: string;
}

const sections: SectionItem[] = [  { label: 'Описание', name: 'Description' },
    { label: 'Вера', name: 'Faith' },
    { label: 'Имена', name: 'ExamplesOfNames' },
    { label: 'Детали', name: 'OtherInformation' },
    { label: 'Характеристики', name: 'Parameters' },
]

export default sections;