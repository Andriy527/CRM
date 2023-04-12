export interface Itasks {
    client_id: string
    created_at: string
    deadline: string
    description: string
    id: number
    sprint_assigned_id: number | null
    status: number
    title: string
    updated_at: string
    user_assigned_id: string
    user_created_id: string
}