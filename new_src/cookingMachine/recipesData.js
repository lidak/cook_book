export const recipes = [
    {
        name: 'americano',
        steps: [
            {
                moduleName: 'kettle',
                ingredients: [
                    {
                        name: 'coffee',
                        amount: 1
                    }
                ],
                availableOptions: [
                    {
                        name: 'sugar',
                        uiType: 'number',
                        type: 'ingredient'
                    },
                    {
                        name: 'hot',
                        uiType: 'bool',
                        type: 'module'
                    }
                ],
                produce: 'cooked_coffee'
            },
            {
                moduleName: 'cup',
                ingredients: [
                    {
                        name: 'cooked_coffee',
                        amount: 1
                    }
                ],
                availableOptions: [
                    {
                        name: 'milk',
                        uiType: 'number',
                        type: 'ingredient'
                    },
                    {
                        name: 'cream',
                        uiType: 'number',
                        type: 'ingredient'
                    },
                    {
                        name: 'syrup',
                        uiType: 'number',
                        type: 'ingredient'
                    }
                ]
            }
        ]
    },
    {
        name: "steak",
        steps: [
            {
                moduleName: 'bowl',
                ingredients: [
                    {
                        name: 'meat',
                        amount: 1
                    },
                    {
                        name: 'marinade',
                        amount: 1
                    }
                ],
                availableOptions: [
                    {
                        name: 'jalapeno',
                        uiType: 'number',
                        type: 'ingredient'
                    },
                    {
                        name: 'chili',
                        uiType: 'number',
                        type: 'ingredient'
                    }
                ],
                produce: 'pickled meats'
            },
            {
                moduleName: 'pan',
                ingredients: [
                    {
                        name: 'pickled meats',
                        amount: 1
                    },
                    {
                        name: 'oil',
                        amount: 1
                    }
                ],
                options: [
                    {
                        name: 'medium',
                        time: 5,
                        temperature: 60,
                        type: 'module'
                    }
                ],
                availableOptions: [
                    {
                        name: 'doneness',
                        type: 'module',
                        uiType: 'select',
                        values: [
                            {
                                name: 'raw',
                                time: 0,
                                temperature: 0
                            },
                            {
                                name: 'rare',
                                time: 5,
                                temperature: 50
                            },
                            {
                                name: 'medium',
                                time: 5,
                                temperature: 60
                            },
                            {
                                name: 'well',
                                time: 10,
                                temperature: 77
                            }
                        ]
                    }
                ]
            }
        ]
    }
];