import delay from './delay'

const todos = [
    {
        id: 0,
        content: 'eat'
    },
    {
        id: 1,
        content: 'sleep'
    },
    {
        id: 2,
        content: 'study'
    },
    {
        id: 3,
        content: 'code'
    },
    {
        id: 4,
        content: null
    }
]

export default async () => {
    await delay(3000)
    return todos
}