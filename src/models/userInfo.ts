interface IpermisionsPivot {
    permission_id: number
    role_id: number
}

interface IrolesPivot {
    model_id: number
    role_id: number
}

interface IrolePermisions {
    created_at: string
    guard_name: string
    id: number
    name: string
    pivot: IpermisionsPivot
    updated_at: string
}

interface Iroles {
    created_at: string
    guard_name: string
    id: number
    name: string
    permissions: IrolePermisions[]
    pivot: IrolesPivot
    updated_at: string
}

export default interface IuserInfo {
    address: string
    created_at: string
    email: string
    id: number
    image_path: string
    name: string
    permisions: any[]
    personal_number: string
    roles: Iroles[]
    updated_at: string
    work_number: string
}