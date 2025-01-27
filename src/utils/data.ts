import { Filter } from "@/@types/filter"

export const category = [
    'camiseta',
    'calça',
    'short',
    'todos'
]

export const sizes = [
    'XX-Small',
    'X-Small',
    'Small',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large',
    'todos',
]

export const allfilters:Filter[] = [
    {
        type: 'category',
        options: [
            'camisetas',
            'calças',
            'shorts',
        ]
    },
    {
        type: 'size',
        options: [
            'XX-Small',
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            'XX-Large',
            '3X-Large',
            '4X-Large',
        ]
    }
]