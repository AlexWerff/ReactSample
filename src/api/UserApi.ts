import { User } from "../model/User";

export async function getUsers(): Promise<User[]> {
    return Promise.resolve(
        [
            {
                firstName: 'Alex',
                lastName: '1',
                age: 30
            },
            {
                firstName: 'Alex',
                lastName: '2',
                age: 31
            },
        ]
    )
}