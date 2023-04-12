export interface IaddTasks {
    client_id: number
    deadline: string
    description: string
    sprint_assigned_id: number | null
    status: number
    title: string
    user_assigned_id: number
    user_created_id: number
}