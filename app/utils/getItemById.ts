// utils/getItemById.ts

export function getItemById<T extends { badgeId: number }>(
    data: T[],
    id: number
): T | undefined {
    return data.find(item => item.badgeId === id);
}
