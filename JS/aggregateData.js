export const data = [
    {
        id: 1,
        name: 'first item',
        category: {
            id: 1,
            name: 'items'
        }
    },
    {
        id: 2,
        name: 'second item',
        category: {
            id: 1,
            name: 'items'
        }
    },
    {
        id: 3,
        name: 'first object',
        category: {
            id: 2,
            name: 'objects'
        }
    },
    {
        id: 4,
        name: 'second object',
        category: {
            id: 3,
            name: 'objects'
        }
    }
];

/**
 * sortData should sort the list of data by category for display in UI
 */
function sortData (data) {
    ...
}

/**
 * output: [
 *   {
 *     category: {
 *       id: Number,
 *       name: String
 *     },
 *     data: [ .. ]
 *   },
 *   ...
 * ]
 */

